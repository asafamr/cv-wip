# cv-wip

> Instructions for an AI agent to turn your CV into a one-page PDF.

## For humans

Open ChatGPT, Claude, or Gemini. Attach your current CV (or paste your background) and send:

> Read the instructions at https://github.com/asafamr/cv-wip and follow them to turn my attached CV into a one-page PDF.

First it asks how much you want to steer:

- **Quick** — it picks the template, tone, and style for you and generates in one pass.
- **Guided** — it asks about your background (what to include, cut, or emphasize), tone (formal or personal), and style (single- or two-column; color or black-and-white) before generating.

Either way, it checks it has enough to work with and points out what's thin — weak bullet points, missing dates, roles worth cutting — before it builds the page. Answer in plain words. It generates the CV, checks that it fits on one page, and gives you a **PDF** to download. To change something, say so ("tighten the spacing", "drop my first job") and it re-exports.

## For agents

Generate one HTML file that renders as a single A4 PDF page. Follow every section below. The rules here are requirements, not suggestions — apply them unless the user overrides one explicitly.

### Before you generate
Do these three steps in order, before writing any HTML. Do not skip to generation.

1. **Set the depth with the user.** Ask which they want, and wait for the answer:
   - **Quick** — you pick the template, tone, and style that fit their content, and generate in one pass. Choose this if the user does not answer.
   - **Guided** — you ask about background (what to include, cut, or emphasize; which roles matter most), tone (formal or personal), and style (single- or two-column; color or black-and-white) before generating.
2. **Validate the content is enough to work with.** You need a name, at least one contact detail, and at least two roles with dates and responsibilities. If any of these is missing, ask for it before generating. Never invent facts or fill gaps with placeholders.
3. **Check the content against the conventions below.** Compare what the user gave you to the Content conventions and Fitting rules. Name every gap: bullets without a verb, impact, or number; missing or vague dates; roles that must be cut or condensed to fit one page; content that will overflow. In Quick mode, fix these as you generate and note what you changed. In Guided mode, list them and confirm the fixes with the user first.

### Templates
Offer one of these five. Default to reverse-chronological single-column — it parses cleanly through applicant tracking systems (ATS) and suits most candidates.
- **Reverse-chronological, single-column** — newest role first, one column. The default; safe for steady careers and ATS.
- **Combination / hybrid** — skills summary on top, dated work history below. For career changers and senior candidates.
- **Two-column (main + sidebar)** — sidebar for contact and skills, main column for experience. Fits dense content; build it as a single text flow so ATS reads it in order.
- **Functional / skills-based** — grouped by skill, work history minimized. Use only for large gaps or non-linear paths; ATS and recruiters treat it with suspicion.
- **Minimalist / modern accent** — single column, one restrained accent color, generous white space, no graphics.

### Output format
- Write one self-contained `.html` file. Inline the `<style>`; reference nothing external at render time. Embed any photo, icon, or font as a data URI or inline SVG.
- Default to system font stacks (`Helvetica, Arial, sans-serif` or `Georgia, serif`). To upgrade the type, embed an open-licensed (SIL OFL) font as a base64 `data:` URI in `@font-face` — keep the text selectable, never outline it. See `styling/` for vetted families.

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
