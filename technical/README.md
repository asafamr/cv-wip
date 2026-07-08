# Technical

How an agent turns the CV HTML into a correct one-page A4 PDF and checks that it fits.

## Generation contract

Output one self-contained `.html` file that renders as a single A4 page.

- Inline the `<style>` in the document.
- Use no external CSS, JS, fonts, or images.
- Embed any photo or icon as a `data:` URI or inline SVG.

Font-family choices live in [`../styling/README.md`](../styling/README.md).

## Page setup (mandatory CSS)

Use this block verbatim:

```css
@page { size: A4; margin: 0; }
html, body { margin: 0; padding: 0; }
body {
  width: 210mm;
  height: 296mm;          /* slightly under 297mm to avoid a blank second page */
  overflow: hidden;       /* content must never exceed this box */
  box-sizing: border-box;
  padding: 12mm 14mm;     /* margins live here, not in @page */
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
```

- `@page { size: A4; margin: 0 }` sets the paper to A4 and removes the printer margin so the body controls the layout.
- `height: 296mm` stays under the 297mm A4 height, so a rounding overflow does not spill onto a blank second page.
- `overflow: hidden` clips anything past the box, so content never forces a second page.
- `box-sizing: border-box` keeps padding inside the width and height.
- `padding: 12mm 14mm` sets the page margins on the body, not in `@page`.
- `print-color-adjust: exact` keeps background colors in the PDF.

Everything fits in 296mm of height. Set `page-break-inside: avoid; break-inside: avoid;` on sections and items as a safety net.

## Export to PDF

Render with headless Chromium, then confirm the page count:

```bash
chromium --headless --print-to-pdf=cv.pdf --no-pdf-header-footer cv.html
pdfinfo cv.pdf | grep Pages   # must be: Pages: 1
```

`chromium` may be `chromium-browser` or `google-chrome` depending on the system. `pdfinfo` comes from poppler-utils.

## Checking fit

The `pdfinfo` page count is the check: `Pages: 1` passes.

But `overflow: hidden` clips silently, so content that got cut still reports one page. To catch clipping, render once with the clip off and re-count:

1. Temporarily set `body { overflow: visible; }`.
2. Re-render and run `pdfinfo`. `Pages: 1` means everything fits; `Pages: 2` means content is overflowing and getting clipped in the real build.
3. Restore `overflow: hidden`.

Line breaks and fit depend on the template and font, so re-check after changing either.

## Fixing overflow

When the PDF is 2+ pages or content is clipped: trim content or tighten spacing, then re-render.

Cut content before shrinking text. Do not shrink fonts below readability; see the body-text sizes in [`../styling/README.md`](../styling/README.md).
