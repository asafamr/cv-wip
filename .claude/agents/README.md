# Agent team

Subagent definitions for working **on this repo** (evolving the guide + templates). Your main
Claude Code session is the orchestrator: it delegates to a specialist and synthesizes the result.
These are plain subagents — they report back to the orchestrator and do not message each other. To
consult one specialist on behalf of another, the orchestrator routes it.

| Agent | Model | Role | Edits files? |
|---|---|---|---|
| `internet-researcher` | Sonnet | Research a topic on the web, return a short sourced summary | No |
| `cv-content-expert` | Opus | Head-hunter/recruiter lens on how a change affects the final tech CV | No |
| `product-manager` | Opus | Keep the repo small and the guide LLM-simple while protecting CV quality | No |
| `commit-reviewer` | Haiku | Block real people, trademarks/brands, and PII from landing in the repo | No |
| `exporter` | Haiku | Render HTML → PDF and verify it's one A4 page | Writes PDFs only |
| `frontend-designer` | Sonnet | Build and edit CV templates (routine work) | Yes |
| `expert-frontend-designer` | Opus | Hard print/paged-media CSS problems only (escalation) | Yes |

## Typical flow for a template change
1. `product-manager` — is this in scope / worth it?
2. `frontend-designer` builds it (escalates to `expert-frontend-designer` if stuck).
3. `exporter` confirms it renders to exactly one page.
4. `cv-content-expert` judges whether the result is a stronger tech CV.
5. `commit-reviewer` checks the diff for real names / brands / PII before committing.

## Notes
- Models are set per agent. To change one, edit the `model:` field in its `.md` file.
- These definitions also work as Agent Teams teammates if you later enable
  `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` (gives true peer-to-peer messaging). No rewrite needed.
- Exporter needs `chromium`/`pdfinfo` on PATH; the allowlist in `settings.local.json` pre-approves them.
