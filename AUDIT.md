# 📊 AUDIT — Trapeze Stars (trapeze)
Dernière mise à jour : 2026-07-18 — Repo consolidé sur `main` (source de vérité unique).

<!-- ═══ NEXT (lu par CLAUDE.md pour l'auto-avancement) ═══
PLAN CANVAS (2D) : ✅ terminé (Sessions 1 & 2).
NOUVELLE DIRECTION ACTIVE : refonte 3D « Trapeze Stars 3D » (Three.js + Vite) dans `game3d/` — verrous monofichier/no-build levés par Emmanuel pour viser une meilleure qualité.
ÉTAT 3D : base jouable livrée (arène de cirque, physique de trapèze en arc assisté, perso Marc/Claire, contrôles clavier+tactile, bloom, PWA, build → docs/). À itérer : 2e perso jouable en jeu, mondes/thèmes, plus de polish & feel, audio.
════════════════════════════════════════════════════════ -->

> 🤖 **Auto-avancement** : ce repo est piloté par `CLAUDE.md`. À l'ouverture, Claude lit ce fichier,
> exécute la **première session `⬜ À faire`** du tableau ci-dessous, teste, met à jour l'historique, puis commit+push.

## 🚦 OÙ ON EN EST
- État global : 🟢 **cadeau prêt** — les 2 sessions du plan sont faites
- Score santé : 9/10
- Session 1 (jouabilité) **terminée** : vitesse fixe 60 Hz, musique infinie, fichier unique, UI anglais, pause auto, bloom adaptatif.
- Session 2 (beauté & cadeau) **terminée** : écran-titre cinématique + dédicace « Starring MARC & CLAIRE — young champions », game feel (hit-stop, traînée, `navigator.vibrate`, transitions de monde), polish (anneaux/barres lumineux, parallaxe, HUD arrondi), **PWA installable** (manifest + service worker cache-first + icônes 192/512), « Made with ❤ for Marc & Claire » dans la finale.
- ⚠️ Le cœur du jeu est riche (trapèze, 4 mondes, musique générative, persos Marc & Claire) — ne pas casser l'existant.
- 💡 Piste esthétique repérée (hors périmètre S2, non-régression) : en grappe dense, les étoiles à collecter (`stItems`, rendu inchangé depuis l'origine) se lisent comme des bandes jaunes ; candidate à une future P8 « rendu des étoiles à collecter ».

## 🎯 DÉCISIONS VALIDÉES (réponses du 2026-07-12)
- Cible principale : **téléphones** (Marc & Claire jouent sur mobile).
- Fichier unique : **`index.html`** — `trapeze-stars-v2.html` sera supprimé.
- Langue : **tout en anglais** (UI, textes, dédicace).
- Format : **2 grosses sessions** — 1) jouabilité, 2) beauté + cadeau.

## 🗓️ TABLEAU DES SESSIONS
| # | Session | Objectif (1 ligne) | Modèle conseillé | Coût tokens | Durée est. | Statut |
|---|---------|--------------------|------------------|-------------|------------|--------|
| 1 | Jouabilité & fondations | Jeu fluide sur tout écran, musique infinie, 1 seul fichier, UI anglaise | Sonnet | 🔴 | ~60-90 min | ✅ Fait (2026-07-13) |
| 2 | Beauté & cadeau | Écran titre dédicace Marc & Claire, game feel ++, PWA installable | Sonnet | 🔴 | ~60-90 min | ✅ Fait (2026-07-18) |

Légende coût : 🟢 léger · 🟡 moyen · 🔴 lourd (à faire en début de fenêtre de quota)

## 💡 PROPOSITIONS À VALIDER (avant implémentation)
- **P1 — Vitesse indépendante de l'écran** : boucle à pas fixe (delta-time). Sur iPhone/Android 120 Hz le jeu tourne 2× trop vite aujourd'hui. Bénéfice : jouable partout, même feeling pour tous. → ✅ Validé (Session 1)
- **P2 — Fichier unique `index.html`** : suppression du doublon `trapeze-stars-v2.html` (117 Ko identiques). Bénéfice : plus de double maintenance, prêt pour GitHub Pages. → ✅ Validé (Session 1)
- **P3 — UI 100 % anglais** : titre, boutons (GRAB, Menu), médailles, astuces, menus. Bénéfice : cohérence (fini le mélange hébreu/français). → ✅ Validé (Session 1)
- **P4 — Écran titre « cadeau »** : dédicace animée pour Marc & Claire (« champions »), portraits mis en valeur, entrée cinématique. Bénéfice : l'effet waouh à l'ouverture du cadeau. → ✅ Validé (Session 2)
- **P5 — PWA installable hors-ligne** : manifest + service worker + icône. Bénéfice : le jeu s'installe sur l'écran d'accueil de leurs téléphones et marche sans internet. → ❓ En attente
- **P6 — Pack game feel** : hit-stop à l'impact, traînées lumineuses en pirouette, transitions de monde cinématiques, vibration (`navigator.vibrate`) sur mobile. Bénéfice : sensations « jeu pro ». → ❓ En attente (inclus par défaut en Session 2 si validé)
- **P7 — Difficulté adaptative réactivée** : le code DDA existe mais n'est jamais alimenté. Le brancher = le jeu s'adoucit après plusieurs morts. Bénéfice : moins de frustration pour des enfants. → ❓ En attente

## 📝 DÉTAIL DES SESSIONS

### Session 1 — Jouabilité & fondations (Sonnet, 🔴)
**Ce qu'on fait** (tout dans `index.html`, ~1604 lignes, jeu monofichier Canvas 2D) :
1. **Delta-time** : `loop()` (ligne ~1481) appelle `update()` une fois par frame d'affichage. Passer à un pas fixe 60 Hz avec accumulateur (`STEP=1000/60`, plafonner l'accumulateur à ~5 steps pour éviter la spirale), rendu une fois par rAF. Toute la physique (constantes GRV, JP, timers en frames) reste inchangée — seul le cadencement change.
2. **Musique infinie** : `playCircus/playJungle/playBeach/playFutur` (lignes ~213-239) programment un nombre fixe de boucles (12/36/10/20) puis silence. Mémoriser la durée programmée et relancer automatiquement (re-scheduling avant la fin).
3. **Bug particules legsault** : `spawnStarPts(x,y,col)` (ligne 372) est appelée avec `(x,y,6,'#FFD700')` ligne ~1119 et `(x,y,'#7ecbff',5)` ligne ~1309. Normaliser la signature en `(x,y,col,count=12)` et corriger les 4 appels.
4. **Pause auto** : sur `visibilitychange`, mettre le jeu en pause (état `paused` + reprise au tap) et couper/reprendre la musique. Aujourd'hui on meurt en arrière-plan.
5. **Suppression du doublon** : `git rm trapeze-stars-v2.html`.
6. **UI anglaise** : titre (`<title>`), bouton SAISIR→GRAB, « ← Menu », astuces (#hint), médailles (ארד/כסף/זהב/יהלום → Bronze/Silver/Gold/Diamond), textes de menus/game over/cérémonie, `lang="en"` et suppression des attributs RTL devenus inutiles.
7. **Nettoyage** : unifier les deux systèmes d'étoiles de fin de niveau (`lc.stars` basé score, ligne ~266, vs `lcStars` basé vies, ligne ~1368 — garder le basé-vies, plus lisible pour des enfants) ; supprimer ou brancher le DDA mort (`consecutiveDeaths`/`ddaEasing`, ligne 183) selon P7 ; consolider les 2 couches d'input clavier (K/JP2 ligne 289 + listener ligne 1520).
8. **Perf mobile** : `drawBloom()` (ligne 117) utilise `ctx.filter='blur()'` — ignoré sur Safari < 18 et coûteux ailleurs. Feature-detect ; si absent ou si FPS < 45, désactiver le bloom (le jeu reste beau grâce au grain + vignette).

**Fichiers touchés** : `index.html` (suppression `trapeze-stars-v2.html`), `AUDIT.md`.

**Critère de réussite** :
- Même vitesse de jeu constatée sur écran 60 Hz et 120 Hz (ou via `chrome://flags` throttle).
- Musique encore audible après 3 minutes de jeu.
- Étoiles dorées visibles pendant le legsault.
- Un seul fichier HTML dans le repo ; zéro texte hébreu/français dans l'UI.
- Le jeu se met en pause quand on change d'onglet.

**Prompt de lancement prêt à copier :**
> Lis AUDIT.md (racine du repo trapeze) — ne relis PAS tout index.html, les numéros de lignes et le diagnostic y sont déjà. Exécute la **Session 1 — Jouabilité & fondations** exactement comme décrite : (1) boucle à pas fixe 60 Hz avec accumulateur dans `loop()` sans toucher aux constantes physiques, (2) musique en boucle infinie par re-scheduling, (3) fix signature `spawnStarPts(x,y,col,count=12)` + ses 4 appels, (4) pause auto sur `visibilitychange` avec reprise au tap, (5) `git rm trapeze-stars-v2.html`, (6) toute l'UI en anglais (`lang="en"`, GRAB, Bronze/Silver/Gold/Diamond, hints, menus, game over), (7) unifier les étoiles de fin de niveau sur le système basé-vies et supprimer le DDA mort, consolider l'input clavier sur K/JP2, (8) désactiver le bloom si `ctx.filter` non supporté. Teste en ouvrant le jeu (canvas 800×450, contrôles: Space=saut, F/Z/Shift=grab, flèches=déplacement). À la fin : mets à jour AUDIT.md (statut Session 1 → ✅ + historique), commit et push. Réponds de façon concise, montre des diffs, pas des fichiers entiers.

### Session 2 — Beauté & cadeau (Sonnet, 🔴)
**Ce qu'on fait** :
1. **Écran titre dédicace** : refonte de `drawMenu()`/`initMenu()` (lignes ~1384-1453). Séquence d'ouverture : rideau de cirque qui s'ouvre, projecteurs qui balayent, titre « TRAPEZE STARS » en lettres lumineuses, puis « Starring MARC & CLAIRE — young champions » avec les deux portraits (`drawMarc` ligne 381, `drawClaire` ligne 464) en grand, sous les projecteurs, qui saluent. Sélection du perso = son portrait s'illumine.
2. **Game feel pack (P6)** : hit-stop 3-4 frames à la perte de vie et au passage d'anneau en combo ; traînée arc-en-ciel pendant pirouette/legsault (P.trail existe déjà, ligne ~1203 — l'exploiter au rendu) ; `navigator.vibrate` court sur saut/grab/hit (Android) ; transition cinématique entre mondes (fondu + annonce « World 2 — Jungle » plein écran).
3. **Polish visuel** : anneaux avec lueur pulsante et étincelles au passage ; barres de trapèze avec surbrillance quand attrapables (barReady existe déjà dans THEMES, ligne 158 — le rendre plus visible) ; fond : couche de parallaxe supplémentaire par monde ; HUD arrondi semi-transparent plus lisible sur mobile.
4. **PWA (P5, si validé)** : `manifest.json` + icône dessinée en canvas exportée en data-URI ou fichier PNG 512×512 + `sw.js` cache-first (2 fichiers à cacher seulement). Bandeau discret « Add to Home Screen » sur mobile.
5. **Écran de fin dédicace** : dans `drawFinale()` (ligne ~977), ajouter un message final « Made with ❤ for Marc & Claire ».

**Fichiers touchés** : `index.html`, `manifest.json` (nouveau), `sw.js` (nouveau), icône (nouveau), `AUDIT.md`.

**Critère de réussite** :
- L'ouverture du jeu fait « waouh » : rideau, projecteurs, noms de Marc & Claire à l'écran.
- Chaque figure (pirouette, legsault, combo) a un retour visuel/haptique net.
- Le jeu s'installe sur l'écran d'accueil d'un téléphone et se lance hors-ligne (si P5 validé).
- 60 fps stables sur mobile milieu de gamme (vérifier que les nouveaux effets ne coûtent pas plus que le bloom retiré).

**Prompt de lancement prêt à copier :**
> Lis AUDIT.md (racine du repo trapeze) — la Session 1 est terminée, ne re-diagnostique pas. Exécute la **Session 2 — Beauté & cadeau** exactement comme décrite : (1) écran titre cinématique avec rideau qui s'ouvre, projecteurs, et dédicace « Starring MARC & CLAIRE — young champions » avec leurs portraits en grand (réutilise drawMarc/drawClaire), (2) game feel pack : hit-stop, traînée arc-en-ciel en pirouette (P.trail existe déjà), navigator.vibrate, transitions de monde cinématiques, (3) polish : anneaux lumineux pulsants, barres attrapables plus visibles, parallaxe supplémentaire, HUD mobile plus lisible, (4) PWA : manifest.json + icône 512 + sw.js cache-first + hint d'installation, (5) « Made with ❤ for Marc & Claire » dans la finale. Contrainte : 60 fps sur mobile — chaque effet ajouté doit être bon marché (pas de nouveau ctx.filter par frame). Teste visuellement l'écran titre et une partie complète. À la fin : mets à jour AUDIT.md (statut Session 2 → ✅ + historique), commit et push. Réponds concis, diffs seulement.

## 🔍 RÉFÉRENCE TECHNIQUE (pour ne pas relire le code)
- **Stack** : 1 fichier `index.html` (~1650 lignes après Session 1), HTML5 Canvas 2D 800×450, WebAudio génératif, zéro dépendance, zéro build. Pilotage auto via `CLAUDE.md`. PWA à ajouter en Session 2.
- ⚠️ Les numéros de ligne ci-dessous sont ceux d'**avant Session 1** (± quelques dizaines de lignes depuis) : à utiliser comme repères, pas comme adresses exactes.
- **Architecture interne** : états `gs` = menu / playing / levelcomplete / ceremony / finale / gameover (boucle ligne 1481). Thèmes dans `THEMES` (ligne 157). Génération procédurale par chunks (`genChunk` ligne 343). Joueur `P` (ligne 295), pendule de trapèze (`updatePendulum` ligne 1140), squash/stretch (`SQ` ligne 298). Persos : `drawMarc` (381), `drawClaire` (464). High score : localStorage clé `tse5_hs`.
- **Contrôles actuels** : desktop = Space/↑/W saut, F/Z/Shift grab, ←→/AD déplacement ; mobile = boutons ◀▶ + ⚡ (saut) + GRAB, tap canvas = saut, swipe bas = grab. Cheat : 5 taps coin haut-gauche en 3 s → finale.
- **Bugs connus corrigés en Session 1** : voir détail Session 1 (delta-time, musique, spawnStarPts, doublon, pause, langues, lc.stars/lcStars, DDA mort, bloom Safari).

## ✅ HISTORIQUE
- [2026-07-12] Audit complet terminé (Fable 5) — 4 bugs critiques identifiés, décisions validées (mobile d'abord, fichier unique, anglais, 2 sessions), plan en 2 sessions rédigé.
- [2026-07-13] Session 1 terminée (Sonnet) — jeu à vitesse fixe 60 Hz (indépendante de l'écran), musique en boucle infinie, `trapeze-stars-v2.html` supprimé, UI 100% anglais, pause automatique en arrière-plan, bloom désactivé automatiquement si FPS bas. Bonus : un crash bug critique trouvé et corrigé (variable `flashN` inexistante plantait l'écran Game Over — le jeu se figeait après 3 morts). Testé en navigateur headless : jeu jouable, aucune erreur console, écran Game Over ne plante plus, pause/reprise fonctionnent. Prochaine étape : Session 2 (beauté & cadeau).
- [2026-07-18] Repo rendu « Cowork-ready » (Opus) — consolidation sur `main` (source de vérité unique), ajout de `CLAUDE.md` (protocole d'auto-avancement : lire AUDIT.md → exécuter la prochaine session → tester → mettre à jour → commit+push), `AUDIT.md` optimisé (pointeur NEXT machine-lisible).
- [2026-07-18] Session 2 terminée (Opus, via agent d'implémentation) — (1) écran-titre cinématique : rideau, projecteurs, titre lumineux, dédicace « Starring MARC & CLAIRE — young champions » avec portraits agrandis, sélection perso illuminée, anim d'intro skippable ; (2) game feel : hit-stop 3-4 frames (dans `tick()`, préserve le pas fixe), traînée (retravaillée : ruban discret en l'air/figure, plus de blob à l'arrêt), `navigator.vibrate` guardé sur saut/grab/hit, transition de monde (bannière « World N — … ») ; (3) polish : anneaux/barres à lueur pulsante, parallaxe supplémentaire, HUD arrondi semi-transparent ; (4) PWA : `manifest.json`, `sw.js` cache-first versionné (guardé `if('serviceWorker' in navigator)`), icônes `icon-192/512.png`, bandeau « Add to Home Screen » ; (5) « Made with ❤ for Marc & Claire » dans `drawFinale()`. Test headless Playwright (`test/smoke.mjs`) : 0 erreur JS/console (seul un `ERR_CONNECTION_RESET` sur la font Google en sandbox, sans impact), manifest valide, service worker enregistré, captures écran-titre + gameplay OK. Le plan est terminé.
- [2026-07-18] 🚀 Nouvelle direction : **Trapeze Stars 3D** (Opus) — Emmanuel a levé les verrous « monofichier / zéro-dépendance / zéro-build » pour viser une meilleure qualité. Nouveau projet **Three.js + Vite** dans `game3d/` : arène de cirque 3D (piste, gradins instanciés, projecteurs animés, guirlandes, starfield, bloom), physique de trapèze (pendule → lâcher au bon moment → **arc assisté** garanti → rattrapage, ou chute si mistimé), perso stylisé Marc/Claire, étoiles à collecter, combos, 3 vies, écran-titre dédicace + écran de fin « Made with ❤ for Marc & Claire », contrôles clavier (Space) + tactile (tap). PWA (manifest + sw). Testé en headless WebGL (Chromium swiftshader) : WebGL OK, progression vérifiée (score/barres qui montent), 0 erreur JS. Build de prod copié dans `docs/` pour GitHub Pages. Le jeu canvas 2D reste intact à la racine (`index.html`). À itérer ensuite : sélection perso appliquée en jeu, thèmes/mondes, feel & polish, audio.
