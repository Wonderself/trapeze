import assert from 'node:assert/strict';
import path from 'node:path';
import { mkdir } from 'node:fs/promises';
import { launchChromium, startStaticServer } from './browser_helpers.mjs';

const server = await startStaticServer(path.resolve(process.argv[2] || '_site'));
const browser = await launchChromium();
const errors = [];
const screenshots = process.env.TRAPEZE_2D_SCREENSHOT_DIR;
if (screenshots) await mkdir(screenshots, { recursive: true });

async function open(viewport, touch = false) {
  const context = await browser.newContext({ viewport, hasTouch: touch, isMobile: touch });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`${server.origin}/2d/`, { waitUntil: 'load' });
  return { context, page };
}

try {
  const desktop = await open({ width: 1280, height: 720 });
  const page = desktop.page;
  assert.match(await page.locator('#controlsHelp').innerText(), /Space.*Pause: Esc/);
  assert.equal(await page.locator('[data-versions-link]').innerText(), '← All versions');
  if (screenshots) await page.screenshot({ path: path.join(screenshots, 'desktop-menu.png') });

  const idle = await page.evaluate(() => {
    startGame();
    for (let i = 0; i < 600; i++) tick();
    return { state: gs, y: P.y, feet: P.y + P.h, lives, scrollX, clowns: clowns.length, inputStarted, hintTimer };
  });
  assert.deepEqual(idle, { state: 'playing', y: 348, feet: 400, lives: 3, scrollX: 0, clowns: 0, inputStarted: false, hintTimer: 300 });

  await page.locator('#btnQuit').click();
  await page.evaluate(() => skipIntro());
  const canvas = page.locator('#c');
  const box = await canvas.boundingBox();
  await canvas.click({ position: { x: box.width * 0.5, y: box.height * (392 / 450) } });
  assert.equal(await page.evaluate(() => gs), 'playing', 'desktop canvas PLAY must start the game');

  await page.locator('#btnPause').click();
  assert.equal(await page.evaluate(() => paused), true);
  assert.equal(await page.locator('#btnPause').getAttribute('aria-label'), 'Resume game');
  assert.equal(await page.locator('#controlsHelp').isVisible(), true);
  if (screenshots) await page.screenshot({ path: path.join(screenshots, 'desktop-paused.png') });
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => paused), true, 'keyboard focus navigation must not resume the game');
  await page.keyboard.press('Escape');
  assert.equal(await page.evaluate(() => paused), false);
  assert.equal(await page.evaluate(() => jBuf), 0, 'resuming must not trigger a jump');
  await page.evaluate(() => { markGameInput(); idleTicks = 299; tick(); });
  assert.equal(await page.evaluate(() => paused && pauseReason === 'idle'), true, 'inactive play must enter a stable pause');
  await page.locator('#btnPause').click();
  assert.equal(await page.evaluate(() => paused), false);

  const comboX = await page.evaluate(() => {
    combo = 4;
    passHoop({ x: 500, y: 220, r: 40, passed: false, color: '#fff' });
    return ftexts.at(-1).x;
  });
  assert.equal(Number.isFinite(comboX), true, 'fifth hoop combo text must have a finite position');
  await desktop.context.close();

  for (const viewport of [{ width: 320, height: 568 }, { width: 390, height: 844 }, { width: 844, height: 390 }]) {
    const mobile = await open(viewport, true);
    const bounds = await mobile.page.evaluate(() => {
      const canvas = document.querySelector('#c').getBoundingClientRect();
      const controls = document.querySelector('#ctrl').getBoundingClientRect();
      const help = document.querySelector('#controlsHelp').getBoundingClientRect();
      return { canvasBottom: canvas.bottom, controlTop: controls.top, controlsBottom: controls.bottom, helpBottom: help.bottom, height: innerHeight };
    });
    assert.ok(bounds.controlTop >= bounds.canvasBottom - 1, `mobile controls cover the stage at ${viewport.width}x${viewport.height}`);
    assert.ok(bounds.helpBottom <= bounds.height + 1, `mobile controls/help overflow at ${viewport.width}x${viewport.height}`);
    await mobile.page.evaluate(() => skipIntro());
    await mobile.page.locator('#bJ').tap();
    assert.equal(await mobile.page.evaluate(() => gs), 'playing', `touch PLAY failed at ${viewport.width}x${viewport.height}`);
    if (screenshots) await mobile.page.screenshot({ path: path.join(screenshots, `mobile-${viewport.width}x${viewport.height}-playing.png`) });
    await mobile.page.locator('#btnPause').tap();
    assert.equal(await mobile.page.evaluate(() => paused), true);
    await mobile.page.locator('#btnPause').tap();
    assert.equal(await mobile.page.evaluate(() => paused), false);
    await mobile.context.close();
  }

  assert.deepEqual(errors, []);
  console.log('2D controls: desktop click, no-input, pause/resume, combo, and 3 mobile layouts PASS');
} finally {
  await browser.close();
  await server.close();
}
