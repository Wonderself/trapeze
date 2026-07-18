// Headless smoke test for Trapeze Stars — verifies no console errors, captures screenshots.
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('/home/claude/.npm-global/lib/node_modules/playwright');
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';

const OUT = '/home/claude/deliver';
mkdirSync(OUT, { recursive: true });

const srv = spawn('python3', ['-m', 'http.server', '8123'], { cwd: '/home/claude/trapeze', stdio: 'ignore' });
await new Promise(r => setTimeout(r, 900));

const errors = [];
let exitCode = 0;
try {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 900, height: 520 } });
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));

  await page.goto('http://localhost:8123/index.html', { waitUntil: 'load' });
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
  srv.kill('SIGKILL');
}
process.exit(exitCode);
