# CLAUDE.md — Autopilote du repo `trapeze`

> Ce fichier est lu **automatiquement** par Claude (Cowork / Claude Code) à l'ouverture du repo.
> Il transforme `trapeze` en projet **auto-avançant** : tu ouvres une session sur le repo, Claude sait
> quoi faire et le fait. Le plan vit dans **`AUDIT.md`**. Ce fichier-ci dit *comment* l'exécuter.

## 🎮 Le projet en une phrase
« Trapeze Stars » — un jeu de cirque **monofichier** (`index.html`, HTML5 Canvas 2D, WebAudio, zéro
dépendance, zéro build), pensé **mobile d'abord**, offert en cadeau à **Marc & Claire**. UI 100 % anglais.

## 🤖 Protocole d'auto-avancement (à exécuter à chaque session, sans attendre d'instruction)
1. **Lis `AUDIT.md`** en entier — le diagnostic, les numéros de ligne et le plan y sont déjà. **Ne relis PAS tout `index.html`** pour re-diagnostiquer.
2. Repère dans le **TABLEAU DES SESSIONS** la **première ligne au statut `⬜ À faire`** = la prochaine session.
3. **Exécute-la exactement** comme décrite dans « DÉTAIL DES SESSIONS » (le bloc « Prompt de lancement » est ta feuille de route).
4. **Teste** avant de committer (voir « Comment tester » ci-dessous). Aucune erreur console, le jeu se lance, une partie est jouable.
5. **Mets à jour `AUDIT.md`** : statut de la session → `✅ Fait (AAAA-MM-JJ)`, ajoute une ligne dans `✅ HISTORIQUE`, et fais pointer `OÙ ON EN EST` vers la suite.
6. **Commit + push sur `main`** (voir « Git »). Puis **arrête-toi et fais un compte-rendu concis** (diffs, pas de fichiers entiers).
7. S'il ne reste **aucune** session `⬜`, ne code rien : rapporte que le plan est terminé et propose les prochaines idées (section « PROPOSITIONS À VALIDER » de `AUDIT.md`).

> ⚠️ **Une session à la fois.** N'enchaîne pas plusieurs sessions dans un même run sans validation, sauf demande explicite.

## 🧭 Règles du projet (garde-fous non négociables)
- **Un seul fichier de jeu** : tout dans `index.html`. Pas de framework, pas d'étape de build, pas de dépendance réseau.
- **Mobile d'abord & 60 fps** : chaque effet ajouté doit être bon marché. Pas de nouveau `ctx.filter` par frame.
- **Anglais uniquement** dans l'UI (aucun texte hébreu/français à l'écran).
- **Physique à pas fixe** : ne touche pas aux constantes physiques ni au cadencement delta-time déjà en place.
- **C'est un cadeau** : la dédicace « Marc & Claire » et l'effet « waouh » à l'ouverture priment sur les features gadget.
- **Réponses concises** : montre des **diffs**, pas des fichiers entiers.

## ▶️ Comment tester (headless, sans écran)
Le jeu est un canvas 800×450. Test rapide de non-régression :
```bash
# Sert le dossier puis charge la page dans un Chromium headless et capture les erreurs console.
python3 -m http.server 8000 >/dev/null 2>&1 &
npx --yes playwright@latest install chromium >/dev/null 2>&1   # si besoin (Chromium est déjà présent dans l'env cloud)
node test/smoke.js   # crée ce script s'il n'existe pas : il ouvre http://localhost:8000, attend, lit console + canvas
```
Contrôles pour un test manuel : **Space/↑/W** = saut · **F/Z/Shift** = grab · **←→/A D** = déplacement ·
mobile = boutons ◀ ▶ ⚡(saut) GRAB, tap canvas = saut, swipe bas = grab.

## 🌿 Git
- Branche de travail et **source de vérité unique = `main`**. Les branches `claude/*` héritées sont obsolètes.
- Commits clairs et atomiques. Message type : `Session N: <titre>` ou `Fix: <quoi>`.
- `commit` **et** `push` à la fin de chaque session réussie. Ne laisse jamais le repo dans un état cassé.

## 🗂️ Carte du repo
| Fichier | Rôle |
|---|---|
| `index.html` | **Le jeu entier** (~1650 lignes). Seul fichier à faire évoluer. |
| `AUDIT.md` | **Le plan** : état, sessions, diagnostic, prompts de lancement, historique. |
| `CLAUDE.md` | Ce fichier : le protocole d'auto-avancement. |
| `manifest.json` / `sw.js` / icône | PWA (créés en Session 2, si validée). |
