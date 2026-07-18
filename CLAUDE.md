# CLAUDE.md — Autopilote du repo `trapeze`

> Ce fichier est lu **automatiquement** par Claude (Cowork / Claude Code) à l'ouverture du repo.
> Il transforme `trapeze` en projet **auto-avançant** : tu ouvres une session sur le repo, Claude sait
> quoi faire et le fait. Le plan vit dans **`AUDIT.md`**. Ce fichier-ci dit *comment* l'exécuter.

## 🎮 Le projet en une phrase
« Trapeze Stars » — jeu de trapèze offert en cadeau à **Marc & Claire** (des enfants : générosité > punition).
Deux versions coexistent : le **canvas 2D** historique (racine, ✅ terminé, ne plus y toucher) et la direction
active **Trapeze Stars 3D** (`game3d/`, Three.js + Vite), qu'on fait monter en gamme session par session.

## 🤖 Protocole d'auto-avancement (à exécuter à chaque session, sans attendre d'instruction)
1. **Lis `AUDIT.md`** en entier — diagnostic, roadmap, référence technique et prompts y sont. **Ne re-diagnostique pas** le code.
2. Repère dans le **TABLEAU DES SESSIONS** la **première ligne `⬜ À faire`** = la prochaine session.
3. **Exécute-la exactement** comme décrite dans « DÉTAIL DES SESSIONS » (le « Prompt de lancement » est ta feuille de route).
4. **Teste** : `node game3d/test/smoke3d.mjs` (étends-le si la session ajoute des mécaniques) + captures visuelles à vérifier toi-même. Zéro erreur JS tolérée (l'`ERR_CONNECTION_RESET` de la font Google en sandbox est le seul bruit accepté).
5. **Rebuild & deploy** : `cd game3d && npm run build`, puis remplace le contenu de `/docs` par celui de `game3d/dist/` (garde `docs/.nojekyll`).
6. **Mets à jour `AUDIT.md`** : statut de la session → `✅ Fait (AAAA-MM-JJ)`, ligne d'historique, pointeur `NEXT` vers la suite.
7. **Commit + push sur `main`**, puis compte-rendu concis (diffs, pas de fichiers entiers).
8. S'il ne reste aucune session `⬜` : ne rien coder d'office, proposer la suite et attendre validation.

> ⚠️ **Une session à la fois.** N'enchaîne pas plusieurs sessions dans un même run sans validation explicite.

## 🧭 Règles du projet (garde-fous)
- **Cible mobile & 60 fps** : chaque effet doit être bon marché. Instancing pour ce qui se répète, pas de nouvelles ombres dynamiques, pas de Reflector, drawcalls < 120. Le bloom existant suffit comme post-FX.
- **C'est un cadeau pour des enfants** : difficulté généreuse, échec jamais punitif (filet, respawn doux), lisibilité avant réalisme. La dédicace « Marc & Claire » reste centrale.
- **Le skill = le timing** : toute nouvelle mécanique doit renforcer la boucle balancer → lâcher → voler → rattraper, pas la diluer.
- **Anglais uniquement** dans l'UI du jeu.
- **Ne pas casser** : `window.__game` (harnais de test), la boucle rAF à `dt` clampé, l'architecture modules de `game3d/src/`, le jeu 2D à la racine.
- **Réponses concises** : montre des **diffs**, pas des fichiers entiers.

## ▶️ Commandes
```bash
cd game3d && npm install        # une fois par environnement
npm run dev                     # dev local
npm run build                   # prod → game3d/dist/
node game3d/test/smoke3d.mjs    # test headless WebGL (0 erreur JS + captures dans /home/claude/deliver/)
```
Contrôles : **Space** (desktop) / **tap** (mobile) = lâcher, vrille en vol, pomper en maintenant.

## 🌿 Git
- Source de vérité unique = **`main`**. Les branches `claude/*` héritées sont obsolètes.
- Commits atomiques, message type `Session 3D-N: <titre>` ou `Fix: <quoi>`. **Commit + push à chaque session réussie.**
- Si le push échoue en 401 : l'accès en écriture passe par le PAT d'Emmanuel (voir historique de conversation / variable `GH_TOKEN` d'environnement s'il l'a configurée). Ne jamais laisser le repo dans un état cassé.

## 🗂️ Carte du repo
| Chemin | Rôle |
|---|---|
| `game3d/` | 🚀 **Direction active** : Trapeze Stars 3D. Source `game3d/src/` (`main.js` jeu/état, `scene.js` rendu/bloom, `world.js` décor, `player.js` héros). |
| `docs/` | Build de prod servi par GitHub Pages (`main:/docs`). Régénéré à chaque session (étape 5 du protocole). |
| `index.html` (+ `manifest.json`, `sw.js`, `icon-*.png`) | Jeu canvas 2D original, ✅ terminé, conservé tel quel. |
| `AUDIT.md` | **Le plan** : état, roadmap 3D, détail des sessions, référence technique, historique. |
| `CLAUDE.md` | Ce fichier : le protocole d'auto-avancement. |
| `game3d/test/smoke3d.mjs` | Test headless WebGL (progression via `window.__game`, captures). |
