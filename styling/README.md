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

Black-and-white is a valid default. Set `--accent` to a dark neutral and the CV reads as monochrome.

Any dark, saturated color works if it carries at body-text weight on white — test it as a link color, not just as a heading. These are vetted starting points, all passing WCAG AA on white:

- `#2f5d62` teal (Meridian default)
- `#1f3a5f` navy
- `#355e3b` hunter green
- `#6b2737` burgundy
- `#3d3d3d` near-black (monochrome)
- `#9a3324` rust — a warmer accent for design- or product-leaning roles; not the default for engineering CVs

Derive `--accent-soft` from whichever you pick (see the reskin flow above).

Print-safe rules:

- Keep links dark and readable in print. Use `--accent`, not bright blue.
- Check the accent in grayscale and on a printed page, not just on screen. Warm tones (rust, browns) degrade most on office laser printers.
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

Two paths. A system font stack is the safe default — no setup, always renders. Embed an open-licensed font when you want the type to look designed rather than defaulted. Pick one family for the whole document either way.

### System stacks (default)

- Sans: `"Helvetica Neue", Helvetica, Arial, sans-serif`
- Serif: `Georgia, serif`
- Mono: `"SF Mono", Menlo, Consolas, "Liberation Mono", monospace`

Serif reads senior and considered — fitting at staff/principal or research levels. Sans reads current and is the safe default.

### Embedded fonts (optional upgrade)

Real type lifts the whole page. Use only families under the **SIL Open Font License 1.1** — free for commercial and personal use, embeddable. Do not sell the font alone, keep its copyright/license notice in a CSS comment, and never rename a modified copy under its reserved name. Vetted pairings:

- **IBM Plex Sans + IBM Plex Mono** — one superfamily for body, headings, and tech tokens. Guaranteed coherence; the default upgrade.
- **Fraunces or Source Serif 4** (name + headings) with **Source Sans 3** (body) — the most senior, editorial look.

Embed each weight as a base64 `data:` URI inside `@font-face` so the file stays self-contained and renders identically everywhere — more deterministic than a system stack, not less. Never link a font CDN, and never outline text to paths: the CV must stay selectable text so applicant tracking systems (ATS) can parse it. Fetch the OFL files from Google Fonts or the family's own repository.

### Monospace

From either path, monospace is allowed only for the tech-stack line or inline tool and version tokens, set in ink — never for body, headings, name, or dates, and not on functional or non-engineering CVs. Keep the accent color off it. One emphasis at a time.

Type sizes:

- Body: 9–10pt
- Section headings: 11–12pt
- Name: 18–24pt
- Line-height: 1.25–1.4

Spacing scale:

- Section gaps: 4–6mm (`--gap-section`)
- Item gaps: 2–3mm (`--gap-item`)
- No large hero headers. The name sets the top of the page; nothing above it.
