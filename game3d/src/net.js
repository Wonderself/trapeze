/* net.js — Session 3D-7 scaffold: world-leaderboard abstraction. NOT wired in yet.
 *
 * Today the game uses the local top-10 board in main.js (localStorage ts3d_board).
 * This module is the ready-made seam for a shared online board, at zero cost:
 *
 *   To activate later (free tier, ~10 min):
 *   1. Create a free Supabase project (https://supabase.com — no credit card).
 *   2. SQL editor:  create table scores (
 *        id bigint generated always as identity primary key,
 *        initials text not null check (char_length(initials) = 3),
 *        score int not null check (score >= 0 and score < 10000000),
 *        medal int not null default 0, lap int not null default 0,
 *        day int,                        -- daily-challenge seed (YYYYMMDD) or null
 *        created_at timestamptz default now());
 *      Enable RLS + policies: allow anonymous INSERT and SELECT (read top 100).
 *   3. Paste the project URL + anon public key below (the anon key is designed
 *      to be shipped in client code; RLS is the guard).
 *   4. In main.js, import { createBoard } and use it instead of BOARD read/writes.
 *
 * Until then: constants empty => createBoard() returns the Local adapter and the
 * game behaves exactly as it does today. No network request is ever made.
 */

const SUPABASE_URL = '';        // e.g. 'https://xyzcompany.supabase.co'
const SUPABASE_ANON_KEY = '';   // anon public key (safe to embed — protected by RLS)

const BOARD_MAX = 10;

/* ── Local adapter: same storage & semantics as today's board ── */
class LocalBoard {
  constructor(key = 'ts3d_board') { this.key = key; this.online = false; }
  async top(n = BOARD_MAX) {
    try { const a = JSON.parse(localStorage.getItem(this.key) || '[]'); return Array.isArray(a) ? a.slice(0, n) : []; }
    catch (e) { return []; }
  }
  async submit({ initials, score, medal = 0, lap = 0 }) {
    const list = await this.top(BOARD_MAX);
    const entry = { i: initials, s: score, m: medal, l: lap };
    list.push(entry);
    list.sort((a, b) => b.s - a.s);
    const kept = list.slice(0, BOARD_MAX);
    try { localStorage.setItem(this.key, JSON.stringify(kept)); } catch (e) {}
    return kept.indexOf(entry);   // rank, or -1 if it fell off
  }
}

/* ── Supabase adapter: plain fetch against the auto-generated REST API, zero dependency ── */
class SupabaseBoard {
  constructor(url, key) {
    this.base = url.replace(/\/$/, '') + '/rest/v1/scores';
    this.headers = { apikey: key, Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' };
    this.online = true;
    this.fallback = new LocalBoard();   // network trouble must never lose a score
  }
  async top(n = BOARD_MAX, day = null) {
    try {
      const q = this.base + '?select=initials,score,medal,lap&order=score.desc&limit=' + n +
        (day ? '&day=eq.' + day : '&day=is.null');
      const r = await fetch(q, { headers: this.headers });
      if (!r.ok) throw new Error('http ' + r.status);
      const rows = await r.json();
      return rows.map((e) => ({ i: e.initials, s: e.score, m: e.medal, l: e.lap }));
    } catch (e) { return this.fallback.top(n); }
  }
  async submit({ initials, score, medal = 0, lap = 0, day = null }) {
    try {
      const r = await fetch(this.base, {
        method: 'POST', headers: this.headers,
        body: JSON.stringify({ initials, score, medal, lap, day }),
      });
      if (!r.ok) throw new Error('http ' + r.status);
    } catch (e) { /* offline / misconfigured: keep it locally so nothing is lost */ }
    return this.fallback.submit({ initials, score, medal, lap });
  }
}

/* ── factory: silently falls back to local when Supabase isn't configured ── */
export function createBoard() {
  if (SUPABASE_URL && SUPABASE_ANON_KEY) return new SupabaseBoard(SUPABASE_URL, SUPABASE_ANON_KEY);
  return new LocalBoard();
}
export { LocalBoard, SupabaseBoard };
