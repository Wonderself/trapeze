# Reste à faire

État au terme de la grosse session. Les lots ci-dessous sont volontairement
cadrés pour être exécutés séparément, y compris par un modèle plus léger :
chacun est court, local, et vérifiable.

**Avant toute modification** : `node tools/check.js <fichier>` doit passer, et
`node tools/play_v2.js` doit rester vert après une modification de V2.

---

## Fait

| Lot | État | Où |
|---|---|---|
| WP-0 Restructuration | ✅ | `index.html`, `trapeze-stars-v1.html`, `trapeze-stars-v2.html` |
| WP-B V1 Classic, corrections | ✅ | les 20 défauts de l'audit sont corrigés |
| WP-A Socle technique | ✅ | V2 : rendu responsive, pas fixe, qualité, i18n, sauvegarde |
| WP-C V2 game design | ✅ | pompage, grand soleil, figures, porteur, chaleur, filet |
| WP-D Game feel | ◐ | temps d'arrêt, écrasement, secousse par bruit, caméra faits ; haptique fait |
| WP-E Art direction | ◐ | tokens par monde, perspective, personnage articulé faits ; décors à approfondir |
| WP-F UI/UX | ◐ | HUD, pause, contrôles contextuels, tutoriel faits ; réglages à faire |
| WP-G Audio | ◐ | bus séparés, limiteur, effets faits ; musique en couches à finir |
| WP-H Page de garde | ✅ | `index.html` |
| WP-I QA | ◐ | harnais + captures faits ; matrice d'appareils réels à couvrir |

---

## Lot S1 — Écran de réglages (V2)

Tout le stockage existe déjà (`SV`, `persist()`), et les valeurs sont lues
partout. Il ne manque que l'écran.

- Ajouter un état `gs==='settings'`, atteignable depuis le menu et la pause.
- Réglages à exposer, tous déjà branchés dans le code :
  `SV.music`, `SV.sfx` (via `setVol`), `SV.lang` (via `LANG` et `t()`),
  `SV.quality` (via `setQuality`), `SV.vibrate`, `SV.guide`.
- `SV.guide` n'a pas encore d'effet : il doit masquer la prévisualisation
  d'arc quand elle sera ajoutée (lot S4).
- Navigable au clavier et au doigt, cible tactile de 56 px minimum.

## Lot S2 — Sélection de niveau (V2)

`SV.unlocked` et `SV.bestLevel` sont déjà remplis à chaque fin de niveau.

- Grille des 12 niveaux dans le menu, verrouillés au-delà de `SV.unlocked`.
- Afficher le meilleur score et les étoiles par niveau.
- Permet de lancer une démo directement sur un beau niveau, ce qui est
  précisément l'usage visé.

## Lot S3 — Musique en couches (V2)

`musicPlay(world)` joue aujourd'hui une base et un arpège.

- Ajouter une couche mélodique qui n'entre qu'à partir du palier « ola »
  (`heatTier>=2`) et une couche de cuivres réservée à l'ovation.
- Les couches se fondent avec `gain.setTargetAtTime`, elles ne se coupent pas.
- Assourdir la musique pendant les temps d'arrêt (`hitStop>0`).

## Lot S4 — Prévisualisation de trajectoire (V2)

Annoncée dans le plan, pas encore implémentée.

- Pendant la suspension, tracer trois à cinq points estompés le long de la
  trajectoire qu'un lâcher immédiat produirait.
- Intégrer la même physique que `releaseBar()` pour rester honnête.
- Masquable via `SV.guide`.

## Lot S5 — Mécaniques propres à chaque monde (V2)

La banque de blocs de `buildLevel` est prête à recevoir des blocs
spécifiques. Aujourd'hui les quatre mondes partagent les mêmes.

- Jungle : lianes qui dérivent latéralement, branches qui cèdent après une
  saisie.
- Plage : vent latéral constant qui courbe les trajectoires.
- Futur : zones de gravité réduite, anneaux de téléportation.
- Ajouter les blocs dans `BLOCKS` avec un champ `world` et filtrer dessus.

## Lot S6 — Lisibilité du personnage (V1)

Défaut réel constaté à la capture : sur le fond noir de V1, l'artiste se
distingue mal des effets lumineux.

- Ajouter un liseré sombre ou une lueur de contour derrière le personnage
  dans `drawPlayer()`, sans toucher `drawMarc` ni `drawClaire`.
- Vérifier la lisibilité dans les quatre mondes.

## Lot S7 — Accessibilité (les deux versions)

- Respecter `prefers-reduced-motion` : couper secousse, grain et aberration,
  réduire le nombre de particules.
- Mode daltonien : les dangers ont déjà une forme distinctive, vérifier que
  rien d'autre ne repose sur la seule couleur.
- Option de ralentissement global à 80 % et 60 %.
- Vérifier qu'aucun clignotement ne dépasse trois par seconde.

## Lot S8 — Décors par monde (V2)

`drawSky` et `drawCrowd` sont communs aux quatre mondes, seule la palette
change.

- Ajouter par monde deux à trois couches de parallaxe pré-rendues dans un
  canvas hors écran, redessinées seulement au changement de monde.
- Ne pas reconstruire le fond à chaque frame.

## Lot S9 — Matrice de tests sur appareils réels

`tools/shots.js` couvre trois formats dans Chromium. Reste à couvrir :

- Safari iOS, portrait et paysage, avec encoche.
- Un Android de milieu de gamme.
- Un écran 120 Hz, pour confirmer que le pas fixe tient.
- Mode privé Safari, où `localStorage` échoue à l'écriture.
- Session de trente minutes, à la recherche d'une fuite mémoire.

---

## Outils

| Fichier | Rôle |
|---|---|
| `tools/check.js` | Syntaxe, chargement, et parcours de tous les états de jeu. Contient le test de non-régression du bug `flashN`. |
| `tools/play_v2.js` | Joueur automatique qui passe par les mêmes entrées qu'un humain et doit franchir les 12 niveaux. |
| `tools/sandbox.js` | DOM et audio simulés, partagés par les deux. |

Le joueur automatique de `play_v2.js` est la meilleure protection contre les
régressions de gameplay : il a trouvé deux défauts de conception que la
lecture du code n'avait pas révélés (barres hors d'atteinte, trapèze
impossible à relancer depuis l'arrêt). Le garder vert.
