/* Generative WebAudio: one tune per world + SFX. Zero assets — everything synthesized.
   Same philosophy as the 2D game's playCircus/playJungle: short scheduled loops,
   but driven from the rAF loop via update() with a small lookahead. */

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
export function setMuted(m) { muted = m; if (master) master.gain.value = m ? 0 : 0.9; }
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
  if (!ctx) return;
  if (ctx.state === 'suspended') { try { ctx.resume(); } catch (e) {} }
  const want = mode === 'playing' && !muted ? 0.16 : 0;
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
};
