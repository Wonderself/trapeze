# CLAUDE.md — Autopilote du repo `trapeze`

> Ce fichier est lu **automatiquement** par Claude (Cowork / Claude Code) à l'ouverture du repo.
> Il transforme `trapeze` en projet **auto-avançant** : tu ouvres une session sur le repo, Claude sait
> quoi faire et le fait. Le plan vit dans **`AUDIT.md`**. Ce fichier-ci dit *comment* l'exécuter.

## 🎮 Le projet en une phrase
« Trapeze Stars » — jeu de trapèze offert en cadeau à **Marc & Claire** (des enfants : générosité > punition).
Cinq versions jouables coexistent : **Classic**, **Deluxe**, **City**, **Circus Alzahir 2D** (`2d/`) et la
direction active **Trapeze Stars 3D** (`game3d/`, Three.js + Vite). La racine (`index.html`) est leur
sélecteur central statique et chaque jeu propose un retour **Toutes les versions** — ne pas y remettre de
logique de jeu.

## 🤖 Protocole d'auto-avancement (à exécuter à chaque session, sans attendre d'instruction)
0. **Vérifie Git AVANT toute analyse** (leçon du 2026-07-19 : un clone de session peut être périmé et mono-branche) : exécute `git status --short --branch`, puis `git fetch origin main`. Si l'arbre est propre, passe sur `main` et avance uniquement avec `git pull --ff-only origin main`. S'il contient des changements, préserve-les et inspecte leur provenance avant toute synchronisation. Vérifie enfin `git log --oneline -3`. Ne réécris jamais l'historique et n'utilise jamais `reset --hard` pour « nettoyer » le travail d'une autre session.
1. **Lis `AUDIT.md`** en entier — diagnostic, roadmap, référence technique et prompts y sont. **Ne re-diagnostique pas** le code.
2. Repère dans le **TABLEAU DES SESSIONS** la **première ligne `⬜ À faire`** = la prochaine session. La colonne **« Modèle conseillé »** dit quel modèle Emmanuel doit choisir en ouvrant la session (Fable 5 pour le lourd/délicat, Opus 4.8 pour le moyen bien spécifié, Sonnet 5 pour le léger). Si le modèle courant ne correspond pas, le signaler en une ligne mais **faire la session quand même**.
3. **Exécute-la exactement** comme décrite dans « DÉTAIL DES SESSIONS » (le « Prompt de lancement » est ta feuille de route).
4. **Teste** : `node game3d/test/smoke3d.mjs` (étends-le si la session ajoute des mécaniques) + captures visuelles à vérifier toi-même. Zéro erreur JS tolérée.
5. **Rebuild & deploy** : à la racine, `npm run build`. Cette commande rebuild le 3D, remplace le snapshot statique **`/3d`** par `game3d/dist/`, puis prépare **`/_site`** (ignoré par Git) avec les sept pages publiques. Ne remets jamais de build dans `docs/` : ce dossier contient uniquement la documentation.
6. **Mets à jour `AUDIT.md`** : statut de la session → `✅ Fait (AAAA-MM-JJ)`, ligne d'historique, pointeur `NEXT` vers la suite.
7. **Commit + push sur `main`**. Le workflow `.github/workflows/deploy-pages.yml` rejoue les tests, construit l'artefact complet et ne déploie GitHub Pages que si tout passe. Puis compte-rendu concis (diffs, pas de fichiers entiers).
8. S'il ne reste aucune session `⬜` : ne rien coder d'office, proposer la suite et attendre validation.

> ⚠️ **Une session à la fois.** N'enchaîne pas plusieurs sessions dans un même run sans validation explicite.

## 🧭 Règles du projet (garde-fous)
- **Cible mobile & 60 fps** : chaque effet doit être bon marché. Instancing pour ce qui se répète, pas de nouvelles ombres dynamiques, pas de Reflector, drawcalls < 120. Le bloom existant suffit comme post-FX.
- **C'est un cadeau pour des enfants** : difficulté généreuse, échec jamais punitif (filet, respawn doux), lisibilité avant réalisme. La dédicace « Marc & Claire » reste centrale.
- **Le skill = le timing** : toute nouvelle mécanique doit renforcer la boucle balancer → lâcher → voler → rattraper, pas la diluer.
- **Anglais uniquement** dans l'UI du jeu.
- **Ne pas casser** : `window.__game` (harnais de test), la boucle rAF à `dt` clampé, l'architecture modules de `game3d/src/`, le jeu 2D dans `2d/`, la page de choix à la racine.
- **Réponses concises** : montre des **diffs**, pas des fichiers entiers.

## ▶️ Commandes
```bash
cd game3d && npm install        # une fois par environnement
npm run dev                     # dev local
cd .. && npm run build          # build 3D + snapshot /3d + artefact /_site
npm run test:site               # sept pages, desktop/mobile, liens et réseau
npm run test:sw                 # redéploiement PWA + rechargement hors ligne
node game3d/test/smoke3d.mjs    # test headless WebGL complet
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
| `docs/` | Documentation du projet uniquement. Ce dossier n'est plus une source de publication. |
| `3d/` | Snapshot statique versionné du build 3D, compatible avec un hébergement direct/Coolify. Régénéré par `npm run build`. |
| `_site/` | Artefact local complet, ignoré par Git, généré par `tools/prepare_site.mjs` et publié par GitHub Actions. |
| `2d/` (`index.html` + `manifest.json`, `sw.js`, `icon-*.png`) | Jeu canvas 2D original, ✅ terminé, conservé tel quel. |
| `index.html` (racine) | Page de choix statique des cinq jeux — source de la page d'accueil publiée. |
| `AUDIT.md` | **Le plan** : état, roadmap 3D, détail des sessions, référence technique, historique. |
| `CLAUDE.md` | Ce fichier : le protocole d'auto-avancement. |
| `game3d/test/smoke3d.mjs` | Test headless WebGL (progression via `window.__game`, captures). |
