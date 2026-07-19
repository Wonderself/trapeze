import * as THREE from 'three';
import { createStage } from './scene.js';
import { createWorld } from './world.js';
import { createHero, poseHero } from './player.js';
import { initAudio, updateAudio, setWorld as setAudioWorld, setMuted, audioState, sfx } from './audio.js';

/* ══════════════ TUNING ══════════════ */
const PY0 = 6.2;          // base pivot height
const L = 3.3;            // rope length
const GP = 19;            // pendulum gravity
const GF = 15;            // fall gravity
const AMP_MIN = 0.85, AMP_MAX = 1.25;   // pumpable swing amplitude
const SOLO_AMP = 0.42;    // idle swing of un-held bars
const BARS_PER_WORLD = 12;
const NWORLDS = 4;                        // Circus → Jungle → Beach → Space
const NBARS = BARS_PER_WORLD * NWORLDS;
const WORLD_NAMES = ['Circus', 'Jungle', 'Beach', 'Space'];
const JUNGLE_W = 1, BEACH_W = 2, SPACE_W = 3;
const NET_Y = -3.6;                       // safety-net height (one save per world)
const MISS_Y = -7;
const COMBO_TIME = 6;     // s before combo expires
const HANG = 1.55;        // hands-to-origin offset of the hero
const MEDAL_T = [800, 1800, 3500, 6000];              // per-world score → Bronze/Silver/Gold/Diamond
const MEDAL_ICON = ['·', '🥉', '🥈', '🥇', '💎'];
const WORLD_ICON = ['🎪', '🌴', '🏖', '🚀'];
const medalTier = (s) => { let t = 0; for (let i = 0; i < 4; i++) if (s >= MEDAL_T[i]) t = i + 1; return t; };

/* ── persistence (localStorage ts3d_*) ── */
function loadRec() {
  try {
    return {
      high: +localStorage.getItem('ts3d_high') || 0,
      combo: +localStorage.getItem('ts3d_combo') || 0,
      medals: JSON.parse(localStorage.getItem('ts3d_medals') || '[0,0,0,0]'),
      mute: localStorage.getItem('ts3d_mute') === '1',
    };
  } catch (e) { return { high: 0, combo: 0, medals: [0, 0, 0, 0], mute: false }; }
}
let REC = loadRec();
function saveRec() {
  try {
    localStorage.setItem('ts3d_high', String(REC.high));
    localStorage.setItem('ts3d_combo', String(REC.combo));
    localStorage.setItem('ts3d_medals', JSON.stringify(REC.medals));
    localStorage.setItem('ts3d_mute', REC.mute ? '1' : '0');
  } catch (e) {}
}
setMuted(REC.mute);

/* deterministic layout rng (stable for tests) */
let _s = 20260718;
const rnd = () => { _s = (_s * 1103515245 + 12345) & 0x7fffffff; return _s / 0x7fffffff; };

/* ══════════════ LAYOUT (varied rail across 4 worlds) ══════════════ */
const barDefs = [];
{
  // per-world gap ranges — Jungle tighter (its bars drift on X), Beach medium (wind)
  const SPAN = [[4.5, 7.5], [4.2, 5.6], [4.5, 6.5], [4.5, 7.5]];
  let x = 0;
  for (let i = 0; i < NBARS; i++) {
    const w = Math.floor(i / BARS_PER_WORLD);
    const first = i % BARS_PER_WORLD === 0;
    if (i > 0) {
      const [lo, hi] = SPAN[w];
      x += i < 4 ? 4.5 + rnd() * 1.0 : lo + rnd() * (hi - lo);  // gentle start
    }
    const py = PY0 + (i === 0 || first ? 0 : rnd() * 2.4 - 1.2); // world-entry bar is easy
    const def = { x, py, w };
    if (w === JUNGLE_W && !first) {  // Jungle mechanic: bars slowly drift on X
      def.mv = 0.6 + rnd() * 0.4; def.mvSpd = 0.45 + rnd() * 0.3; def.mvPh = rnd() * 6.28;
    }
    barDefs.push(def);
  }
}
const LEVEL_LEN = barDefs[NBARS - 1].x;
const worldSegs = [];
for (let w = 0; w < NWORLDS; w++) {
  const x0 = w === 0 ? -16 : (barDefs[w * BARS_PER_WORLD - 1].x + barDefs[w * BARS_PER_WORLD].x) / 2;
  const x1 = w === NWORLDS - 1 ? LEVEL_LEN + 14 : (barDefs[(w + 1) * BARS_PER_WORLD - 1].x + barDefs[(w + 1) * BARS_PER_WORLD].x) / 2;
  worldSegs.push({ x0, x1 });
}

const app = document.getElementById('app');
const stage = createStage(app);
const { scene, camera } = stage;
const world = createWorld(scene, worldSegs);

/* ══════════════ TRAPEZE RIG ══════════════ */
const barGroup = new THREE.Group();
scene.add(barGroup);
const bars = [];
const ropeMats = [
  new THREE.MeshStandardMaterial({ color: 0xb98cff, emissive: 0x5a2ea0, emissiveIntensity: 0.4, roughness: 0.5 }),  // circus
  new THREE.MeshStandardMaterial({ color: 0x55b043, emissive: 0x1e4a12, emissiveIntensity: 0.5, roughness: 0.8 }),  // jungle vine
  new THREE.MeshStandardMaterial({ color: 0xd8b06a, emissive: 0x6a4a1a, emissiveIntensity: 0.35, roughness: 0.85 }), // beach rope
  new THREE.MeshStandardMaterial({ color: 0x66eaff, emissive: 0x00a8d8, emissiveIntensity: 1.0, roughness: 0.35 }), // space neon
];
const barMat = new THREE.MeshStandardMaterial({ color: 0xffcf3f, emissive: 0xff8a00, emissiveIntensity: 0.8, roughness: 0.4, metalness: 0.2 });
const barReadyMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x8affc1, emissiveIntensity: 1.6, roughness: 0.3 });

for (let i = 0; i < NBARS; i++) {
  const { x, py, w, mv, mvSpd, mvPh } = barDefs[i];
  const g = new THREE.Group();
  const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, L, 6), ropeMats[w]);
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1.5, 10), barMat);
  bar.rotation.x = Math.PI / 2;
  bar.castShadow = true;
  g.add(rope); g.add(bar);
  barGroup.add(g);
  const anchor = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), new THREE.MeshStandardMaterial({ color: 0x2a1533 }));
  anchor.position.set(x, py, 0);
  barGroup.add(anchor);
  bars.push({ x, bx: x, py, w, mv, mvSpd, mvPh, theta: (i % 2 ? 1 : -1) * SOLO_AMP * rnd(), omega: 0, g, rope, bar, anchor });
}
const bobPos = (b) => new THREE.Vector3(b.x + L * Math.sin(b.theta), b.py - L * Math.cos(b.theta), 0);
const hangPos = (b) => bobPos(b).add(new THREE.Vector3(0, -HANG, 0));
function layoutBar(b) {
  if (b.mv) { b.x = b.bx + Math.sin(G.t * b.mvSpd + b.mvPh) * b.mv; b.anchor.position.x = b.x; }
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
  const slots = [];
  for (let w = 0; w < NWORLDS; w++) for (const k of [2, 6, 9]) slots.push(w * BARS_PER_WORLD + k);
  for (const gi of slots) {
    if (gi + 1 >= NBARS) continue;
    const A = barDefs[gi], B = barDefs[gi + 1];
    const m = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.09, 10, 40), ringMat.clone());
    m.position.set((A.x + B.x) / 2, (A.py + B.py) / 2 - L * 0.88 - HANG + 1.9, 0);
    scene.add(m);
    // Space mechanic: rings bob up and down — thread them mid-flight
    rings.push({ m, got: false, baseX: m.position.x, baseY: m.position.y, mvY: A.w === SPACE_W });
  }
}

/* ══════════════ SAFETY NETS (one save per world — generous!) ══════════════ */
function netTexture(repX) {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const ctx = c.getContext('2d');
  ctx.strokeStyle = '#cfe8ff'; ctx.lineWidth = 3;
  ctx.beginPath();
  for (let i = 0; i <= 64; i += 16) { ctx.moveTo(i, 0); ctx.lineTo(i, 64); ctx.moveTo(0, i); ctx.lineTo(64, i); }
  ctx.stroke();
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repX, 5);
  return tex;
}
const netGroup = new THREE.Group();
scene.add(netGroup);
const nets = [];
for (let w = 0; w < NWORLDS; w++) {
  const s = worldSegs[w];
  const wd = s.x1 - s.x0 - 3;
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(wd, 7),
    new THREE.MeshBasicMaterial({ map: netTexture(wd / 1.4), transparent: true, opacity: 0.3, side: THREE.DoubleSide, depthWrite: false })
  );
  m.rotation.x = -Math.PI / 2;
  m.position.set((s.x0 + s.x1) / 2, NET_Y, 0);
  netGroup.add(m);
  nets.push({ m, used: false, flashT: 0 });
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

/* ══════════════ WIND STREAKS (Beach gusts made visible) ══════════════ */
const WIND_N = 70;
const windPos = new Float32Array(WIND_N * 3);
const windGeo = new THREE.BufferGeometry();
windGeo.setAttribute('position', new THREE.BufferAttribute(windPos, 3));
const windPts = new THREE.Points(windGeo, new THREE.PointsMaterial({ color: 0xcfeaff, size: 0.16, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
scene.add(windPts);
const windSeed = [];
for (let i = 0; i < WIND_N; i++) windSeed.push({ ox: Math.random() * 28 - 14, y: Math.random() * 14 - 6, z: Math.random() * 12 - 6 });
function updateWind(dt) {
  const on = G.mode === 'playing' && Math.abs(G.wind) > 0.2;
  const m = windPts.material;
  m.opacity += ((on ? 0.55 : 0) - m.opacity) * Math.min(1, dt * 5);
  windPts.visible = m.opacity > 0.02;
  if (!windPts.visible) return;
  for (let i = 0; i < WIND_N; i++) {
    const s = windSeed[i];
    s.ox += G.wind * 9 * dt;
    if (s.ox > 14) s.ox -= 28; else if (s.ox < -14) s.ox += 28;
    windPos[i * 3] = hero.position.x + s.ox;
    windPos[i * 3 + 1] = s.y + Math.sin(G.t * 2 + i) * 0.4;
    windPos[i * 3 + 2] = s.z;
  }
  windGeo.attributes.position.needsUpdate = true;
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
  trick: false, flipRot: 0, salute: 0,
  world: 0, wind: 0, windOff: 0, netBounce: false, netSaves: 0,
  lap: 0, diffN: 0, wScore: [0, 0, 0, 0], runMedals: [0, 0, 0, 0],
  starsGot: 0, flipsTot: 0, maxCombo: 0,
  flyFrom: new THREE.Vector3(), flyTo: new THREE.Vector3(), flyT: 0, flyDur: 0.72, arcH: 2.4, flyNext: -1, flyMode: 'catch',
  vel: new THREE.Vector3(),
  timeScale: 1, slowmo: 0, fovKick: 0, shake: 0,
};

/* ══════════════ MENU PODIUM (3D character select) ══════════════ */
const PODX = -7, PODTOP = -7.65;
const menuGroup = new THREE.Group();
scene.add(menuGroup);
const turntable = new THREE.Group();
turntable.position.set(PODX, 0, 0);
menuGroup.add(turntable);
const podBase = new THREE.Mesh(
  new THREE.CylinderGeometry(3.1, 3.5, 0.7, 40),
  new THREE.MeshStandardMaterial({ color: 0x6a1026, roughness: 0.4, metalness: 0.5, emissive: 0x1a0208, emissiveIntensity: 0.4 })
);
podBase.position.y = PODTOP - 0.35; podBase.receiveShadow = true;
turntable.add(podBase);
const podRim = new THREE.Mesh(
  new THREE.TorusGeometry(3.28, 0.15, 8, 48),
  new THREE.MeshStandardMaterial({ color: 0xffcf3f, emissive: 0xffab00, emissiveIntensity: 1.1, roughness: 0.4 })
);
podRim.rotation.x = Math.PI / 2; podRim.position.y = PODTOP; turntable.add(podRim);
const menuHeroes = {};
for (const [nm, lx] of [['marc', -1.4], ['claire', 1.4]]) {
  const h = createHero(nm);
  h.position.set(lx, PODTOP + 0.7, 0.1);
  turntable.add(h);
  menuHeroes[nm] = h;
}
const menuSpot = new THREE.SpotLight(0xffffff, 110, 24, Math.PI / 6.5, 0.4, 1.2);
menuSpot.position.set(PODX, 7, 7);
const menuSpotTgt = new THREE.Object3D(); menuSpotTgt.position.set(PODX, PODTOP, 0); scene.add(menuSpotTgt);
menuSpot.target = menuSpotTgt; scene.add(menuSpot);

/* ══════════════ CURTAIN (opens once on first menu) ══════════════ */
const curtain = new THREE.Group();
scene.add(curtain);
const velvet = new THREE.MeshStandardMaterial({ color: 0x8f0f22, roughness: 0.7, emissive: 0x2a0208, emissiveIntensity: 0.45, side: THREE.DoubleSide });
const drapes = [];
for (const side of [-1, 1]) {
  const d = new THREE.Mesh(new THREE.BoxGeometry(3.8, 8.4, 0.3), velvet);
  const x0 = PODX + side * 1.9;
  d.position.set(x0, -3.4, 4.2);
  curtain.add(d);
  drapes.push({ mesh: d, side, x0 });
}
const valance = new THREE.Mesh(
  new THREE.BoxGeometry(8.4, 1.5, 0.5),
  new THREE.MeshStandardMaterial({ color: 0xffcf3f, emissive: 0xffab00, emissiveIntensity: 0.9, roughness: 0.4 })
);
valance.position.set(PODX, 1.1, 4.3);
curtain.add(valance);
let curtainOpen = 0, curtainOpening = false, menuShown = false, menuSpin = 0;

function updateMenuSelection() {
  for (const nm in menuHeroes) {
    const sel = nm === G.char;
    menuHeroes[nm].position.y = PODTOP + 0.7 + (sel ? 0.4 : 0);
  }
}
function refreshBest() {
  if (REC.high <= 0) { ui.best.classList.add('hidden'); return; }
  const medals = REC.medals.map((t, w) => WORLD_ICON[w] + MEDAL_ICON[t]).join('  ');
  ui.best.innerHTML = 'BEST ' + REC.high.toLocaleString('en') + ' ⭐ · COMBO x' + REC.combo +
    '<span class="medals">' + medals + '</span>';
  ui.best.classList.remove('hidden');
}
function refreshMute() { ui.muteBtn.textContent = REC.mute ? '🔇' : '🔊'; }
function enterMenu() {
  G.mode = 'menu';
  hero.visible = false;
  menuGroup.visible = true; curtain.visible = true; menuSpot.visible = true;
  if (!menuShown) { menuShown = true; curtainOpen = 0; curtainOpening = true; }
  ui.over.classList.add('hidden'); ui.menu.classList.remove('hidden');
  updateMenuSelection();
  refreshBest();
}

function rebuildHero() { scene.remove(hero); hero = createHero(G.char); hero.visible = G.mode !== 'menu'; scene.add(hero); }
function placeHeroOnBar(b) { const p = hangPos(b); hero.position.copy(p); hero.rotation.z = -b.theta; }
function vibrate(ms) { if (navigator.vibrate) { try { navigator.vibrate(ms); } catch (e) {} } }

/* ══════════════ UI ══════════════ */
const $ = (id) => document.getElementById(id);
const ui = { menu: $('menu'), over: $('over'), hud: $('hud'), score: $('score'), lives: $('lives'), combo: $('combo'), grade: $('grade'), comboHold: $('comboHold'), comboFill: $('comboFill'), big: $('bigmsg'), bigsub: $('bigsub'), flash: $('flash'), banner: $('banner'), bannerTxt: $('bannerTxt'), worldTag: $('worldTag'), wind: $('windTag'), best: $('best'), newBest: $('newBest'), overStats: $('overStats'), overMedals: $('overMedals'), muteBtn: $('muteBtn') };
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
$('playBtn').addEventListener('click', () => { initAudio(); sfx.click(); startGame(); });
$('againBtn').addEventListener('click', () => { sfx.click(); enterMenu(); });
$('replayBtn').addEventListener('click', () => { initAudio(); sfx.click(); startGame(); });  // instant replay — no menu detour
ui.muteBtn.addEventListener('pointerdown', (e) => { e.stopPropagation(); });
ui.muteBtn.addEventListener('click', (e) => {
  e.stopPropagation(); initAudio();
  REC.mute = !REC.mute; setMuted(REC.mute); saveRec(); refreshMute(); if (!REC.mute) sfx.click();
});
refreshMute();
document.querySelectorAll('.pick').forEach((el) => el.addEventListener('click', () => {
  document.querySelectorAll('.pick').forEach((p) => p.classList.remove('sel'));
  el.classList.add('sel');
  G.char = el.dataset.char;
  rebuildHero();
  updateMenuSelection();
}));

function startGame() {
  initAudio();
  G.mode = 'playing'; G.state = 'swing'; G.active = 0;
  G.score = 0; lastScore = -1; G.combo = 0; G.comboT = 0; G.lives = 3;
  G.spin = 0; G.pumpAmp = 1.0; G.holding = false; G.armed = false;
  G.grade = ''; G.lastFlips = 0; G.lastFlipBonus = 0; G.trick = false; G.flipRot = 0; G.salute = 0;
  G.timeScale = 1; G.slowmo = 0; G.fovKick = 0; G.shake = 0;
  G.world = 0; G.wind = 0; G.windOff = 0; G.netBounce = false; G.netSaves = 0;
  G.lap = 0; G.diffN = 0; G.wScore = [0, 0, 0, 0]; G.runMedals = [0, 0, 0, 0];
  G.starsGot = 0; G.flipsTot = 0; G.maxCombo = 0;
  ui.worldTag.textContent = WORLD_NAMES[0].toUpperCase();
  ui.wind.style.opacity = '0';
  for (const n of nets) { n.used = false; n.flashT = 0; }
  bars[0].theta = -1.0; bars[0].omega = 0;
  for (const s of stars) { s.got = false; s.m.visible = true; }
  for (const r of rings) { r.got = false; r.m.visible = true; }
  rebuildHero();
  hero.visible = true;
  menuGroup.visible = false; curtain.visible = false; menuSpot.visible = false;
  ui.menu.classList.add('hidden'); ui.over.classList.add('hidden');
  ui.hud.style.display = 'flex';
  tapBtn.classList.add('on');
  refreshHUD();
}
function awardMedals() {
  for (let w = 0; w < NWORLDS; w++) {
    const t = medalTier(G.wScore[w]);
    if (t > G.runMedals[w]) G.runMedals[w] = t;
    if (t > REC.medals[w]) REC.medals[w] = t;
  }
}
function endGame() {
  G.mode = 'over';
  ui.hud.style.display = 'none';
  ui.comboHold.style.opacity = '0';
  ui.wind.style.opacity = '0';
  tapBtn.classList.remove('on');
  trail.visible = false;
  awardMedals();
  const newHigh = G.score > REC.high;
  if (newHigh) REC.high = G.score;
  if (G.maxCombo > REC.combo) REC.combo = G.maxCombo;
  saveRec();
  ui.big.textContent = G.lap > 0 ? '🎉 What a run!' : 'Nice flying!';
  ui.bigsub.textContent = 'Score ' + G.score.toLocaleString('en') + ' · Best ' + REC.high.toLocaleString('en');
  ui.newBest.classList.toggle('hidden', !newHigh);
  ui.overStats.innerHTML =
    '<div><b>' + G.starsGot + '</b>⭐ stars</div>' +
    '<div><b>' + G.flipsTot + '</b>🌀 flips</div>' +
    '<div><b>x' + G.maxCombo + '</b>🔥 best combo</div>' +
    '<div><b>' + (G.lap > 0 ? G.lap + (G.lap > 1 ? ' laps' : ' lap') : WORLD_NAMES[G.world]) + '</b>🌍 ' + (G.lap > 0 ? 'endless!' : 'reached') + '</div>';
  ui.overMedals.textContent = G.runMedals.map((t, w) => WORLD_ICON[w] + MEDAL_ICON[t]).join('  ');
  ui.over.classList.remove('hidden');
  if (newHigh) sfx.applause(); else sfx.fanfare();
}

/* ══════════════ INPUT — hold to grip & pump, let go to fly, tap mid-air to flip ══════════════ */
function handleDown() {
  initAudio();
  if (G.mode !== 'playing') return;
  if (G.state === 'swing') { G.holding = true; G.armed = true; }
  else if (G.state === 'fly' && !G.trick) { G.trick = true; sfx.flip(); }
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
    showGrade('WHOOPS!', '#ff7d7d'); vibrate(20); sfx.fumble();
    return;
  }
  const amp = G.pumpAmp;
  const ideal = 0.45 * amp;
  const diff = Math.abs(b.theta - ideal) / amp;
  // endless mode: each world entered past the first tour shrinks the timing windows −5% (floored)
  const shrink = Math.pow(0.95, G.diffN);
  const PW = Math.max(0.065, 0.12 * shrink), GW = Math.max(0.20, 0.35 * shrink);
  let flyDur, arcH, reach;
  if (diff < PW) { G.grade = 'perfect'; flyDur = 0.6; arcH = 2.8; reach = 5.0; showGrade('PERFECT!', '#ffcf3f'); }
  else if (diff < GW) { G.grade = 'good'; flyDur = 0.75; arcH = 2.4; reach = 4.2; showGrade('GOOD!', '#d8ffef'); }
  else { G.grade = 'ok'; flyDur = 0.95; arcH = 1.5; reach = 3.0; showGrade('OK', '#9a8fc5'); }
  reach *= 0.85 + (amp - AMP_MIN) / (AMP_MAX - AMP_MIN) * 0.3;  // pumping extends reach
  if (b.w === SPACE_W) { flyDur *= 1.25; reach *= 1.12; }        // Space: low gravity, floatier arcs
  G.windOff = 0;

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
  sfx.whoosh();
}

/* ══════════════ CATCH ══════════════ */
function enterWorld(w) {
  G.world = w;
  if (G.lap > 0) G.diffN++;   // endless: every world crossed raises the pace
  ui.bannerTxt.textContent = 'World ' + (w + 1) + ' — ' + WORLD_NAMES[w];
  ui.banner.classList.remove('show'); void ui.banner.offsetWidth; ui.banner.classList.add('show');
  ui.worldTag.textContent = WORLD_NAMES[w].toUpperCase() + (G.lap > 0 ? ' · LAP ' + (G.lap + 1) : '');
  flash(0.3); vibrate(18);
  setAudioWorld(w); sfx.fanfare(); sfx.applause();
}

/* endless mode: finishing the 4-world tour loops back to bar 0, faster */
function lapComplete() {
  G.lap++; G.diffN++;
  awardMedals(); G.wScore = [0, 0, 0, 0];
  for (const s of stars) { s.got = false; s.m.visible = true; }
  for (const r of rings) { r.got = false; r.m.visible = true; }
  for (const n of nets) { n.used = false; n.flashT = 0; }
  G.state = 'swing'; G.active = 0; G.armed = false; G.holding = false;
  G.windOff = 0; G.netBounce = false; G.world = 0; G.comboT = COMBO_TIME;
  const b = bars[0]; b.theta = -0.8; b.omega = 1.4;
  placeHeroOnBar(b); hero.rotation.z = 0; trail.visible = false;
  camera.position.set(hero.position.x - 7.5, Math.max(hero.position.y + 4, 3), 12);
  camTarget.set(hero.position.x + 2.5, hero.position.y - 0.5, 0);
  ui.worldTag.textContent = 'CIRCUS · LAP ' + (G.lap + 1);
  ui.bannerTxt.textContent = G.lap === 1 ? '🎉 TOUR COMPLETE — ENDLESS MODE!' : 'LAP ' + (G.lap + 1) + ' — FASTER!';
  ui.banner.classList.remove('show'); void ui.banner.offsetWidth; ui.banner.classList.add('show');
  burst(hero.position, 60, true, 8); flash(0.35); vibrate(25);
  setAudioWorld(0); sfx.applause(); sfx.fanfare();
}

function doCatch(ci) {
  const flips = Math.floor(G.flipRot / (Math.PI * 2));
  const fromW = bars[G.active].w;
  G.active = ci; G.state = 'swing';
  bars[ci].theta = -0.5;
  bars[ci].omega = G.grade === 'perfect' ? 2.0 : 1.7;
  hero.rotation.z = 0; G.spin = 0; G.armed = false;
  trail.visible = false;
  G.combo++; G.comboT = COMBO_TIME;
  if (G.combo > G.maxCombo) G.maxCombo = G.combo;
  let gain = (100 + (G.combo - 1) * 25) * (G.grade === 'perfect' ? 2 : 1);
  let flipBonus = flips > 0 ? 50 * flips * Math.max(1, G.combo) : 0;
  G.lastFlips = flips; G.lastFlipBonus = flipBonus;
  G.flipsTot += flips;
  G.score += gain + flipBonus;
  G.wScore[bars[ci].w] += gain + flipBonus;
  showCombo((G.combo > 1 ? `x${G.combo}  ` : '') + `+${gain + flipBonus}`);
  if (flips > 0) setTimeout(() => showGrade(`FLIP +${flipBonus}`, '#ff6db0'), 120);
  burst(hero.position, G.grade === 'perfect' ? 40 : 22, false, G.grade === 'perfect' ? 7 : 5);
  if (G.grade === 'perfect') { G.slowmo = 0.4; G.salute = 0.7; sfx.perfect(); } else sfx.catch(G.combo);
  flash(0.25); vibrate(16); refreshHUD();
  if (ci >= NBARS - 1) { lapComplete(); return; }
  if (bars[ci].w !== fromW) enterWorld(bars[ci].w);
}

function loseLife() {
  G.lives--; G.combo = 0; G.comboT = 0; G.netBounce = false; G.windOff = 0;
  G.shake = 0.15; flash(0.5); vibrate(30); sfx.fumble();
  trail.visible = false;
  refreshHUD();
  if (G.lives <= 0) { endGame(); return; }
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
  G.world = bars[G.active].w;
  // Beach mechanic: gusts of wind (visible streaks) push the flight arc
  if (G.world === BEACH_W) {
    const gp = Math.sin(G.t * 0.8);
    G.wind = Math.abs(gp) > 0.55 ? Math.sign(gp) * 1.6 * ((Math.abs(gp) - 0.55) / 0.45) : 0;
  } else G.wind = 0;
  ui.wind.textContent = G.wind > 0 ? '💨 »»' : '«« 💨';
  ui.wind.style.opacity = Math.abs(G.wind) > 0.25 ? '1' : '0';

  // pump toward held/rest amplitude
  G.pumpAmp += ((G.holding && G.state === 'swing' ? AMP_MAX : AMP_MIN) - G.pumpAmp) * Math.min(1, dt * 1.7);

  const spd = Math.min(1.4, 1 + 0.05 * G.diffN);   // endless: +5% swing speed per world crossed (capped)
  for (let i = 0; i < NBARS; i++) stepBar(bars[i], dt * (i === G.active ? spd : 1), i === G.active && G.state === 'swing');

  if (G.state === 'swing') {
    placeHeroOnBar(bars[G.active]);
  } else if (G.state === 'fly') {
    G.flyT += dt;
    const a = Math.min(1, G.flyT / G.flyDur);
    if (G.flyMode === 'catch' && G.flyNext >= 0) {  // track drifting Jungle bars
      const nb = bars[G.flyNext];
      G.flyTo.set(nb.x + L * Math.sin(-0.5), nb.py - L * Math.cos(-0.5) - HANG, 0);
    }
    if (G.wind !== 0) G.windOff += G.wind * dt * (G.trick ? 0.3 : 1);  // flips fight the wind
    const p = G.flyFrom.clone().lerp(G.flyTo, a);
    p.y += Math.sin(a * Math.PI) * G.arcH;
    p.x += G.windOff;
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
        G.score += 75; G.wScore[G.world] += 75; showCombo('+75 ◎'); burst(r.m.position, 26, true, 6); refreshHUD(); vibrate(10); sfx.ring();
      }
    }
    if (a >= 1) {
      if (G.flyMode === 'catch' && Math.abs(G.windOff) <= 1.35) doCatch(G.flyNext);
      else { // fell short — or the gust won
        G.vel.set(G.flyMode === 'catch' ? 1.0 : 2.2, 0, 0); G.state = 'fumble';
        showGrade(G.flyMode === 'catch' ? 'GUSTED!' : 'TOO FAR!', '#ff9d5c');
      }
    }
  } else if (G.state === 'fumble') {
    G.vel.y -= (G.world === SPACE_W ? GF * 0.8 : GF) * dt;  // Space: low gravity
    hero.position.addScaledVector(G.vel, dt);
    G.spin += dt * 4; hero.rotation.z = G.spin;
    trailPush(hero.position, false, G.t);
    const net = nets[G.world];
    if (!G.netBounce && G.vel.y < 0 && hero.position.y < NET_Y + 0.3 && net && !net.used) {
      // Bonus net: one save per world — bounce back up, no life lost
      net.used = true; net.flashT = 1; G.netBounce = true; G.netSaves++;
      G.vel.y = 9.5; G.vel.x = THREE.MathUtils.clamp(bars[G.active].x - hero.position.x, -3, 3) * 0.6;
      showGrade('SAVED BY THE NET!', '#8affc1');
      burst(hero.position, 26, false, 6); flash(0.2); vibrate(20); sfx.net();
    } else if (G.netBounce && G.vel.y <= 0) {  // bounce apex → back on the bar
      G.netBounce = false; G.state = 'swing'; G.armed = false; trail.visible = false;
      const b = bars[G.active]; b.theta = -G.pumpAmp * 0.6; b.omega = 0;
    } else if (hero.position.y < MISS_Y) loseLife();
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
      G.score += 25; G.wScore[G.world] += 25; G.starsGot++; showCombo('+25 ⭐'); burst(s.m.position, 12, true, 4); refreshHUD(); vibrate(8); sfx.star();
    }
  }
  // rings idle pulse (+ Space rings bob vertically)
  for (const r of rings) {
    if (r.got) continue;
    r.m.rotation.y += dt * 1.4;
    const s2 = 1 + Math.sin(G.t * 4) * 0.05; r.m.scale.setScalar(s2);
    if (r.mvY) r.m.position.y = r.baseY + Math.sin(G.t * 1.3 + r.baseX) * 1.2;
  }
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
  camera.position.lerp(new THREE.Vector3(PODX + Math.sin(G.t * 0.25) * 2.0, -3.4, 8.8), 0.04);
  camera.lookAt(PODX, -5.7, 0);
  if (camera.fov !== 55) { camera.fov = 55; camera.updateProjectionMatrix(); }
}
function updateMenu(dt) {
  menuSpin += dt;
  turntable.rotation.y = menuSpin * 0.5;
  poseHero(menuHeroes[G.char], G.t, 'salute', 0);
  const other = G.char === 'marc' ? 'claire' : 'marc';
  poseHero(menuHeroes[other], G.t, 'idle', 0);
  if (curtainOpening) {
    curtainOpen = Math.min(1, curtainOpen + dt * 0.8);
    if (curtainOpen >= 1) curtainOpening = false;
    const e = 1 - Math.pow(1 - curtainOpen, 3);
    for (const d of drapes) d.mesh.position.x = d.x0 + d.side * e * 4.4;
  }
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
    world: G.world, worldName: WORLD_NAMES[G.world], netSaves: G.netSaves,
    wind: +G.wind.toFixed(2), windOff: +G.windOff.toFixed(2),
    lap: G.lap, diffN: G.diffN, starsGot: G.starsGot, flipsTot: G.flipsTot, maxCombo: G.maxCombo,
  }),
  records: () => ({ high: REC.high, bestCombo: REC.combo, medals: [...REC.medals], mute: REC.mute }),
  over: () => { if (G.mode === 'playing') endGame(); },
  wipe: () => { try { ['ts3d_high', 'ts3d_combo', 'ts3d_medals', 'ts3d_mute'].forEach((k) => localStorage.removeItem(k)); } catch (e) {} REC = loadRec(); refreshBest(); },
  audio: () => audioState(),
  mute: (m) => { REC.mute = !!m; setMuted(REC.mute); saveRec(); refreshMute(); },
  warp: (i) => {  // test helper: jump to bar i (camera snaps along)
    if (G.mode !== 'playing') return;
    i = Math.max(0, Math.min(NBARS - 1, i));
    G.active = i; G.state = 'swing'; G.armed = false; G.holding = false;
    G.netBounce = false; G.windOff = 0; G.world = bars[i].w;
    trail.visible = false;
    const b = bars[i]; b.theta = -0.6; b.omega = 1.2;
    placeHeroOnBar(b);
    camera.position.set(hero.position.x - 7.5, Math.max(hero.position.y + 4, 3), 12);
    camTarget.set(hero.position.x + 2.5, hero.position.y - 0.5, 0);
    ui.worldTag.textContent = WORLD_NAMES[G.world].toUpperCase();
    setAudioWorld(G.world);
  },
  pick: (c) => { if (menuHeroes[c]) { G.char = c; rebuildHero(); updateMenuSelection(); } },
  menu: () => ({
    podium: menuGroup.visible,
    heroes: (menuGroup.visible && menuHeroes.marc.visible && menuHeroes.claire.visible) ? 2 : 0,
    curtainOpen: +curtainOpen.toFixed(2),
    char: G.char,
  }),
};

enterMenu();

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
  world.applyMood(stage, G.mode === 'playing' ? hero.position.x : PODX);
  for (const b of bars) layoutBar(b);

  // safety nets: visible in play only; flash + dip when they catch someone
  netGroup.visible = G.mode === 'playing';
  for (const n of nets) {
    if (n.flashT > 0) {
      n.flashT -= dt;
      n.m.material.opacity = 0.3 + Math.max(0, n.flashT) * 0.5;
      n.m.position.y = NET_Y - Math.sin(Math.max(0, n.flashT) * Math.PI) * 0.6;
    } else { n.m.material.opacity = n.used ? 0.1 : 0.3; n.m.position.y = NET_Y; }
  }

  if (G.mode === 'playing') {
    physics(sdt);
    let ps = 'swing';
    if (G.state === 'fly') ps = 'fly';
    else if (G.salute > 0) { ps = 'salute'; G.salute -= dt; }
    poseHero(hero, G.t, ps, G.spin);
    updateCamera(dt);
  } else {
    for (let i = 0; i < NBARS; i++) stepBar(bars[i], dt, false);
    if (G.mode === 'menu') updateMenu(dt);
    menuCamera();
  }
  updateConfetti(dt);
  updateWind(dt);
  updateAudio(G.mode);

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
