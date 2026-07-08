# Content

Words on the CV: what goes in, how it reads, and how to sharpen raw material. Visual styling is in [../styling/README.md](../styling/README.md); export and rendering in [../technical/README.md](../technical/README.md).

Default behavior: produce a solid CV from a résumé or LinkedIn export with no extra input. The questions and rules below refine it when the human asks.

## Intake questions

Before generating, ask a few plain-language questions. Accept plain-word answers. On a skip, use the default.

- **Target role** — The job being applied to: paste the job description, or name the title and level. This drives tailoring — see [Tailoring to a specific role](#tailoring-to-a-specific-role). Default: none; produce a role-agnostic CV that emphasizes recent scope.
- **Level** — Current seniority band (mid, senior, staff, principal), so scope signals match the band. Default: infer from the roles and dates.
- **Background** — What to include, cut, or emphasize; which roles matter most for the target job. Default: keep the last 10–15 years, emphasize recent and senior roles.
- **Tone** — Formal or personal. Formal is clipped and impersonal; personal keeps some of the candidate's own voice. Default: formal.
- **Style** — Column count and color. Default: the single-column Datum template in black-and-white — the most ATS-safe layout. Offer the Meridian two-column template for dense content (see the parsing caveat under Section names). (Layout and color live in [../styling/README.md](../styling/README.md); pass the answer there.)

## Content conventions

**Section names** — Use standard headings an ATS maps cleanly: Summary, Experience, Skills, Projects, Education, Certifications. Not creative labels like "Where I've made impact". In two-column layouts, anything placed only in the sidebar (skills, education) can be scrambled or dropped by positional ATS parsers — keep the contact block in a full-width header, and never let a filter-critical field live only in the sidebar. When maximum parseability matters, use one column.

**Headline** — When the target role is known, put a role-matching title directly under the name (e.g. "Senior Backend Engineer · Distributed Systems"). It is a top ATS keyword and the first line a recruiter reads. The headline is the target title only; the summary is the 2–3 lines below it. With no target role, omit the headline — do not invent one.

**Bullets**

- Start with a verb that shows ownership. Lead with the outcome, then the numbers that prove it.
- Show the candidate's own contribution, not the team's. "Led", "built", "designed", "owned" signal ownership; "contributed to", "part of a team that" signal a passenger. When a win was collective, name the candidate's specific slice.
- 2 lines max per bullet. 3–5 bullets for recent roles, 1–2 for older ones. Vary their length and shape — every bullet in the same verb-then-metric mold reads as generated.
- Drop roles older than 10–15 years when space is tight. Titles and dates can stay as a short list without bullets.
- Past tense for past roles, present tense for the current one. No first-person pronouns.

**Quantify** — Quantify where a real figure exists. If the candidate gave a number, lead with it: accomplished [X], measured by [Y], by doing [Z]. If they did not, ask — never manufacture one, and never reword an unmeasured result to imply it was measured. When no honest metric exists, quantify scope instead (systems, services, team size, traffic, data, spend) or state a precise outcome ("eliminated the weekly manual release"). A page where every bullet ends in a percentage reads as fabricated; not every bullet needs a number.

**Banned phrasing (whole document)** — Do not use:

- Duty openers: "Responsible for", "Worked on", "Helped with". Every bullet is a thing the candidate did and what resulted, not a job listing.
- Clichés and inflated verbs: "results-driven", "proven track record", "team player", "self-starter", "detail-oriented", "spearheaded", "leveraged", "utilized", "orchestrated", "passionate about". Prefer the plain word the candidate would say out loud: built, led, cut, shipped, owned, migrated.
- Empty modifiers: "robust", "scalable", "cutting-edge", "seamless", "world-class". If a word adds importance but no information, delete it.
- A company's stated values, named verbatim ("Bias for Action", "Customer Obsession", "Googleyness"). Show the behavior instead; the recruiter maps it to the value.

**Skills / stack** — The block a tech recruiter and an ATS scan first. Group it: Languages, Frameworks, Infra, Data. List what the candidate can defend in an interview, not everything they have touched. Mirror the target job's exact terms — "PostgreSQL", not "SQL databases" — and give both the acronym and the spelled-out form where either may be searched: "CI/CD", "Kubernetes (K8s)", "Amazon Web Services (AWS)". Separate skills with a literal comma or bullet, not CSS spacing alone, so parsers do not concatenate them.

**Seniority and scope** — Band the candidate by scope of influence, not title. Surface: team or org size affected, systems owned and their scale (traffic, data, spend), whether they set direction or executed it, cross-team vs single-team reach, and standards others adopted. A staff-level CV that reads like a task list gets screened to the wrong band. Promotions and "grew X to Y" belong here.

**Contact line** — Email, city, and LinkedIn, in a full-width header so it parses before any column logic. Add GitHub or a portfolio for engineering roles; recruiters look for it. Phone is optional. Drop the street address — it adds risk, not signal. Render as plain text or `mailto:`/`https:` links (styling in [../styling/README.md](../styling/README.md)).

**Dates** — Format as `Mon YYYY – Mon YYYY` (or a consistent `YYYY – YYYY`), next to the role, so an ATS can compute tenure. Use "Present" for the current role.

**Titles** — If the candidate's internal title is non-standard ("Software Craftsperson III"), also give the industry-standard equivalent for title matching and keep the real title alongside it. Never inflate the level.

**Never invent details.** No placeholders like "Lorem ipsum" or "[Your Name]". If a name, date, metric, or contact detail is missing, ask the human for it.

## Tailoring to a specific role

Tailoring optimizes the overlap between one specific job and one specific candidate. It reorders and rewords true material; it never adds an experience or a skill to match the posting. A CV that mirrors every line of the job description reads as fabricated and collapses in the interview — match only what is true.

**Method — run in order:**

1. **Extract the role.** From the job description, pull three lists: hard skills (languages, systems, tools it names), soft/behavioral signals (ownership, collaboration, ambiguity, communication), and the level. Repeated terms are must-haves.
2. **Inventory the candidate.** From their CV, list what they can defend in an interview: real stack, systems owned, scope, outcomes.
3. **Map role to evidence.** For each top requirement, find the candidate's strongest true bullet or fact that proves it. One requirement, one best proof.
4. **Reorder and promote.** Move matched bullets to the top of each role; lead the skills block with the job's stack; mirror the job's exact terms where they truthfully apply.
5. **Cut.** Drop or shorten what the role does not value. Space is the budget — the same candidate produces a different CV per target: same facts, different emphasis.

**Match the level.** Read the candidate's real scope, not their title. A strong mid applying to a senior role foregrounds ownership and delivery; do not inflate to staff language. Bands match by scope of influence, not by keyword.

**Soft skills — prove, never list.** No standalone "soft skills" block and no bare claims ("excellent communicator"). Recruiters discount unproven adjectives. Embed each behavioral signal as evidence inside an accomplishment bullet: situation, technical action, interpersonal action, result.

- Weak: "Excellent communication and collaboration skills."
- Strong: "Cut release incidents 30% by running a weekly cross-team triage that aligned backend and mobile on rollback rules."

**Show values as behavior.** Reflect a company's principles through what the candidate did, not by naming the principle. Write "Rewrote onboarding after reading 200 support tickets, dropping first-week churn 18%", not "demonstrated Customer Obsession".

**Stretch honestly.** Reframe real experience toward the role's language where it genuinely applies (a Kafka pipeline is defensible "event-driven systems" experience). Do not claim a skill the candidate has not used. Test every claim against "tell me more about that" in an interview — if it would not survive, cut it. If a required skill is simply absent, leave the gap and flag it to the human.

**Truth-check backstop.** Any impact you rephrase or stretch you frame gets shown back to the human before delivery: state what you changed and ask them to confirm it is accurate. In Quick mode, note the rephrasings; in Guided mode, confirm them first. The candidate, not the agent, owns what the CV claims.

**Worked examples.** Each names the role, its hard and soft skills, and how to tailor. Use them as a model for the *method* — extract the real target company's actual requirements; do not transplant one company's framing onto another.

- **Software Engineer, Google** — Hard: CS fundamentals (data structures, algorithms, complexity), one of C++/Java/Go/Python, distributed systems, testing at scale. Soft: structured problem-solving, collaboration, comfort with ambiguity, humility ("Googleyness" and role-related knowledge). Tailor: lead skills with the languages the job names; promote bullets showing algorithmic depth and scale; show an ambiguous problem navigated, not just a defined one.
  - Before: "Worked on the search backend team improving performance."
  - After: "Cut p99 query latency 38% on a service handling 2B daily requests by redesigning the caching layer in Go."
- **Senior Software Engineer, Amazon** — Hard: system design, one primary language, AWS, operational ownership of production services. Soft: Amazon scores bullets against its Leadership Principles — Ownership, Bias for Action, Deliver Results, Dive Deep. Tailor: foreground end-to-end ownership and metrics; show fast action under ambiguity. Show the behavior; never name the principle.
  - Before: "Helped migrate services to AWS as part of the platform team."
  - After: "Owned the migration of 14 services to AWS ECS, cutting infra cost 27% and eliminating the weekly manual deploy — shipped in one quarter."
- **Backend / Systems Engineer, Stripe** — Hard: API design, correctness and idempotency, databases at scale, one of Go/Ruby/Java/Scala, reliability. Soft: rigor, developer empathy, strong written communication (Stripe writes heavily). Tailor: promote correctness, data integrity, and API quality over feature count; mirror "idempotent", "API", "reliability" where true.
  - After: "Designed an idempotent payments API processing $400M/yr with zero double-charge incidents over 18 months."
- **Machine Learning Engineer, OpenAI / Anthropic** — Hard: Python, PyTorch, large-scale training and evaluation, data pipelines, distributed GPU compute. Soft: research-engineering judgment, cross-team collaboration, communicating uncertainty, mission alignment. Anthropic states a PhD is not required and asks applicants to put independent research, blog posts, or open-source work at the top. Tailor: foreground shipped models and measured eval gains with scale (params, data, GPUs); surface real safety or robustness work; drop generic web-dev bullets.
  - After: "Improved eval accuracy 11 points on a 7B-parameter model by rebuilding the data-filtering pipeline over 2B tokens."
- **Site Reliability Engineer, Netflix** — Hard: cloud, Kubernetes, Terraform, observability (Prometheus, Grafana, PagerDuty), SLO and error-budget ownership, incident response. Soft: high autonomy, judgment under ambiguity, cross-team influence. Tailor: lead with an on-call/MTTR or uptime metric; show reliability owned across teams.
  - After: "Cut MTTR 45% across 200+ services by rebuilding on-call runbooks and alerting, holding 99.98% uptime."
- **Staff / Principal Engineer (any top tech company)** — Band by scope of influence, not the label, which varies by company. Hard: large-scale distributed systems, one primary language, the domain's depth. Soft: technical direction, cross-org influence without authority, judgment under ambiguity, mentorship. Tailor: foreground direction others adopted and org-wide impact; cut single-task feature bullets; the summary states the band and scale up front.
  - After: "Set the reliability standard adopted by 6 teams, cutting org-wide incidents 40% and defining the on-call model for 200+ services."

## Refining raw material

Apply these when sharpening weak content. Never add experience or numbers the candidate did not give — ask for missing figures instead.

- **Strengthen a bullet** — Open with an ownership verb; lead with the result, not the task.
- **Quantify** — Ask for the missing figures (scope, %, latency, uptime, cost, users, headcount), then rewrite as accomplished [X], measured by [Y], by doing [Z]. "By doing Z" is the first thing to cut when tightening.
- **Tighten** — Cut a bullet to one line (~90 characters) without losing the result or the metric. Drop filler words first.
- **Tailor to a job** — See [Tailoring to a specific role](#tailoring-to-a-specific-role).
- **Summary** — 2–3 lines at the top: seniority level and years, main domain, the scale the candidate operates at, and one signature strength backed by a concrete fact. Not "senior engineer with strong leadership" but "…led a 12-person platform org serving 40M users." No clichés.
- **Read it back as a human** — Before delivering, reread for machine-written tells: banned phrasing, an adjective before every noun, em-dashes stringing clauses, rule-of-three lists, and a number bolted onto every bullet. Strip them. Keep the candidate's real signal — the specific tools, domain vocabulary, and project names; a terse senior IC and a broad-scope manager should not read the same.

## Reference links

Sources on writing CV and résumé content, for humans going deeper. All verified reachable.

- [Harvard — Create a Strong Resume](https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/) — bullet structure (action, task, result) with samples.
- [MIT — Resume Action Verbs](https://capd.mit.edu/resources/resume-action-verbs/) — verbs to open bullets, grouped by skill.
- [UC Berkeley — Resumes](https://career.berkeley.edu/prepare-for-success/resumes/) — phrasing and structure.
