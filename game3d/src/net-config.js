/* ═══════════════════════════════════════════════════════════════════════════
 * net-config.js — THE ONLY FILE TO EDIT to enable the worldwide leaderboard.
 *
 * 👉 Full setup guide (about five minutes): see game3d/SUPABASE_SETUP.md
 *
 * In short:
 *   1. Create a Supabase project (https://supabase.com).
 *   2. Run the SQL in SUPABASE_SETUP.md (`scores` table and RLS).
 *   3. In Settings → API, copy:
 *        - Project URL   → SUPABASE_URL   (e.g. 'https://abcdefgh.supabase.co')
 *        - anon public   → SUPABASE_ANON_KEY (the long 'eyJ...' string)
 *   4. Paste both below, then run `npm run verify:deploy` at the repository root.
 *      The GitHub Pages workflow publishes `_site/` from `main`.
 *
 * The anon key is PUBLIC BY DESIGN: it is included in the client bundle.
 * Server-side Row Level Security enforces anonymous INSERT/SELECT limits.
 *
 * While both values remain empty, the game uses its local top 10
 * (localStorage) and makes no leaderboard network requests.
 * ═══════════════════════════════════════════════════════════════════════════ */

export const SUPABASE_URL = '';        // e.g. 'https://abcdefgh.supabase.co'
export const SUPABASE_ANON_KEY = '';   // public anon key (safe to embed)
