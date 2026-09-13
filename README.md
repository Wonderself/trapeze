# 🎪 Trapeze Stars — כוכבי הטרפז

**Un jeu de trapèze volant offert à Marc & Claire — 100 % gratuit, hors-ligne, sans API payante.**

Le dépôt contient **cinq jeux**, choisis depuis une page d'accueil unique (`index.html` à la racine) :

| Version | Où | Statut |
|---|---|---|
| 🎪 **Classic** (canvas) | `trapeze-stars-v1.html` | ✅ Terminé |
| ✨ **Deluxe** (canvas en perspective) | `trapeze-stars-v2.html` | ✅ Terminé |
| 🌃 **Trapeze City** (canvas 3D logiciel) | `trapeze-city-v3.html` | ✅ Terminé |
| 🕹️ **Circus Alzahir 2D** (canvas/PWA) | `2d/index.html` | ✅ Terminé (conservé) |
| 🚀 **Trapeze Stars 3D** (Three.js) | `game3d/` (source) → `3d/` (snapshot statique) → artefact GitHub Pages | ✅ Terminé — sessions pilotées par `AUDIT.md` |

## 🚀 Jouer

- **Racine** (`index.html`) : page de choix des cinq jeux.
- **Canvas autonomes** : Classic, Deluxe et City via leur fichier HTML à la racine.
- **Circus Alzahir 2D** : `2d/index.html` directement, ou via la page de choix. Zéro installation, zéro réseau. PWA installable (manifest + service worker dans `2d/`).
- **3D** : `3d/index.html` (snapshot du build de production), ou en local :
  ```bash
  cd game3d && npm install && npm run dev
  ```

## 🌐 Site en ligne et déploiement

Le site canonique est **<https://wonderself.github.io/trapeze/>**. Une
publication n'a lieu qu'après le passage du workflow de vérification sur
`main`.

Le dépôt reste compatible avec **Coolify Static Site**. Le miroir historique
sert directement la racine versionnée : le snapshot `3d/` doit donc toujours
être régénéré et commité avec `npm run build`. GitHub Pages, lui, publie
l'artefact isolé `_site/`.
`2d/` et `3d/` sont autonomes et leurs service workers ont des caches séparés,
une navigation network-first et un repli hors ligne. Le runbook complet et le
rollback sont dans [`docs/DEPLOIEMENT.md`](docs/DEPLOIEMENT.md). La recette
iPhone/iPad/Android réelle, distincte de l'émulation Chromium, est dans
[`docs/QA-APPAREILS-REELS.md`](docs/QA-APPAREILS-REELS.md).

La page d'accueil présente désormais **cinq jeux** : les trois versions de la
série (Classic, Deluxe, City, à la racine) et les deux jeux de la branche
parallèle (`2d/` Circus Alzahir, `3d/` la version Three.js).

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
| `index.html` | Sélecteur central des cinq versions (page d'accueil Coolify/GitHub Pages/tout hébergement statique) |
| `2d/` | Jeu 2D complet (HTML + CSS + JS, canvas 800×450) + PWA (`manifest.json`, `sw.js`, icônes) |
| `game3d/` | Jeu 3D — source : Three.js + Vite (`src/main.js` jeu/état, `scene.js` rendu, `world.js` décor, `player.js` héros) |
| `docs/` | Documentation et runbooks, jamais publiée comme build |
| `3d/` | Snapshot statique versionné du build 3D (compatibilité hébergeur direct/Coolify) |
| `_site/` | Artefact complet généré localement, ignoré par Git et publié par GitHub Actions |
| `CLAUDE.md` | Protocole d'auto-avancement du repo (sessions pilotées) |
| `AUDIT.md` | Diagnostic + tableau des sessions + historique |
| `GAME_DESIGN.md` | Game design : mécaniques, niveaux, scoring, pipeline graphique |
| `CHARACTERS.md` | Fiches personnages canoniques (2D + 3D) |
| `ROADMAP.md` | Évolutions futures — uniquement des technologies gratuites |

## 🛠️ Commandes 3D

```bash
cd game3d && npm install        # une fois
npm run dev                     # dev local
cd .. && npm run build          # build 3D + /3d + /_site
npm run test:site               # sept pages en desktop/mobile
npm run test:sw                 # mise à jour PWA + mode hors ligne
node game3d/test/smoke3d.mjs    # flux Three.js complet + captures
```
