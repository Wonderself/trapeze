# 🎪 Trapeze Stars — כוכבי הטרפז

**Un jeu de trapèze volant offert à Marc & Claire — 100 % gratuit, hors-ligne, sans API payante.**

Le dépôt contient **deux versions** du jeu :

| Version | Où | Statut |
|---|---|---|
| 🕹️ **Trapeze Stars 2D** (canvas) | `index.html` à la racine — on l'ouvre, on joue | ✅ Terminé (conservé) |
| 🚀 **Trapeze Stars 3D** (Three.js) | `game3d/` (source) → build servi par GitHub Pages depuis `docs/` | 🔥 Direction active — sessions pilotées par `AUDIT.md` |

## 🚀 Jouer

- **2D** : ouvrir `index.html` dans n'importe quel navigateur moderne. Zéro installation, zéro réseau. PWA installable (manifest + service worker à la racine).
- **3D** : version en ligne servie depuis `docs/` (GitHub Pages), ou en local :
  ```bash
  cd game3d && npm install && npm run dev
  ```

## 🎮 Contrôles

### 3D (direction active)
| Entrée | Action |
|---|---|
| **Maintenir** `Espace` (ou le doigt) | S'accrocher et **pomper** le balancer |
| **Relâcher** au sommet | S'envoler — le timing est noté **PERFECT / GOOD / OK** |
| **Tap en vol** | Vrille bonus (+50 × combo par tour complet) |

### 2D (clavier)
| Touche | Action |
|---|---|
| `←` `→` | Se déplacer |
| `Espace` / `↑` / `W` | Sauter — en l'air : double saut (salto) — sur un trapèze : lâcher |
| `F` / `Z` / `Maj` | Saisir une barre de trapèze proche |
| `Échap` | Retour au menu |

Sur mobile (2D) : boutons tactiles + bouton **⚡**, tap = sauter, swipe bas = saisir, vibrations haptiques.

## ⭐ Les héros

- **Le petit Marc** — jeune, blond, cheveux longs avec une **natte qui vole** derrière lui, cape rouge (3D), tenue bleue étoilée.
- **Claire** — **un peu plus grande**, longue chevelure **blond clair**, étoile d'or dans les cheveux, tutu rose.

Fiches complètes (2D et 3D) : [CHARACTERS.md](CHARACTERS.md).

## ✨ Points forts

- **3D** : chapiteau complet, podium de sélection tournant, timing gradé, slow-mo au catch parfait, vrilles, trails, bloom — 60 FPS visé sur mobile (voir `AUDIT.md` pour la roadmap des sessions).
- **2D** : 4 mondes × 3 niveaux, cérémonie + finale, musique 100 % procédurale (Web Audio), bloom/grain/vignette, spotlight suiveur, difficulté adaptative, figure secrète, cheat code caché.
- **APIs navigateur gratuites uniquement** : Vibration, Screen Wake Lock, Fullscreen, localStorage, PWA (manifest + service worker).

## 📁 Structure du dépôt

| Chemin | Rôle |
|---|---|
| `index.html` | Jeu 2D complet (HTML + CSS + JS, canvas 800×450) + PWA racine |
| `game3d/` | Jeu 3D : Three.js + Vite (`src/main.js` jeu/état, `scene.js` rendu, `world.js` décor, `player.js` héros) |
| `docs/` | Build de prod du jeu 3D servi par GitHub Pages (régénéré à chaque session) |
| `CLAUDE.md` | Protocole d'auto-avancement du repo (sessions pilotées) |
| `AUDIT.md` | Diagnostic + tableau des sessions + historique |
| `GAME_DESIGN.md` | Game design : mécaniques, niveaux, scoring, pipeline graphique |
| `CHARACTERS.md` | Fiches personnages canoniques (2D + 3D) |
| `ROADMAP.md` | Évolutions futures — uniquement des technologies gratuites |

## 🛠️ Commandes 3D

```bash
cd game3d && npm install        # une fois
npm run dev                     # dev local
npm run build                   # prod → game3d/dist/ (puis copier vers docs/)
node game3d/test/smoke3d.mjs    # test headless WebGL + captures
```
