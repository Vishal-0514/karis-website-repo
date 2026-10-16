// Builds the static website into dist/: one HTML file per page (clean URLs,
// e.g. /apps/kya-khaun/privacy -> apps/kya-khaun/privacy.html), plus
// everything in public/, a sitemap and robots.txt. No dependencies:
//   node build.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import site from './site.config.mjs';
import { page } from './src/layout.mjs';

// Curly quotes and apostrophes in visible text only (never inside tags,
// scripts or styles): "Sample" becomes “Sample”, don't becomes don’t.
function typography(html) {
  return html.replace(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>)|([^<]+)/g, (m, tag, text) => {
    if (tag) return tag;
    return text
      .replace(/"([^"]*)"/g, '“$1”')
      .replace(/(\w)'(\w)/g, '$1’$2')
      .replace(/'([^']*)'/g, '‘$1’');
  });
}

import company from './src/pages-company.mjs';
import kyaKhaun from './src/pages-kya-khaun.mjs';
import karis from './src/pages-karis.mjs';
import legal from './src/pages-legal.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(root, 'dist');
const pages = [...company, ...legal, ...kyaKhaun, ...karis];

fs.rmSync(out, { recursive: true, force: true });
fs.cpSync(path.join(root, 'public'), out, { recursive: true });

const seen = new Set();
for (const p of pages) {
  if (seen.has(p.path)) throw new Error(`Two pages use ${p.path}`);
  seen.add(p.path);
  const file = p.path === '/' ? 'index.html' : `${p.path.slice(1)}.html`;
  fs.mkdirSync(path.dirname(path.join(out, file)), { recursive: true });
  fs.writeFileSync(path.join(out, file), typography(page(p)));
}

// Every internal link must point at a page that exists.
const files = new Set([...seen].map((p) => (p === '/' ? '/' : p)));
const assets = new Set(fs.readdirSync(path.join(root, 'public'), { recursive: true }).map((f) => '/' + f.split(path.sep).join('/')));
for (const p of pages) {
  for (const [, href] of page(p).matchAll(/href="(\/[^"#?]*)/g)) {
    if (!files.has(href) && !assets.has(href)) throw new Error(`Broken link on ${p.path}: ${href}`);
  }
}

const listed = pages.filter((p) => !p.noindex);
fs.writeFileSync(
  path.join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${listed
    .map((p) => `  <url><loc>${site.siteUrl}${p.path === '/' ? '/' : p.path}</loc></url>`)
    .join('\n')}\n</urlset>\n`
);
fs.writeFileSync(path.join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.siteUrl}/sitemap.xml\n`);

console.log(`Built ${pages.length} pages into dist/`);
