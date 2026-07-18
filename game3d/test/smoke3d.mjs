// Headless WebGL smoke test — Session 3D-1 criteria (a)-(f)
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
const results = {};
let code = 0;
try {
  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl']
  });
  const page = await browser.newPage({ viewport: { width: 960, height: 560 } });
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));

  await page.goto('http://localhost:8130/index.html', { waitUntil: 'load' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${OUT}/3d1-menu.png` });

  results.webgl = await page.evaluate(() => {
    const c = document.querySelector('canvas');
    const gl = c && (c.getContext('webgl2') || c.getContext('webgl'));
    return gl ? 'ok' : 'missing';
  });

  // ---- (a) release at the ideal moment -> PERFECT ----
  await page.evaluate(() => window.__game.start('claire'));
  await page.waitForTimeout(300);
  results.a_perfect = await page.evaluate(() => new Promise((res) => {
    const t0 = performance.now();
    const chk = () => {
      const s = window.__game.state();
      if (s.state === 'swing' && s.omega > 0 && Math.abs(s.theta - 0.45 * s.amp) < 0.05 * s.amp) {
        window.__game.action();
        return res(window.__game.state().grade);
      }
      if (performance.now() - t0 > 9000) return res('timeout');
      requestAnimationFrame(chk);
    }; chk();
  }));

  // ---- (c) flip during that flight ----
  await page.evaluate(() => window.__game.down()); // trick
  await page.waitForTimeout(420);
  await page.screenshot({ path: `${OUT}/3d1-fly.png` }); // trail + flip visible
  results.c_flip = await page.evaluate(() => new Promise((res) => {
    const t0 = performance.now();
    const chk = () => {
      const s = window.__game.state();
      if (s.state === 'swing') return res({ flips: s.flips, bonus: s.flipBonus, grade: s.grade, timeScale: +s.timeScale.toFixed(2) });
      if (performance.now() - t0 > 5000) return res({ timeout: true, state: s.state });
      requestAnimationFrame(chk);
    }; chk();
  }));
  await page.screenshot({ path: `${OUT}/3d1-slowmo.png` }); // right after a perfect catch

  // ---- (b) release on the backward swing -> fumble ----
  results.b_early = await page.evaluate(() => new Promise((res) => {
    const t0 = performance.now();
    const chk = () => {
      const s = window.__game.state();
      if (s.state === 'swing' && s.omega < -0.3) {
        window.__game.action();
        return res(window.__game.state().state);
      }
      if (performance.now() - t0 > 9000) return res('timeout');
      requestAnimationFrame(chk);
    }; chk();
  }));
  await page.waitForTimeout(1600); // let the fall + respawn happen
  results.b_lives = (await page.evaluate(() => window.__game.state())).lives;

  // ---- (d) autoplay to the end: fresh run, pump fully, release near-ideal -> must be winnable ----
  // lowfx + small viewport: software rendering is the bottleneck in headless, not the game
  await page.setViewportSize({ width: 480, height: 270 });
  await page.goto('http://localhost:8130/index.html?lowfx', { waitUntil: 'load' });
  await page.waitForTimeout(800);
  await page.evaluate(() => window.__game.start('marc'));
  await page.waitForTimeout(300);
  results.d_win = await page.evaluate(() => new Promise((res) => {
    const t0 = performance.now();
    let phase = 'grip';
    const loop = () => {
      const s = window.__game.state();
      if (s.mode === 'win') return res({ ok: true, score: s.score, combo: s.combo, lives: s.lives });
      if (s.mode === 'over') return res({ ok: false, why: 'gameover', active: s.active, score: s.score });
      if (performance.now() - t0 > 180000) return res({ ok: false, why: 'timeout', active: s.active });
      if (s.state === 'swing') {
        if (phase !== 'hold') { window.__game.down(); phase = 'hold'; }
        else if (s.omega > 0 && Math.abs(s.theta - 0.45 * s.amp) < 0.2 * s.amp && s.amp > 1.18) { window.__game.up(); phase = 'fly'; }
      } else if (phase === 'hold') phase = 'fly';
      requestAnimationFrame(loop);
    }; loop();
  }));
  await page.screenshot({ path: `${OUT}/3d1-end.png` });

  console.log('RESULTS', JSON.stringify(results, null, 1));
  console.log('errors:', errors.length);
  errors.slice(0, 15).forEach(e => console.log('  -', e));

  const realErrors = errors.filter(e => !e.includes('ERR_CONNECTION_RESET'));
  if (results.webgl !== 'ok') code = 3;
  else if (results.a_perfect !== 'perfect') code = 5;
  else if (!results.c_flip || !(results.c_flip.flips >= 1)) code = 6;
  else if (results.b_early !== 'fumble') code = 7;
  else if (!results.d_win || !results.d_win.ok) code = 8;
  else if (realErrors.length) code = 2;
  await browser.close();
} catch (e) {
  console.log('HARNESS ERROR:', e.message); code = 4;
} finally { srv.kill('SIGKILL'); }
console.log('EXIT CODE', code);
process.exit(code);
