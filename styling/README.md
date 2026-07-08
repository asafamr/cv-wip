# Styling

Fonts, sizes, colors, theme tokens, and spacing. For page setup (`@page`, body dimensions), the self-contained-HTML output contract, and PDF export/verify, see [`../technical/README.md`](../technical/README.md).

## Theming

Templates declare theme tokens as CSS custom properties in `:root`. Change the tokens to reskin the whole document. Do not hunt down scattered rules.

Meridian's tokens:

```css
:root {
  --accent:      #2f5d62;   /* headings, name, rules, links */
  --accent-soft: #e9f0f0;   /* pill / tint backgrounds */
  --ink:         #1f2328;   /* body text */
  --muted:       #5b636b;   /* dates, meta, secondary text */
  --rule:        #d5dadd;   /* hairlines and the column divider */
  --gap-section: 4.6mm;     /* space between sections */
  --gap-item:    2.6mm;     /* space between items within a section */
  --font: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

Reskin flow:

1. Set `--accent` to the brand color.
2. Derive `--accent-soft` as a pale tint of the accent.
3. Leave `--ink`, `--muted`, `--rule` as neutrals unless the design calls for warmer or cooler grays.
4. Adjust `--gap-section` and `--gap-item` to fit content on one page.

## Colors

Default to one accent plus neutrals: ink for body, muted for meta, a hairline rule for dividers. One accent carries the whole document.

Black-and-white is a valid default. Set `--accent` to a dark neutral and the CV reads as a clean monochrome.

Ready accent values:

- `#2f5d62` teal (Meridian default)
- `#1f3a5f` navy
- `#6b2737` burgundy
- `#3d3d3d` near-black (monochrome)

Pick one that carries at body-text weight on white. Test it as a link color, not just as a heading.

Print-safe rules:

- Keep links dark and readable in print. Use `--accent`, not bright blue.
- Backgrounds and tints drop out of the PDF unless you opt in. The templates set this on `body`:

  ```css
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  ```

  Keep it. Without it, `--accent-soft` pills and colored rules print white.

## Templates

### Meridian (default)

`templates/meridian/` — two-column layout: main column plus sidebar, split by a vertical rule (the "meridian"). Main column holds experience and projects; sidebar holds skills, education, and contact. Start here.

Two columns fit more content and separate dense lists (skills, tools) from narrative (experience). Single-column is the most ATS-safe and universally parseable layout — collapse Meridian to one column when a linear read or maximum parseability matters, or when entries run long. A dedicated single-column template is not in the repo yet.

## Typography

System font stacks only. No Google Fonts, no web fonts.

- Sans: `"Helvetica Neue", Helvetica, Arial, sans-serif`
- Serif: `Georgia, serif`

Type sizes:

- Body: 9–10pt
- Section headings: 11–12pt
- Name: 18–24pt
- Line-height: 1.25–1.4

Spacing scale:

- Section gaps: 4–6mm (`--gap-section`)
- Item gaps: 2–3mm (`--gap-item`)
- No large hero headers. The name sets the top of the page; nothing above it.
