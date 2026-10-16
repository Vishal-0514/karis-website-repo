import site from '../site.config.mjs';

const { company, contact } = site;

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const mail = (address, label = address) => `<a href="mailto:${esc(address)}">${esc(label)}</a>`;
export const tel = (number) => `<a href="tel:${number.replace(/[^+\d]/g, '')}">${esc(number)}</a>`;
export const addressHtml = () => company.address.lines.map(esc).join('<br>');

// The gradient mesh behind every page hero (the style guide's signature):
// soft, blurred colour fields washed across the top of the page, ending on a slant.
export function mesh() {
  return `<div class="mesh" aria-hidden="true">
  <svg viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice" focusable="false">
    <defs><filter id="blur" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="70"/></filter></defs>
    <rect width="1440" height="640" style="fill:var(--mesh-base)"/>
    <g filter="url(#blur)">
      <ellipse cx="180" cy="120" rx="420" ry="220" fill="#f5e9d4"/>
      <ellipse cx="620" cy="80" rx="360" ry="200" fill="#ffc9a3"/>
      <ellipse cx="980" cy="200" rx="380" ry="240" fill="#b9b9f9"/>
      <ellipse cx="1300" cy="120" rx="320" ry="260" fill="#533afd"/>
      <ellipse cx="1180" cy="430" rx="300" ry="200" fill="#ea2261"/>
      <ellipse cx="1420" cy="420" rx="220" ry="200" fill="#f96bee"/>
      <ellipse cx="760" cy="430" rx="300" ry="160" fill="#c9c2ff"/>
    </g>
  </svg>
</div>`;
}

const NAV = [
  ['/about', 'Company'],
  ['/apps', 'Products'],
  ['/legal', 'Policies'],
];

const logo = `<span class="logo-mark" aria-hidden="true"><svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="9" fill="currentColor"/><path d="M11 8v16M11 16.5 20.5 8M14.5 13.5 21 24" style="stroke:var(--on-mark)" stroke-width="2.6" stroke-linecap="round" fill="none"/></svg></span><span class="logo-text" translate="no">Karis Global Retail</span>`;

function header(path) {
  const current = (href) => path === href || path.startsWith(href + '/');
  const links = NAV.map(([href, label]) => `<a href="${href}"${current(href) ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  return `<header class="topbar">
  <div class="wrap topbar-row">
    <a class="logo" href="/" aria-label="${esc(company.displayName)}, home">${logo}</a>
    <nav class="nav" aria-label="Main">${links}</nav>
    <a class="btn btn-sm nav-cta" href="/contact">Contact us <span class="chev" aria-hidden="true"></span></a>
    <details class="menu">
      <summary aria-label="Menu"><span></span><span></span></summary>
      <nav aria-label="Main (mobile)"><a href="/">Home</a>${links}<a href="/contact">Contact us</a></nav>
    </details>
  </div>
</header>`;
}

function footer() {
  return `<footer class="footer">
  <div class="wrap">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="logo" href="/">${logo}</a>
        <p>${esc(company.legalName)}</p>
        <p class="num">CIN ${esc(company.cin)}</p>
        <p>${esc(company.address.lines.join(', '))}</p>
        <p>${mail(contact.business)}${contact.phone ? `<br>${tel(contact.phone)}` : ''}</p>
      </div>
      <div class="footer-col">
        <h2>Company</h2>
        <a href="/about">About us</a>
        <a href="/legal/company-information">Company information</a>
        <a href="/contact">Contact</a>
      </div>
      <div class="footer-col">
        <h2>Products</h2>
        <a href="/apps">All products</a>
        <a href="/apps/kya-khaun">Kya Khaun?</a>
        <a href="/apps/karis">KARIS</a>
      </div>
      <div class="footer-col">
        <h2>Policies</h2>
        <a href="/legal/company-privacy">Privacy policy</a>
        <a href="/legal/website-terms">Website terms</a>
        <a href="/legal">Product policies</a>
        <a href="/legal/delete-account">Delete an account</a>
      </div>
    </div>
    <p class="footer-base">© ${new Date().getFullYear()} ${esc(company.legalName)}. All rights reserved.</p>
  </div>
</footer>`;
}

// One full HTML page.
export function page({ path, title, description, body, schema, noindex = false }) {
  const url = site.siteUrl + (path === '/' ? '/' : path);
  const fullTitle = path === '/' ? `${company.displayName} | Consumer technology from India` : `${title} | ${company.displayName}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(url)}">
${noindex ? '<meta name="robots" content="noindex">\n' : ''}<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(company.legalName)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(url)}">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0a1626" media="(prefers-color-scheme: dark)">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/styles.css">
${schema ? `<script type="application/ld+json">${JSON.stringify(schema)}</script>\n` : ''}</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${header(path)}
<main id="main">
${body}
</main>
${footer()}
</body>
</html>
`;
}

// Breadcrumb trail: [['/apps', 'Products'], ['/apps/karis', 'KARIS'], 'Privacy'].
export function crumbs(items) {
  const parts = items.map((it) => (Array.isArray(it) ? `<a href="${it[0]}">${esc(it[1])}</a>` : `<span aria-current="page">${esc(it)}</span>`));
  return `<nav class="crumbs" aria-label="Breadcrumb">${parts.join('<span class="sep" aria-hidden="true">/</span>')}</nav>`;
}

// Inner-page hero on the gradient mesh: breadcrumb, title, optional lead and extra HTML.
export function hero({ title, lead, trail, extra = '' }) {
  return `<section class="hero hero-inner">
  ${mesh()}
  <div class="wrap hero-content">
    ${trail ? crumbs(trail) : ''}
    <h1 class="rise">${title}</h1>
    ${lead ? `<p class="lead rise d1">${lead}</p>` : ''}
    ${extra}
  </div>
</section>`;
}

// Long-form policy page body.
export function policy({ updated, sections }) {
  const toc = sections.map((s, i) => `<li><a href="#s${i + 1}">${esc(s.title)}</a></li>`).join('');
  const body = sections.map((s, i) => `<section id="s${i + 1}"><h2>${esc(s.title)}</h2>${s.html}</section>`).join('\n');
  return `<div class="wrap policy">
  <nav class="toc" aria-label="On this page"><p class="toc-title">On this page</p><ol>${toc}</ol></nav>
  <article class="prose">
    <p class="updated">Effective ${esc(updated)}</p>
    ${body}
  </article>
</div>`;
}

// A product's policy links, as a tidy grid.
export function policyLinks(base, name) {
  const items = [
    ['support', 'Support', `Get help with ${name}.`],
    ['privacy', 'Privacy policy', 'What the app collects and why.'],
    ['terms', 'Terms of use', 'The rules for using the app.'],
    ['delete-account', 'Delete your account', 'Remove your account and data.'],
  ];
  return `<div class="link-grid">${items
    .map(([slug, label, text]) => `<a class="link-card" href="${base}/${slug}"><strong>${label}</strong><span>${text}</span><span class="chev" aria-hidden="true"></span></a>`)
    .join('')}</div>`;
}
