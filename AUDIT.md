# 📊 AUDIT — Trapeze Stars (trapeze)
Dernière mise à jour : 2026-07-19 — Direction active : **Trapeze Stars 3D** (`game3d/`, Three.js + Vite).

<!-- ═══ NEXT (lu par CLAUDE.md pour l'auto-avancement) ═══
PROCHAINE SESSION : Session 3D-4 — Addiction & rétention  (statut ⬜ À faire)
ACTION : exécuter la Session 3D-4 telle que décrite plus bas, tester (node game3d/test/smoke3d.mjs + captures),
rebuild → copier game3d/dist/ vers docs/, mettre à jour ce fichier, commit + push sur main.
════════════════════════════════════════════════════════ -->

> 🤖 **Auto-avancement** : ce repo est piloté par `CLAUDE.md`. À l'ouverture, Claude lit ce fichier,
> exécute la **première session `⬜ À faire`** du tableau, teste, met à jour l'historique, puis commit+push.
> **Une session à la fois.**

## 🚦 OÙ ON EN EST
- Jeu **canvas 2D** (racine, `index.html`) : ✅ terminé et conservé (Sessions 1 & 2 — jouabilité + cadeau).
- Jeu **3D** (`game3d/`) : 🟢 **jouable + beau** — arène sous chapiteau, pendule → lâcher noté → arc → rattrapage, combos, tricks, étoiles/anneaux, 3 vies, menu podium 3D, PWA, build → `docs/` (GitHub Pages).
- Objectif validé par Emmanuel (2026-07-18) : rendre le 3D **génial et addictif** — jouabilité d'abord, puis beauté, diversité, rétention. Verrous monofichier/no-build levés.
- Ce qui manque au 3D aujourd'hui (diagnostic honnête, mis à jour) :
  1. ~~Zéro skill réel~~ ✅ réglé en 3D-1 (timing gradé PERFECT/GOOD/OK, tricks, pompage).
  2. ~~Variété encore limitée~~ ✅ réglé en 3D-3 (4 mondes Cirque/Jungle/Plage/Espace, 1 mécanique par monde, filet bonus, transitions).
  3. ~~Feel plat~~ ✅ réglé en 3D-1 (slow-mo, trail, confettis, caméra vivante) — reste l'**audio** (→ 3D-4).
  4. ~~Beauté perfectible~~ ✅ réglé en 3D-2 (chapiteau rayé complet, mât/piste, persos Marc/Claire différenciés + animés, menu podium 3D tournant, rideau, rim light, sol réfléchissant léger).
  5. **Zéro rétention** : pas de high score sauvegardé, pas de médailles, pas de mode infini (→ 3D-4).

## 🗓️ TABLEAU DES SESSIONS (roadmap 3D)
| # | Session | Objectif (1 ligne) | Coût | Durée est. | Statut |
|---|---------|--------------------|------|------------|--------|
| 3D-1 | Jouabilité & game feel | Le timing devient un vrai skill (Perfect/Good/OK), tricks aériens, slow-mo, caméra vivante, particules, trail | 🔴 | ~60-90 min | ✅ Fait (2026-07-18) |
| 3D-2 | Beauté & identité | Chapiteau complet, matériaux riches, Marc/Claire différenciés et animés, menu 3D podium | 🔴 | ~60-90 min | ✅ Fait (2026-07-18) |
| 3D-3 | Diversité & mondes | 4 mondes (Cirque/Jungle/Plage/Espace) + 1 mécanique nouvelle par monde, transitions | 🔴 | ~60-90 min | ✅ Fait (2026-07-19) |
| 3D-4 | Addiction & rétention | Audio complet, high score + médailles + best combo persistés, mode infini avec montée en difficulté | 🟡 | ~45-60 min | ⬜ À faire |

Légende coût : 🟢 léger · 🟡 moyen · 🔴 lourd (à faire en début de fenêtre de quota)

## 📝 DÉTAIL DES SESSIONS

### Session 3D-1 — Jouabilité & game feel (🔴) — LE CŒUR
**Principe directeur** : le fun d'un jeu de trapèze = *la tension du timing*. Le lâcher doit récompenser la précision, pas être automatique.

**Ce qu'on fait** (tout dans `game3d/src/`, principalement `main.js`) :
1. **Timing gradé** : dans `release()` (~l.110), remplacer le seuil binaire `omega > 0.25` par une note de timing basée sur la proximité du pic d'énergie avant (`omega` max au passage du point bas, idéal = lâcher entre le point bas et ~60% de la montée avant). 3 grades : **PERFECT** (fenêtre serrée, ~±8%), **GOOD** (~±25%), **OK** (le reste du balancer avant). Effets : PERFECT → arc rapide + slow-mo 0.35× pendant 0.4 s au moment du catch + « PERFECT! » doré plein écran + ×2 sur le gain ; GOOD → arc normal ; OK → arc plus lent et plus bas, catch *in extremis* (frisson). Lâcher en arrière = chute (comme aujourd'hui `fumble`).
2. **Tricks aériens** : pendant `fly`, un tap/Space supplémentaire déclenche une **vrille** (accélère `G.spin`, pose tuck). Chaque vrille complète bouclée avant le catch = +50 × combo, affiché « FLIP +50 ». Risque/récompense : une vrille entamée non finie au catch → catch quand même mais bonus perdu (pas de punition dure, c'est pour des enfants).
3. **Pompage du balancer** : maintenir le doigt/Space appuyé pendant `swing` augmente doucement l'amplitude cible (AMP 0.85 → 1.25) ; amplitude plus grande = arc plus long possible → nécessaire pour les barres éloignées (voir §5).
4. **Caméra vivante** : kick de FOV (58→64, retour élastique) au lâcher ; micro screen-shake (0.15 s) au fumble ; pendant le slow-mo PERFECT, la caméra se rapproche légèrement (dolly-in 10%). Garder le lissage lerp actuel.
5. **Variété du rail** : générer les barres avec espacement variable (4.5–7.5) et hauteur de pivot variable (PY ±1.2). Les barres éloignées exigent pompage + PERFECT. Ajouter 2-3 **anneaux bonus** flottants sur les arcs (passer au travers = +75, particules).
6. **Particules & trail** : trail rubané derrière le héros en vol (THREE.Points ou ribbon simple, teinte arc-en-ciel pendant vrille) ; burst de confettis au catch (20-30 particules, couleurs des guirlandes) ; poussière d'étoiles au ramassage.
7. **HUD feel** : le score « pop » (scale 1→1.25→1) à chaque gain ; compteur de combo permanent visible dès x2 avec petite jauge de temps avant expiration (le combo retombe si > 6 s sans catch — nouvelle règle, ajoute de l'urgence douce).

**Ne pas toucher** : la boucle rAF + `dt` clampé, l'architecture modules, le `window.__game` de test (l'**étendre** : exposer `grade` du dernier catch et `tricks`).
**Critères de réussite** (headless `smoke3d.mjs` enrichi) : (a) un lâcher au pic avant → grade PERFECT constaté dans `__game.state()` ; (b) un lâcher très tôt → OK ou fumble ; (c) une vrille déclenchée en vol → bonus compté ; (d) partie complète gagnable ; (e) 0 erreur JS ; (f) captures : slow-mo PERFECT visible (texte à l'écran), trail en vol.

**Prompt de lancement prêt à copier :**
> Lis AUDIT.md (racine du repo trapeze) — ne re-diagnostique pas. Exécute la **Session 3D-1 — Jouabilité & game feel** exactement comme décrite : timing gradé PERFECT/GOOD/OK dans release(), tricks aériens (tap en vol = vrille bonus), pompage du balancer (appui maintenu), caméra vivante (FOV kick, shake, dolly slow-mo), rail varié (espacement/hauteur variables + anneaux bonus), trail + confettis + star dust, HUD pop + combo à expiration 6 s. Étends window.__game (grade, tricks) et le test headless pour vérifier les critères (a)-(f). Rebuild → copie dist/ vers docs/. Mets à jour AUDIT.md (statut 3D-1 → ✅ + historique), commit, push. Réponds concis, diffs seulement.

### Session 3D-2 — Beauté & identité (🔴)
1. **Chapiteau complet** : parois cylindriques rayées rouge/crème en dégradé sombre, plafond conique avec mât central, entrée lumineuse au fond ; le starfield reste visible par l'ouverture du toit. Matériaux : toile légèrement rugueuse, piste avec disque central brillant.
2. **Marc & Claire vraiment différenciés** : coiffures distinctes (mèches/couettes), tenues détaillées (cape courte pour Marc, tutu pour Claire), visages plus expressifs (sourire, joues) ; anim : jambes battantes en swing (déjà), bras tendus en vol, salut au catch PERFECT.
3. **Menu podium 3D** : remplacer les pastilles 2D par les deux persos 3D sur un podium tournant sous projecteur, celui sélectionné salue ; rideau 3D qui s'ouvre au premier affichage.
4. **Éclairage/matériaux** : env. de teinte par zone, rim light des persos, sol réfléchissant léger (MeshStandardMaterial metalness/roughness ajustés — PAS de Reflector coûteux).
**Budget perf** : 60 fps mobile → pas de nouvelles ombres dynamiques au-delà de l'existant, instancing pour tout ce qui se répète, drawcalls < 120.
**Critères** : captures avant/après nettes ; 0 erreur JS ; le menu montre les persos 3D animés.

### Session 3D-3 — Diversité & mondes (🔴)
1. **4 mondes** de 12-14 barres enchaînés : Cirque (actuel) → **Jungle** (lianes à la place des cordes, feuillage, lucioles, vert/or) → **Plage** (coucher de soleil, palmiers, mouettes, sable) → **Espace** (néon, gravité de vol réduite −20%, étoiles filantes). Palette lumière + fog + props par monde ; bannière de transition « World 2 — Jungle » + fondu.
2. **1 mécanique par monde** : Jungle = barres qui *avancent/reculent* lentement (±1.5 sur X) ; Plage = rafales de vent visibles (particules) qui poussent l'arc (compensable à la vrille) ; Espace = gravité réduite + anneaux en mouvement.
3. **Filet bonus** : sous chaque monde, à mi-hauteur de chute, un filet *une fois par monde* rattrape le héros (rebond, pas de vie perdue, « SAVED BY THE NET! ») — généreux pour des enfants.
**Critères** : les 4 mondes traversables d'affilée en headless ; captures de chaque monde ; 0 erreur JS.

### Session 3D-4 — Addiction & rétention (🟡)
1. **Audio** : musique WebAudio générative par monde (réutiliser l'approche du jeu 2D : `playCircus/playJungle/...` adaptables) + SFX (woosh au lâcher, ding au catch, fanfare PERFECT, applaudissements au monde bouclé).
2. **Persistance** (localStorage `ts3d_*`) : high score, meilleur combo, médailles par monde (Bronze/Silver/Gold/Diamond selon score), affichés au menu.
3. **Mode infini** : après le monde 4, boucle avec vitesse de balancer +5%/monde et fenêtre PERFECT −5% (plancher raisonnable) ; le « run » devient le cœur addictif.
4. **Écran de fin enrichi** : récap étoiles/combos/médaille + « Made with ❤ for Marc & Claire » + bouton replay immédiat (< 1 s pour relancer — crucial pour l'addictivité).
**Critères** : reload → high score conservé ; mode infini atteint en headless ; 0 erreur JS.

## 🔍 RÉFÉRENCE TECHNIQUE (game3d/ — pour ne pas relire le code)
- **Stack** : Three.js 0.160 + Vite 5, modules dans `game3d/src/` : `main.js` (état `G`, physique pendule `stepBar`, `release()`, arc assisté kinématique `flyFrom/flyTo/flyT`, caméra, boucle, UI DOM, **menu podium 3D** `menuGroup`/`turntable`/`menuHeroes`/`curtain`, **filets** `nets[]`, **rafales** `updateWind`, `window.__game` pour tests) ; `scene.js` (renderer, ACES, bloom UnrealBloomPass 0.7/0.85/0.82, rim light froide + fill chaud — expose `ambient/key/rim/fill` pour le mood) ; `world.js` (**4 mondes** : chapiteau complet sur son segment (parois/toit rayés `stripeTexture`, mât, arche de sortie, piste, foule+fanions InstancedMesh, spots), **Jungle** arbres/lianes/lucioles, **Plage** soleil couchant émissif + mer + palmiers + mouettes battantes, **Espace** grille néon additive + 5 portes toriques néon + planète annelée + étoiles filantes ; **`applyMood(stage,x)`** = blend fog/bg/hémisphère/key par smoothstep ±4 autour de chaque frontière ; `update(t)`) ; `player.js` (héros low-poly différenciés, `poseHero` états swing/fly/salute/idle).
- **Mondes (3D-3)** : `BARS_PER_WORLD=12`, `NWORLDS=4` → `NBARS=48` ; `worldSegs[]` = bornes X à mi-chemin entre mondes ; premier bar de chaque monde à `PY0` (entrée douce). Espacement par monde : Cirque/Espace 4.5–7.5, **Jungle 4.2–5.6** (ses barres dérivent en X : `mv≈±1.0`, suivi de cible en vol → toujours rattrapable), **Plage 4.5–6.5** (rafales `G.wind` sinusoïdales ; en vol `G.windOff` dérive l'arc, vrille = dérive ×0.3, catch raté si `|windOff|>1.35` → « GUSTED! »). **Espace** : `flyDur ×1.25`, `reach ×1.12`, chute `GF×0.8`, anneaux bonus oscillants en Y. **Filet bonus** : 1 par monde à `NET_Y=-3.6`, rebond sans perte de vie (« SAVED BY THE NET! »), opacité 0.1 une fois utilisé. Bannière DOM `#banner` « World N — Nom » au premier catch du monde + `#worldTag` sous le score + `#windTag` 💨.
- **Constantes clés** (`main.js` haut de fichier) : `PY0=6.2` (pivot, varié ±1.2 par barre), `L=3.3`, `AMP_MIN/MAX=0.85/1.25` (pompage), `NBARS=48` (4×12, seed LCG déterministe), `MISS_Y=-7`, `NET_Y=-3.6`, `COMBO_TIME=6`.
- **Contrôles (depuis 3D-1)** : *maintenir* = s'accrocher & pomper, *relâcher* = lâcher la barre, *tap en vol* = vrille. `releaseBar()` note le timing (`diff = |θ−0.45·amp|/amp`) : PERFECT <0.12 (arc 0.6 s, portée 5.0, gain ×2, slow-mo 0.35× au catch), GOOD <0.35 (0.75 s, 4.2), OK sinon (0.95 s, 3.0) ; portée ×(0.85+pompage×0.3) ; cible hors de portée → arc court puis chute (« TOO FAR! »). Arrière/faible → fumble.
- **États** : `G.mode` menu/playing/win/over ; `G.state` swing/fly/fumble. Le choix Marc/Claire est appliqué en jeu (`rebuildHero`).
- **Harnais** : `window.__game` = `start(char)`, `down()`, `up()`, `action()` (tap), `pick(char)` (sélection menu), **`warp(i)`** (téléporte sur la barre i, caméra recalée — pour captures/tests), `state()` → {mode, state, active, score, lives, combo, grade, flips, flipBonus, theta, omega, amp, timeScale, hero, **world, worldName, netSaves, wind, windOff**}, `menu()` → {podium, heroes, curtainOpen, char}. `?lowfx` dans l'URL = rendu sans bloom (fallback GPU lents + accélère le headless).
- **UI** : DOM overlay (`#hud #menu #over #combo #tapBtn #flash`), police Fredoka.
- **Build/deploy** : `cd game3d && npm install && npm run build` → copier `dist/` → `/docs` (+ `.nojekyll`). GitHub Pages sert `main:/docs` (à activer côté GitHub par Emmanuel : Settings → Pages → main /docs → l'URL sera `https://wonderself.github.io/trapeze/`).
- **Test headless** : `node game3d/test/smoke3d.mjs` (Chromium swiftshader flags déjà dans le script). **Agnostique env.** : résout Playwright (`PLAYWRIGHT_PATH` ou candidats globaux), `dist/` relatif au script, captures dans `DELIVER_DIR` (défaut `/home/claude/deliver`, fallback `game3d/test/out/`). Vérifie WebGL, menu 3D, progression via `__game`, erreurs console. Critères 3D-1 (a)-(f) + 3D-2 (g) menu + **3D-3 (h) filet 1×/monde, (i) captures des 4 mondes via `warp`, (d) traversée intégrale des 4 mondes en lowfx (bot : pompe + lâcher proche idéal + vrille en Plage)** → EXIT 0. ⏱ la traversée complète prend plusieurs minutes.
- **Jeu 2D** (racine) : intact, PWA propre, ne plus y toucher sauf demande.

## ✅ HISTORIQUE
- [2026-07-19] Session 3D-3 ✅ (Fable 5) — **diversité & mondes** : rail porté à 48 barres = 4 mondes de 12 (Cirque → Jungle → Plage → Espace), chapiteau resserré sur son segment avec arche de sortie, sols par monde. **Jungle** : lianes vertes, arbres, lucioles additifs, barres qui dérivent en X (suivi de cible en vol pour rester généreux). **Plage** : coucher de soleil émissif + halo, mer, palmiers, mouettes battantes, rafales de vent visibles (streaks) qui poussent l'arc — la vrille réduit la dérive ×0.3, « GUSTED! » si la rafale gagne. **Espace** : gravité de vol réduite (arcs ×1.25, portée ×1.12, chute ×0.8), grille néon, 5 portes toriques néon, planète annelée, étoiles filantes, anneaux bonus oscillants. **Filet bonus** 1×/monde (« SAVED BY THE NET! », rebond sans perte de vie, filet grisé ensuite). Transitions : `applyMood` blende fog/fond/lumières autour de chaque frontière + bannière « World N — Nom » + tag de monde au HUD. Harnais étendu (`warp`, world/netSaves/wind) ; smoke test enrichi : filet sauve 1× puis vie perdue, captures des 4 mondes, traversée intégrale par bot (EXIT 0, 0 erreur JS hors font sandbox). Build déployé dans `docs/`. Prochaine étape : **Session 3D-4 — Addiction & rétention**.
- [2026-07-19] Identité personnages (hors-session, demande d'Emmanuel) — canon fixé dans `CHARACTERS.md` : **Marc le petit** (jeune, blond, cheveux longs, **natte animée** dans le dos) et **Claire la grande** (blond clair, cheveux longs, étoile d'or). Appliqué en **2D** (natte 5 segments réactive à l'état, chevelures refaites, échelles 1.22/1.38, spotlight suiveur, Wake Lock) et en **3D** (`player.js` : deux blonds différenciés, natte en pivot animée dans `poseHero`, tailles 0.92/1.06 compensées au point de prise `GRIP_Y`). Docs musclées : README, GAME_DESIGN, CHARACTERS, ROADMAP. Smoke test a–g verts, build redéployé dans `docs/`.
- [2026-07-12] Audit 2D complet (Fable 5) — 4 bugs critiques identifiés, plan 2 sessions.
- [2026-07-13] Session 1 (2D) ✅ — delta-time 60 Hz, musique infinie, fichier unique, UI anglais, pause auto, fix crash Game Over.
- [2026-07-18] Repo « Cowork-ready » (Opus) — consolidation sur `main`, `CLAUDE.md` autopilote, `AUDIT.md` optimisé.
- [2026-07-18] Session 2 (2D) ✅ — écran-titre cadeau, game feel, polish, PWA, « Made with ❤ for Marc & Claire ». Testé headless, 0 erreur.
- [2026-07-18] 🚀 **Trapeze Stars 3D** (Opus) — verrous levés par Emmanuel ; base Three.js+Vite jouable : arène, pendule→arc assisté→catch, combos, étoiles, PWA, build→`docs/`. Testé headless WebGL (progression vérifiée, 0 erreur JS).
- [2026-07-18] Roadmap 3D rédigée (Fable 5) — 4 sessions planifiées (jouabilité/feel → beauté → mondes → rétention), diagnostic des manques, critères testables, prompts prêts.
- [2026-07-18] Session 3D-2 ✅ (Opus) — **beauté & identité** : chapiteau complet (parois + toit rayés rouge/crème via CanvasTexture, mât + pennant, entrée lumineuse, piste disque brillant à liseré doré, sol légèrement réfléchissant), fanions passés en InstancedMesh (budget drawcalls), rim light froide + fill chaud dans `scene.js`. Marc & Claire vraiment différenciés (Marc cape rouge + mèche + bleu ; Claire tutu + couettes/nœuds + rose), visages expressifs (sourire, joues, éclat des yeux), bras en pivots d'épaule → bras tendus « en étoile » en vol + **salut** au catch PERFECT. **Menu podium 3D** : les 2 persos sur un podium doré tournant sous projecteur (rim light), le sélectionné se lève et salue ; **rideau de velours** qui s'ouvre au 1er affichage ; DOM du menu refondu (pastilles 2D supprimées, chips de nom, centre dégagé pour le podium). `smoke3d.mjs` rendu agnostique (Playwright/chemins) + critère (g) menu 3D + captures. Test headless EXIT 0 (a–g verts, 0 erreur JS hors font sandbox). Build déployé dans `docs/`. Prochaine étape : **Session 3D-3 — Diversité & mondes**.
- [2026-07-18] Session 3D-1 ✅ (Fable 5) — le timing est devenu le cœur du jeu : contrôle « maintenir pour pomper, relâcher pour voler », lâcher noté PERFECT/GOOD/OK (fenêtres sur la phase du pendule), portée d'arc dépendante du grade + pompage (les grands écarts exigent pompage + bon timing, sinon « TOO FAR! » et chute), vrille bonus au tap en vol (+50×combo par tour complet), slow-mo 0.35× + confettis + gain ×2 au catch PERFECT, FOV kick au lâcher, shake au fumble, dolly-in en slow-mo, trail additif (arc-en-ciel en vrille), rail varié déterministe (espacement 4.5–7.5, hauteur ±1.2, 3 anneaux bonus +75), combo qui expire en 6 s avec jauge, score « pop ». Équilibrage validé par bot : partie gagnable sans perdre de vie en pompant + visant le pic (score 4850, combo x15). Critères (a)-(f) du plan tous verts en headless (EXIT 0), `?lowfx` ajouté comme fallback GPU. Build déployé dans `docs/`. Prochaine étape : **Session 3D-2 — Beauté & identité**.
