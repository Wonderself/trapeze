# 🗺️ Trapeze Stars — Roadmap

Règle d'or du projet : **tout doit rester gratuit, hors-ligne et sans dépendance payante**. Chaque idée ci-dessous n'utilise que des APIs navigateur natives (0 €) ou du code local.

> 🎯 **La roadmap opérationnelle du jeu 3D vit dans `AUDIT.md`** (tableau des sessions 3D-1 → 3D-4, protocole dans `CLAUDE.md`). Ce fichier liste l'état global et les idées au-delà des sessions planifiées.

## ✅ Déjà en place

### Jeu 3D (`game3d/` — direction active)
- [x] Session 3D-1 : le timing est le skill — lâcher noté PERFECT/GOOD/OK, pompage, vrilles bonus, slow-mo, caméra vivante, trail, combo
- [x] Session 3D-2 : beauté & identité — chapiteau complet, menu podium 3D tournant, rideau, bloom, rim light
- [x] Session 3D-3 : diversité & mondes — 4 mondes (Cirque/Jungle/Plage/Espace), 1 mécanique par monde (barres dérivantes / rafales de vent / gravité réduite + anneaux mobiles), filet bonus 1×/monde, transitions fog/lumière + bannière
- [x] Session 3D-4 : addiction & rétention — musique générative + SFX par monde (100 % WebAudio), high score/best combo/médailles par monde persistés (`ts3d_*`), mode infini (+5 % vitesse, fenêtres −5 % par monde), écran de fin enrichi + REPLAY instantané, bouton 🔊/🔇
- [x] Identité personnages (2026-07-19) : **Marc petit, blond, natte animée** (vole en vrille, traîne en swing) ; **Claire plus grande, blond clair, cheveux longs + étoile d'or** — tailles compensées au point de prise (les mains restent sur la barre)
- [x] PWA (manifest + service worker), test smoke headless WebGL avec captures

### Jeu 2D (racine — terminé, conservé)
- [x] 4 mondes × 3 niveaux + cérémonie + finale, musique 100 % procédurale
- [x] Marc (jeune, blond, natte animée) et Claire (blonde, plus grande) — refonte 2026-07
- [x] Bloom, grain, vignette, **spotlight suiveur**, squash & stretch, trails
- [x] Difficulté adaptative, buffers d'input, prévisualisation de trajectoire
- [x] Mobile complet + **Vibration API** + **Screen Wake Lock** + PWA racine
- [x] Record persistant (`localStorage`)

## 🎯 Prochaines étapes (dans l'ordre — une session par conversation, modèle conseillé entre parenthèses)

1. **Session 3D-5 — Manette & podium local** (`AUDIT.md`, **Opus 4.8**) : Gamepad API + top 10 local avec initiales (localStorage — pas de serveur).
2. **Session 3D-6 — Accessibilité & partage** (`AUDIT.md`, **Sonnet 5**) : reduced-motion, réduction des flashs, contraste HUD, photo finish + Web Share.

## 💡 Idées au-delà (toujours gratuit, natif)

- **Mode duo alterné** : Marc puis Claire, une vie chacun — relais au trapèze.
- **Ghost replay** : rejouer le fantôme de sa meilleure course (positions enregistrées localement).
- **Défis quotidiens déterministes** : seed dérivée de la date → même niveau pour tous, sans serveur.
- **Photo finish** : `canvas.toBlob()` + Web Share API pour partager sa plus belle figure.
- **Annonceur de cirque** : Web Speech Synthesis (« Mesdames et messieurs… ») — à doser.
- **Accessibilité** : option « réduire les flashs », `prefers-reduced-motion`, contraste HUD.

## 🚫 Ce qu'on ne fera pas

- ❌ APIs payantes, comptes, pubs, serveurs, analytics.
- ❌ Assets externes téléchargés — tout reste dessiné/synthétisé dans le code (2D) ou généré en géométrie/CanvasTexture (3D).
- ❌ Casser les règles de `CLAUDE.md` : 60 FPS mobile, drawcalls < 120 en 3D, générosité avant punition.

## 🐛 Corrections récentes

- 2026-07-19 : crash `flashN is not defined` sur l'écran Game Over du jeu 2D (gelait le jeu) — corrigé en amont (Session 1) et vérifié.
