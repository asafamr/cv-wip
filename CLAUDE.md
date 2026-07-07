# CLAUDE.md

Guidance for developers (and agents) working **on this repo**.

Note: an agent using this repo to *generate a CV* should follow `README.md`, not this file. This file is about maintaining the repo itself.

## Repo layout

The root `README.md` is short: a human quickstart plus a map to the sections. The detail lives in top-level section folders, each a `README.md`:

- `styling/` — theming tokens, colors, templates, typography.
- `content/` — intake questions, content conventions, augmentation prompts, good-CV links.
- `technical/` — generation contract, page-setup CSS, PDF export, fit checks.
- `templates/` — ready CV templates (default: `meridian/`).

Keep the root README a map, not a manual: put new agent guidance in the matching section, and keep the page-setup CSS and font stacks each in exactly one section (technical and styling respectively).

## Writing style

The repo has two audiences. Keep them distinct.

- **Instructions to agents** (the "For agents" README section and all section folders): short, affirmative, informative. State the rule directly ("Body text is 9–10pt"), not as a suggestion or hedge. No filler.
- **Text for humans** (the "For humans" section): simple and to the point. Describe what happens, nothing more.
  - Lead with the end result the reader gets, then describe how. The headline names what this repo is and what it produces.
  - Cut adjectives that praise the result — "clean", "beautiful", "seamless", "effortless", "polished". State the fact ("one-page PDF"), not a judgment about it.
  - Removal test: if deleting a word doesn't change the meaning, delete it.
  - Prefer verbs and nouns over adjectives and adverbs. No exclamation marks.
