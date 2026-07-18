import * as THREE from 'three';
import { createStage } from './scene.js';
import { createWorld } from './world.js';
import { createHero, poseHero } from './player.js';

/* ══════════════ TUNING ══════════════ */
const PY0 = 6.2;          // base pivot height
const L = 3.3;            // rope length
const GP = 19;            // pendulum gravity
const GF = 15;            // fall gravity
const AMP_MIN = 0.85, AMP_MAX = 1.25;   // pumpable swing amplitude
const SOLO_AMP = 0.42;    // idle swing of un-held bars
const NBARS = 16;
const MISS_Y = -7;
const COMBO_TIME = 6;     // s before combo expires
const HANG = 1.55;        // hands-to-origin offset of the hero

/* deterministic layout rng (stable for tests) */
let _s = 20260718;
const rnd = () => { _s = (_s * 1103515245 + 12345) & 0x7fffffff; return _s / 0x7fffffff; };

/* ══════════════ LAYOUT (varied rail) ══════════════ */
const barDefs = [];
{
  let x = 0;
  for (let i = 0; i < NBARS; i++) {
    if (i > 0) x += 4.5 + rnd() * (i < 4 ? 1.0 : 3.0);   // gentle start, then 4.5–7.5
    const py = PY0 + (i === 0 ? 0 : (rnd() * 2.4 - 1.2)); // pivot height ±1.2
    barDefs.push({ x, py });
  }
}
const LEVEL_LEN = barDefs[NBARS - 1].x;

const app = document.getElementById('app');
const stage = createStage(app);
const { scene, camera } = stage;
const world = createWorld(scene, LEVEL_LEN);

/* ══════════════ TRAPEZE RIG ══════════════ */
const barGroup = new THREE.Group();
scene.add(barGroup);
const bars = [];
const ropeMat = new THREE.MeshStandardMaterial({ color: 0xb98cff, emissive: 0x5a2ea0, emissiveIntensity: 0.4, roughness: 0.5 });
const barMat = new THREE.MeshStandardMaterial({ color: 0xffcf3f, emissive: 0xff8a00, emissiveIntensity: 0.8, roughness: 0.4, metalness: 0.2 });
const barReadyMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x8affc1, emissiveIntensity: 1.6, roughness: 0.3 });

for (let i = 0; i < NBARS; i++) {
  const { x, py } = barDefs[i];
  const g = new THREE.Group();
  const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, L, 6), ropeMat);
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1.5, 10), barMat);
  bar.rotation.x = Math.PI / 2;
  bar.castShadow = true;
  g.add(rope); g.add(bar);
  barGroup.add(g);
  const anchor = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), new THREE.MeshStandardMaterial({ color: 0x2a1533 }));
  anchor.position.set(x, py, 0);
  barGroup.add(anchor);
  bars.push({ x, py, theta: (i % 2 ? 1 : -1) * SOLO_AMP * rnd(), omega: 0, g, rope, bar });
}
const bobPos = (b) => new THREE.Vector3(b.x + L * Math.sin(b.theta), b.py - L * Math.cos(b.theta), 0);
const hangPos = (b) => bobPos(b).add(new THREE.Vector3(0, -HANG, 0));
function layoutBar(b) {
  const p = bobPos(b);
  b.bar.position.copy(p);
  b.rope.position.set((b.x + p.x) / 2, (b.py + p.y) / 2, 0);
  b.rope.rotation.z = -b.theta;
}

/* ══════════════ COLLECTIBLES: stars + bonus rings ══════════════ */
const starGroup = new THREE.Group();
scene.add(starGroup);
const stars = [];
const starMat = new THREE.MeshStandardMaterial({ color: 0xfff2b0, emissive: 0xffcf3f, emissiveIntensity: 1.8, roughness: 0.3 });
const starGeo = new THREE.IcosahedronGeometry(0.34, 0);
for (let i = 0; i < NBARS - 1; i++) {
  const A = barDefs[i], B = barDefs[i + 1];
  for (let k = 0; k < 2; k++) {
    const f = (k + 1) / 3;
    const x = A.x + f * (B.x - A.x);
    const y = (A.py + B.py) / 2 - L + 1.4 + Math.sin(f * Math.PI) * 2.2;
    const m = new THREE.Mesh(starGeo, starMat);
    m.position.set(x, y, 0);
    starGroup.add(m);
    stars.push({ m, got: false });
  }
}
const rings = [];
{
  const ringMat = new THREE.MeshStandardMaterial({ color: 0xfff2b0, emissive: 0xff6db0, emissiveIntensity: 1.5, roughness: 0.35 });
  for (const gi of [2, 6, 10]) {
    if (gi + 1 >= NBARS) continue;
    const A = barDefs[gi], B = barDefs[gi + 1];
    const m = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.09, 10, 40), ringMat.clone());
    m.position.set((A.x + B.x) / 2, (A.py + B.py) / 2 - L * 0.88 - HANG + 1.9, 0);
    scene.add(m);
    rings.push({ m, got: false });
  }
}

/* ══════════════ TRAIL (ribbon of additive points) ══════════════ */
const TRAIL_N = 36;
const trailPos = new Float32Array(TRAIL_N * 3);
const trailCol = new Float32Array(TRAIL_N * 3);
const trailGeo = new THREE.BufferGeometry();
trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
trailGeo.setAttribute('color', new THREE.BufferAttribute(trailCol, 3));
const trail = new THREE.Points(trailGeo, new THREE.PointsMaterial({ size: 0.45, vertexColors: true, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true }));
trail.visible = false;
scene.add(trail);
const _tc = new THREE.Color();
function trailReset(p) { for (let i = 0; i < TRAIL_N; i++) { trailPos[i * 3] = p.x; trailPos[i * 3 + 1] = p.y; trailPos[i * 3 + 2] = p.z; } trailGeo.attributes.position.needsUpdate = true; }
function trailPush(p, rainbow, t) {
  for (let i = 0; i < TRAIL_N - 1; i++) {
    trailPos[i * 3] = trailPos[(i + 1) * 3]; trailPos[i * 3 + 1] = trailPos[(i + 1) * 3 + 1]; trailPos[i * 3 + 2] = trailPos[(i + 1) * 3 + 2];
  }
  const j = (TRAIL_N - 1) * 3;
  trailPos[j] = p.x; trailPos[j + 1] = p.y; trailPos[j + 2] = p.z;
  for (let i = 0; i < TRAIL_N; i++) {
    const f = i / TRAIL_N;
    if (rainbow) _tc.setHSL((t * 0.6 + f * 0.9) % 1, 1, 0.55); else _tc.setHSL(0.12, 1, 0.5 + f * 0.2);
    trailCol[i * 3] = _tc.r * f; trailCol[i * 3 + 1] = _tc.g * f; trailCol[i * 3 + 2] = _tc.b * f;
  }
  trailGeo.attributes.position.needsUpdate = true;
  trailGeo.attributes.color.needsUpdate = true;
}

/* ══════════════ PARTICLES (confetti / star dust pool) ══════════════ */
const CONF_N = 240;
const confPos = new Float32Array(CONF_N * 3).fill(-999);
const confCol = new Float32Array(CONF_N * 3);
const confGeo = new THREE.BufferGeometry();
confGeo.setAttribute('position', new THREE.BufferAttribute(confPos, 3));
confGeo.setAttribute('color', new THREE.BufferAttribute(confCol, 3));
const confetti = new THREE.Points(confGeo, new THREE.PointsMaterial({ size: 0.22, vertexColors: true, transparent: true, opacity: 0.95, depthWrite: false }));
scene.add(confetti);
const confP = [];
for (let i = 0; i < CONF_N; i++) confP.push({ life: 0, x: 0, y: -999, z: 0, vx: 0, vy: 0, vz: 0 });
const CONF_PAL = [0xff5c7a, 0xffcf3f, 0x54c8ff, 0x8affc1, 0xb98cff];
function burst(p, n, gold, speed = 5) {
  let made = 0;
  for (let i = 0; i < CONF_N && made < n; i++) {
    const c = confP[i];
    if (c.life > 0) continue;
    c.life = 0.8 + Math.random() * 0.6;
    c.x = p.x; c.y = p.y; c.z = p.z;
    const a = Math.random() * Math.PI * 2, b = Math.random() * Math.PI - Math.PI / 2, s = speed * (0.4 + Math.random() * 0.8);
    c.vx = Math.cos(a) * Math.cos(b) * s; c.vy = Math.sin(b) * s + 2.5; c.vz = Math.sin(a) * Math.cos(b) * s * 0.5;
    _tc.setHex(gold ? 0xffcf3f : CONF_PAL[(Math.random() * CONF_PAL.length) | 0]);
    confCol[i * 3] = _tc.r; confCol[i * 3 + 1] = _tc.g; confCol[i * 3 + 2] = _tc.b;
    made++;
  }
}
function updateConfetti(dt) {
  let any = false;
  for (let i = 0; i < CONF_N; i++) {
    const c = confP[i];
    if (c.life <= 0) { confPos[i * 3 + 1] = -999; continue; }
    any = true;
    c.life -= dt;
    c.vy -= 9 * dt;
    c.x += c.vx * dt; c.y += c.vy * dt; c.z += c.vz * dt;
    confPos[i * 3] = c.x; confPos[i * 3 + 1] = c.y; confPos[i * 3 + 2] = c.z;
  }
  if (any) confGeo.attributes.position.needsUpdate = true, confGeo.attributes.color.needsUpdate = true;
}

/* ══════════════ HERO & STATE ══════════════ */
let hero = createHero('marc');
scene.add(hero);

const G = {
  mode: 'menu', char: 'marc',
  active: 0, state: 'swing',            // swing | fly | fumble
  score: 0, combo: 0, comboT: 0, lives: 3,
  t: 0, spin: 0,
  pumpAmp: 1.0, holding: false, armed: false,
  grade: '', lastFlips: 0, lastFlipBonus: 0,
  trick: false, flipRot: 0,
  flyFrom: new THREE.Vector3(), flyTo: new THREE.Vector3(), flyT: 0, flyDur: 0.72, arcH: 2.4, flyNext: -1, flyMode: 'catch',
  vel: new THREE.Vector3(),
  timeScale: 1, slowmo: 0, fovKick: 0, shake: 0,
};

function rebuildHero() { scene.remove(hero); hero = createHero(G.char); scene.add(hero); }
function placeHeroOnBar(b) { const p = hangPos(b); hero.position.copy(p); hero.rotation.z = -b.theta; }
function vibrate(ms) { if (navigator.vibrate) { try { navigator.vibrate(ms); } catch (e) {} } }

/* ══════════════ UI ══════════════ */
const $ = (id) => document.getElementById(id);
const ui = { menu: $('menu'), over: $('over'), hud: $('hud'), score: $('score'), lives: $('lives'), combo: $('combo'), grade: $('grade'), comboHold: $('comboHold'), comboFill: $('comboFill'), big: $('bigmsg'), bigsub: $('bigsub'), flash: $('flash') };
let lastScore = -1;
function refreshHUD() {
  if (G.score !== lastScore) {
    ui.score.firstChild.textContent = String(G.score);
    ui.score.classList.remove('pop'); void ui.score.offsetWidth; ui.score.classList.add('pop');
    lastScore = G.score;
  }
  ui.lives.textContent = '❤'.repeat(Math.max(0, G.lives)) || '—';
}
let comboTimer = 0, gradeTimer = 0;
function showCombo(txt) { ui.combo.textContent = txt; ui.combo.style.opacity = '1'; comboTimer = 1.1; }
function showGrade(txt, color) { ui.grade.textContent = txt; ui.grade.style.color = color || '#fff'; ui.grade.style.opacity = '1'; ui.grade.classList.remove('zoom'); void ui.grade.offsetWidth; ui.grade.classList.add('zoom'); gradeTimer = 0.9; }
let flashV = 0;
function flash(v) { flashV = Math.max(flashV, v); }

const tapBtn = $('tapBtn');
$('playBtn').addEventListener('click', startGame);
$('againBtn').addEventListener('click', () => { ui.over.classList.add('hidden'); ui.menu.classList.remove('hidden'); G.mode = 'menu'; });
document.querySelectorAll('.pick').forEach((el) => el.addEventListener('click', () => {
  document.querySelectorAll('.pick').forEach((p) => p.classList.remove('sel'));
  el.classList.add('sel');
  G.char = el.dataset.char;
  rebuildHero();
}));

function startGame() {
  G.mode = 'playing'; G.state = 'swing'; G.active = 0;
  G.score = 0; lastScore = -1; G.combo = 0; G.comboT = 0; G.lives = 3;
  G.spin = 0; G.pumpAmp = 1.0; G.holding = false; G.armed = false;
  G.grade = ''; G.lastFlips = 0; G.lastFlipBonus = 0; G.trick = false; G.flipRot = 0;
  G.timeScale = 1; G.slowmo = 0; G.fovKick = 0; G.shake = 0;
  bars[0].theta = -1.0; bars[0].omega = 0;
  for (const s of stars) { s.got = false; s.m.visible = true; }
  for (const r of rings) { r.got = false; r.m.visible = true; }
  rebuildHero();
  ui.menu.classList.add('hidden'); ui.over.classList.add('hidden');
  ui.hud.style.display = 'flex';
  tapBtn.classList.add('on');
  refreshHUD();
}
function endGame(win) {
  G.mode = win ? 'win' : 'over';
  ui.hud.style.display = 'none';
  ui.comboHold.style.opacity = '0';
  tapBtn.classList.remove('on');
  trail.visible = false;
  ui.big.textContent = win ? '🎉 You did it!' : 'Nice flying!';
  ui.bigsub.textContent = 'Score ' + G.score + (win ? ' — champions!' : '');
  ui.over.classList.remove('hidden');
}

/* ══════════════ INPUT — hold to grip & pump, let go to fly, tap mid-air to flip ══════════════ */
function handleDown() {
  if (G.mode !== 'playing') return;
  if (G.state === 'swing') { G.holding = true; G.armed = true; }
  else if (G.state === 'fly' && !G.trick) { G.trick = true; }
}
function handleUp() {
  if (G.mode !== 'playing') { G.holding = false; return; }
  G.holding = false;
  if (G.state === 'swing' && G.armed) { G.armed = false; releaseBar(); }
}
addEventListener('keydown', (e) => { if (e.code === 'Space' && !e.repeat) { e.preventDefault(); handleDown(); } });
addEventListener('keyup', (e) => { if (e.code === 'Space') { e.preventDefault(); handleUp(); } });
app.addEventListener('pointerdown', (e) => { e.preventDefault(); handleDown(); });
addEventListener('pointerup', handleUp);
addEventListener('pointercancel', handleUp);
tapBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); handleDown(); });
tapBtn.addEventListener('pointerup', (e) => { e.stopPropagation(); handleUp(); });

/* ══════════════ RELEASE: graded by timing ══════════════ */
function releaseBar() {
  const b = bars[G.active];
  const nextI = G.active + 1;
  if (b.omega <= 0.15 || nextI >= NBARS) { // backward / dead swing -> tumble
    const v = L * b.omega;
    G.vel.set(Math.cos(b.theta) * v * 0.5 + 1.0, Math.sin(b.theta) * v * 0.5, 0);
    G.state = 'fumble'; G.spin = 0; G.grade = 'fumble';
    trail.visible = true; trailReset(hero.position);
    showGrade('WHOOPS!', '#ff7d7d'); vibrate(20);
    return;
  }
  const amp = G.pumpAmp;
  const ideal = 0.45 * amp;
  const diff = Math.abs(b.theta - ideal) / amp;
  let flyDur, arcH, reach;
  if (diff < 0.12) { G.grade = 'perfect'; flyDur = 0.6; arcH = 2.8; reach = 5.0; showGrade('PERFECT!', '#ffcf3f'); }
  else if (diff < 0.35) { G.grade = 'good'; flyDur = 0.75; arcH = 2.4; reach = 4.2; showGrade('GOOD!', '#d8ffef'); }
  else { G.grade = 'ok'; flyDur = 0.95; arcH = 1.5; reach = 3.0; showGrade('OK', '#9a8fc5'); }
  reach *= 0.85 + (amp - AMP_MIN) / (AMP_MAX - AMP_MIN) * 0.3;  // pumping extends reach

  const nb = bars[nextI];
  const from = hero.position.clone();
  const targ = new THREE.Vector3(nb.x + L * Math.sin(-0.5), nb.py - L * Math.cos(-0.5) - HANG, 0);
  const dist = targ.x - from.x;
  G.flyFrom.copy(from); G.flyT = 0; G.arcH = arcH;
  G.trick = false; G.flipRot = 0; G.lastFlips = 0; G.lastFlipBonus = 0;
  if (dist <= reach) { G.flyMode = 'catch'; G.flyTo.copy(targ); G.flyNext = nextI; G.flyDur = flyDur; }
  else { G.flyMode = 'short'; G.flyTo.copy(from.clone().lerp(targ, Math.max(0.55, reach / dist))); G.flyNext = -1; G.flyDur = flyDur * 0.9; }
  G.state = 'fly'; G.spin = 0;
  G.fovKick = 1;
  trail.visible = true; trailReset(from);
  flash(G.grade === 'perfect' ? 0.28 : 0.15); vibrate(12);
}

/* ══════════════ CATCH ══════════════ */
function doCatch(ci) {
  const flips = Math.floor(G.flipRot / (Math.PI * 2));
  G.active = ci; G.state = 'swing';
  bars[ci].theta = -0.5;
  bars[ci].omega = G.grade === 'perfect' ? 2.0 : 1.7;
  hero.rotation.z = 0; G.spin = 0; G.armed = false;
  trail.visible = false;
  G.combo++; G.comboT = COMBO_TIME;
  let gain = (100 + (G.combo - 1) * 25) * (G.grade === 'perfect' ? 2 : 1);
  let flipBonus = flips > 0 ? 50 * flips * Math.max(1, G.combo) : 0;
  G.lastFlips = flips; G.lastFlipBonus = flipBonus;
  G.score += gain + flipBonus;
  showCombo((G.combo > 1 ? `x${G.combo}  ` : '') + `+${gain + flipBonus}`);
  if (flips > 0) setTimeout(() => showGrade(`FLIP +${flipBonus}`, '#ff6db0'), 120);
  burst(hero.position, G.grade === 'perfect' ? 40 : 22, false, G.grade === 'perfect' ? 7 : 5);
  if (G.grade === 'perfect') { G.slowmo = 0.4; }
  flash(0.25); vibrate(16); refreshHUD();
  if (ci >= NBARS - 1) endGame(true);
}

function loseLife() {
  G.lives--; G.combo = 0; G.comboT = 0;
  G.shake = 0.15; flash(0.5); vibrate(30);
  trail.visible = false;
  refreshHUD();
  if (G.lives <= 0) { endGame(false); return; }
  G.state = 'swing'; G.armed = false;
  const b = bars[G.active];
  b.theta = -G.pumpAmp * 0.6; b.omega = 0;
}

/* ══════════════ PHYSICS ══════════════ */
function stepBar(b, dt, driven) {
  const amp = driven ? G.pumpAmp : SOLO_AMP;
  b.omega += -(GP / L) * Math.sin(b.theta) * dt;
  const energy = 0.5 * b.omega * b.omega + (GP / L) * (1 - Math.cos(b.theta));
  const targetE = (GP / L) * (1 - Math.cos(amp));
  b.omega *= 1 + (targetE - energy) * 0.02 * (driven ? 1 : 0.4);
  b.theta += b.omega * dt;
}

function physics(dt) {
  // pump toward held/rest amplitude
  G.pumpAmp += ((G.holding && G.state === 'swing' ? AMP_MAX : AMP_MIN) - G.pumpAmp) * Math.min(1, dt * 1.7);

  for (let i = 0; i < NBARS; i++) stepBar(bars[i], dt, i === G.active && G.state === 'swing');

  if (G.state === 'swing') {
    placeHeroOnBar(bars[G.active]);
  } else if (G.state === 'fly') {
    G.flyT += dt;
    const a = Math.min(1, G.flyT / G.flyDur);
    const p = G.flyFrom.clone().lerp(G.flyTo, a);
    p.y += Math.sin(a * Math.PI) * G.arcH;
    hero.position.copy(p);
    const spinSpd = G.trick ? 16 : 6.5;
    G.spin += dt * spinSpd;
    if (G.trick) G.flipRot += dt * spinSpd;
    hero.rotation.z = G.spin;
    trailPush(hero.position, G.trick, G.t);
    // bonus rings
    for (const r of rings) {
      if (r.got) continue;
      if (hero.position.distanceTo(r.m.position) < 1.0) {
        r.got = true; r.m.visible = false;
        G.score += 75; showCombo('+75 ◎'); burst(r.m.position, 26, true, 6); refreshHUD(); vibrate(10);
      }
    }
    if (a >= 1) {
      if (G.flyMode === 'catch') doCatch(G.flyNext);
      else { // fell short
        G.vel.set(2.2, 0, 0); G.state = 'fumble';
        showGrade('TOO FAR!', '#ff9d5c');
      }
    }
  } else if (G.state === 'fumble') {
    G.vel.y -= GF * dt;
    hero.position.addScaledVector(G.vel, dt);
    G.spin += dt * 4; hero.rotation.z = G.spin;
    trailPush(hero.position, false, G.t);
    if (hero.position.y < MISS_Y) loseLife();
  }

  // combo expiry (urgency)
  if (G.combo > 0) {
    G.comboT -= dt;
    if (G.comboT <= 0) { G.combo = 0; }
  }
  if (G.combo >= 2) {
    ui.comboHold.style.opacity = '1';
    ui.comboHold.firstChild.textContent = 'COMBO x' + G.combo;
    ui.comboFill.style.width = Math.max(0, (G.comboT / COMBO_TIME) * 100) + '%';
  } else ui.comboHold.style.opacity = '0';

  // stars
  for (const s of stars) {
    if (s.got) continue;
    s.m.rotation.y += dt * 2; s.m.rotation.x += dt * 1.3;
    if (hero.position.distanceTo(s.m.position) < 1.25) {
      s.got = true; s.m.visible = false;
      G.score += 25; showCombo('+25 ⭐'); burst(s.m.position, 12, true, 4); refreshHUD(); vibrate(8);
    }
  }
  // rings idle pulse
  for (const r of rings) { if (!r.got) { r.m.rotation.y += dt * 1.4; const s2 = 1 + Math.sin(G.t * 4) * 0.05; r.m.scale.setScalar(s2); } }
}

/* ══════════════ CAMERA ══════════════ */
const camTarget = new THREE.Vector3();
function updateCamera(dt) {
  const h = hero.position;
  const dolly = G.timeScale < 0.9 ? 0.9 : 1;
  const desired = new THREE.Vector3(h.x - 7.5 * dolly, Math.max(h.y + 4 * dolly, 3), 12 * dolly);
  camera.position.lerp(desired, 1 - Math.pow(0.001, dt));
  if (G.shake > 0) {
    G.shake -= dt;
    camera.position.x += (Math.random() - 0.5) * 0.3;
    camera.position.y += (Math.random() - 0.5) * 0.3;
  }
  camTarget.lerp(new THREE.Vector3(h.x + 2.5, h.y - 0.5, 0), 1 - Math.pow(0.0015, dt));
  camera.lookAt(camTarget);
  const targetFov = 58 + G.fovKick * 7;
  if (Math.abs(camera.fov - targetFov) > 0.05) { camera.fov = targetFov; camera.updateProjectionMatrix(); }
  G.fovKick = Math.max(0, G.fovKick - dt * 2.2);
}
function menuCamera() {
  camera.position.lerp(new THREE.Vector3(-6 + Math.sin(G.t * 0.3) * 3, 4, 13), 0.02);
  camera.lookAt(4, 3, 0);
  if (camera.fov !== 58) { camera.fov = 58; camera.updateProjectionMatrix(); }
}

/* ══════════════ TEST HARNESS ══════════════ */
window.__game = {
  start: (c) => { if (c) { G.char = c; } startGame(); },
  down: handleDown,
  up: handleUp,
  action: () => { handleDown(); handleUp(); },
  state: () => ({
    mode: G.mode, state: G.state, active: G.active, score: G.score, lives: G.lives,
    combo: G.combo, grade: G.grade, flips: G.lastFlips, flipBonus: G.lastFlipBonus,
    theta: bars[G.active] ? bars[G.active].theta : 0, omega: bars[G.active] ? bars[G.active].omega : 0,
    amp: G.pumpAmp, timeScale: G.timeScale, hero: hero.position.toArray(),
  }),
};

/* ══════════════ MAIN LOOP ══════════════ */
let last = performance.now();
function frame(now) {
  let dt = (now - last) / 1000; last = now;
  dt = Math.min(dt, 0.05);
  G.t += dt;

  // slow-mo bookkeeping (real-time)
  if (G.slowmo > 0) { G.slowmo -= dt; G.timeScale = 0.35; }
  else G.timeScale += (1 - G.timeScale) * Math.min(1, dt * 6);
  const sdt = dt * G.timeScale;

  world.update(G.t);
  for (const b of bars) layoutBar(b);

  if (G.mode === 'playing') {
    physics(sdt);
    poseHero(hero, G.t, G.state === 'swing' ? 'swing' : 'fly', G.spin);
    updateCamera(dt);
  } else {
    for (let i = 0; i < NBARS; i++) stepBar(bars[i], dt, false);
    menuCamera();
  }
  updateConfetti(dt);

  // highlight next catchable bar
  for (let i = 0; i < NBARS; i++) {
    const isNext = G.mode === 'playing' && (G.state === 'swing' || G.state === 'fly') && i === G.active + 1;
    bars[i].bar.material = isNext ? barReadyMat : barMat;
  }

  if (comboTimer > 0) { comboTimer -= dt; if (comboTimer <= 0) ui.combo.style.opacity = '0'; }
  if (gradeTimer > 0) { gradeTimer -= dt; if (gradeTimer <= 0) ui.grade.style.opacity = '0'; }
  if (flashV > 0) { flashV = Math.max(0, flashV - dt * 1.4); ui.flash.style.opacity = String(flashV); }

  stage.render();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

/* ══════════════ PWA ══════════════ */
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
