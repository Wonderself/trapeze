import assert from 'node:assert/strict';
import path from 'node:path';
import { mkdir } from 'node:fs/promises';
import { launchChromium, startStaticServer } from './browser_helpers.mjs';

const server = await startStaticServer(path.resolve(process.argv[2] || '_site'));
const browser = await launchChromium();
const errors = [];
const screenshots = process.env.TRAPEZE_CITY_SCREENSHOT_DIR;
if (screenshots) await mkdir(screenshots, { recursive: true });

async function open(viewport, touch = false) {
  const context = await browser.newContext({ viewport, hasTouch: touch, isMobile: touch, locale: 'fr-FR' });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  await page.addInitScript(() => {
    localStorage.setItem('trapezecity.v3.save', JSON.stringify({ schema: 1, lang: 'fr' }));
    window.__V3_HALT = true;
  });
  const response = await page.goto(`${server.origin}/trapeze-city-v3.html`, { waitUntil: 'load' });
  assert.equal(response.status(), 200);
  await page.evaluate(() => window.__v3.still());
  return { context, page };
}

try {
  const desktop = await open({ width: 1280, height: 720 });
  const page = desktop.page;
  assert.equal(await page.locator('html').getAttribute('lang'), 'en');
  assert.match(await page.locator('meta[name=description]').getAttribute('content'), /rooftop trapeze/);
  assert.equal(await page.locator('[data-versions-link]').innerText(), '← All versions');
  assert.equal(await page.evaluate(() => window.__v3.SV.lang), 'en');
  assert.equal(await page.evaluate(() => window.__v3.settingsRows().some(row => /language|langue/i.test(row.label))), false);
  if (screenshots) await page.screenshot({ path: path.join(screenshots, 'desktop-menu.png') });

  const idle = await page.evaluate(() => {
    const v = window.__v3;
    v.start();
    v.sim(500);
    const before = v.state;
    v.sim(1200);
    const after = v.state;
    return { before, after };
  });
  assert.equal(idle.before.gs, 'playing');
  assert.equal(idle.after.waitingForInput, true);
  assert.equal(idle.after.paused, false);
  for (const key of ['x', 'y', 'z', 'amp', 'time', 'score', 'falls', 'hype']) {
    assert.equal(idle.after[key], idle.before[key], `no-input changed ${key}`);
  }
  await page.evaluate(() => window.__v3.still());
  await page.locator('#btnPause').click();
  await page.evaluate(() => window.__v3.still());
  assert.equal(await page.evaluate(() => window.__v3.state.paused), true);
  assert.equal(await page.locator('#btnPause').getAttribute('aria-label'), 'Resume');
  if (screenshots) await page.screenshot({ path: path.join(screenshots, 'desktop-paused.png') });
  await page.keyboard.press('p');
  assert.equal(await page.evaluate(() => window.__v3.state.paused), false);
  await page.keyboard.down('Space');
  const active = await page.evaluate(() => {
    window.__v3.idleForTest(8000);
    window.__v3.sim(1);
    return window.__v3.state;
  });
  assert.equal(active.interactionStarted, true);
  assert.equal(active.paused, false, 'holding an active control must not auto-pause');
  assert.equal(active.idleSteps, 0);
  await page.keyboard.up('Space');
  const autoPause = await page.evaluate(() => {
    window.__v3.idleForTest(8000);
    window.__v3.sim(1);
    return window.__v3.state;
  });
  assert.equal(autoPause.paused, true);
  assert.equal(autoPause.pauseReason, 'idle');
  await desktop.context.close();

  for (const viewport of [{ width: 390, height: 844 }, { width: 844, height: 390 }]) {
    const mobile = await open(viewport, true);
    const p = mobile.page;
    assert.match(await p.locator('#tAct').innerText(), /^PUMP\s*CATCH$/);
    assert.equal(await p.locator('#tRel').innerText(), 'RELEASE');
    assert.equal(await p.locator('#tFig').innerText(), 'TRICK');
    const layout = await p.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > innerWidth,
      rotate: document.querySelector('#rotate').classList.contains('on'),
      pad: document.querySelector('#pad').classList.contains('on'),
    }));
    assert.equal(layout.overflow, false);
    assert.equal(layout.rotate, viewport.height > viewport.width);
    assert.equal(layout.pad, false, 'touch controls must not cover the menu');
    await p.evaluate(() => { window.__v3.start(); window.__v3.sim(500); window.__v3.still(); });
    if (viewport.width > viewport.height) {
      const controls = await p.evaluate(() => {
        const names = ['#stick', '#tAct', '#tRel', '#tFig'];
        return names.map(name => {
          const r = document.querySelector(name).getBoundingClientRect();
          return { name, x: r.x, y: r.y, right: r.right, bottom: r.bottom };
        });
      });
      for (const control of controls) {
        assert.ok(control.x >= 0 && control.y >= 0 && control.right <= viewport.width && control.bottom <= viewport.height, `${control.name} out of viewport`);
      }
      assert.equal(await p.locator('#pad').isVisible(), true);
      if (screenshots) await p.screenshot({ path: path.join(screenshots, 'mobile-landscape-ready.png') });
      await p.locator('#tAct').tap();
      assert.equal(await p.evaluate(() => window.__v3.state.interactionStarted), true);
      await p.locator('#btnPause').tap();
      await p.evaluate(() => window.__v3.still());
      assert.equal(await p.evaluate(() => window.__v3.state.paused), true);
      assert.equal(await p.locator('#pad').isVisible(), false);
      if (screenshots) await p.screenshot({ path: path.join(screenshots, 'mobile-landscape-paused.png') });
    } else {
      assert.equal(await p.locator('#rotate').innerText(), 'Rotate your phone to landscape.');
      if (screenshots) await p.screenshot({ path: path.join(screenshots, 'mobile-portrait.png') });
    }
    await mobile.context.close();
  }

  assert.deepEqual(errors, []);
  console.log('City controls: English migration, no-input, idle pause, desktop and mobile layouts PASS');
} finally {
  await browser.close();
  await server.close();
}
