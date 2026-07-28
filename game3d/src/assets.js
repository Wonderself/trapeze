/* ══════════════ OPTIONAL AI-GENERATED ASSETS (Session 3D-9A) ══════════════
 *
 * The game ships 100% self-contained: procedural CanvasTextures, synthesized audio,
 * no external request. Session 3D-9B will drop AI-generated files into
 *   game3d/public/sky/    — one skybox per world
 *   game3d/public/art/    — marquee posters / logo
 *   game3d/public/voice/  — presenter voice lines
 * ...and simply list them below. Nothing else has to change: every consumer already
 * falls back silently to the procedural version when an entry is missing.
 *
 * WHY A MANIFEST INSTEAD OF PROBING THE SERVER?
 * A missing file answers 404, and Chromium logs every 404 to the console as an error.
 * "Never an error in the console when the file is absent" is a hard requirement here
 * (kids' gift, zero-noise builds, smoke test gate x), and the only way to guarantee it
 * is to never request a file we don't know about. Adding a name below is the single
 * line of bookkeeping that buys that guarantee.
 *
 * ── HOW TO ADD AN ASSET (phase B) ───────────────────────────────────────────
 *   1. put the file in game3d/public/<folder>/ with the expected name
 *   2. add its name to the matching list/map below
 *   3. npm run build → copy dist/ to docs/
 */

/* Marquee art. Expected names: 'logo.png', 'poster-1.jpg', 'poster-2.jpg' (1280×1920-ish, portrait). */
export const ART = [];

/* Per-world skyboxes (equirectangular JPG, ~2048×1024). Keys = world ids. */
export const SKY = {
  // circus: 'circus.jpg',
  // jungle: 'jungle.jpg',
  // beach:  'beach.jpg',
  // space:  'space.jpg',
};

/* Presenter voice lines. Names = the stable line ids used by audio.js `say(id)`,
 * files are <id>.mp3 — e.g. 'welcome' → public/voice/welcome.mp3 */
export const VOICE = [];

export const artURL = (file) => (ART.includes(file) ? 'art/' + file : null);
export const skyURL = (world) => (SKY[world] ? 'sky/' + SKY[world] : null);
export const voiceURL = (id) => (VOICE.includes(id) ? 'voice/' + id + '.mp3' : null);
export const hasAnyVoiceFile = () => VOICE.length > 0;
