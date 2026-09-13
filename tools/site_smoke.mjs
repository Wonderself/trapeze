import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { launchChromium, startStaticServer } from './browser_helpers.mjs';

const site = path.resolve(process.argv[2] || '_site');
const screenshotArgument = process.argv.indexOf('--screenshots');
const server = await startStaticServer(site);
const browser = await launchChromium({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const routes = [
  '/',
  '/2d/',
  '/3d/?lowfx',
  '/3d/showcase.html',
  '/trapeze-stars-v1.html',
  '/trapeze-stars-v2.html',
  '/trapeze-city-v3.html',
];
const failures = [];
const results = [];
const internalLinks = new Set();
const viewports = [
  { width: 320, height: 568, touch: true },
  { width: 390, height: 844, touch: true },
  { width: 844, height: 390, touch: true },
  { width: 1280, height: 720, touch: false },
];
const requestedScreenshotDirectory = screenshotArgument >= 0
  ? process.argv[screenshotArgument + 1]
  : process.env.TRAPEZE_SCREENSHOT_DIR;
const screenshotDirectory = requestedScreenshotDirectory
  ? path.resolve(requestedScreenshotDirectory)
  : null;
if (screenshotDirectory) await mkdir(screenshotDirectory, { recursive: true });

try {
  for (const viewport of viewports) {
    const { width, height, touch } = viewport;
    const context = await browser.newContext({ viewport: { width, height }, hasTouch: touch, isMobile: touch });
    await context.addInitScript(() => {
      if (location.pathname.includes('/3d/')) {
        const board = Array.from({ length: 10 }, (_, index) => ({ i: `PLAYER ${index + 1}`, s: 10_000 - index * 500, m: 2, l: 0 }));
        localStorage.setItem('ts3d_board', JSON.stringify(board));
      }
    });
    for (const route of routes) {
      const page = await context.newPage();
      const pageFailures = [];
      const externalRequests = new Set();
      page.on('pageerror', error => pageFailures.push(`pageerror: ${error.message}`));
      page.on('console', message => { if (message.type() === 'error') pageFailures.push(`console: ${message.text()}`); });
      page.on('request', request => {
        const url = request.url();
        if (/^https?:/.test(url) && !url.startsWith(server.origin)) externalRequests.add(url);
      });
      page.on('response', response => {
        if (response.url().startsWith(server.origin) && response.status() >= 400) {
          pageFailures.push(`${response.status()} ${response.url()}`);
        }
      });
      const response = await page.goto(`${server.origin}${route}`, { waitUntil: 'load', timeout: 30_000 });
      if (!response || response.status() !== 200) pageFailures.push(`document status ${response?.status()}`);
      if (route.startsWith('/3d/?')) {
        await page.waitForFunction(() => Boolean(window.__game), null, { timeout: 20_000 });
      } else {
        await page.waitForTimeout(250);
      }
      const layout = await page.evaluate(() => ({
        title: document.title,
        overflow: document.documentElement.scrollWidth - innerWidth,
        lang: document.documentElement.lang,
        viewport: document.querySelector('meta[name="viewport"]')?.content || '',
        duplicateIds: [...document.querySelectorAll('[id]')]
          .map(element => element.id)
          .filter((id, index, ids) => ids.indexOf(id) !== index),
        imagesWithoutAlt: [...document.images].filter(image => !image.hasAttribute('alt')).length,
        unnamedControls: [...document.querySelectorAll('a, button, input, select, textarea')]
          .filter(element => {
            const style = getComputedStyle(element);
            if (style.display === 'none' || style.visibility === 'hidden') return false;
            const rect = element.getBoundingClientRect();
            if (!rect.width || !rect.height) return false;
            const imageAlt = [...element.querySelectorAll('img')].map(image => image.alt).join(' ');
            const name = element.getAttribute('aria-label') || element.getAttribute('title')
              || element.getAttribute('placeholder') || element.textContent || imageAlt;
            return !String(name).trim();
          })
          .map(element => `${element.tagName.toLowerCase()}#${element.id || '-'}`),
        internalLinks: [...document.querySelectorAll('a[href]')]
          .map(anchor => anchor.href)
          .filter(href => href.startsWith(location.origin)),
      }));
      if (!layout.title) pageFailures.push('missing document title');
      if (!layout.lang) pageFailures.push('missing document language');
      if (/user-scalable\s*=\s*no|maximum-scale\s*=\s*1(?:\.0)?(?:\s|,|$)/i.test(layout.viewport)) pageFailures.push(`browser zoom disabled: ${layout.viewport}`);
      if (layout.duplicateIds.length) pageFailures.push(`duplicate ids: ${[...new Set(layout.duplicateIds)].join(', ')}`);
      if (layout.imagesWithoutAlt) pageFailures.push(`${layout.imagesWithoutAlt} image(s) without alt text`);
      if (layout.unnamedControls.length) pageFailures.push(`unnamed controls: ${layout.unnamedControls.join(', ')}`);
      if (layout.overflow > 1) pageFailures.push(`horizontal overflow ${layout.overflow}px`);
      if (externalRequests.size) pageFailures.push(`external requests: ${[...externalRequests].join(', ')}`);
      layout.internalLinks.forEach(link => internalLinks.add(link));

      if (route === '/2d/') {
        const touchLayout = await page.evaluate(() => ({
          wrap: (() => { const r = document.getElementById('wrap').getBoundingClientRect(); return [r.left, r.top, r.right, r.bottom]; })(),
          fullscreen: (() => { const element = document.getElementById('btnFs'); element.focus(); const r = element.getBoundingClientRect(); return { rect: [r.left, r.top, r.right, r.bottom], outline: getComputedStyle(element).outlineStyle }; })(),
          controls: [...document.querySelectorAll('#ctrl button')]
            .filter(button => getComputedStyle(button).display !== 'none')
            .map(button => { const r = button.getBoundingClientRect(); return { id: button.id, rect: [r.left, r.top, r.right, r.bottom] }; }),
        }));
        const outside = touchLayout.controls.filter(({ rect }) => rect[0] < -1 || rect[1] < -1 || rect[2] > width + 1 || rect[3] > height + 1);
        if (touchLayout.wrap[1] < -1 || touchLayout.wrap[3] > height + 1) pageFailures.push(`2D game frame clipped: ${touchLayout.wrap.join(',')}`);
        if (outside.length) pageFailures.push(`2D touch controls clipped: ${JSON.stringify(outside)}`);
        if (touchLayout.fullscreen.rect[2] - touchLayout.fullscreen.rect[0] < 44 || touchLayout.fullscreen.rect[3] - touchLayout.fullscreen.rect[1] < 44) pageFailures.push(`2D fullscreen target below 44px: ${touchLayout.fullscreen.rect.join(',')}`);
        if (touchLayout.fullscreen.outline === 'none') pageFailures.push('2D fullscreen control has no visible keyboard focus');
        const quitFlow = await page.evaluate(async () => {
          startGame();
          await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
          const visibleInGame = getComputedStyle(document.getElementById('btnQuit')).display !== 'none';
          document.getElementById('btnQuit').click();
          await new Promise(resolve => requestAnimationFrame(resolve));
          return { visibleInGame, hiddenAtMenu: getComputedStyle(document.getElementById('btnQuit')).display === 'none' };
        });
        if (!quitFlow.visibleInGame || !quitFlow.hiddenAtMenu) pageFailures.push(`2D mobile exit flow failed: ${JSON.stringify(quitFlow)}`);
      }

      if (route.startsWith('/3d/?')) {
        const menuLayout = await page.evaluate(() => {
          const rect = element => { const r = element.getBoundingClientRect(); return [r.left, r.top, r.right, r.bottom]; };
          const intersects = (a, b) => a[0] < b[2] && a[2] > b[0] && a[1] < b[3] && a[3] > b[1];
          const board = rect(document.getElementById('menuBoard'));
          const controls = [...document.querySelectorAll('#menu .pick, #playBtn, #dailyBtn')]
            .map(element => ({ id: element.id || element.dataset.char, rect: rect(element) }));
          const hint = rect(document.getElementById('menuHint'));
          const fixedButtons = [...document.querySelectorAll('#muteBtn, #fxBtn, #introBtn')]
            .map(element => ({ id: element.id, rect: rect(element) }));
          return {
            menuBottom: rect(document.querySelector('.menuBottom')),
            controls,
            board,
            boardOverlaps: controls.filter(control => intersects(board, control.rect)).map(control => control.id),
            fixedOverlapsHint: fixedButtons.filter(control => intersects(hint, control.rect)).map(control => control.id),
          };
        });
        const outside = menuLayout.controls.filter(({ rect }) => rect[0] < -1 || rect[1] < -1 || rect[2] > width + 1 || rect[3] > height + 1);
        if (menuLayout.menuBottom[3] > height + 1) pageFailures.push(`3D menu content clipped at ${menuLayout.menuBottom[3]}px`);
        if (outside.length) pageFailures.push(`3D menu controls clipped: ${JSON.stringify(outside)}`);
        if (menuLayout.boardOverlaps.length) pageFailures.push(`3D leaderboard overlaps controls: ${menuLayout.boardOverlaps.join(', ')}`);
        if (menuLayout.fixedOverlapsHint.length) pageFailures.push(`3D fixed controls overlap help: ${menuLayout.fixedOverlapsHint.join(', ')}`);
      }

      results.push({ route, viewport: `${width}x${height}`, title: layout.title, overflow: layout.overflow, accessibility: 'basic-pass' });
      failures.push(...pageFailures.map(failure => `${route} @${width}x${height}: ${failure}`));
      if (screenshotDirectory && ['/', '/2d/', '/3d/?lowfx'].includes(route)) {
        const name = route === '/' ? 'home' : route.startsWith('/2d') ? '2d' : '3d';
        // Viewport captures are stable across desktop and mobile-emulation CDP;
        // layout completeness is asserted separately from the screenshot.
        await page.screenshot({ path: path.join(screenshotDirectory, `${name}-${width}x${height}.png`) });
      }
      console.log(`checked ${route} at ${width}x${height}`);
      await page.close();
    }
    await context.close();
  }

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(`${server.origin}/`, { waitUntil: 'load' });
  const metadata = await page.evaluate(async () => {
    const image = new Image();
    image.src = 'assets/og-cover.png';
    await image.decode();
    return {
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      ogUrl: document.querySelector('meta[property="og:url"]')?.content,
      ogImage: document.querySelector('meta[property="og:image"]')?.content,
      twitterImage: document.querySelector('meta[name="twitter:image"]')?.content,
      imageSize: [image.naturalWidth, image.naturalHeight],
    };
  });
  const expectedHome = 'https://wonderself.github.io/trapeze/';
  const expectedImage = `${expectedHome}assets/og-cover.png`;
  if (metadata.canonical !== expectedHome || metadata.ogUrl !== expectedHome) failures.push(`canonical metadata mismatch: ${JSON.stringify(metadata)}`);
  if (metadata.ogImage !== expectedImage || metadata.twitterImage !== expectedImage) failures.push(`share image metadata mismatch: ${JSON.stringify(metadata)}`);
  if (metadata.imageSize[0] !== 1200 || metadata.imageSize[1] !== 630) failures.push(`OG image is ${metadata.imageSize.join('x')}, expected 1200x630`);

  const missing = await page.goto(`${server.origin}/definitely-missing`, { waitUntil: 'load' });
  if (!missing || missing.status() !== 404 || !(await page.textContent('body')).includes('Numéro introuvable')) {
    failures.push('custom 404 page is not served with status 404');
  }

  for (const link of internalLinks) {
    const target = new URL(link);
    target.hash = '';
    const response = await fetch(target.href.replace(target.origin, server.origin));
    if (!response.ok) failures.push(`internal link ${target.pathname} returned ${response.status}`);
  }
  await context.close();

  const sitemap = await readFile(path.join(site, 'sitemap.xml'), 'utf8');
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  if (locations.length !== 7) failures.push(`sitemap contains ${locations.length} URLs, expected 7`);
  for (const location of locations) {
    const url = new URL(location);
    const localPath = url.pathname.replace(/^\/trapeze/, '') || '/';
    const response = await fetch(`${server.origin}${localPath}`);
    if (!response.ok) failures.push(`sitemap target ${location} returned ${response.status}`);
  }
} finally {
  await browser.close();
  await server.close();
}

console.log(JSON.stringify({ pages: results.length, viewports: viewports.map(({ width, height }) => `${width}x${height}`), internalLinks: internalLinks.size, metadata: 'checked', sitemapUrls: 7 }, null, 2));
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
