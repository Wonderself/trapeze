# 🗺️ Trapeze Stars — Roadmap

Règle d'or du projet : **tout doit rester gratuit, hors-ligne et sans dépendance payante**. Chaque idée ci-dessous n'utilise que des APIs navigateur natives (0 €) ou du code local.

> 🎯 **La roadmap opérationnelle du jeu 3D vit dans `AUDIT.md`** (sessions 3D-1 → 3D-8, protocole dans `CLAUDE.md`). Les huit sessions sont terminées; aucune nouvelle session ne démarre sans choix explicite d'Emmanuel.

## ✅ Déjà en place

### Jeu 3D (`game3d/` — direction active)
- [x] Session 3D-1 : le timing est le skill — lâcher noté PERFECT/GOOD/OK, pompage, vrilles bonus, slow-mo, caméra vivante, trail, combo
- [x] Session 3D-2 : beauté & identité — chapiteau complet, menu podium 3D tournant, rideau, bloom, rim light
- [x] Session 3D-3 : diversité & mondes — 4 mondes (Cirque/Jungle/Plage/Espace), 1 mécanique par monde (barres dérivantes / rafales de vent / gravité réduite + anneaux mobiles), filet bonus 1×/monde, transitions fog/lumière + bannière
- [x] Session 3D-4 : addiction & rétention — musique générative + SFX par monde (100 % WebAudio), high score/best combo/médailles par monde persistés (`ts3d_*`), mode infini (+5 % vitesse, fenêtres −5 % par monde), écran de fin enrichi + REPLAY instantané, bouton 🔊/🔇
- [x] Session 3D-5 : Gamepad API + top 10 local persistant avec saisie de nom
- [x] Session 3D-6 : reduced-motion, réduction des flashs, contraste HUD, photo finish + Web Share
- [x] Session 3D-7 : intro cinématique, mode attract, feu d'artifice, défi quotidien déterministe et vitrine
- [x] Session 3D-8 : client leaderboard mondial Supabase avec repli LOCAL silencieux; activation distante facultative
- [x] Identité personnages (2026-07-19) : **Marc petit, blond, natte animée** (vole en vrille, traîne en swing) ; **Claire plus grande, blond clair, cheveux longs + étoile d'or** — tailles compensées au point de prise (les mains restent sur la barre)
- [x] PWA et caches 2D/3D fiables : service workers séparés, redéploiement et rechargement hors ligne couverts par `npm run test:sw`
- [x] GitHub Pages en production : build racine vers `/3d` + `/_site`, publication de `/_site` depuis `main`; `docs/` reste exclusivement documentaire. `PASS_PRODUCTION` le 2026-09-13 (commit initial `a69e34d`, run `34778875942`)

### Jeu 2D (`2d/` — terminé, conservé)
- [x] 4 mondes × 3 niveaux + cérémonie + finale, musique 100 % procédurale
- [x] Marc (jeune, blond, natte animée) et Claire (blonde, plus grande) — refonte 2026-07
- [x] Bloom, grain, vignette, **spotlight suiveur**, squash & stretch, trails
- [x] Difficulté adaptative, buffers d'input, prévisualisation de trajectoire
- [x] Mobile complet + **Vibration API** + **Screen Wake Lock** + PWA (`2d/`)
- [x] Record persistant (`localStorage`)
- [x] Livraison accessible : zoom navigateur autorisé, reduced-motion, focus clavier, sortie mobile et canvas ajusté aux paysages courts

## 🎯 Validations et décisions encore ouvertes

- **QA téléphones physiques** : **NOT_RUN** sur iOS/Android réels; à planifier si Emmanuel souhaite une validation matérielle avant diffusion large.
- **Leaderboard WORLD Supabase** : **DEFERRED_USER**. Choisir entre conserver le mode LOCAL par défaut ou fournir l'URL et la clé anon selon `game3d/SUPABASE_SETUP.md`.
- **Miroir Coolify** : **BLOCKED_ACCESS**. Optionnel et non requis pour GitHub Pages; aucune ressource, URL, configuration TLS ou preuve publique n'est disponible.

## 💡 Futurs choix non réalisés (toujours gratuits)

- **Mode duo alterné** : Marc puis Claire, une vie chacun — relais au trapèze.
- **Ghost replay** : rejouer le fantôme de sa meilleure course (positions enregistrées localement).
- **Annonceur de cirque** : Web Speech Synthesis (« Mesdames et messieurs… ») — à doser.
- **Trailer vidéo** : capturer une course orchestrée avec le harnais `window.__game`.
- **Localisation de la vitrine** : version FR/EN de `showcase.html`, sans modifier l'UI anglaise du jeu.
- **Optimisation bundle** : code-splitting Vite uniquement si les mesures réseau/mobile le justifient.

## 🚫 Ce qu'on ne fera pas

- ❌ APIs payantes, comptes, pubs, serveurs, analytics.
- ❌ Assets externes téléchargés — tout reste dessiné/synthétisé dans le code (2D) ou généré en géométrie/CanvasTexture (3D).
- ❌ Casser les règles de `CLAUDE.md` : 60 FPS mobile, drawcalls < 120 en 3D, générosité avant punition.

## 🐛 Corrections récentes

- 2026-07-19 : crash `flashN is not defined` sur l'écran Game Over du jeu 2D (gelait le jeu) — corrigé en amont (Session 1) et vérifié.
