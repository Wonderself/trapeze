import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('/home/claude/.npm-global/lib/node_modules/playwright');
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';

const OUT = '/home/claude/deliver';
mkdirSync(OUT, { recursive: true });
const srv = spawn('python3', ['-m', 'http.server', '8130'], { cwd: '/home/claude/trapeze/game3d/dist', stdio: 'ignore' });
await new Promise(r => setTimeout(r, 900));

const errors = [];
let code = 0;
try {
  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl']
  });
  const page = await browser.newPage({ viewport: { width: 960, height: 560 } });
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));

  await page.goto('http://localhost:8130/index.html', { waitUntil: 'load' });
  await page.waitForTimeout(1800);
  await page.screenshot({ path: `${OUT}/3d-menu.png` });

  // WebGL actually running?
  const webgl = await page.evaluate(() => {
    const c = document.querySelector('canvas');
    if (!c) return 'no-canvas';
    const gl = c.getContext('webgl2') || c.getContext('webgl');
    return gl ? 'webgl-ok' : 'no-webgl';
  });

  // start playing and drive it — release only on the forward swing (omega>0.4)
  await page.evaluate(() => window.__game && window.__game.start('marc'));
  await page.waitForTimeout(400);
  const samples = [];
  let shot = false;
  for (let i = 0; i < 240; i++) {
    const st = await page.evaluate(() => {
      const s = window.__game.state();
      if (s.mode === 'playing' && s.state === 'swing' && s.omega > 0.4) window.__game.action();
      return s;
    });
    if (i % 20 === 0) samples.push({ t: i, score: st.score, active: st.active, mode: st.mode, state: st.state });
    if (st.active >= 3 && !shot) { shot = true; await page.screenshot({ path: `${OUT}/3d-play.png` }); }
    if (st.mode !== 'playing') { samples.push({ t: i, score: st.score, active: st.active, mode: st.mode }); break; }
    await page.waitForTimeout(60);
  }
  if (!shot) await page.screenshot({ path: `${OUT}/3d-play.png` });
  await page.screenshot({ path: `${OUT}/3d-play2.png` });

  console.log('webgl:', webgl);
  console.log('progress samples:', JSON.stringify(samples));
  console.log('errors:', errors.length);
  errors.slice(0, 15).forEach(e => console.log('  -', e));
  await browser.close();
  if (errors.length) code = 2;
  if (webgl !== 'webgl-ok') code = 3;
} catch (e) {
  console.log('HARNESS ERROR:', e.message); code = 4;
} finally { srv.kill('SIGKILL'); }
process.exit(code);
