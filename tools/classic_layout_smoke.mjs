import path from 'node:path';
import { launchChromium, startStaticServer } from './browser_helpers.mjs';

const root = path.resolve(process.argv[2] || '.');
const server = await startStaticServer(root);
const browser = await launchChromium();

function check(condition, message) {
  if (!condition) throw new Error(message);
}

try {
  const context = await browser.newContext({
    viewport: { width: 844, height: 390 },
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`${server.origin}/trapeze-stars-v1.html`, { waitUntil: 'load' });
  await page.waitForTimeout(200);
  const menu = await page.evaluate(() => {
    const rect = document.getElementById('c').getBoundingClientRect();
    return {
      viewport: { width: innerWidth, height: innerHeight },
      canvas: { left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom },
      controls: getComputedStyle(document.getElementById('ctrl')).display,
      versions: document.querySelector('[data-versions-link]').getAttribute('href'),
    };
  });
  check(menu.canvas.left >= -1 && menu.canvas.right <= menu.viewport.width + 1 &&
    menu.canvas.top >= -1 && menu.canvas.bottom <= menu.viewport.height + 1,
  `Classic canvas clipped in landscape: ${JSON.stringify(menu)}`);
  check(menu.controls === 'none', `Classic touch buttons obscure menu: ${menu.controls}`);
  check(menu.versions === './?release=20260919-ux2', `Classic return link has stale URL: ${menu.versions}`);

  // When height constrains the 16:9 canvas, it is horizontally centred.
  // Character selection must use canvas-local coordinates, not clientX.
  const canvasWidth = menu.canvas.right - menu.canvas.left;
  const canvasHeight = menu.canvas.bottom - menu.canvas.top;
  const characterY = menu.canvas.top + canvasHeight * 220 / 450;
  await page.touchscreen.tap(menu.canvas.left + canvasWidth * 340 / 800, characterY);
  check(await page.evaluate(() => gs === 'playing' && P.char === 'marc'),
    'Classic left character tap selected the wrong artist');
  await page.evaluate("gs='menu';initMenu();");
  await page.waitForTimeout(50);
  await page.touchscreen.tap(menu.canvas.left + canvasWidth * 460 / 800, characterY);
  check(await page.evaluate(() => gs === 'playing' && P.char === 'claire'),
    'Classic right character tap selected the wrong artist');
  await page.waitForTimeout(100);
  const playing = await page.evaluate(() => ({
    controls: getComputedStyle(document.getElementById('ctrl')).display,
    buttons: ['bL', 'bR', 'bGrab', 'bJ'].map(id => {
      const r = document.getElementById(id).getBoundingClientRect();
      return { id, left: r.left, right: r.right, top: r.top, bottom: r.bottom };
    }),
  }));
  check(playing.controls === 'flex', `Classic touch buttons hidden during play: ${playing.controls}`);
  for (const button of playing.buttons) {
    check(button.left >= -1 && button.right <= menu.viewport.width + 1 &&
      button.top >= -1 && button.bottom <= menu.viewport.height + 1,
    `Classic ${button.id} clipped: ${JSON.stringify(button)}`);
  }

  await page.evaluate('togglePause()');
  await page.waitForTimeout(100);
  check(await page.evaluate(() => getComputedStyle(document.getElementById('ctrl')).display) === 'none',
    'Classic touch buttons obscure pause instructions');
  await page.locator('#btnPause').dispatchEvent('pointerdown', { pointerType: 'touch' });
  await page.waitForTimeout(100);
  check(await page.evaluate(() => !paused && getComputedStyle(document.getElementById('ctrl')).display === 'flex'),
    'Classic pause button did not restore play controls');

  const trail = await page.evaluate(() => {
    const oldArc = CanvasRenderingContext2D.prototype.arc;
    const circles = [];
    CanvasRenderingContext2D.prototype.arc = function (x, y, radius, ...rest) {
      circles.push({ x, y, radius });
      return oldArc.call(this, x, y, radius, ...rest);
    };
    try {
      P.inv = 0;
      P.state = 'idle';
      P.onGnd = true;
      P.x = 500;
      P.y = GY;
      P.trail = [{ x: 500, y: 100 }];
      scrollX = 300;
      drawPlayer();
    } finally {
      CanvasRenderingContext2D.prototype.arc = oldArc;
    }
    return circles.find(circle => circle.y === 100 && circle.radius === 1);
  });
  check(trail?.x === 200, `Classic trail does not follow camera: ${JSON.stringify(trail)}`);
  check(errors.length === 0, `Classic browser error: ${errors.join(' | ')}`);
  await context.close();

  const deluxe = await browser.newPage({ viewport: { width: 844, height: 390 } });
  await deluxe.goto(`${server.origin}/trapeze-stars-v2.html`, { waitUntil: 'load' });
  const deluxeLink = await deluxe.locator('[data-versions-link]').getAttribute('href');
  check(deluxeLink === './?release=20260919-ux2', `Deluxe return link has stale URL: ${deluxeLink}`);
  await deluxe.close();
  console.log('PASS Classic touch layout, artist selection, menu/pause controls, camera-following trail; Classic/Deluxe return links');
} finally {
  await browser.close();
  await server.close();
}
