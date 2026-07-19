# 🎪 Trapeze Stars — Game Design Document (version 2D)

Ce document décrit **toutes les mécaniques du jeu 2D** (racine, `index.html`) et son **pipeline graphique**. Il sert de référence pour toute évolution : chaque nouveauté doit renforcer la boucle « voler → attraper → enchaîner les figures → faire vibrer le public ».

> 🚀 **Le jeu 3D** (`game3d/`, direction active) a son propre design piloté par sessions dans **`AUDIT.md`** : le skill y est le **timing du lâcher** (PERFECT/GOOD/OK sur la phase du pendule), le pompage en maintenant l'appui, et les vrilles bonus en vol. Les piliers ci-dessous (flow, spectacle, générosité, surprise) s'appliquent aux deux versions.

---

## 1. Vision

> *Tu es une étoile du trapèze. Le public retient son souffle à chaque saut. Chaque figure réussie déclenche une ovation — chaque chute serre le cœur.*

Piliers de design :
1. **Le flow avant tout** — l'élan du pendule doit être délicieux ; on relâche au bon moment et on plane.
2. **Le spectacle** — le public, les projecteurs, la musique réagissent aux exploits du joueur.
3. **Générosité** — buffers d'inputs, difficulté adaptative, indicateurs d'atterrissage : le jeu aide sans le dire.
4. **La surprise** — figures secrètes, cheat code, cérémonies : il y a toujours quelque chose à découvrir.

---

## 2. Boucle de jeu

```
courir / sauter → saisir un trapèze → osciller (pendule physique)
   → lâcher au bon moment → traverser des cerceaux (+points)
   → figures aériennes (salto, pirouette, legsault) → atterrir
   → éviter clowns et boules à pointes → franchir les gouffres
   → atteindre la distance cible → niveau suivant
```

### États du joueur
| État | Description |
|---|---|
| `idle` / `run` | Au sol, respiration animée |
| `jump` / `djump` | Saut puis double-saut (salto automatique) |
| `swing` | Suspendu à un trapèze — physique de pendule (corde 112 px) |
| `hang` | Attrapé par le **porteur** (catcher) qui te relance |
| `pirouette` / `salto` | Figures aériennes, orbites de particules |
| `land` | Réception avec squash & stretch |

### Physique (constantes clés)
- Gravité `0.52`, saut `-16.5`, double-saut `-14`, propulsion trapèze `-22`, vitesse max chute `17`.
- Pendule : accélération `-(0.3/ROPE)·sin(angle)`, friction `0.999` — l'élan se pompe naturellement.
- **Buffers d'input** (6 frames) : un saut ou une saisie pressée un peu trop tôt est mémorisée — zéro frustration.
- **Trajectoire prévisionnelle** : en oscillation, un arc pointillé montre où l'on va voler.

---

## 3. Mondes et niveaux

4 mondes × 3 niveaux = **12 niveaux**, puis cérémonie + finale.

### Paramètres par niveau (`getLevelParams`)
| Niveau | Vitesse | Gouffres (min–max px) | Chance de pointes | Intervalle clowns | Distance cible |
|---|---|---|---|---|---|
| 1 | 2.5 | 80–120 | 30 % | 320 | 2200 |
| 2 | 3.3 | 110–160 | 50 % | 250 | 2600 |
| 3 | 4.1 | 140–200 | 68 % | 185 | 3100 |

La vitesse est multipliée par `1 + monde × 0.06` — le monde Futur est le plus rapide. Les niveaux 2 et 3 teintent le fond (rouge au cirque, vert en jungle…) pour une montée de tension visuelle.

### Difficulté adaptative (DDA)
- Chaque mort consécutive augmente `ddaEasing` ; vitesse et pièges sont réduits jusqu'à **−20 %**.
- Invisible pour le joueur : pas de message, pas de honte. Une réussite réinitialise la rampe.

### Dangers
- **Clowns / PNJ hostiles** (selon le monde : clown, singe, baigneuse, robot) — avancent vers le joueur, alerte `⚠` progressive.
- **Boules à pointes** rotatives avec halo pulsant et étincelles.
- **Gouffres** — bande rouge clignotante et flèche `↓` à l'approche.
- **Trampolines** — rebond puissant (pas un danger : une opportunité `↑↑`).

---

## 4. Scoring et récompenses

- **Cerceaux** : traverser un cerceau rapporte des points ; les cerceaux enflammés davantage.
- **Streak de cerceaux** : enchaîner sans en rater augmente le multiplicateur (`mult`, limité dans le temps).
- **Étoiles** à collecter sur le parcours.
- **Figures** : salto, pirouette et la secrète **Legsault** (super-figure avec traînée arc-en-ciel et vol prolongé).
- **Le public** : ola (`olaActive`), applaudissements et ovation debout selon les exploits.
- **Fin de niveau** : jusqu'à 3 étoiles + note des juges (panneau de 3 juges animés).
- **Fin de jeu** : cérémonie du podium (médailles or/argent/bronze, trophée levé) puis finale avec feux d'artifice.
- **Record** sauvegardé en `localStorage` (`tse5_hs`).
- 🥚 **Cheat code** : 5 taps dans le coin haut-gauche en 3 secondes → score 15000 et finale immédiate.

### Vies
3 cœurs. Toucher un danger = perte d'une vie + invincibilité clignotante. Tomber dans un gouffre = perte d'une vie.

---

## 5. Pipeline graphique (le « juice »)

Ordre de rendu par frame :
```
clear → fond du monde (parallaxe, public, guirlandes)
  → plateformes / trampolines / pointes / PNJ / barres / porteurs
  → cerceaux (halos multi-couches + étoiles orbitales)
  → particules (pool) → spotlight → joueur (trail, halo, squash)
  → HUD → bloom (2 passes de flou additif) → grain de film
  → vignette + barres cinéma → flash / screenshake
```

### Effets clés
| Effet | Détail |
|---|---|
| **Bloom** | Downscale ×3 puis 2 passes `blur(5px)/blur(10px)` en composition `lighter` |
| **Grain de film** | Pattern 128×128 de bruit régénéré, opacité 22/255 |
| **Vignette** | Dégradé radial + barres cinéma 7,5 % en jeu |
| **Spotlight** | Cône de lumière doux qui suit l'artiste + flaque au sol (composition `lighter`) |
| **Squash & stretch** | `P.sqX/P.sqY` à l'impulsion et à la réception |
| **Traînées** | Trail doré, bleu (double saut), arc-en-ciel (legsault/pirouette) |
| **Screenshake + flash** | Sur les impacts, amorti sur 10 frames |
| **Ombres de contact** | Ombre portée dynamique + indicateur d'atterrissage pulsant |
| **Feux d'artifice** | Pool de 600 particules réutilisées (zéro allocation en jeu) |

### Budget performance
- Résolution logique fixe **800×450**, upscale CSS — le coût de rendu ne dépend pas de l'écran.
- Pools d'objets pour particules et feux d'artifice ; culling hors-écran systématique.
- Objectif : **60 FPS sur mobile milieu de gamme**.

---

## 6. Audio procédural (Web Audio API)

Aucun fichier audio : tout est synthétisé en direct.
- **4 musiques** (une par monde) : fanfare cirque (square + basse triangle), percussions jungle (kick sinusoïdal glissant), mélodie plage (sine + basse), synthwave futur (saw désaccordées + filtre lowpass résonant balayé).
- Le **tempo augmente avec le niveau** (`bpm = base + niveau × 5..8`).
- **15+ bruitages** : saut, double-saut, saisie, lâcher, cerceau, rebond, impact, étoile, médaille, legsault, cérémonie…
- **Haptique** : l'API Vibration double les impacts clés sur mobile (impact 60 ms, rebond 15 ms, médaille motif 30-40-30).

---

## 7. Écrans

`menu` (sélection Marc/Claire, ciel étoilé) → `playing` → `levelcomplete` (étoiles + juges) → … → `ceremony` (podium, trophée, ola) → `finale` (feux d'artifice, parade des personnages) → `gameover` (vignette rouge dramatique).

Tous les écrans avancent au clavier, au tap **et** au bouton ⚡ mobile.
