# 📊 AUDIT — Trapeze Stars (trapeze)
Dernière mise à jour : 2026-07-18 — Direction active : **Trapeze Stars 3D** (`game3d/`, Three.js + Vite).

<!-- ═══ NEXT (lu par CLAUDE.md pour l'auto-avancement) ═══
PROCHAINE SESSION : Session 3D-1 — Jouabilité & game feel  (statut ⬜ À faire)
ACTION : exécuter la Session 3D-1 telle que décrite plus bas, tester (node game3d/test/smoke3d.mjs + captures),
rebuild → copier game3d/dist/ vers docs/, mettre à jour ce fichier, commit + push sur main.
════════════════════════════════════════════════════════ -->

> 🤖 **Auto-avancement** : ce repo est piloté par `CLAUDE.md`. À l'ouverture, Claude lit ce fichier,
> exécute la **première session `⬜ À faire`** du tableau, teste, met à jour l'historique, puis commit+push.
> **Une session à la fois.**

## 🚦 OÙ ON EN EST
- Jeu **canvas 2D** (racine, `index.html`) : ✅ terminé et conservé (Sessions 1 & 2 — jouabilité + cadeau).
- Jeu **3D** (`game3d/`) : 🟡 **base jouable** livrée — arène de cirque, pendule → lâcher → arc assisté → rattrapage, combos, étoiles, 3 vies, PWA, build → `docs/` (GitHub Pages).
- Objectif validé par Emmanuel (2026-07-18) : rendre le 3D **génial et addictif** — jouabilité d'abord, puis beauté, diversité, rétention. Verrous monofichier/no-build levés.
- Ce qui manque au 3D aujourd'hui (diagnostic honnête) :
  1. **Zéro skill réel** : l'arc assisté garantit le catch dès que `omega > 0.25` → aucune tension, aucune raison de viser le timing parfait.
  2. **Zéro variété** : 16 barres identiques espacées de 5.6, une seule action (lâcher), pas d'obstacles, pas de tricks, partie ≈ 60 s puis plus rien à faire.
  3. **Feel plat** : pas de slow-mo, pas de trail, quasi pas de particules, caméra sans accent, pas d'audio du tout.
  4. **Beauté perfectible** : pas de chapiteau (fond = noir étoilé), matériaux simples, persos peu différenciés, menu = pastilles 2D plates.
  5. **Zéro rétention** : pas de high score sauvegardé, pas de médailles, pas de mode infini.

## 🗓️ TABLEAU DES SESSIONS (roadmap 3D)
| # | Session | Objectif (1 ligne) | Coût | Durée est. | Statut |
|---|---------|--------------------|------|------------|--------|
| 3D-1 | Jouabilité & game feel | Le timing devient un vrai skill (Perfect/Good/OK), tricks aériens, slow-mo, caméra vivante, particules, trail | 🔴 | ~60-90 min | ⬜ À faire |
| 3D-2 | Beauté & identité | Chapiteau complet, matériaux riches, Marc/Claire différenciés et animés, menu 3D podium | 🔴 | ~60-90 min | ⬜ À faire |
| 3D-3 | Diversité & mondes | 4 mondes (Cirque/Jungle/Plage/Espace) + 1 mécanique nouvelle par monde, transitions | 🔴 | ~60-90 min | ⬜ À faire |
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
- **Stack** : Three.js 0.160 + Vite 5, modules dans `game3d/src/` : `main.js` (état `G`, physique pendule `stepBar`, `release()`, arc assisté kinématique `flyFrom/flyTo/flyT`, caméra, boucle, UI DOM, `window.__game` pour tests) ; `scene.js` (renderer, ACES, bloom UnrealBloomPass 0.7/0.85/0.82) ; `world.js` (piste, foule InstancedMesh, spots animés + cônes additifs, fanions, starfield, `update(t)`) ; `player.js` (héros low-poly, `poseHero`).
- **Constantes clés** (`main.js` haut de fichier) : `PY=6.2` (pivot), `L=3.3` (corde), `AMP=1.05`, `BAR_DX=5.6`, `NBARS=16`, `CATCH_R=2.4`, `MISS_Y=-7`, vol `flyDur=0.72` + parabole `sin(a·π)·2.4`.
- **États** : `G.mode` menu/playing/win/over ; `G.state` swing/fly/fumble. Le choix Marc/Claire est appliqué en jeu (`rebuildHero`).
- **UI** : DOM overlay (`#hud #menu #over #combo #tapBtn #flash`), police Fredoka.
- **Build/deploy** : `cd game3d && npm install && npm run build` → copier `dist/` → `/docs` (+ `.nojekyll`). GitHub Pages sert `main:/docs` (à activer côté GitHub par Emmanuel : Settings → Pages → main /docs → l'URL sera `https://wonderself.github.io/trapeze/`).
- **Test headless** : `node game3d/test/smoke3d.mjs` (Chromium swiftshader flags déjà dans le script ; Playwright global : `/home/claude/.npm-global/lib/node_modules/playwright`). Vérifie WebGL, progression via `__game`, erreurs console, captures dans `/home/claude/deliver/`.
- **Jeu 2D** (racine) : intact, PWA propre, ne plus y toucher sauf demande.

## ✅ HISTORIQUE
- [2026-07-12] Audit 2D complet (Fable 5) — 4 bugs critiques identifiés, plan 2 sessions.
- [2026-07-13] Session 1 (2D) ✅ — delta-time 60 Hz, musique infinie, fichier unique, UI anglais, pause auto, fix crash Game Over.
- [2026-07-18] Repo « Cowork-ready » (Opus) — consolidation sur `main`, `CLAUDE.md` autopilote, `AUDIT.md` optimisé.
- [2026-07-18] Session 2 (2D) ✅ — écran-titre cadeau, game feel, polish, PWA, « Made with ❤ for Marc & Claire ». Testé headless, 0 erreur.
- [2026-07-18] 🚀 **Trapeze Stars 3D** (Opus) — verrous levés par Emmanuel ; base Three.js+Vite jouable : arène, pendule→arc assisté→catch, combos, étoiles, PWA, build→`docs/`. Testé headless WebGL (progression vérifiée, 0 erreur JS).
- [2026-07-18] Roadmap 3D rédigée (Fable 5) — 4 sessions planifiées (jouabilité/feel → beauté → mondes → rétention), diagnostic des manques, critères testables, prompts prêts. Prochaine étape : **Session 3D-1**.
