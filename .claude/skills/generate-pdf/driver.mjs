#!/usr/bin/env node
// generate-pdf driver — render a self-contained CV HTML file to a one-page A4 PDF
// with Playwright (Chromium), then verify the page count with pdfinfo.
//
// Usage:
//   node driver.mjs <input.html> [output.pdf]
//
// Exit codes:
//   0  rendered and the PDF is exactly one page
//   1  bad usage / render error
//   2  rendered, but the PDF is NOT one page (trim content, do not shrink fonts)
//
// Why Playwright over `chrome --print-to-pdf`: one process gives us explicit
// control (preferCSSPageSize to honour the template's `@page { size: A4 }`,
// printBackground for accent colours) plus the page-count gate in the same run.

import { chromium } from 'playwright';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import { pathToFileURL } from 'node:url';

const [, , inArg, outArg] = process.argv;

if (!inArg) {
  console.error('Usage: node driver.mjs <input.html> [output.pdf]');
  process.exit(1);
}

const input = resolve(inArg);
if (!existsSync(input)) {
  console.error(`Input not found: ${input}`);
  process.exit(1);
}

const output = resolve(outArg ?? input.replace(new RegExp(`${extname(input)}$`), '.pdf'));

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  // Self-contained HTML (inline CSS, no network) — 'load' is enough.
  await page.goto(pathToFileURL(input).href, { waitUntil: 'load' });

  await page.pdf({
    path: output,
    preferCSSPageSize: true, // honour the template's @page { size: A4; margin: 0 }
    printBackground: true,   // keep accent fills / tints
    format: 'A4',            // fallback if the HTML omits @page
  });
} finally {
  await browser.close();
}

// Verify: the whole point of this repo is exactly one A4 page.
let pages = null;
try {
  const info = execFileSync('pdfinfo', [output], { encoding: 'utf8' });
  const m = info.match(/^Pages:\s+(\d+)/m);
  if (m) pages = Number(m[1]);
} catch {
  console.error(`Rendered ${output}, but pdfinfo is unavailable — install poppler-utils to verify the page count.`);
  process.exit(0);
}

if (pages === 1) {
  console.log(`OK  ${output}  Pages: 1`);
  process.exit(0);
}
console.error(`FAIL  ${output}  Pages: ${pages}  (must be 1 — trim content or spacing, do not shrink fonts)`);
process.exit(2);
