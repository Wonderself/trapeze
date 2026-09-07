/* net.js — Session 3D-8: world-leaderboard client (Supabase REST, zero dependency).
 *
 * Design rules:
 *  - Config lives in net-config.js (the ONLY file Emmanuel edits). Not configured
 *    => netConfigured() is false, no network request is EVER made, the game keeps
 *    its local top-10 exactly as before.
 *  - Plain fetch against the auto-generated PostgREST API — no @supabase/supabase-js,
 *    the bundle stays light.
 *  - Short timeout (3.5 s) + one light retry on reads; silent failure everywhere:
 *    offline / misconfigured / server error => callers fall back to the local board,
 *    never an error message on screen.
 *  - Client-side sanity (the real guard is RLS server-side): name filtered to
 *    letters/digits/space/apostrophe/hyphen (max 20 chars), score clamped to a
 *    plausible bound, one submit per run. The wire/column name stays `initials`
 *    for backward compatibility with any Supabase table already deployed from
 *    the original 3-letter design (see SUPABASE_SETUP.md for the schema note
 *    on widening the length check if the column still enforces 3 chars).
 *
 * Setup guide for the free Supabase project: game3d/SUPABASE_SETUP.md
 */

import { SUPABASE_URL, SUPABASE_ANON_KEY } from './net-config.js';

export const SCORE_MAX = 500000;   // matches the SQL check constraint
const TIMEOUT_MS = 3500;

let cfg = { url: SUPABASE_URL, key: SUPABASE_ANON_KEY };

export function netConfigured() { return !!(cfg.url && cfg.key); }
/* test hook (used by window.__game.netTest): inject a config at runtime */
export function netSetConfig(url, key) { cfg = { url: url || '', key: key || '' }; }

/* one fetch with timeout; `retries` extra attempts (reads only — never retry a POST) */
async function req(path, opts = {}, retries = 0) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const r = await fetch(cfg.url.replace(/\/$/, '') + '/rest/v1/scores' + path, {
      ...opts,
      headers: {
        apikey: cfg.key, Authorization: 'Bearer ' + cfg.key,
        'Content-Type': 'application/json', ...(opts.headers || {}),
      },
      signal: ctrl.signal,
    });
    if (!r.ok) throw new Error('http ' + r.status);
    return r;
  } catch (e) {
    if (retries > 0) return req(path, opts, retries - 1);
    throw e;
  } finally { clearTimeout(t); }
}

const NAME_MAX = 20;
// same charset rule as the local board (main.js sanitizeName): letters/digits/
// space/apostrophe/hyphen, trimmed, capped, never empty. Also handles legacy
// rows/inputs that are still plain 3-letter initials — they pass through unchanged.
const cleanName = (v) => {
  const cleaned = String(v || '').replace(/[^\p{L}\p{N} '\-]/gu, '').replace(/\s+/g, ' ').trim().slice(0, NAME_MAX).trim();
  return cleaned || 'PLAYER';
};
const cleanScore = (v) => Math.max(0, Math.min(SCORE_MAX, Math.round(+v || 0)));

/* GET top n world scores → [{i, s, w, l}] or null on any failure (caller falls back) */
export async function fetchWorldTop(n = 10) {
  if (!netConfigured()) return null;
  try {
    const r = await req('?select=initials,score,world,lap&order=score.desc&limit=' + n, {}, 1);
    const rows = await r.json();
    if (!Array.isArray(rows)) return null;
    // sanitize server rows before they reach innerHTML
    return rows.slice(0, n).map((e) => ({
      i: cleanName(e.initials), s: cleanScore(e.score),
      w: Math.max(0, Math.min(3, e.world | 0)), l: Math.max(0, Math.min(999, e.lap | 0)),
    }));
  } catch (e) { return null; }
}

/* POST one score. Throttled to one submit per run (reset via netNewRun in startGame). */
let submittedThisRun = false;
export function netNewRun() { submittedThisRun = false; }
export async function submitWorldScore({ name, score, world = 0, lap = 0 }) {
  if (!netConfigured() || submittedThisRun) return false;
  submittedThisRun = true;
  try {
    await req('', {
      method: 'POST',
      body: JSON.stringify({
        initials: cleanName(name), score: cleanScore(score),   // `initials` column kept for schema back-compat
        world: Math.max(0, Math.min(3, world | 0)), lap: Math.max(0, Math.min(999, lap | 0)),
      }),
    });
    return true;
  } catch (e) { return false; }   // offline / misconfigured: local board already has it
}
