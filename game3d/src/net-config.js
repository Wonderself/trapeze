/* ═══════════════════════════════════════════════════════════════════════════
 * net-config.js — LE SEUL FICHIER À ÉDITER pour allumer le leaderboard mondial.
 *
 * 👉 Mode d'emploi complet (5 min, 0 €) : voir game3d/SUPABASE_SETUP.md
 *
 * En deux mots :
 *   1. Crée un projet Supabase gratuit (https://supabase.com — sans carte bancaire).
 *   2. Colle le script SQL fourni dans SUPABASE_SETUP.md (table `scores` + RLS).
 *   3. Récupère dans Settings → API :
 *        - Project URL   → SUPABASE_URL   (ex. 'https://abcdefgh.supabase.co')
 *        - anon public   → SUPABASE_ANON_KEY (longue chaîne 'eyJ...')
 *   4. Colle-les ci-dessous, puis rebuild :  cd game3d && npm run build
 *      et copie dist/ → docs/ comme d'habitude.
 *
 * La clé « anon » est PUBLIQUE PAR CONCEPTION : elle finit toujours dans le
 * code client, et la sécurité est assurée côté serveur par la Row Level
 * Security (la table n'accepte que INSERT/SELECT anonymes, avec des bornes).
 *
 * Tant que ces deux valeurs sont vides, le jeu se comporte exactement comme
 * aujourd'hui : top-10 local (localStorage), zéro requête réseau.
 * ═══════════════════════════════════════════════════════════════════════════ */

export const SUPABASE_URL = '';        // ex. 'https://abcdefgh.supabase.co'
export const SUPABASE_ANON_KEY = '';   // clé « anon public » (sûre à embarquer)
