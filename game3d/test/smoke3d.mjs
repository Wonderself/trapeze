// Headless WebGL smoke test — Session 3D-1 criteria (a)-(f), 3D-2 (g) 3D menu,
// 3D-3 (h) 4 worlds + safety net + full traversal, 3D-4 (d/e/f/j) endless+records+audio,
// 3D-5 (k) gamepad mapping + full-name entry (up to 20 chars, real text field) + persistent top-10 leaderboard,
// 3D-8 (r/s/t) world leaderboard: inert when unconfigured, mocked Supabase GET/POST, silent fallback.
// Environment-agnostic: resolves playwright + paths so it runs anywhere.
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { mkdirSync, existsSync, readFileSync } from 'node:fs';
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
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text() + ' [' + ((m.location() && m.location().url) || '') + ']'); });
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));

  await page.goto('http://localhost:8130/index.html', { waitUntil: 'load' });

  // ---- (n) cinematic intro: plays on a fresh full-fx load, skipIntro() hands the menu back ----
  await page.waitForFunction(() => !!window.__game, null, { timeout: 15000 });
  results.n_intro = await page.evaluate(() => {
    const before = window.__game.intro();
    window.__game.skipIntro();
    const after = window.__game.intro();
    return {
      ranOrRunning: before.active || before.done,   // active when we catch it, done if headless was slow enough to finish it
      doneAfter: after.done, activeAfter: after.active,
      menuVisible: !document.getElementById('menu').classList.contains('hidden'),
      logoHidden: !document.getElementById('introLogo').classList.contains('show'),
    };
  });

  // curtain opens on the game clock (dt-clamped), so under slow headless GPUs it needs
  // more real time than on a 60fps device — poll until it's open instead of guessing.
  await page.waitForFunction(() => window.__game && window.__game.menu().curtainOpen >= 0.9, null, { timeout: 20000 }).catch(() => {});
  await page.evaluate(() => window.__game.wipe());   // clean records for a deterministic run
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/3d4-menu.png` }); // podium + open curtain

  // ---- (l1) accessibility: default state (no OS reduced-motion in this headless profile) + toggling
  // "reduce flashes" via its real HUD button (#fxBtn) is reflected instantly ----
  results.l_fxDefault = await page.evaluate(() => window.__game.a11y());
  results.l_fxToggle = await page.evaluate(() => { document.getElementById('fxBtn').click(); return window.__game.a11y(); });

  results.webgl = await page.evaluate(() => {
    const c = document.querySelector('canvas');
    const gl = c && (c.getContext('webgl2') || c.getContext('webgl'));
    return gl ? 'ok' : 'missing';
  });

  // ---- (r) world leaderboard NOT configured: no WORLD tab, no world rows, flow untouched (3D-8) ----
  results.r_net = await page.evaluate(() => ({
    ...window.__game.net(),
    tabs: document.querySelectorAll('#menuBoard .bTab').length,
  }));

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
      // poll (rather than a single fixed-delay check) so a slow/throttled headless rAF
      // doesn't turn a real pass into a flaky failure — the gate itself is unchanged.
      const deadline = performance.now() + 1500;
      const check = () => {
        const started = window.__game.state().mode === 'playing';
        if (started || performance.now() > deadline) {
          window.__pad.buttons[0].pressed = false;
          navigator.getGamepads = real;
          window.dispatchEvent(new Event('gamepaddisconnected')); // unplug
          setTimeout(() => res({ active, badge, started, inactiveAfter: window.__game.gp().active }), 150);
        } else requestAnimationFrame(check);
      };
      requestAnimationFrame(check);
    }, 140);
  }));

  // ---- (o) attract / demo mode: startAttract() has the bot playing, any key hands back the menu ----
  results.o_attract = await page.evaluate(() => new Promise((res) => {
    window.__game.toMenu();          // the gamepad test left a game running
    window.__game.startAttract();
    const t0 = performance.now();
    const chk = () => {
      const a = window.__game.attract(), s = window.__game.state();
      if (a.active && s.mode === 'playing') {
        const barShown = getComputedStyle(document.getElementById('attractBar')).display !== 'none';
        window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyQ', bubbles: true }));  // any key exits
        setTimeout(() => res({
          started: true, barShown,
          activeAfter: window.__game.attract().active,
          modeAfter: window.__game.state().mode,
          barAfter: getComputedStyle(document.getElementById('attractBar')).display !== 'none',
        }), 350);
        return;
      }
      if (performance.now() - t0 > 8000) return res({ started: false });
      requestAnimationFrame(chk);
    }; chk();
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

  // ---- (k2) a top-10 run stops for a full-name entry (real <input maxlength="20">), driven by
  //      real keyboard typing — also exercises the 20-char cap with a name longer than that ----
  results.k_entryOpen = await page.evaluate(() => { window.__game.over(); return window.__game.entry(); });
  const LONG_NAME = 'MARC THE GREAT WONDER';               // 21 chars — must land truncated to 20
  await page.click('#entryInput');
  await page.keyboard.type(LONG_NAME);
  results.k_entryValue = await page.evaluate(() => window.__game.entry().value);
  await page.screenshot({ path: `${OUT}/3d5-entry.png` });
  await page.keyboard.press('Enter'); // confirm

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

  // ---- (m) photo finish: canvas.toBlob() fired on the run's best PERFECT catch, share/download wired ----
  results.m_photo = await page.evaluate(() => window.__game.photo());
  results.m_shareVisible = await page.evaluate(() => !document.getElementById('shareBtn').classList.contains('hidden'));

  // ---- (f) persistence: records survive a full page reload, incl. the "reduce flashes" a11y option ----
  await page.goto('http://localhost:8130/index.html?lowfx', { waitUntil: 'load' });
  await page.waitForTimeout(900);
  results.f_persist = await page.evaluate(() => ({
    ...window.__game.records(),
    bestShown: !document.getElementById('best').classList.contains('hidden'),
    board: window.__game.board(),
    boardRows: document.getElementById('menuBoard').querySelectorAll('.bRow').length,
    a11y: window.__game.a11y(),
  }));

  // ---- (p) daily challenge: date-seeded rail is deterministic across two fresh loads ----
  results.p_daily1 = await page.evaluate(() => { window.__game.startDaily(); return window.__game.daily(); });
  await page.goto('http://localhost:8130/index.html?lowfx', { waitUntil: 'load' });
  await page.waitForFunction(() => !!window.__game, null, { timeout: 15000 });
  results.p_daily2 = await page.evaluate(() => { window.__game.startDaily(); return window.__game.daily(); });
  // and the base rail (PLAY) must differ from the daily one — a real re-roll, not a no-op
  results.p_base = await page.evaluate(() => { window.__game.start('marc'); return window.__game.daily(); });

  // ---- (q) commercial showcase page shipped alongside the game ----
  results.q_showcase = (() => {
    try {
      const h = readFileSync(path.join(DIST, 'showcase.html'), 'utf8');
      return { present: true, cta: h.includes('Play the demo'), shots: existsSync(path.join(DIST, 'shots', 'menu.jpg')) };
    } catch { return { present: false }; }
  })();

  // ---- (s) world leaderboard configured (mocked Supabase endpoint via page.route):
  //      WORLD tab appears, GET fills it, a finished run POSTs initials+score (3D-8) ----
  const postedBodies = [];
  await page.route('**/rest/v1/scores*', (route) => {
    const rq = route.request();
    if (rq.method() === 'POST') {
      postedBodies.push(rq.postDataJSON());
      return route.fulfill({ status: 201, contentType: 'application/json', body: '[]' });
    }
    return route.fulfill({
      status: 200, contentType: 'application/json',
      body: JSON.stringify([
        { initials: 'ZAP', score: 91000, world: 3, lap: 2 },
        { initials: 'BOB', score: 4200, world: 1, lap: 0 },
      ]),
    });
  });
  await page.goto('http://localhost:8130/index.html?lowfx', { waitUntil: 'load' });
  await page.waitForFunction(() => !!window.__game, null, { timeout: 15000 });
  await page.evaluate(() => { window.__game.wipe(); window.__game.netTest('https://mock-project.supabase.co', 'mock-anon-key'); });
  await page.waitForFunction(() => { const n = window.__game.net(); return !n.loading && n.rows && n.rows.length >= 2; }, null, { timeout: 12000 });
  results.s_worldTab = await page.evaluate(() => ({
    ...window.__game.net(),
    tabs: document.querySelectorAll('#menuBoard .bTab').length,
    rowCount: document.querySelectorAll('#menuBoard .bRow').length,
    topIn: (document.querySelector('#menuBoard .bRow .bIn') || {}).textContent || '',
  }));
  await page.screenshot({ path: `${OUT}/3d8-world.png` });
  // short run: one good catch for a non-zero score, then end it -> initials -> POST
  await page.evaluate(() => window.__game.start('marc'));
  await page.waitForTimeout(300);
  results.s_run = await page.evaluate(() => new Promise((res) => {
    const t0 = performance.now();
    let phase = 'air';
    const loop = () => {
      const s = window.__game.state();
      if (s.score > 0 && s.state === 'swing') return res({ ok: true, score: s.score });
      if (s.mode !== 'playing') return res({ ok: false, why: s.mode });
      if (performance.now() - t0 > 90000) return res({ ok: false, why: 'timeout' });
      if (s.state === 'swing') {
        if (phase !== 'hold') { window.__game.down(); phase = 'hold'; }
        else if (s.omega > 0 && Math.abs(s.theta - 0.45 * s.amp) < 0.2 * s.amp && s.amp > 1.18) { window.__game.up(); phase = 'fly'; }
      } else phase = 'air';
      requestAnimationFrame(loop);
    }; loop();
  }));
  await page.evaluate(() => window.__game.over());
  results.s_entry = await page.evaluate(() => window.__game.entry());
  const WORLD_NAME = 'SUPER CHAMPION';                     // full name, not just 3 letters
  await page.evaluate((n) => { window.__game.setEntry(n); window.__game.entryConfirm(); }, WORLD_NAME);
  await page.waitForTimeout(1400);   // POST then top-10 refetch
  results.s_post = postedBodies.length ? postedBodies[0] : null;
  results.s_postCount = postedBodies.length;
  results.s_net2 = await page.evaluate(() => window.__game.net());
  await page.screenshot({ path: `${OUT}/3d8-post.png` });

  // ---- (t) mocked network failure: silent LOCAL fallback, zero JS error (3D-8) ----
  await page.unroute('**/rest/v1/scores*');
  await page.route('**/rest/v1/scores*', (route) => route.abort('failed'));
  await page.goto('http://localhost:8130/index.html?lowfx', { waitUntil: 'load' });
  await page.waitForFunction(() => !!window.__game, null, { timeout: 15000 });
  await page.evaluate(() => window.__game.netTest('https://mock-project.supabase.co', 'mock-anon-key'));
  await page.waitForFunction(() => { const n = window.__game.net(); return n.configured && !n.loading && n.rows === null; }, null, { timeout: 20000 });
  results.t_fail = await page.evaluate(() => ({
    ...window.__game.net(),
    localRows: document.querySelectorAll('#menuBoard .bRow').length,
    tabSel: ((document.querySelector('#menuBoard .bTab.sel') || {}).textContent || '').trim(),
  }));

  console.log('RESULTS', JSON.stringify(results, null, 1));
  console.log('captures in', OUT);
  console.log('errors:', errors.length);
  errors.slice(0, 15).forEach(e => console.log('  -', e));

  // font noise in sandbox + resource errors from the DELIBERATELY failed mock endpoint (t) are expected
  const realErrors = errors.filter(e => !e.includes('ERR_CONNECTION_RESET') && !e.includes('rest/v1/scores') && !e.includes('mock-project.supabase.co'));
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
  else if (!(results.k_entryOpen && results.k_entryOpen.open
             && results.k_entryValue === LONG_NAME.slice(0, 20) && results.k_entryValue.length === 20
             && results.e_end.boardShown && results.e_end.boardLen >= 1
             && results.e_end.top && results.e_end.top.i === LONG_NAME.slice(0, 20) && results.e_end.top.s === results.e_end.score)) code = 18;  // full-name entry, capped at 20 chars
  else if (!(results.f_persist.board && results.f_persist.board.length >= 1
             && results.f_persist.board[0].i === LONG_NAME.slice(0, 20) && results.f_persist.board[0].s === results.e_end.score
             && results.f_persist.boardRows >= 1)) code = 19;  // top-10 leaderboard survives reload
  // ---- 3D-6 gates ----
  else if (!(results.l_fxDefault && results.l_fxDefault.reduceFx === false
             && results.l_fxToggle && results.l_fxToggle.reduceFx === true && results.l_fxToggle.effective === true)) code = 20;  // "reduce flashes" option toggles live
  else if (!(results.f_persist.a11y && results.f_persist.a11y.reduceFx === true)) code = 21;  // ... and survives reload
  else if (!(results.m_photo && results.m_photo.hasPhoto && results.m_photo.size > 0 && results.m_photo.type === 'image/png' && results.m_shareVisible)) code = 22;  // photo-finish blob generated + Share button shown
  // ---- 3D-7 gates ----
  else if (!(results.n_intro && results.n_intro.ranOrRunning && results.n_intro.doneAfter
             && !results.n_intro.activeAfter && results.n_intro.menuVisible && results.n_intro.logoHidden)) code = 23;  // cinematic intro plays & is skippable
  else if (!(results.o_attract && results.o_attract.started && results.o_attract.barShown
             && !results.o_attract.activeAfter && results.o_attract.modeAfter === 'menu' && !results.o_attract.barAfter)) code = 24;  // attract mode starts, any key exits
  else if (!(results.p_daily1 && results.p_daily2 && results.p_daily1.active && results.p_daily2.active
             && results.p_daily1.seed === results.p_daily2.seed
             && JSON.stringify(results.p_daily1.bars) === JSON.stringify(results.p_daily2.bars)
             && JSON.stringify(results.p_base.bars) !== JSON.stringify(results.p_daily1.bars))) code = 25;  // daily rail deterministic (and a real re-roll)
  else if (!(results.q_showcase && results.q_showcase.present && results.q_showcase.cta && results.q_showcase.shots)) code = 26;  // showcase landing page shipped in dist
  // ---- 3D-8 gates ----
  else if (!(results.r_net && results.r_net.configured === false && results.r_net.tabs === 0
             && results.r_net.rows === null)) code = 27;  // unconfigured: WORLD tab absent, flow untouched
  else if (!(results.s_worldTab && results.s_worldTab.configured && results.s_worldTab.tab === 'world'
             && results.s_worldTab.tabs === 2 && results.s_worldTab.rowCount >= 2
             && results.s_worldTab.topIn === 'ZAP' && results.s_worldTab.rows[0].s === 91000)) code = 28;  // mocked GET fills the WORLD tab
  else if (!(results.s_run && results.s_run.ok && results.s_entry && results.s_entry.open
             && results.s_post && results.s_post.initials === WORLD_NAME && results.s_post.score === results.s_run.score
             && results.s_postCount === 1
             && results.s_net2 && results.s_net2.lastSubmit && results.s_net2.lastSubmit.i === WORLD_NAME)) code = 29;  // end-of-run POST: full name+score, one per run
  else if (!(results.t_fail && results.t_fail.configured && results.t_fail.tab === 'local'
             && results.t_fail.rows === null && results.t_fail.localRows >= 1
             && results.t_fail.tabSel === 'LOCAL')) code = 30;  // network failure: silent LOCAL fallback
  else if (realErrors.length) code = 2;
  await browser.close();
} catch (e) {
  console.log('HARNESS ERROR:', e.message); code = 4;
} finally { srv.kill('SIGKILL'); }
console.log('EXIT CODE', code);
process.exit(code);
