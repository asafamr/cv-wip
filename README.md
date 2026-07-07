# cv-wip

> Instructions for an AI agent to turn your CV into a one-page PDF.

## For humans

Open ChatGPT, Claude, or Gemini. Attach your current CV (or paste your background) and send:

> Read the instructions at https://github.com/asafamr/cv-wip and follow them to turn my attached CV into a one-page PDF.

The assistant asks a few questions first:

- **Background** — what to include, cut, or emphasize; which roles matter most.
- **Tone** — formal or personal.
- **Style** — single-column or two-column with a sidebar; color or black-and-white.

Answer in plain words. It generates the CV, checks that it fits on one page, and gives you a **PDF** to download. To change something, say so ("tighten the spacing", "drop my first job") and it re-exports.

Everything below is for the assistant.

## For agents

Generate one HTML file that renders as a single A4 PDF page.

### Output format
- Write one self-contained `.html` file. Inline the `<style>`; use no external CSS, JS, fonts, or images. Embed any photo or icon as a data URI or inline SVG.
- Use system font stacks (`Helvetica, Arial, sans-serif` or `Georgia, serif`). No Google Fonts.

### Page setup (mandatory)
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

### Fitting on one page
Everything fits in 296mm of height. Cut content before shrinking text below readability.
- Body text 9–10pt, section headings 11–12pt, name 18–24pt, line-height 1.25–1.4.
- Use the width. A two-column layout (main + sidebar) fits more than a single column.
- Keep spacing tight and consistent: section gaps 4–6mm, item gaps 2–3mm. No large hero headers.
- Set `page-break-inside: avoid; break-inside: avoid;` on sections and items as a safety net. Fitting the content is the real fix.

### Content conventions
- Bullets: 2 lines max, start with a verb, lead with impact and numbers.
- 3–5 bullets for recent roles, 1–2 for older ones. Drop roles older than 10–15 years when space is tight.
- Contact line: email, phone, city, LinkedIn/GitHub as plain text or `mailto:`/`https:` links. Keep links dark and readable in print.
- Never use placeholders like "Lorem ipsum" or "[Your Name]". Ask for missing details instead of inventing them.

### Verify before delivering
Render and check the page count:

```bash
chromium --headless --print-to-pdf=cv.pdf --no-pdf-header-footer cv.html
pdfinfo cv.pdf | grep Pages   # must be: Pages: 1
```

If it's 2+ pages, trim content or spacing and re-render. Do not shrink fonts.
