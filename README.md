# cv-wip

> Instructions for an AI agent to turn your CV into a one-page PDF.

## For humans

Open ChatGPT, Claude, or Gemini. Attach your current CV (or paste your background) and send:

> Read the instructions at https://github.com/asafamr/cv-wip and follow them to turn my attached CV into a one-page PDF.

The assistant asks a few plain-language questions — what to emphasize, formal or personal tone, single- or two-column — generates the CV, checks that it fits on one page, and gives you a **PDF** to download. To change something, say so ("tighten the spacing", "drop my first job") and it re-exports.

## For agents

Generate one self-contained HTML file that renders as a single A4 PDF page. Convention over configuration: produce a solid CV from the defaults with no extra input, then adjust when the human asks. Assume you can edit the HTML freely — these sections give you a strong start, not a cage.

- **[styling/](styling/README.md)** — theming tokens, colors, templates, typography.
- **[content/](content/README.md)** — intake questions, content conventions, augmentation prompts, and links to good-CV advice.
- **[technical/](technical/README.md)** — the generation contract, page-setup CSS, PDF export, and checking that it fits on one page.
- **[templates/](templates/)** — ready templates. Default: [Meridian](templates/meridian/), two-column.

Start with the default template, follow the three sections, then refine.
