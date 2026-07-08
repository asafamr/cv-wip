# Styling

Fonts, sizes, colors, theme tokens, and spacing. For page setup (`@page`, body dimensions), the self-contained-HTML output contract, and PDF export/verify, see [`../technical/README.md`](../technical/README.md).

## Theming

A template's layout, its color theme, and its typography are three independent axes. Every template declares CSS custom properties in `:root`, grouped by axis. Change the tokens to reskin the whole document — do not hunt down scattered rules.

```css
:root {
  /* ---- Color theme — swap via a color preset ---- */
  --accent:      #2f5d62;   /* name, headings, rules, links */
  --accent-soft: #e9f0f0;   /* pale tint of --accent: pill / block backgrounds */
  --ink:         #1f2328;   /* body text */
  --muted:       #5b636b;   /* dates, meta, secondary text */
  --rule:        #d5dadd;   /* hairlines and dividers */
  /* ---- Typography — one base font; heading/body default to it. Swap via a typography preset ---- */
  --font:         "Helvetica Neue", Helvetica, Arial, sans-serif;   /* base — drives all text */
  --font-heading: var(--font);   /* name + section headings; set a face here to override */
  --font-body:    var(--font);   /* body text; set a face here to override */
  /* ---- Spacing — template-owned; not a preset ---- */
  --gap-section: 4.6mm;     /* space between sections */
  --gap-item:    2.6mm;     /* space between items within a section */
}
```

Composing a look: pick one template, one color preset, and one typography preset. Paste the preset's tokens into the template's `:root`, replacing only those tokens. Leave `--ink`, `--muted`, `--rule`, and the spacing tokens as the template sets them. The result is still one self-contained HTML file — presets are token values you inline, never files you link.

Default composition: **Meridian + Teal + Modern**. Use it when the user does not steer.

## Color presets

A color preset sets `--accent` and `--accent-soft`. Derive `--accent-soft` as a pale tint of the accent. Leave `--ink`, `--muted`, `--rule` as neutrals unless the design calls for warmer or cooler grays. One accent carries the whole document.

| Name | `--accent` | `--accent-soft` |
|---|---|---|
| Teal (default) | `#2f5d62` | `#e9f0f0` |
| Navy | `#1f3a5f` | `#e8eef5` |
| Burgundy | `#6b2737` | `#f4e9ec` |
| Indigo | `#4338a8` | `#eceafa` |
| Monochrome | `#3d3d3d` | `#ededed` |

Each accent clears WCAG AA (≥4.5:1) on white at body-text weight and reads as a link color, not bright blue. Monochrome is the black-and-white default: a dark neutral accent reads as a clean monochrome CV.

Print-safe rules:

- Keep links dark and readable in print. Use `--accent`, not bright blue.
- Backgrounds and tints drop out of the PDF unless you opt in. The templates set this on `body`:

  ```css
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  ```

  Keep it. Without it, `--accent-soft` blocks and colored rules print white.

## Typography

System font stacks only. No Google Fonts, no web fonts.

- Sans: `"Helvetica Neue", Helvetica, Arial, sans-serif`
- Serif: `Georgia, "Times New Roman", serif`

`--font` is the base face — it drives all text. `--font-heading` and `--font-body` default to `var(--font)`; give one a face of its own only to override that part. Edit `--font` alone and every non-overridden run of text moves with it.

A typography preset sets these three tokens (`var(--font)` means "use the base"):

| Name | `--font` | `--font-heading` | `--font-body` |
|---|---|---|---|
| Modern (default) | Sans | `var(--font)` | `var(--font)` |
| Editorial | Sans | Serif | `var(--font)` |
| Classic | Serif | `var(--font)` | `var(--font)` |

For most tech roles, use Modern or Editorial. Classic suits research- or academic-leaning profiles — serif body at 9–10pt reads denser and more formal.

Line-height stays template-owned — it drives one-page fit. A serif body (Classic) tolerates slightly looser leading than a sans body.

Type sizes:

- Body: 9–10pt
- Section headings: 11–12pt
- Name: 18–24pt
- Line-height: 1.25–1.4

## Spacing

`--gap-section` and `--gap-item` belong to the template, not to a preset. Tune them to fit content on one page.

- Section gaps: 4–6mm (`--gap-section`)
- Item gaps: 2–3mm (`--gap-item`)
- No large hero headers. The name sets the top of the page; nothing above it.

## Templates

### Meridian (default)

`templates/meridian/` — two-column layout: main column plus sidebar, split by a vertical rule (the "meridian"). Main column holds experience and projects; sidebar holds skills, education, and contact. Start here.

Two columns fit more content and separate dense lists (skills, tools) from narrative (experience). Single-column is the most ATS-safe and universally parseable layout — collapse Meridian to one column when a linear read or maximum parseability matters, or when entries run long. A dedicated single-column template is not in the repo yet.
