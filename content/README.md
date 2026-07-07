# Content

This is the content section. It governs the words on the CV: what goes in, how it reads, and how an agent sharpens raw material. It does not cover visual styling (see [../styling/README.md](../styling/README.md)) or PDF export and rendering (see [../technical/README.md](../technical/README.md)).

Default behavior: an agent can produce a solid CV from a résumé or LinkedIn export with no extra input. The questions and prompts below are for refining once the human asks.

## Intake questions

Before generating, ask the human a few plain-language questions. Accept plain-word answers. If they skip a question, use the default.

- **Background** — What to include, cut, or emphasize. Which roles matter most for the target job. Default: keep the last 10–15 years, emphasize recent and senior roles.
- **Tone** — Formal or personal. Default: formal.
- **Style** — Single-column, or two-column with a sidebar. Color or black-and-white. Default: single-column, black-and-white. (Layout and color live in [../styling/README.md](../styling/README.md); pass the answer there.)

## Content conventions

**Bullets**

- Start with a verb. Lead with impact, then the numbers that prove it.
- 2 lines max per bullet.
- 3–5 bullets for recent roles, 1–2 for older ones.
- Drop roles older than 10–15 years when space is tight. Titles and dates can stay as a short list without bullets.
- Past tense for past roles, present tense for the current one.
- No first-person pronouns.

**Contact line**

- Include email, phone, city, and LinkedIn or GitHub.
- Render as plain text, or as `mailto:` and `https:` links.
- Keep link text dark and readable in print (styling in [../styling/README.md](../styling/README.md)).

**Never invent details.** No placeholders like "Lorem ipsum" or "[Your Name]". If a name, date, metric, or contact detail is missing, ask the human for it.

## Augmentation prompts

Reusable prompts to apply to raw CV material. Lift any block directly. Fill the `[brackets]`.

**Rewrite a weak bullet to lead with impact**

```
Rewrite this résumé bullet to start with a strong action verb and lead with
the result, not the task. Keep it factual. Do not invent numbers.
Bullet: [paste bullet]
```

**Quantify an achievement**

```
This bullet has no numbers. Ask me for the missing figures (scope, %, time,
money, headcount, users), then rewrite it as: accomplished [X], measured by
[Y], by doing [Z].
Bullet: [paste bullet]
```

**Tighten a bullet to one line**

```
Shorten this bullet to fit one line (about 90 characters) without losing the
result or the metric. Cut filler words first.
Bullet: [paste bullet]
```

**Tailor the CV to a job description**

```
Here is a job description and my CV. Reorder and reword my bullets to surface
the experience this role asks for. Mirror the job's key terms where they
truthfully apply. Do not add experience I do not have.
Job description: [paste JD]
CV: [paste CV or point to the file]
```

**Draft or sharpen a professional summary**

```
Write a 2–3 line summary for the top of my CV: years of experience, main
domain, and one signature strength. No clichés ("results-driven",
"team player"). Target this role: [role or JD].
Background: [paste roles, or point to the file]
```

## Reference links

Verified working sources on writing CV and résumé content.

- [Harvard — Create a Strong Resume](https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/) — bullet structure (action, task, result, why) with samples.
- [MIT — Crafting an Effective Resume](https://capd.mit.edu/resources/career-toolkit-crafting-an-effective-resume/) — the PAR method and a full walkthrough.
- [MIT — Resume Action Verbs](https://capd.mit.edu/resources/resume-action-verbs/) — action verbs to open bullets, grouped by skill.
- [UC Berkeley — Action Verb List (PDF)](https://hrweb.berkeley.edu/sites/default/files/attachments/action-verbs.pdf) — verbs by category: management, communication, technical, more.
- [MIT — Resume Checklist and Worksheet](https://capd.mit.edu/resources/resume-checklist/) — final pass before sending.
- [UC Berkeley — Resumes](https://career.berkeley.edu/prepare-for-success/resumes/) — general guidance on phrasing and structure.
