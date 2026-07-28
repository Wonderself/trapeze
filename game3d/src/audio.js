/* Generative WebAudio: one tune per world + SFX. Zero assets — everything synthesized.
   Same philosophy as the 2D game's playCircus/playJungle: short scheduled loops,
   but driven from the rAF loop via update() with a small lookahead. */

import { voiceURL, hasAnyVoiceFile } from './assets.js';

let ctx = null, master = null, musG = null, sfxG = null, noiseBuf = null;
let muted = false, step = 0, nextT = 0, curWorld = 0;

const AC = () => window.AudioContext || window.webkitAudioContext;
const f = (m) => 440 * Math.pow(2, (m - 69) / 12);   // midi -> Hz

export function initAudio() {
  if (ctx) return;
  try {
    ctx = new (AC())();
    master = ctx.createGain(); master.gain.value = muted ? 0 : 0.9; master.connect(ctx.destination);
    musG = ctx.createGain(); musG.gain.value = 0; musG.connect(master);
    sfxG = ctx.createGain(); sfxG.gain.value = 0.5; sfxG.connect(master);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  } catch (e) { ctx = null; }
}
export function setMuted(m) { muted = m; if (master) master.gain.value = m ? 0 : 0.9; if (m) voiceCancel(); }
export function audioState() { return { ready: !!ctx, running: ctx ? ctx.state : 'none', muted }; }

/* ── primitives ── */
function osc(type, f0, t0, dur, vol, dest, f1) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(f0, t0);
  if (f1) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t0 + dur);
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
  o.connect(g); g.connect(dest || sfxG);
  o.start(t0); o.stop(t0 + dur + 0.02);
}
function noise(t0, dur, vol, lo, hi, dest) {
  const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
  const bp = ctx.createBiquadFilter(); bp.type = 'bandpass';
  bp.frequency.value = (lo + hi) / 2; bp.Q.value = (lo + hi) / 2 / Math.max(60, hi - lo);
  const g = ctx.createGain();
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
  s.connect(bp); bp.connect(g); g.connect(dest || sfxG);
  s.start(t0); s.stop(t0 + dur + 0.02);
}

/* ── per-world music (16 half-beat steps per bar) ── */
const BPM = [132, 116, 92, 124];
// chord roots (midi), one per bar over a 4-bar loop
const PROG = [
  [57, 62, 57, 64],   // Circus  A  D  A  E — oom-pah fanfare
  [55, 55, 53, 50],   // Jungle  G  G  F  D — earthy drums + marimba
  [60, 57, 53, 55],   // Beach   C  Am F  G — warm sunset chords
  [57, 53, 60, 55],   // Space   Am F  C  G — neon arpeggio
];
const MEL = [
  [12, -1, 16, -1, 19, -1, 16, 12, 14, -1, 17, -1, 21, 19, 17, 14],  // circus jaunty
  [0, -1, 3, 5, -1, 7, -1, 10, 7, -1, 5, 3, -1, 0, -1, -1],          // jungle pentatonic
  [12, -1, -1, 16, -1, -1, 19, -1, -1, 23, -1, 19, -1, 16, -1, -1],  // beach dreamy
  [0, 12, 7, 12, 3, 12, 7, 15, 0, 12, 7, 12, 5, 12, 7, 19],          // space arp
];
function schedStep(st, t) {
  const w = curWorld;
  const bar = (st >> 4) % 4, s16 = st % 16;
  const root = PROG[w][bar];
  if (w === 0) { // Circus: oom-pah + bright melody
    if (s16 % 8 === 0) osc('triangle', f(root - 24), t, 0.22, 0.30, musG);
    if (s16 % 8 === 4) osc('triangle', f(root - 17), t, 0.20, 0.26, musG);
    if (s16 % 4 === 2) { osc('square', f(root), t, 0.10, 0.045, musG); osc('square', f(root + 4), t, 0.10, 0.04, musG); }
    const m = MEL[0][s16]; if (m >= 0) osc('square', f(root + m), t, 0.16, 0.055, musG);
  } else if (w === 1) { // Jungle: deep drums, shaker, marimba
    if ([0, 3, 6, 8, 11, 14].includes(s16)) osc('sine', 150, t, 0.22, 0.5, musG, 42);
    if (s16 % 2 === 1) noise(t, 0.05, 0.05, 3500, 7000, musG);
    const m = MEL[1][s16]; if (m >= 0) osc('triangle', f(root + 12 + m), t, 0.20, 0.10, musG);
  } else if (w === 2) { // Beach: slow warm pad + soft plucks
    if (s16 === 0) for (const iv of [0, 4, 7]) { osc('sine', f(root + iv), t, 2.4, 0.055, musG); osc('triangle', f(root + iv - 12), t, 2.4, 0.03, musG); }
    const m = MEL[2][s16]; if (m >= 0) osc('sine', f(root + m), t, 0.5, 0.07, musG);
  } else { // Space: filtered saw bass + sparkles
    if (s16 % 2 === 0) {
      const o = ctx.createOscillator(), lp = ctx.createBiquadFilter(), g = ctx.createGain();
      o.type = 'sawtooth'; o.frequency.value = f(root - 24);
      lp.type = 'lowpass'; lp.frequency.value = 300 + 900 * Math.abs(Math.sin(st * 0.5)); lp.Q.value = 6;
      g.gain.setValueAtTime(0.10, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.20);
      o.connect(lp); lp.connect(g); g.connect(musG); o.start(t); o.stop(t + 0.22);
    }
    const m = MEL[3][s16]; if (m >= 0 && s16 % 2 === 0) osc('sine', f(root + 12 + m), t, 0.18, 0.05, musG);
    if (s16 === 10) osc('sine', f(root + 36), t, 0.35, 0.05, musG, f(root + 24));
  }
}

export function setWorld(w) { if (w !== curWorld) { curWorld = w; } }
export function updateAudio(mode) {
  voicePump();                       // voice runs even without an AudioContext (speechSynthesis)
  duck += (duckTarget - duck) * 0.05;
  if (!ctx) return;
  if (ctx.state === 'suspended') { try { ctx.resume(); } catch (e) {} }
  const want = mode === 'playing' && !muted ? 0.16 * duck : 0;
  musG.gain.value += (want - musG.gain.value) * 0.08;
  if (mode !== 'playing') { nextT = 0; return; }
  const t = ctx.currentTime;
  if (!nextT || nextT < t - 0.5) { nextT = t + 0.08; step = 0; }
  const spb = 60 / BPM[curWorld] / 2;   // half-beat steps
  while (nextT < t + 0.3) { schedStep(step, nextT); nextT += spb; step++; }
}

/* ── SFX ── */
const S = (fn) => (...a) => { if (ctx && !muted) { try { fn(ctx.currentTime, ...a); } catch (e) {} } };
export const sfx = {
  whoosh: S((t) => noise(t, 0.28, 0.5, 500, 2400)),
  catch: S((t, combo) => { const p = 1 + Math.min(12, combo) * 0.045; osc('sine', 660 * p, t, 0.16, 0.30); osc('triangle', 1320 * p, t, 0.12, 0.14); }),
  perfect: S((t) => { [69, 73, 76].forEach((m, i) => osc('square', f(m + 12), t + i * 0.07, 0.16, 0.18)); noise(t + 0.2, 0.3, 0.10, 5000, 9500); }),
  flip: S((t) => osc('triangle', 520, t, 0.12, 0.20, sfxG, 980)),
  star: S((t) => osc('sine', 1420, t, 0.09, 0.18)),
  ring: S((t) => { osc('sine', 988, t, 0.10, 0.20); osc('sine', 1319, t + 0.07, 0.14, 0.18); }),
  net: S((t) => osc('triangle', 150, t, 0.34, 0.32, sfxG, 460)),
  fumble: S((t) => osc('sawtooth', 220, t, 0.42, 0.16, sfxG, 82)),
  fanfare: S((t) => [60, 64, 67, 72].forEach((m, i) => osc('square', f(m + 12), t + i * 0.09, 0.2, 0.14))),
  applause: S((t) => { for (let i = 0; i < 34; i++) noise(t + i * 0.045 + Math.random() * 0.03, 0.05, 0.06 * (1 - i / 40), 900, 4200); }),
  click: S((t) => osc('sine', 700, t, 0.05, 0.12)),
  // 3D-7 — cinematic intro & grand finale
  spot: S((t) => { osc('sine', 90, t, 0.5, 0.35, sfxG, 55); noise(t, 0.25, 0.10, 2200, 6500); }),                       // spotlight "thunk + hum"
  firework: S((t) => { noise(t, 0.5, 0.45, 150, 900); osc('sine', 880, t, 0.7, 0.09, sfxG, 110); }),                    // boom + falling whistle
  ovation: S((t) => {                                                                                                    // applause crescendo (~3.5 s)
    for (let i = 0; i < 70; i++) {
      const v = 0.02 + 0.085 * Math.min(1, i / 25) * (1 - Math.max(0, i - 46) / 26);
      noise(t + i * 0.05 + Math.random() * 0.04, 0.055, Math.max(0.006, v), 800, 4500);
    }
  }),
};

/* ══════════════ PRESENTER VOICE (3D-9A) ══════════════
 * A ringmaster announcing the show. Priority queue, no overlap, no repeats,
 * a 2.5 s floor between lines and a per-line cooldown, so it never nags.
 *
 * Two backends, picked automatically and silently:
 *   (a) static files  public/voice/<id>.mp3  — only when declared in src/assets.js
 *       (declaring is what guarantees zero 404 / zero console error when absent)
 *   (b) the browser's speechSynthesis, en-US, tuned bright & quick for a circus MC
 *   (c) nothing available, or sound/voice muted → total silence
 *
 * Ducking: the generative music drops ~8 dB while a line plays and eases back after.
 * Reactive lines are queued with a small delay so they land AFTER the SFX peak
 * (fanfare / catch ding) instead of fighting it.
 * The ids below are stable: they become the filenames in phase B. */
const LINES = {
  welcome: 'Ladies and gentlemen... welcome to Trapeze Stars!',
  begin: 'Let the show begin!',
  perfect: 'Perfect!',
  combo10: 'Ten in a row! Incredible!',
  combo25: 'Twenty-five! The crowd goes wild!',
  world_jungle: 'Into the jungle!',
  world_beach: 'To the beach!',
  world_space: 'Off to the stars!',
  net: 'Saved by the net!',
  record: 'A new world record!',
  endless: 'Endless mode! No stopping now!',
  bye: 'What a performance! Come back soon!',
};
export const VOICE_IDS = Object.keys(LINES);

const V_GAP = 2.5;            // s minimum between two spoken lines
const V_QUEUE_MAX = 3;
const vNow = () => performance.now() / 1000;

let voiceOn = true;
let vQueue = [];              // [{id, prio, at}] — pending lines
let vCur = null;              // currently speaking line
let vLastEnd = -999, vLastId = null;
const vSaidAt = {};           // id -> last time it was accepted (per-line cooldown)
const vFiles = new Map();     // url -> HTMLAudioElement cache
let duck = 1, duckTarget = 1; // music ducking factor (~-8 dB while speaking)

export function voiceBackend() {
  if (hasAnyVoiceFile()) return 'files';
  try {
    if (typeof speechSynthesis !== 'undefined' && speechSynthesis &&
        typeof SpeechSynthesisUtterance !== 'undefined') return 'speech';
  } catch (e) {}
  return 'none';
}
export function setVoiceEnabled(v) { voiceOn = !!v; if (!voiceOn) voiceCancel(); }
export function voiceEnabled() { return voiceOn; }
export function voiceState() {
  return {
    enabled: voiceOn && !muted,
    backend: (voiceOn && !muted) ? voiceBackend() : 'none',
    queue: vQueue.map((q) => q.id),
    speaking: vCur ? vCur.id : null,
    lastId: vLastId,
    ducking: +duck.toFixed(2),
  };
}
export function voiceCancel() {
  vQueue = [];
  if (vCur) { try { vCur.stop(); } catch (e) {} }
  vCur = null; duckTarget = 1;
}

/* say(id, {prio, delay, cooldown}) — returns true when the line was accepted.
 * prio 3 = show beats (welcome/begin/record/bye), 2 = milestones, 1 = flavour. */
export function say(id, opts) {
  const o = opts || {};
  if (!LINES[id] || !voiceOn || muted) return false;
  if (voiceBackend() === 'none') return false;
  const prio = o.prio == null ? 1 : o.prio;
  const t = vNow();
  if (o.cooldown && vSaidAt[id] != null && t - vSaidAt[id] < o.cooldown) return false;
  // anti-duplicate: never two copies of the same line in flight
  if ((vCur && vCur.id === id) || vQueue.some((q) => q.id === id)) return false;
  // a higher-priority line drops the lower-priority ones still waiting (never the reverse)
  if (prio > 1) vQueue = vQueue.filter((q) => q.prio >= prio);
  if (vCur && prio > vCur.prio) endVoice();
  vQueue.push({ id, prio, at: t + (o.delay || 0) });
  vQueue.sort((a, b) => b.prio - a.prio || a.at - b.at);
  if (vQueue.length > V_QUEUE_MAX) vQueue.length = V_QUEUE_MAX;
  vSaidAt[id] = t;
  return true;
}

function endVoice() {
  if (vCur) { try { vCur.stop(); } catch (e) {} }
  vCur = null; vLastEnd = vNow(); duckTarget = 1;
}
function voicePump() {
  const t = vNow();
  if (vCur) { if (t > vCur.deadline) endVoice(); else return; }
  if (!vQueue.length) return;
  if (!voiceOn || muted) { vQueue = []; return; }
  if (t - vLastEnd < V_GAP) return;
  if (t < vQueue[0].at) return;
  startVoice(vQueue.shift());
}
function startVoice(item) {
  const text = LINES[item.id];
  const est = 0.9 + text.length * 0.055;                 // watchdog: headless/blocked TTS never fires onend
  vCur = { id: item.id, prio: item.prio, deadline: vNow() + est + 1.6, stop: () => {} };
  vLastId = item.id;
  duckTarget = 0.4;                                       // ≈ -8 dB on the music bed
  const url = voiceURL(item.id);
  if (url) playVoiceFile(url, text, item, est); else speakLine(text);
}
function playVoiceFile(url, text, item, est) {
  let el = vFiles.get(url);
  if (!el) {
    el = new Audio(url);
    el.preload = 'auto';
    vFiles.set(url, el);
  }
  const cur = vCur;
  el.onended = () => { if (vCur === cur) endVoice(); };
  el.onerror = () => { if (vCur === cur) { el.onended = null; speakLine(text); } };   // silent: fall back to TTS
  cur.stop = () => { try { el.pause(); el.currentTime = 0; } catch (e) {} };
  try {
    el.currentTime = 0;
    const p = el.play();
    if (p && p.catch) p.catch(() => {});                  // autoplay refused → watchdog closes the line
  } catch (e) {}
}
function speakLine(text) {
  const cur = vCur;
  if (!cur) return;
  try {
    if (typeof speechSynthesis === 'undefined' || typeof SpeechSynthesisUtterance === 'undefined') {
      cur.deadline = vNow() + 0.05; return;
    }
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.pitch = 1.25; u.rate = 1.03; u.volume = 1;   // bright, quick — a circus MC
    u.onend = () => { if (vCur === cur) endVoice(); };
    u.onerror = () => { if (vCur === cur) endVoice(); };
    cur.stop = () => { try { speechSynthesis.cancel(); } catch (e) {} };
    speechSynthesis.speak(u);
  } catch (e) { cur.deadline = vNow() + 0.05; }
}
