---
name: generate-pdf
description: Generate, render, or export a CV HTML file to a one-page A4 PDF with Playwright, and verify the page count. Use to build the PDF, print an HTML CV to PDF, or check that a template fits on one page.
---

# generate-pdf

Render a self-contained CV HTML file to a one-page A4 PDF using Playwright
(Chromium), then verify with `pdfinfo` that it is exactly one page. This is the
export/fit-check step of cv-wip.

The driver is `.claude/skills/generate-pdf/driver.mjs`. Paths below are relative
to the repo root.

## Prerequisites

- Node 18+ and `pdfinfo` (poppler). On Ubuntu: `sudo apt-get install -y poppler-utils`.
- Install Playwright + its Chromium once (into the skill dir):

```bash
npm --prefix .claude/skills/generate-pdf install
npx --prefix .claude/skills/generate-pdf playwright install chromium
```

## Run (agent path)

```bash
node .claude/skills/generate-pdf/driver.mjs <input.html> [output.pdf]
```

Output path defaults to the input with a `.pdf` extension. Example:

```bash
node .claude/skills/generate-pdf/driver.mjs templates/meridian/demo.html /tmp/meridian.pdf
# OK  /tmp/meridian.pdf  Pages: 1
```

Exit codes are the fit gate — script them:

- `0` — rendered, PDF is exactly one page.
- `2` — rendered, but **more than one page**. Trim content or spacing; do **not**
  shrink fonts below readability. The message prints the actual page count.
- `1` — bad usage or render error.

## What the driver does

- Loads the HTML over `file://` (self-contained templates have no network deps).
- `page.pdf({ preferCSSPageSize: true, printBackground: true, format: 'A4' })` —
  honours the template's `@page { size: A4; margin: 0 }` and keeps accent fills.
- Runs `pdfinfo` and checks `Pages: 1`.

## Verify the result visually (optional)

`pdfinfo` counts pages but not blank/garbled output. To eyeball it:

```bash
pdftoppm -png -r 90 -singlefile /tmp/meridian.pdf /tmp/meridian_preview
```

## Gotchas

- **Use `preferCSSPageSize: true`.** Without it Chromium adds its own default
  margins and the 296mm body overflows to a second page. The templates set
  margins via body padding, not `@page`.
- **`printBackground: true` is required.** Off by default; the accent bars,
  pills, and tinted sidebars vanish without it.
- **`format: 'A4'` alone is not enough.** It's only the fallback for HTML that
  omits `@page`; `preferCSSPageSize` wins when the template declares the size.
- **`node_modules` lives in the skill dir**, installed via `--prefix`. It's
  git-ignored — re-run the install step on a fresh checkout.
- **`Pages: 4` on a template that should fit** means the content overflows the
  296mm box, not a rendering bug. The fix is in the HTML, not here.

## Troubleshooting

- `Cannot find module 'playwright'` — run the install step above.
- `browserType.launch: Executable doesn't exist` — run
  `npx --prefix .claude/skills/generate-pdf playwright install chromium`.
- `pdfinfo is unavailable` warning — install `poppler-utils`. The PDF is still
  written; only the page-count check is skipped (exit 0).
