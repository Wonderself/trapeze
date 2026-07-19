# CLAUDE.md — Autopilote du repo `trapeze`

> Ce fichier est lu **automatiquement** par Claude (Cowork / Claude Code) à l'ouverture du repo.
> Il transforme `trapeze` en projet **auto-avançant** : tu ouvres une session sur le repo, Claude sait
> quoi faire et le fait. Le plan vit dans **`AUDIT.md`**. Ce fichier-ci dit *comment* l'exécuter.

## 🎮 Le projet en une phrase
« Trapeze Stars » — jeu de trapèze offert en cadeau à **Marc & Claire** (des enfants : générosité > punition).
Deux versions coexistent : le **canvas 2D** historique (racine, ✅ terminé, ne plus y toucher) et la direction
active **Trapeze Stars 3D** (`game3d/`, Three.js + Vite), qu'on fait monter en gamme session par session.

## 🤖 Protocole d'auto-avancement (à exécuter à chaque session, sans attendre d'instruction)
0. **Resync git AVANT toute analyse** (leçon du 2026-07-19 : un clone de session peut être périmé et mono-branche, et t'envoyer travailler sur une base morte) :
   `git fetch origin main && git checkout main && git reset --hard origin/main` — puis vérifie avec `git log --oneline -3` que tu vois bien les derniers commits d'`AUDIT.md`. Ne fais **jamais** confiance au listing local des branches ni au `HEAD` fourni par l'environnement. Si l'environnement t'impose une branche de travail `claude/*`, repars quand même de `origin/main` (`git checkout -B <branche-imposée> origin/main`).
1. **Lis `AUDIT.md`** en entier — diagnostic, roadmap, référence technique et prompts y sont. **Ne re-diagnostique pas** le code.
2. Repère dans le **TABLEAU DES SESSIONS** la **première ligne `⬜ À faire`** = la prochaine session. La colonne **« Modèle conseillé »** dit quel modèle Emmanuel doit choisir en ouvrant la session (Fable 5 pour le lourd/délicat, Opus 4.8 pour le moyen bien spécifié, Sonnet 5 pour le léger). Si le modèle courant ne correspond pas, le signaler en une ligne mais **faire la session quand même**.
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
- Source de vérité unique = **`main`**. Les branches `claude/*` héritées sont obsolètes (dont `claude/derniere-session-3d-72w49o` : passe pseudo-3D du 2D sur base périmée, archivée, à ne pas merger).
- Commits atomiques, message type `Session 3D-N: <titre>` ou `Fix: <quoi>`. **Commit + push à chaque session réussie.**
- Si le push échoue en 401 : l'accès en écriture passe par le PAT d'Emmanuel (voir historique de conversation / variable `GH_TOKEN` d'environnement s'il l'a configurée). Ne jamais laisser le repo dans un état cassé.
- **Si le push sur `main` échoue définitivement** : pousse la branche de travail ET écris son nom dans le bloc `NEXT` d'`AUDIT.md`… que tu ne peux alors pas pousser non plus — donc dis-le clairement à Emmanuel en fin de session (« la session N est sur la branche X, à merger »). C'est exactement ce qui n'a pas été fait pour la 3D-3, devenue une session fantôme retrouvée par hasard le 2026-07-19. La toute première action de l'Étape 0 (`git fetch` + lecture d'`AUDIT.md` depuis `origin/main`) est le filet de sécurité contre ce scénario.

## 🗂️ Carte du repo
| Chemin | Rôle |
|---|---|
| `game3d/` | 🚀 **Direction active** : Trapeze Stars 3D. Source `game3d/src/` (`main.js` jeu/état, `scene.js` rendu/bloom, `world.js` décor, `player.js` héros). |
| `docs/` | Build de prod servi par GitHub Pages (`main:/docs`). Régénéré à chaque session (étape 5 du protocole). |
| `index.html` (+ `manifest.json`, `sw.js`, `icon-*.png`) | Jeu canvas 2D original, ✅ terminé, conservé tel quel. |
| `AUDIT.md` | **Le plan** : état, roadmap 3D, détail des sessions, référence technique, historique. |
| `CLAUDE.md` | Ce fichier : le protocole d'auto-avancement. |
| `game3d/test/smoke3d.mjs` | Test headless WebGL (progression via `window.__game`, captures). |
