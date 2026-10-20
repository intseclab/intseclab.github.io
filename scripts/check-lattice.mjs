/* Measures every block's top/bottom edge against the 32px vertical lattice and
   reports anything off it. Guards the three rhythm rules documented at the top
   of assets/css/isl.css.

   Needs a running server and Chrome:
     hugo server --port 1313
     npm i puppeteer-core            (once, in the repo root; gitignored)
     node scripts/check-lattice.mjs [baseUrl]

   Set CHROME_PATH if Chrome is not at the default macOS location.

   Two known exceptions, both on .closing and both invisible in practice, since
   the band's grid fades to nothing at its top edge:
     - /work/, /writing/: short pages, so main (flex:1) stretches and the
       sticky footer's position is viewport-dependent, not content-dependent.
     - /careers/: the Ashby embed is a cross-origin iframe whose height the
       embed script sets, so it is not ours to make a whole module.
     - /404.html: short page, same sticky-footer reason as above. */

import puppeteer from 'puppeteer-core';

const CHROME = process.env.CHROME_PATH ||
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = process.argv[2] || 'http://127.0.0.1:1313';
const PAGES = ['/', '/about/', '/work/', '/writing/', '/team/', '/careers/', '/404.html'];
// Several widths, not just desktop: flex row gaps only appear once a row wraps,
// and two non-modular gaps hid here because this only ever tested 1440.
const WIDTHS = [1440, 1100, 800, 700, 390];
const ALLOW = new Set([
  '/work/ closing top', '/writing/ closing top', '/careers/ closing top',
  '/404.html closing top',
]);

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'shell' });
let failures = 0;

for (const path of PAGES) {
  for (const width of WIDTHS) {
  const page = await browser.newPage();
  await page.setViewport({ width, height: 1200 });
  await page.goto(BASE + path, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);

  const rows = await page.evaluate(() => {
    const MOD = parseFloat(getComputedStyle(document.documentElement)
      .getPropertyValue('--mod')) || 32;
    const off = v => { const r = ((v % MOD) + MOD) % MOD; return r > MOD / 2 ? r - MOD : r; };
    const out = [];
    const add = (label, el, edge = 'top') => {
      if (!el) return;
      const b = el.getBoundingClientRect();
      const y = (edge === 'top' ? b.top : b.bottom) + window.scrollY;
      out.push({ label: `${label} ${edge}`, y: +y.toFixed(1), off: +off(y).toFixed(1) });
    };
    const q = s => document.querySelector(s);
    const qa = s => [...document.querySelectorAll(s)];

    add('header', q('.site-header'), 'bottom');
    add('hero h1', q('.hero h1'));
    add('hero deck', q('.hero p'));
    add('hero rule', q('.hero'), 'bottom');
    add('page-head', q('.page-head'));
    add('page h1', q('.page-head h1'));
    add('standfirst', q('.page-lede'));
    qa('.prose > p').forEach((p, i) => add(`prose p${i + 1}`, p));
    qa('.prose > h2').forEach((h, i) => add(`prose h2#${i + 1}`, h));
    qa('.isl-callout').forEach((c, i) => add(`callout${i + 1}`, c));
    qa('.hub a').forEach((c, i) => { add(`hubcard${i + 1}`, c); add(`hubcard${i + 1}`, c, 'bottom'); });
    qa('.card').forEach((c, i) => { add(`card${i + 1}`, c); add(`card${i + 1}`, c, 'bottom'); });
    qa('.person').forEach((c, i) => add(`person${i + 1} rule`, c));
    qa('.pub').forEach((c, i) => add(`pub${i + 1} rule`, c));
    add('closing', q('.closing'));
    return out;
  });

  const bad = rows.filter(r => Math.abs(r.off) > 0.6 && !ALLOW.has(`${path} ${r.label}`));
  failures += bad.length;
  console.log(`${bad.length ? '✗' : '✓'} ${String(width).padStart(4)}px ${path.padEnd(11)} ${rows.length} blocks` +
    (bad.length ? `, ${bad.length} off-lattice` : ''));
  for (const r of bad) {
    console.log(`    ${r.label.padEnd(20)} y=${r.y}  ${r.off > 0 ? '+' : ''}${r.off}px`);
  }
  await page.close();
  }
}

await browser.close();
console.log(failures ? `\n${failures} off-lattice` : '\nall blocks on the lattice');
process.exit(failures ? 1 : 0);
