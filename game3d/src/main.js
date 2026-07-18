import * as THREE from 'three';
import { createStage } from './scene.js';
import { createWorld } from './world.js';
import { createHero, poseHero } from './player.js';

// ---------- tuning ----------
const PY = 6.2;         // pivot height
const L = 3.3;          // rope length
const GP = 19;          // pendulum gravity
const GF = 15;          // flight gravity
const AMP = 1.05;       // player swing amplitude (rad)
const SOLO_AMP = 0.42;  // idle swing of un-held bars
const BAR_DX = 5.6;     // spacing between bars
const NBARS = 16;
const CATCH_R = 2.4;    // grab radius
const MISS_Y = -7;
const LEVEL_LEN = (NBARS - 1) * BAR_DX;

const app = document.getElementById('app');
const stage = createStage(app);
const { scene, camera } = stage;
const world = createWorld(scene, LEVEL_LEN);

// ---------- trapeze rig ----------
const barGroup = new THREE.Group();
scene.add(barGroup);
const bars = [];
const ropeMat = new THREE.MeshStandardMaterial({ color: 0xb98cff, emissive: 0x5a2ea0, emissiveIntensity: 0.4, roughness: 0.5 });
const barMat = new THREE.MeshStandardMaterial({ color: 0xffcf3f, emissive: 0xff8a00, emissiveIntensity: 0.8, roughness: 0.4, metalness: 0.2 });
const barReadyMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x8affc1, emissiveIntensity: 1.6, roughness: 0.3 });

for (let i = 0; i < NBARS; i++) {
  const x = i * BAR_DX;
  const g = new THREE.Group();
  const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, L, 6), ropeMat);
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1.5, 10), barMat);
  bar.rotation.x = Math.PI / 2; // lie along Z
  bar.castShadow = true;
  g.add(rope); g.add(bar);
  barGroup.add(g);
  // top anchor point
  const anchor = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), new THREE.MeshStandardMaterial({ color: 0x2a1533 }));
  anchor.position.set(x, PY, 0);
  barGroup.add(anchor);
  bars.push({ x, theta: (i % 2 ? 1 : -1) * SOLO_AMP * Math.random(), omega: 0, ampSolo: SOLO_AMP, g, rope, bar, caught: false });
}

function bobPos(b) { return new THREE.Vector3(b.x + L * Math.sin(b.theta), PY - L * Math.cos(b.theta), 0); }

function layoutBar(b) {
  const p = bobPos(b);
  b.bar.position.copy(p);
  const pivot = new THREE.Vector3(b.x, PY, 0);
  const mid = pivot.clone().add(p).multiplyScalar(0.5);
  b.rope.position.copy(mid);
  b.rope.rotation.z = -b.theta; // rope hangs along swing angle
}

// ---------- stars (collectibles) ----------
const starGroup = new THREE.Group();
scene.add(starGroup);
const stars = [];
const starMat = new THREE.MeshStandardMaterial({ color: 0xfff2b0, emissive: 0xffcf3f, emissiveIntensity: 1.8, roughness: 0.3 });
const starGeo = new THREE.IcosahedronGeometry(0.34, 0);
for (let i = 0; i < NBARS - 1; i++) {
  const n = 2;
  for (let k = 0; k < n; k++) {
    const f = (k + 1) / (n + 1);
    const x = i * BAR_DX + f * BAR_DX;
    const y = PY - L + 1.4 + Math.sin(f * Math.PI) * 2.2;
    const m = new THREE.Mesh(starGeo, starMat);
    m.position.set(x, y, 0);
    starGroup.add(m);
    stars.push({ m, got: false });
  }
}

// ---------- hero ----------
let hero = createHero('marc');
scene.add(hero);

// ---------- state ----------
const G = {
  mode: 'menu',      // menu | playing | win | over
  char: 'marc',
  active: 0,
  state: 'swing',    // swing | fly
  vel: new THREE.Vector3(),
  score: 0, combo: 0, lives: 3,
  t: 0, spin: 0,
};

function rebuildHero() {
  scene.remove(hero);
  hero = createHero(G.char);
  scene.add(hero);
}

function placeHeroOnBar(b) {
  const p = bobPos(b);
  hero.position.set(p.x, p.y - 1.55, p.z); // hands reach up to bar
  hero.rotation.z = -b.theta;
}

// ---------- input ----------
function doAction() {
  if (G.mode !== 'playing') return;
  if (G.state === 'swing') release();
}
function release() {
  const b = bars[G.active];
  const nextI = G.active + 1;
  const good = b.omega > 0.25 && nextI < NBARS; // released on the forward swing
  if (good) {
    // assisted arc: guaranteed catch when you time the forward swing right
    const nb = bars[nextI];
    G.flyFrom = hero.position.clone();
    G.flyTo = new THREE.Vector3(nb.x + L * Math.sin(-0.5), PY - L * Math.cos(-0.5) - 1.55, 0);
    G.flyT = 0;
    G.flyDur = 0.72;
    G.flyNext = nextI;
    G.state = 'fly';
    G.spin = 0;
    flash(0.22); vibrate(12);
  } else {
    // mistimed -> tumble and fall
    const v = L * b.omega;
    G.vel.set(Math.cos(b.theta) * v * 0.5 + 1.0, Math.sin(b.theta) * v * 0.5, 0);
    G.state = 'fumble';
    G.spin = 0;
    vibrate(20);
  }
}
addEventListener('keydown', (e) => { if (e.code === 'Space') { e.preventDefault(); doAction(); } });
app.addEventListener('pointerdown', (e) => { e.preventDefault(); doAction(); });
const tapBtn = document.getElementById('tapBtn');
tapBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); doAction(); });

function vibrate(ms) { if (navigator.vibrate) { try { navigator.vibrate(ms); } catch (e) {} } }

// ---------- UI ----------
const $ = (id) => document.getElementById(id);
const ui = { menu: $('menu'), over: $('over'), hud: $('hud'), score: $('score'), lives: $('lives'), combo: $('combo'), big: $('bigmsg'), bigsub: $('bigsub'), flash: $('flash') };
function refreshHUD() {
  ui.score.firstChild.textContent = String(G.score);
  ui.lives.textContent = '❤'.repeat(Math.max(0, G.lives)) || '—';
}
let comboTimer = 0;
function showCombo(txt) { ui.combo.textContent = txt; ui.combo.style.opacity = '1'; comboTimer = 1.1; }
let flashV = 0;
function flash(v) { flashV = Math.max(flashV, v); }

$('playBtn').addEventListener('click', startGame);
$('againBtn').addEventListener('click', () => { ui.over.classList.add('hidden'); ui.menu.classList.remove('hidden'); G.mode = 'menu'; });
document.querySelectorAll('.pick').forEach((el) => el.addEventListener('click', () => {
  document.querySelectorAll('.pick').forEach((p) => p.classList.remove('sel'));
  el.classList.add('sel');
  G.char = el.dataset.char;
  rebuildHero();
}));

function startGame() {
  G.mode = 'playing'; G.state = 'swing'; G.active = 0; G.score = 0; G.combo = 0; G.lives = 3; G.spin = 0;
  for (const b of bars) { b.caught = false; }
  bars[0].theta = -AMP * 0.7; bars[0].omega = 0; bars[0].caught = true;
  for (const s of stars) { s.got = false; s.m.visible = true; }
  rebuildHero();
  ui.menu.classList.add('hidden'); ui.over.classList.add('hidden');
  ui.hud.style.display = 'flex';
  tapBtn.classList.add('on');
  refreshHUD();
}

function endGame(win) {
  G.mode = win ? 'win' : 'over';
  ui.hud.style.display = 'none';
  tapBtn.classList.remove('on');
  ui.big.textContent = win ? '🎉 You did it!' : 'Nice flying!';
  ui.bigsub.textContent = 'Score ' + G.score + (win ? ' — champions!' : '');
  ui.over.classList.remove('hidden');
}

// expose for automated testing
window.__game = {
  start: (c) => { if (c) { G.char = c; rebuildHero(); } startGame(); },
  action: doAction,
  state: () => ({ mode: G.mode, state: G.state, active: G.active, score: G.score, lives: G.lives, omega: bars[G.active] ? bars[G.active].omega : 0, hero: hero.position.toArray() }),
};

// ---------- physics ----------
function stepBar(b, dt, driven) {
  const amp = driven ? AMP : b.ampSolo;
  // pendulum
  b.omega += -(GP / L) * Math.sin(b.theta) * dt;
  // gently pump toward target amplitude so swing stays lively/bounded
  const energy = 0.5 * b.omega * b.omega + (GP / L) * (1 - Math.cos(b.theta));
  const targetE = (GP / L) * (1 - Math.cos(amp));
  b.omega *= 1 + (targetE - energy) * 0.02 * (driven ? 1 : 0.4);
  b.theta += b.omega * dt;
}

function nearestCatch() {
  let best = null, bestD = CATCH_R;
  for (let i = G.active + 1; i < NBARS; i++) {
    const b = bars[i];
    const d = hero.position.distanceTo(bobPos(b).add(new THREE.Vector3(0, -1.55, 0)));
    if (d < bestD) { bestD = d; best = i; }
  }
  return best;
}

function loseLife() {
  G.lives--; G.combo = 0;
  flash(0.5); vibrate(30);
  refreshHUD();
  if (G.lives <= 0) { endGame(false); return; }
  // respawn on current active bar
  G.state = 'swing';
  const b = bars[G.active];
  b.theta = -AMP * 0.6; b.omega = 0;
}

function physics(dt) {
  // step all bars (active one is "driven")
  for (let i = 0; i < NBARS; i++) stepBar(bars[i], dt, i === G.active && G.state === 'swing');

  if (G.state === 'swing') {
    placeHeroOnBar(bars[G.active]);
  } else if (G.state === 'fly') {
    // kinematic assisted arc -> guaranteed catch
    G.flyT += dt;
    let a = G.flyT / G.flyDur; if (a > 1) a = 1;
    const p = G.flyFrom.clone().lerp(G.flyTo, a);
    p.y += Math.sin(a * Math.PI) * 2.4;
    hero.position.copy(p);
    G.spin += dt * 7.5; hero.rotation.z = G.spin;
    if (a >= 1) {
      const ci = G.flyNext;
      G.active = ci; bars[ci].caught = true; G.state = 'swing';
      bars[ci].theta = -0.5; bars[ci].omega = 1.7;
      hero.rotation.z = 0; G.spin = 0;
      G.combo++; const gain = 100 + (G.combo - 1) * 25;
      G.score += gain;
      showCombo(G.combo > 1 ? `x${G.combo}  +${gain}` : `+${gain}`);
      flash(0.3); vibrate(16); refreshHUD();
      if (ci >= NBARS - 1) endGame(true);
    }
  } else if (G.state === 'fumble') {
    G.vel.y -= GF * dt;
    hero.position.addScaledVector(G.vel, dt);
    G.spin += dt * 4; hero.rotation.z = G.spin;
    if (hero.position.y < MISS_Y) loseLife();
  }

  // stars
  for (const s of stars) {
    if (s.got) continue;
    s.m.rotation.y += dt * 2; s.m.rotation.x += dt * 1.3;
    if (hero.position.distanceTo(s.m.position) < 1.25) {
      s.got = true; s.m.visible = false; G.score += 25; showCombo('+25 ⭐'); refreshHUD(); vibrate(8);
    }
  }
}

// ---------- camera ----------
const camTarget = new THREE.Vector3();
function updateCamera(dt) {
  const h = hero.position;
  const desired = new THREE.Vector3(h.x - 7.5, Math.max(h.y + 4, 3), 12);
  camera.position.lerp(desired, 1 - Math.pow(0.001, dt));
  camTarget.lerp(new THREE.Vector3(h.x + 2.5, h.y - 0.5, 0), 1 - Math.pow(0.0015, dt));
  camera.lookAt(camTarget);
}

// menu idle camera
function menuCamera(dt) {
  const t = G.t;
  camera.position.lerp(new THREE.Vector3(-6 + Math.sin(t * 0.3) * 3, 4, 13), 0.02);
  camera.lookAt(4, 3, 0);
}

// ---------- loop ----------
let last = performance.now();
function frame(now) {
  let dt = (now - last) / 1000; last = now;
  dt = Math.min(dt, 0.05);
  G.t += dt;

  world.update(G.t);
  for (const b of bars) layoutBar(b);

  if (G.mode === 'playing') {
    physics(dt);
    poseHero(hero, G.t, G.state, G.spin);
    updateCamera(dt);
  } else {
    // idle swing so bars look alive
    for (let i = 0; i < NBARS; i++) stepBar(bars[i], dt, false);
    menuCamera(dt);
  }

  // highlight the next catchable bar
  for (let i = 0; i < NBARS; i++) {
    const isNext = G.mode === 'playing' && (G.state === 'swing' || G.state === 'fly') && i === G.active + 1;
    bars[i].bar.material = isNext ? barReadyMat : barMat;
  }

  if (comboTimer > 0) { comboTimer -= dt; if (comboTimer <= 0) ui.combo.style.opacity = '0'; }
  if (flashV > 0) { flashV = Math.max(0, flashV - dt * 1.4); ui.flash.style.opacity = String(flashV); }

  stage.render();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// service worker (PWA) — only in production build
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
