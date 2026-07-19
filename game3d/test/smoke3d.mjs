// Headless WebGL smoke test — Session 3D-1 criteria (a)-(f), 3D-2 (g) 3D menu,
// 3D-3 (h) 4 worlds + safety net + full traversal, 3D-4 (d/e/f/j) endless+records+audio,
// 3D-5 (k) gamepad mapping + arcade initials entry + persistent top-10 leaderboard.
// Environment-agnostic: resolves playwright + paths so it runs anywhere.
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { mkdirSync, existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import path from 'node:path';

const require = createRequire(import.meta.url);
const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const DIST = path.resolve(scriptDir, '../dist');

let chromium;
for (const p of [process.env.PLAYWRIGHT_PATH, '/opt/node22/lib/node_modules/playwright',
                 '/home/claude/.npm-global/lib/node_modules/playwright', 'playwright']) {
  if (!p) continue;
  try { ({ chromium } = require(p)); break; } catch {}
}
if (!chromium) { console.log('HARNESS ERROR: playwright not found'); process.exit(4); }

let OUT = process.env.DELIVER_DIR || '/home/claude/deliver';
try { mkdirSync(OUT, { recursive: true }); } catch { OUT = path.join(scriptDir, 'out'); mkdirSync(OUT, { recursive: true }); }
if (!existsSync(DIST)) { console.log('HARNESS ERROR: build missing at ' + DIST + ' (run npm run build)'); process.exit(4); }

const srv = spawn('python3', ['-m', 'http.server', '8130'], { cwd: DIST, stdio: 'ignore' });
await new Promise(r => setTimeout(r, 900));

const errors = [];
const results = {};
let code = 0;
try {
  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl', '--autoplay-policy=no-user-gesture-required']
  });
  const page = await browser.newPage({ viewport: { width: 960, height: 560 } });
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));

  await page.goto('http://localhost:8130/index.html', { waitUntil: 'load' });
  // curtain opens on the game clock (dt-clamped), so under slow headless GPUs it needs
  // more real time than on a 60fps device — poll until it's open instead of guessing.
  await page.waitForFunction(() => window.__game && window.__game.menu().curtainOpen >= 0.9, null, { timeout: 20000 }).catch(() => {});
  await page.evaluate(() => window.__game.wipe());   // clean records for a deterministic run
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/3d4-menu.png` }); // podium + open curtain

  results.webgl = await page.evaluate(() => {
    const c = document.querySelector('canvas');
    const gl = c && (c.getContext('webgl2') || c.getContext('webgl'));
    return gl ? 'ok' : 'missing';
  });

  // ---- (g) 3D menu: podium visible, both characters shown, curtain opened, pick switches ----
  results.g_menu = await page.evaluate(() => {
    const before = window.__game.menu();
    window.__game.pick('claire');
    const after = window.__game.menu();
    return { podium: before.podium, heroes: before.heroes, curtainOpen: before.curtainOpen, switched: after.char };
  });
  await page.evaluate(() => window.__game.pick('marc'));

  // ---- (k1) gamepad: hot-plug detected (badge shows), A = primary action (starts game) ----
  results.k_gamepad = await page.evaluate(() => new Promise((res) => {
    window.__pad = {
      id: 'test-pad', index: 0, connected: true, mapping: 'standard',
      buttons: Array.from({ length: 16 }, () => ({ pressed: false, value: 0 })),
      axes: [0, 0, 0, 0],
    };
    const real = navigator.getGamepads ? navigator.getGamepads.bind(navigator) : () => [];
    navigator.getGamepads = () => [window.__pad];
    window.dispatchEvent(new Event('gamepadconnected'));
    setTimeout(() => {
      const active = window.__game.gp().active;
      const badge = getComputedStyle(document.getElementById('gpBadge')).display !== 'none';
      window.__pad.buttons[0].pressed = true;                 // press A at the menu
      setTimeout(() => {
        const started = window.__game.state().mode === 'playing';
        window.__pad.buttons[0].pressed = false;
        navigator.getGamepads = real;
        window.dispatchEvent(new Event('gamepaddisconnected')); // unplug
        setTimeout(() => res({ active, badge, started, inactiveAfter: window.__game.gp().active }), 150);
      }, 160);
    }, 140);
  }));

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
  await page.screenshot({ path: `${OUT}/3d4-fly.png` }); // trail + tent visible in flight
  results.c_flip = await page.evaluate(() => new Promise((res) => {
    const t0 = performance.now();
    const chk = () => {
      const s = window.__game.state();
      if (s.state === 'swing') return res({ flips: s.flips, bonus: s.flipBonus, grade: s.grade, timeScale: +s.timeScale.toFixed(2) });
      if (performance.now() - t0 > 5000) return res({ timeout: true, state: s.state });
      requestAnimationFrame(chk);
    }; chk();
  }));

  // ---- (b) release on the backward swing -> fumble... ----
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
  // ---- (h1) ...but the FIRST fall of a world lands in the safety net: no life lost ----
  results.h_net1 = await page.evaluate(() => new Promise((res) => {
    const t0 = performance.now();
    const chk = () => {
      const s = window.__game.state();
      if (s.state === 'swing' && s.mode === 'playing') return res({ lives: s.lives, netSaves: s.netSaves });
      if (s.mode !== 'playing') return res({ mode: s.mode });
      if (performance.now() - t0 > 20000) return res({ timeout: true });
      requestAnimationFrame(chk);
    }; chk();
  }));
  // ---- (h2) second fall in the same world: net already used -> life lost ----
  results.h_net2 = await page.evaluate(() => new Promise((res) => {
    const t0 = performance.now();
    let phase = 'arm';
    const chk = () => {
      const s = window.__game.state();
      if (phase === 'arm' && s.state === 'swing' && s.omega < -0.3) { window.__game.action(); phase = 'fall'; }
      else if (phase === 'fall' && s.state !== 'swing') phase = 'resolve';
      else if (phase === 'resolve' && s.state === 'swing') return res({ lives: s.lives, netSaves: s.netSaves });
      if (performance.now() - t0 > 30000) return res({ timeout: true, phase });
      requestAnimationFrame(chk);
    }; chk();
  }));

  // ---- (i) world captures via warp: all 4 environments render, world index tracks ----
  for (const [bar, name, expW] of [[5, 'circus', 0], [17, 'jungle', 1], [29, 'beach', 2], [41, 'space', 3]]) {
    await page.evaluate((b) => window.__game.warp(b), bar);
    await page.waitForTimeout(1100); // let mood/camera settle
    results['i_' + name] = await page.evaluate(() => {
      const s = window.__game.state();
      return { world: s.world, name: s.worldName };
    });
    results['i_' + name].expected = expW;
    await page.screenshot({ path: `${OUT}/3d4-world-${name}.png` });
  }

  // ---- (j) audio harness alive: context created by the programmatic start, no JS errors ----
  results.j_audio = await page.evaluate(() => window.__game.audio());

  // ---- (d) endless reached: fresh lowfx run, full 4-world tour then loop into lap 2 ----
  await page.setViewportSize({ width: 480, height: 270 });
  await page.goto('http://localhost:8130/index.html?lowfx', { waitUntil: 'load' });
  await page.waitForTimeout(800);
  await page.evaluate(() => { window.__game.wipe(); window.__game.start('marc'); });
  await page.waitForTimeout(300);
  results.d_endless = await page.evaluate(() => new Promise((res) => {
    const t0 = performance.now();
    let phase = 'grip', flipped = false, maxWorld = 0;
    const loop = () => {
      const s = window.__game.state();
      maxWorld = Math.max(maxWorld, s.world);
      if (s.lap >= 1) return res({ ok: true, score: s.score, maxCombo: s.maxCombo, lives: s.lives, maxWorld, netSaves: s.netSaves, lap: s.lap, diffN: s.diffN, stars: s.starsGot });
      if (s.mode === 'over') return res({ ok: false, why: 'gameover', active: s.active, score: s.score, maxWorld });
      if (performance.now() - t0 > 420000) return res({ ok: false, why: 'timeout', active: s.active, maxWorld });
      if (s.state === 'swing') {
        flipped = false;
        if (phase !== 'hold') { window.__game.down(); phase = 'hold'; }
        else if (s.omega > 0 && Math.abs(s.theta - 0.45 * s.amp) < 0.2 * s.amp && s.amp > 1.18) { window.__game.up(); phase = 'fly'; }
      } else {
        if (phase === 'hold') phase = 'fly';
        // Beach: tap mid-air to flip — flips fight the wind drift
        if (s.state === 'fly' && s.world === 2 && !flipped) { window.__game.action(); flipped = true; }
      }
      requestAnimationFrame(loop);
    }; loop();
  }));
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/3d4-lap2.png` });   // endless banner / lap 2 under way

  // ---- (k2) a top-10 run stops for initials (arcade wheel), driven by real keyboard events ----
  results.k_entryOpen = await page.evaluate(() => { window.__game.over(); return window.__game.entry(); });
  await page.evaluate(() => {
    const key = (code) => window.dispatchEvent(new KeyboardEvent('keydown', { code, bubbles: true }));
    key('ArrowRight');                                  // A A A -> slot 1
    key('ArrowUp'); key('ArrowUp');                     // slot 1: A -> C
    key('ArrowRight');                                  // -> slot 2
    key('ArrowUp'); key('ArrowUp'); key('ArrowUp'); key('ArrowUp'); // slot 2: A -> E  => "ACE"
  });
  results.k_entryChars = await page.evaluate(() => window.__game.entry().chars);
  await page.screenshot({ path: `${OUT}/3d5-entry.png` });
  await page.evaluate(() => window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Enter', bubbles: true }))); // confirm

  // ---- (e) enriched end screen + records + leaderboard entry written ----
  results.e_end = await page.evaluate(() => {
    const r = window.__game.records();
    const b = window.__game.board();
    return {
      overVisible: !document.getElementById('over').classList.contains('hidden'),
      entryClosed: document.getElementById('entry').classList.contains('hidden'),
      stats: document.getElementById('overStats').children.length,
      medalsShown: document.getElementById('overMedals').textContent.length > 0,
      boardShown: !document.getElementById('overBoard').classList.contains('hidden'),
      newBest: !document.getElementById('newBest').classList.contains('hidden'),
      high: r.high, bestCombo: r.bestCombo, medals: r.medals,
      score: window.__game.state().score,
      boardLen: b.length, top: b[0],
    };
  });
  await page.screenshot({ path: `${OUT}/3d5-end.png` });

  // ---- (f) persistence: records survive a full page reload ----
  await page.goto('http://localhost:8130/index.html?lowfx', { waitUntil: 'load' });
  await page.waitForTimeout(900);
  results.f_persist = await page.evaluate(() => ({
    ...window.__game.records(),
    bestShown: !document.getElementById('best').classList.contains('hidden'),
    board: window.__game.board(),
    boardRows: document.getElementById('menuBoard').querySelectorAll('.bRow').length,
  }));

  console.log('RESULTS', JSON.stringify(results, null, 1));
  console.log('captures in', OUT);
  console.log('errors:', errors.length);
  errors.slice(0, 15).forEach(e => console.log('  -', e));

  const realErrors = errors.filter(e => !e.includes('ERR_CONNECTION_RESET'));
  const m = results.g_menu || {};
  const n1 = results.h_net1 || {}, n2 = results.h_net2 || {};
  const worldsOk = ['circus', 'jungle', 'beach', 'space'].every(
    (w) => results['i_' + w] && results['i_' + w].world === results['i_' + w].expected
  );
  if (results.webgl !== 'ok') code = 3;
  else if (!(m.podium && m.heroes === 2 && m.curtainOpen > 0.6 && m.switched === 'claire')) code = 9;
  else if (results.a_perfect !== 'perfect') code = 5;
  else if (!results.c_flip || !(results.c_flip.flips >= 1)) code = 6;
  else if (results.b_early !== 'fumble') code = 7;
  else if (!(n1.lives === 3 && n1.netSaves === 1)) code = 10;      // net must save the first fall
  else if (!(n2.lives === 2 && n2.netSaves === 1)) code = 11;      // and only once per world
  else if (!worldsOk) code = 12;                                    // 4 worlds present & tracked
  else if (!results.d_endless || !results.d_endless.ok) code = 8;
  else if (results.d_endless.maxWorld !== 3 || results.d_endless.lap < 1 || results.d_endless.diffN < 1) code = 13;  // full tour then endless engaged
  else if (!(results.e_end && results.e_end.overVisible && results.e_end.entryClosed && results.e_end.stats >= 4 && results.e_end.medalsShown
             && results.e_end.newBest && results.e_end.high === results.e_end.score && results.e_end.high > 0
             && results.e_end.bestCombo > 0 && results.e_end.medals.some((m) => m > 0))) code = 14;  // enriched end screen + records
  else if (!(results.f_persist && results.f_persist.high === results.e_end.high
             && results.f_persist.bestCombo === results.e_end.bestCombo && results.f_persist.bestShown)) code = 15;  // records survive reload
  else if (!(results.j_audio && results.j_audio.ready)) code = 16;  // WebAudio context created
  // ---- 3D-5 gates ----
  else if (!(results.k_gamepad && results.k_gamepad.active && results.k_gamepad.badge
             && results.k_gamepad.started && !results.k_gamepad.inactiveAfter)) code = 17;  // gamepad hot-plug + A mapping
  else if (!(results.k_entryOpen && results.k_entryOpen.open && results.k_entryChars === 'ACE'
             && results.e_end.boardShown && results.e_end.boardLen >= 1
             && results.e_end.top && results.e_end.top.i === 'ACE' && results.e_end.top.s === results.e_end.score)) code = 18;  // arcade initials entry
  else if (!(results.f_persist.board && results.f_persist.board.length >= 1
             && results.f_persist.board[0].i === 'ACE' && results.f_persist.board[0].s === results.e_end.score
             && results.f_persist.boardRows >= 1)) code = 19;  // top-10 leaderboard survives reload
  else if (realErrors.length) code = 2;
  await browser.close();
} catch (e) {
  console.log('HARNESS ERROR:', e.message); code = 4;
} finally { srv.kill('SIGKILL'); }
console.log('EXIT CODE', code);
process.exit(code);
