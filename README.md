# 🎪 Trapeze Stars — כוכבי הטרפז

**Un jeu de trapèze volant offert à Marc & Claire — 100 % gratuit, hors-ligne, sans API payante.**

Le dépôt contient **deux versions** du jeu, choisies depuis une page d'accueil unique (`index.html` à la racine) :

| Version | Où | Statut |
|---|---|---|
| 🕹️ **Trapeze Stars 2D** (canvas) | `2d/index.html` | ✅ Terminé (conservé) |
| 🚀 **Trapeze Stars 3D** (Three.js) | `game3d/` (source) → build servi depuis `docs/` (GitHub Pages) **et** `3d/` (Coolify) | 🔥 Direction active — sessions pilotées par `AUDIT.md` |

## 🚀 Jouer

- **Racine** (`index.html`) : page de choix — bouton 2D / bouton 3D.
- **2D** : `2d/index.html` directement, ou via la page de choix. Zéro installation, zéro réseau. PWA installable (manifest + service worker dans `2d/`).
- **3D** : `3d/index.html` (build de prod, identique à `docs/`), ou en local :
  ```bash
  cd game3d && npm install && npm run dev
  ```

## 🌐 Déploiement (Coolify / hébergement statique)

Le dépôt est servable tel quel comme **site statique** (aucun Dockerfile/serveur requis — nginx/Coolify sert simplement les fichiers) :
- `index.html` à la racine = page de choix 2D/3D, servie sur le domaine configuré dans la ressource Coolify.
- `2d/` et `3d/` sont des sous-dossiers autonomes (chemins relatifs, chacun avec son propre `manifest.json`/`sw.js` scopé à son dossier — aucun conflit entre les deux PWA).
- `docs/` reste la copie utilisée par GitHub Pages ; `3d/` est la copie identique utilisée par Coolify. Les deux sont régénérées ensemble à chaque build (voir `CLAUDE.md`, étape 5).

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
| `index.html` | Page de choix 2D/3D à la racine (sert de page d'accueil pour Coolify/GitHub Pages/tout hébergement statique) |
| `2d/` | Jeu 2D complet (HTML + CSS + JS, canvas 800×450) + PWA (`manifest.json`, `sw.js`, icônes) |
| `game3d/` | Jeu 3D — source : Three.js + Vite (`src/main.js` jeu/état, `scene.js` rendu, `world.js` décor, `player.js` héros) |
| `docs/` | Build de prod du jeu 3D servi par **GitHub Pages** (régénéré à chaque session) |
| `3d/` | Copie identique du build 3D, servie par **Coolify** (même contenu que `docs/`, régénérée en même temps) |
| `CLAUDE.md` | Protocole d'auto-avancement du repo (sessions pilotées) |
| `AUDIT.md` | Diagnostic + tableau des sessions + historique |
| `GAME_DESIGN.md` | Game design : mécaniques, niveaux, scoring, pipeline graphique |
| `CHARACTERS.md` | Fiches personnages canoniques (2D + 3D) |
| `ROADMAP.md` | Évolutions futures — uniquement des technologies gratuites |

## 🛠️ Commandes 3D

```bash
cd game3d && npm install        # une fois
npm run dev                     # dev local
npm run build                   # prod → game3d/dist/ (puis copier vers docs/ ET 3d/)
node game3d/test/smoke3d.mjs    # test headless WebGL + captures
```
