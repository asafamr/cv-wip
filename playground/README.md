# Playground

A single-page tool to preview any template reskinned with a theme and typeface,
side by side, and download the result as a self-contained HTML CV.

It reads the real `templates/<name>/demo.html` files — the same ones an agent
ships — so what you see is what those templates render. A picked theme or
typeface is applied by appending a `:root` override (accent tokens and the font
stack) to the template; the neutrals stay as the template defines them.

## Run locally

```bash
node playground/build.js _site   # bundles templates → _site/
python3 -m http.server -d _site  # open http://localhost:8000
```

`build.js` embeds each template into `_site/templates.js`, so no server-side
code or runtime fetch is needed — any static host works.

## Deploy

The `Playground` GitHub Actions workflow builds `_site/` and deploys it to
GitHub Pages. It is **manual** — run it from the repo's Actions tab
(Run workflow). Enable Pages once under Settings → Pages → Source: GitHub
Actions.

## Adding a template or theme

- **Template** — drop a new `templates/<name>/demo.html`. The build picks it up;
  add a one-line description to `TPL_META` / `TPL_LABEL` in `index.html`.
- **Theme or typeface** — add an entry to `THEMES` or `TYPO` in `index.html`.
  Themes only override `--accent` / `--accent-soft`; typefaces must stay within
  the repo's system-font rule (see `styling/README.md`).
