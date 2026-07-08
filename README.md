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

### Templates
Offer one of these five. Default to reverse-chronological single-column — it parses cleanly through applicant tracking systems (ATS) and suits most candidates.
- **Reverse-chronological, single-column** — newest role first, one column. The default; safe for steady careers and ATS.
- **Combination / hybrid** — skills summary on top, dated work history below. For career changers and senior candidates.
- **Two-column (main + sidebar)** — sidebar for contact and skills, main column for experience. Fits dense content; build it as a single text flow so ATS reads it in order.
- **Functional / skills-based** — grouped by skill, work history minimized. Use only for large gaps or non-linear paths; ATS and recruiters treat it with suspicion.
- **Minimalist / modern accent** — single column, one restrained accent color, generous white space, no graphics.

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
google-chrome --headless --print-to-pdf=cv.pdf --no-pdf-header-footer cv.html
pdfinfo cv.pdf | grep Pages   # must be: Pages: 1
```

If it's 2+ pages, trim content or spacing and re-render. Do not shrink fonts.

## References

Template conventions and ATS guidance draw on university career centers and established career authorities.

- [Harvard – Create a Strong Resume](https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/) — Single-column, reverse-chronological, readability- and ATS-conscious guidance with editable templates.
- [Purdue OWL – Résumés and CVs](https://owl.purdue.edu/owl/job_search_writing/resumes_and_vitas/index.html) — Defines the skills/chronological/functional styles and the resume-vs-CV distinction.
- [Indeed – Resume Format Guide](https://www.indeed.com/career-advice/resumes-cover-letters/resume-format-guide-with-examples) — The three structural formats (chronological, functional, combination) plus targeted, with when-to-use notes.
- [JMU Career Center – Choosing a Résumé Format](https://www.jmu.edu/career/students/career-prep/resumes/format.shtml) — Chronological/functional/combination breakdown; names chronological as the most common.
- [UConn Center for Career Readiness – Applicant Tracking Systems](https://career.uconn.edu/applicant-tracking-systems/) — Images, text boxes, columns, and tables break ATS parsing; standard headings act as parse keywords.
- [University of Pittsburgh – Resume/CV Tips: Applicant Tracking Systems](https://careercentral.pitt.edu/blog/2025/02/12/resume-and-cv-writing-tips-applicant-tracking-systems-ats/) — Avoid images, complex designs, and mid-line columns; use standard fonts and plain text.
- [UT Austin CNS Career Services – Applicant Tracking Systems](https://careerservices.cns.utexas.edu/resources/resumes/applicant-tracking-systems) — Avoid tables, columns, and graphics; use a chronological, text-based layout.
- [Santa Clara University Career Center – Common ATS Resume Formatting Mistakes](https://www.scu.edu/careercenter/toolkit/job-scan-common-ats-resume-formatting-mistakes/) — Images, graphics, and non-standard formatting cause missing data in parsers.
- [Washington University in St. Louis – White Space in Your Resume](https://careers.washu.edu/blog/2025/03/18/white-space-in-your-resume-best-practices-examples/) — Balanced white space, margins, and section separation improve readability.
- [Yale Office of Career Strategy – Resume Formatting and Common Errors](https://ocs.yale.edu/resources/resume-formatting/) — Standard fonts (10–12pt), consistent formatting, mindful white space, no photos or graphics.
