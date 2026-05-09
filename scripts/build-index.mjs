#!/usr/bin/env node
/* ============================================================
   build-index.mjs
   walks library/, parses each html file's <title>, regenerates
   the auto-block in index.html. categories = subfolder names.
   no dependencies. safe to run anywhere.
   ============================================================ */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, dirname }                from 'node:path';
import { fileURLToPath }                from 'node:url';

const ROOT      = join(dirname(fileURLToPath(import.meta.url)), '..');
const LIB       = join(ROOT, 'library');
const INDEX     = join(ROOT, 'index.html');
const BEGIN     = '<!-- BEGIN AUTO -->';
const END       = '<!-- END AUTO -->';

/* read a file's <title> tag — returns the inner text, or null */
async function titleOf(path) {
  const html  = await readFile(path, 'utf8');
  const match = html.match(/<title>([^<]+)<\/title>/i);
  return match ? match[1].trim() : null;
}

/* prettify a folder name for display: "computer-science" → "computer science" */
function prettyCat(name) {
  return name.replace(/[-_]+/g, ' ');
}

/* split a title like "Concept · category · hh-concepts" into the concept */
function conceptOf(title) {
  const parts = title.split('·').map(s => s.trim());
  return parts[0] || title;
}

/* escape for safe HTML insertion */
function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* walk library/ — returns { category: [{ concept, href }, ...] } */
async function walk() {
  const groups = {};
  let folders;
  try {
    folders = await readdir(LIB, { withFileTypes: true });
  } catch {
    return groups;
  }

  for (const f of folders) {
    if (!f.isDirectory()) continue;
    const cat   = f.name;
    const dir   = join(LIB, cat);
    const files = await readdir(dir);

    for (const file of files) {
      if (!file.endsWith('.html')) continue;
      const full  = join(dir, file);
      const title = await titleOf(full);
      if (!title) continue;
      const concept = conceptOf(title);
      const href    = `library/${cat}/${file}`;
      (groups[cat] ||= []).push({ concept, href });
    }
  }

  /* alphabetize entries within each category */
  for (const cat of Object.keys(groups)) {
    groups[cat].sort((a, b) => a.concept.localeCompare(b.concept));
  }
  return groups;
}

/* render the auto-block from the grouped entries */
function render(groups) {
  const cats = Object.keys(groups).sort();
  if (cats.length === 0) {
    return `    <div class="empty">no entries yet — add an html file under library/&lt;category&gt;/</div>`;
  }

  return cats.map(cat => {
    const entries = groups[cat];
    const rows    = entries.map(e =>
      `        <a class="entry" href="${esc(e.href)}">${esc(e.concept)}</a>`
    ).join('\n');
    return `    <section class="cat">
      <div class="cat-head">
        <span class="cat-name">${esc(prettyCat(cat))}</span>
        <span class="cat-count">${entries.length}</span>
      </div>
${rows}
    </section>`;
  }).join('\n');
}

/* main */
const groups = await walk();
const block  = render(groups);

const html  = await readFile(INDEX, 'utf8');
const start = html.indexOf(BEGIN);
const stop  = html.indexOf(END);
if (start === -1 || stop === -1) {
  console.error(`error: could not find ${BEGIN} ... ${END} markers in index.html`);
  process.exit(1);
}

const before = html.slice(0, start + BEGIN.length);
const after  = html.slice(stop);
const next   = `${before}\n${block}\n    ${after}`;

if (next === html) {
  console.log('index.html unchanged');
  process.exit(0);
}

await writeFile(INDEX, next, 'utf8');
const total = Object.values(groups).reduce((n, a) => n + a.length, 0);
console.log(`index.html updated · ${total} entries across ${Object.keys(groups).length} categories`);
