# cv-wip

> Hand your old CV to an LLM, answer a few questions about yourself, get back a clean one-page PDF.

## For humans

You don't need to touch any code. Open ChatGPT, Claude, or Gemini, attach your current CV (or just paste your background), and send a prompt like this:

> Please read the instructions at https://github.com/asafamr/cv-wip and follow them to turn my attached CV into a clean one-page PDF.

From there the assistant takes the lead. Expect it to ask you a few things before it builds anything, for example:

- **Background** — anything missing, unclear, or worth emphasizing from your CV? Which roles matter most?
- **Tone** — formal and corporate, or warm and personal?
- **Style** — classic single-column, or a modern two-column layout with a sidebar? Any color, or strictly black-and-white?

Answer in plain words. The assistant generates an HTML file, checks that it really fits on one page, and hands you a finished **PDF** to download. If something looks off, just tell it what to change ("tighten the spacing", "make the header smaller", "drop my first job") and it re-exports.

That's the whole flow. **Everything below is for the bots** — the technical rules the assistant follows to get the layout right. You can safely ignore it.

## For agents

You are generating an HTML file that must render as a **single A4 PDF page**. Follow these rules:

### Output format
- One self-contained `.html` file: inline `<style>`, no external CSS/JS/fonts/images. If a photo or icon is needed, embed it as a data URI or inline SVG.
- Use system font stacks (e.g. `Helvetica, Arial, sans-serif` or `Georgia, serif`). No Google Fonts links.

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
- This is the hard constraint: **everything fits in 296mm of height**. Cut content before shrinking text below readability.
- Typography budget: body text 9–10pt, section headings 11–12pt, name 18–24pt, line-height 1.25–1.4.
- Prefer a layout that uses width: two columns (main + sidebar) fits more than a single column.
- Keep vertical spacing tight and consistent: section gaps ~4–6mm, item gaps ~2–3mm. No large hero headers.
- Set `page-break-inside: avoid; break-inside: avoid;` on sections/items as a safety net — but do not rely on it; the real fix is fitting the content.

### Content conventions
- Bullets: max ~2 lines each, start with a verb, lead with impact/numbers.
- 3–5 bullets for recent roles, 1–2 for older ones; drop roles older than ~10–15 years if space is tight.
- Contact line: email, phone, city, LinkedIn/GitHub as plain text or `mailto:`/`https:` links (links must still look fine in print: dark color, no underline blowout).
- No placeholders like "Lorem ipsum" or "[Your Name]" in the final file — ask for missing details instead of inventing them.

### Verify before delivering
If you can run commands, render and check the page count:

```bash
chromium --headless --print-to-pdf=cv.pdf --no-pdf-header-footer cv.html
pdfinfo cv.pdf | grep Pages   # must be: Pages: 1
```

If it's 2+ pages, trim content or spacing and re-render — do not just shrink fonts.
