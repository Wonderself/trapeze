// Deterministic visual fixtures: menus, play, pause and end screens of all four Canvas games.
// Portrait captures intentionally retain the games' orientation guidance.
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { launchChromium, startStaticServer } from './browser_helpers.mjs';

const root = path.resolve(process.argv[2] || '_site');
const output = path.resolve(process.argv[3] || 'game3d/test/out/visual-states');
const viewports = [
  { width: 1280, height: 720, touch: false },
  { width: 844, height: 390, touch: true },
  { width: 390, height: 844, touch: true },
];
const games = [
  {
    name: 'classic', route: '/trapeze-stars-v1.html',
    start: 'startGame()',
    pause: 'if (!paused) togglePause()',
    end: "paused=false;jBuf=0;grabBuf=0;tapN=0;gs='gameover'",
  },
  {
    name: 'deluxe', route: '/trapeze-stars-v2.html',
    start: 'startRun()', pause: "if (gs==='play') togglePause()",
    end: "gs='gameover';render()",
  },
  {
    name: 'circus2d', route: '/2d/',
    start: 'skipIntro();startGame()', pause: 'pauseGame()',
    end: "paused=false;jBuf=0;grabBuf=0;tapN=0;gs='gameover';render()",
  },
  {
    name: 'city', route: '/trapeze-city-v3.html',
    start: 'window.__v3.start();window.__v3.goRig(0);window.__v3.sim(100);window.__v3.still()',
    pause: 'if (!window.__v3.state.paused) window.__v3.pause();window.__v3.still()',
    end: 'if (window.__v3.state.paused) window.__v3.pause();window.__v3.finale();window.__v3.action();window.__v3.still()',
  },
];
const records = [];
const errors = [];
await mkdir(output, { recursive: true });
let server;
let browser;
try {
  server = await startStaticServer(root);
  browser = await launchChromium();
  for (const viewport of viewports) {
    for (const game of games) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        isMobile: viewport.touch, hasTouch: viewport.touch,
      });
      try {
        const page = await context.newPage();
        const recordError = message => errors.push({ game: game.name, viewport, error: message });
        page.on('pageerror', error => recordError(error.message));
        page.on('console', message => { if (message.type() === 'error') recordError(message.text()); });
        if (game.name === 'city') await page.addInitScript(() => { window.__V3_HALT = true; });
        const response = await page.goto(`${server.origin}${game.route}`, { waitUntil: 'load', timeout: 30_000 });
        if (response?.status() !== 200) throw new Error(`Document returned HTTP ${response?.status()}`);
        await page.waitForTimeout(180);
        if (game.name === 'circus2d') await page.evaluate(() => skipIntro());
        for (const [state, code] of [['menu', null], ['playing', game.start], ['pause', game.pause], ['end', game.end]]) {
          if (code) await page.evaluate(code);
          await page.waitForTimeout(100);
          if (game.name === 'city') await page.evaluate(() => window.__v3.still());
          const actual = await page.evaluate(() => ({
            state: typeof gs === 'string' ? gs : null,
            paused: typeof paused === 'boolean' ? paused : null,
            horizontalOverflow: document.documentElement.scrollWidth - innerWidth,
          }));
          const expectedState = state === 'menu' ? 'menu'
            : state === 'end' ? (game.name === 'city' ? 'levelcomplete' : 'gameover')
            : game.name === 'deluxe' ? (state === 'pause' ? 'pause' : 'play') : 'playing';
          if (actual.state !== expectedState) recordError(`${state} fixture expected ${expectedState}, got ${actual.state}`);
          if (state === 'pause' && game.name !== 'deluxe' && actual.paused !== true) recordError(`${state} fixture did not pause the game`);
          if (state === 'end' && actual.paused === true) recordError(`${state} fixture remained paused`);
          if (actual.horizontalOverflow > 1) recordError(`${state}: horizontal overflow ${actual.horizontalOverflow}px`);
          const file = `${game.name}-${viewport.width}x${viewport.height}-${state}.png`;
          await page.screenshot({ path: path.join(output, file) });
          records.push({ game: game.name, viewport, state, actualState: actual.state, paused: actual.paused, file });
        }
      } catch (error) {
        errors.push({ game: game.name, viewport, error: error.message });
      } finally {
        await context.close();
      }
    }
  }
} catch (error) {
  errors.push({ error: error.message });
} finally {
  if (browser) await browser.close().catch(error => errors.push({ error: `Browser cleanup: ${error.message}` }));
  if (server) await server.close().catch(error => errors.push({ error: `Server cleanup: ${error.message}` }));
  const report = { root, output, syntheticStateFixtures: true, expectedScreenshots: 48, screenshots: records.length, records, errors };
  await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ screenshots: records.length, errors, output }));
  if (errors.length || records.length !== 48) process.exitCode = 1;
}
