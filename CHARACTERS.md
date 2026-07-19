# 🎭 Trapeze Stars — Fiches personnages

Référence canonique de l'apparence et de l'animation des personnages, **valable pour les deux versions** (2D racine et 3D `game3d/`). **Toute évolution graphique doit respecter ces fiches.**

## Identité en une phrase

> **Marc, le petit** : jeune, blond, cheveux longs, natte qui vole derrière lui.
> **Claire, la grande** : un peu plus grande que Marc, longue chevelure blond clair.

---

## ⭐ Marc — le petit prodige

> Le benjamin du duo. Jeune, vif, toujours souriant — sa natte blonde vole derrière lui à chaque salto.

| Attribut | Valeur canonique |
|---|---|
| Âge apparent | Enfant / jeune ado — **le plus petit des deux** |
| Taille en jeu | Échelle **1.22** (`drawChar`) |
| Cheveux | **Blonds lumineux, longs**, mèches encadrant le visage |
| Coiffure | **Natte (tresse) dans le dos**, élastique rouge, pointes libres |
| Yeux | Grands, bleu nuit `#1a3060`, double reflet — regard juvénile |
| Visage | Joues rosées, sourcils fins clairs, grand sourire |
| Tenue | Justaucorps **bleu** dégradé (`#7ab8ff → #0b2e78`) avec **étoile blanche** sur la poitrine, chaussons blancs |
| Couleur signature (halo, trail, landing) | Bleu `#7ecbff` / `rgb(30,110,232)` |

### La natte (élément signature)
- **5 segments** tressés (cercles décroissants + liserés sombres alternés) dessinés **derrière le corps**, avant la tête.
- **Animée par l'état** :
  - `idle`/`run` : balancement doux (`sin(af·0.09)` + rebond de course) ;
  - `swing`/`hang` : pend verticalement, entraînée par le pendule ;
  - `salto`/`pirouette`/`djump` : **s'envole vers le haut** (segments raccourcis, levée `−t²·8`).
- Terminée par un **élastique rouge** `#e83050` et deux pointes de mèches.

---

## ⭐ Claire — la grande élégante

> L'aînée, gracieuse et sûre d'elle. **Un peu plus grande que Marc**, sa longue chevelure blonde ondule comme un voile d'or.

| Attribut | Valeur canonique |
|---|---|
| Âge apparent | Jeune femme — la plus grande du duo |
| Taille en jeu | Échelle **1.38** (`drawChar`) — visiblement plus grande que Marc |
| Cheveux | **Blond clair lumineux** (`#fff0b0 → #f2cc58 → #bd8a1a`), **très longs** |
| Coiffure | Chevelure libre : 3 nappes ondulantes descendant sous les épaules (jusqu'à `y=10`), reflets dorés, **étoile d'or** dans les cheveux |
| Animation cheveux | Ondulation continue `sin(af·0.06)·2.2` sur les pointes |
| Yeux | Brun profond `#2c1810`, cils implicites, blush rose aux joues |
| Tenue | Justaucorps **rose** dégradé (`#ff7cb8 → #8a0840`), losange blanc, **jupette virevoltante** animée, chaussons dorés |
| Couleur signature (halo, trail, landing) | Rose `#ff88bb` / `rgb(232,56,122)` |

---

## Duo à l'écran (2D)

| Contexte | Marc | Claire |
|---|---|---|
| Jeu (`drawChar`) | ×1.22 | ×1.38 |
| Menu (portraits) | ×1.55 | ×1.75 |
| Finale (parade) | ×1.30 | ×1.48 |

## Version 3D (`game3d/src/player.js`)

| Attribut | Marc | Claire |
|---|---|---|
| Échelle du corps | **0.92** (le petit) | **1.06** (la grande) |
| Cheveux | Blond `0xf0cc50`, calotte longue + mèches latérales + frange | Blond clair `0xf7d878`, calotte profonde + rideau arrière + 2 mèches longues |
| Signature | **Natte** : 5 perles décroissantes dans un pivot derrière la tête, élastique rouge `0xe83050` | **Étoile d'or** émissive dans les cheveux |
| Tenue | Bleu `0x2f7fe0` + cape rouge + étoile émissive | Rose `0xff5ba6` + tutu + étoile émissive |

Détails techniques 3D :
- Le corps entier vit dans un sous-groupe **redimensionné autour du point de prise** (`GRIP_Y = 1.92`) : malgré la différence de taille, les mains des deux héros touchent la barre exactement au même endroit — aucun impact gameplay.
- La **natte de Marc est animée dans `poseHero`** : elle traîne et oscille en `swing`, **s'envole** (`rotation.x ≈ −1.25`) en `fly`/vrille, et se balance doucement en `idle`/`salute`.
- Budget : géométries primitives (sphères/capsules/torus), pas d'ombres dynamiques supplémentaires — conforme aux garde-fous de `CLAUDE.md`.

La différence de taille doit rester **visible dans tous les écrans** : c'est un trait d'identité du duo (le petit frère intrépide, la grande sœur élégante).

## Squelette d'animation commun

Les deux personnages partagent la même machine d'états de membres (bras/jambes vectorisés par état) :
`idle`, `run`, `jump`, `djump`, `salto`, `pirouette`, `swing`, `hang`, `land`, `trophy` — plus la **respiration** (`sin(af·0.04)·1.5` sur torse/tête en idle/run) et le **retournement automatique** selon la direction (`P.lastFacing`).

Rendu commun : dégradés radiaux peau/tenue, spéculaires tête + torse, rim light côté droit, mains dessinées, ombres de membres (passe sombre sous la passe colorée).

## 🤹 PNJ et second rôles

| Personnage | Monde | Rôle |
|---|---|---|
| **Clown** au chapeau violet étoilé | Cirque | Danger au sol, démarche dandinante |
| **Singe** à la longue queue | Jungle | Danger au sol |
| **Baigneuse** au bikini rose | Plage | Danger au sol |
| **Robot** aux yeux néon pulsants | Futur | Danger au sol, antenne clignotante |
| **Le porteur (catcher)** | Tous | Suspendu tête en bas au trapèze, t'attrape (`hang`) et te relance — costume assorti au monde |
| **Les juges** | Fin de niveau | Panneau de notes animé |
| **Le public** | Tous | Rangées colorées, ola, ovation debout |
