// Headless smoke test for Trapeze Stars — verifies no console errors, captures screenshots.
import { fileURLToPath } from 'node:url';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { launchChromium, startStaticServer } from '../tools/browser_helpers.mjs';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const ROOT = path.resolve(scriptDir, '..');
const OUT = process.env.DELIVER_DIR || path.join(scriptDir, 'out');
mkdirSync(OUT, { recursive: true });

const srv = await startStaticServer(ROOT);

const errors = [];
let exitCode = 0;
try {
  const browser = await launchChromium();
  const page = await browser.newPage({ viewport: { width: 900, height: 520 } });
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));

  await page.goto(`${srv.origin}/2d/index.html`, { waitUntil: 'load' });
  await page.waitForTimeout(3200);
  await page.screenshot({ path: `${OUT}/s2-title.png` });

  // manifest valid?
  const manifestOk = await page.evaluate(async () => {
    try { const r = await fetch('manifest.json'); const j = await r.json(); return !!j.name; } catch (e) { return 'ERR:' + e.message; }
  });

  // start a game: focus canvas, press keys
  await page.keyboard.press('Space');
  await page.waitForTimeout(400);
  for (let i = 0; i < 20; i++) { await page.keyboard.press('ArrowRight'); await page.keyboard.press('Space'); await page.waitForTimeout(60); }
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${OUT}/s2-gameplay.png` });

  // SW registered?
  const swOk = await page.evaluate(() => navigator.serviceWorker ? navigator.serviceWorker.getRegistrations().then(r => r.length > 0) : false);

  console.log('manifest.name ok:', manifestOk);
  console.log('service worker registered:', swOk);
  console.log('console/page errors:', errors.length);
  errors.slice(0, 20).forEach(e => console.log('  -', e));
  await browser.close();
  if (errors.length) exitCode = 2;
} catch (e) {
  console.log('TEST HARNESS ERROR:', e.message);
  exitCode = 3;
} finally {
  await srv.close();
}
process.exit(exitCode);
