# Reste à faire

État au terme de la session. Les lots ci-dessous sont volontairement cadrés
pour être exécutés séparément, y compris par un modèle plus léger : chacun
est court, local, et vérifiable.

**Avant toute modification** : `node tools/check.js <fichier>` doit passer, et
`node tools/play_v2.js` doit rester vert après une modification de V2 (lancer
plusieurs fois : la génération de niveau est aléatoire).

---

## Fait

| Lot | État | Où |
|---|---|---|
| WP-0 Restructuration | ✅ | `index.html`, `trapeze-stars-v1.html`, `trapeze-stars-v2.html` |
| WP-B V1 Classic, corrections | ✅ | les 20 défauts de l'audit sont corrigés |
| WP-A Socle technique | ✅ | V2 : rendu responsive, pas fixe, qualité, i18n, sauvegarde |
| WP-C V2 game design | ✅ | pompage, grand soleil, figures, porteur, chaleur, filet |
| WP-D Game feel | ✅ | temps d'arrêt, écrasement, secousse par bruit, caméra, haptique |
| WP-E Art direction | ✅ | tokens par monde, perspective, personnage articulé, décor par monde (S8) |
| WP-F UI/UX | ✅ | HUD, pause, contrôles contextuels, tutoriel, réglages (S1), niveaux (S2) |
| WP-G Audio | ✅ | bus séparés, limiteur, effets, musique en couches (S3) |
| WP-H Page de garde | ✅ | `index.html` |
| WP-I QA | ◐ | harnais + captures Chromium multi-format faits ; appareils réels restants |
| S1 Réglages | ✅ | musique, effets, langue, qualité, vibrations, guide, vitesse |
| S2 Sélection de niveau | ✅ | grille 12 niveaux, étoiles, meilleur score, verrouillage |
| S3 Musique en couches | ✅ | mélodie à l'ola, cuivres à l'ovation, atténuation au hit-stop |
| S4 Prévisualisation de trajectoire | ✅ | pendant la suspension, masquable via le réglage guide |
| S5 Mécaniques par monde | ✅ | singe voleur (jungle), vent (plage), gravité réduite (futur) |
| S6 Lisibilité du personnage V1 | ✅ | halo de contraste derrière le joueur |
| S7 Accessibilité | ✅ | `prefers-reduced-motion` (les deux versions), vitesse globale (V2) |
| S8 Décors par monde | ✅ (version légère) | décor latéral par monde, sans mise en cache hors écran |

Tout ce qui était planifié dans la session précédente est fait. Ce qui suit
est nouveau : des raffinements identifiés en cours de route, plus le travail
qui exige un vrai appareil et ne peut pas être fait ici.

---

## Limitation connue — V1 en portrait mobile, hors plein écran

Le canvas de V1 est fixe (800×450, ratio préservé par CSS `aspect-ratio`).
Sur un écran haut en portrait, avant de passer en plein écran, le jeu occupe
une bande étroite au centre de l'écran — comportement d'origine, pas une
régression de cette session (voir défaut D5 du `MEGA-PLAN.md`). Le bouton
plein écran (⛶) corrige l'affichage en occupant tout l'écran disponible ;
c'est l'usage prévu sur mobile.

Ce n'est **pas** à corriger sans décision explicite : le plan cadrait V1 comme
« le build actuel, débogué et fiabilisé, gameplay inchangé », pas comme une
refonte responsive. Une refonte du rendu de V1 pour qu'il remplisse l'écran
même hors plein écran est possible (reprendre le principe de `updateView()`
de V2 : résolution logique + `viewScale` dérivé), mais c'est un changement
d'architecture, pas une retouche — à traiter comme un lot à part si demandé.

---

## Lot S9 — Matrice de tests sur appareils réels

`tools/shots.js` (scratchpad, non commité — à recréer si besoin) couvre trois
formats dans Chromium/SwiftShader logiciel. Cela ne remplace pas de vrais
appareils : SwiftShader n'a pas les mêmes limites mémoire/GPU qu'un téléphone,
et Safari a son propre moteur de rendu Canvas 2D. Reste à couvrir :

- Safari iOS, portrait et paysage, avec encoche (iPhone récent).
- Un Android de milieu de gamme (pas un flagship — c'est là que `QUAL_PRESETS`
  et `autoQuality()` sont vraiment mis à l'épreuve).
- Un écran 120 Hz, pour confirmer que le pas fixe (`STEP=1000/60`) tient et
  que rien n'accélère.
- Mode privé Safari, où `localStorage` échoue à l'écriture — `loadSave()` et
  `persist()` ont un `try/catch`, mais jamais vérifié sur le vrai moteur qui
  lève cette erreur.
- Session de trente minutes, à la recherche d'une fuite mémoire (le pool de
  particules et `hitZones.length=0` par frame sont conçus pour ne pas fuir,
  mais seul un profileur réel le confirme).
- Multi-touch réel (déplacement + action simultanés) sur un écran tactile
  physique — le clavier/souris de test ne l'exerce pas complètement.

## Lot S10 — Petits raffinements identifiés en cours de route

Rien de bloquant, remarqué pendant le travail sur S1–S8 :

- **Ducking musical et `setVol` en conflit.** `setVol('music', v)` écrit
  `AU.music.gain.value=v` directement ; si un temps d'arrêt est en cours
  (`duckMusic(true)` a lancé une rampe `setTargetAtTime`), régler le volume
  pendant ce court instant peut être écrasé par la rampe en cours. Effet
  inaudible en pratique (les temps d'arrêt durent moins de 15 frames), mais
  propre à corriger : faire passer `setVol` par la même logique de cible.
- **`SV.guide` et la prévisualisation.** Le réglage coupe la prévisualisation
  de trajectoire, mais rien n'indique au joueur qu'elle existe avant qu'il
  ne la voie une fois. Un indice dans le tutoriel (`tutStep`) le
  mentionnerait.
- **Sélection de niveau et tutoriel.** `startAtLevel()` met `tutStep=0`
  (aucun tutoriel), ce qui est le bon choix pour un joueur qui revient, mais
  un joueur qui débloque le niveau 2 sans avoir terminé le niveau 1 en entier
  (impossible actuellement, mais à garder en tête si `SV.unlocked` devient
  modifiable autrement) n'aurait pas vu le tutoriel non plus.
- **Vent de plage et grand soleil.** Le vent (`world===2`) ne s'applique
  qu'en état `'air'`, jamais en `'swing'` — voulu, pour ne pas fausser le
  pendule. Mais cela signifie qu'un grand soleil en fin de plage n'est pas
  du tout affecté par le vent, ce qui peut sembler incohérent une fois
  qu'on y prête attention. Actuellement invisible en jeu normal.

## Outils

| Fichier | Rôle |
|---|---|
| `tools/check.js` | Syntaxe, chargement, et parcours de tous les états de jeu. Contient le test de non-régression du bug `flashN`. |
| `tools/play_v2.js` | Joueur automatique qui passe par les mêmes entrées qu'un humain, esquive les dangers, et doit franchir les 12 niveaux. Vérifié stable sur au moins 8 exécutions consécutives à seed aléatoire. |
| `tools/sandbox.js` | DOM et audio simulés, partagés par les deux. |

Le joueur automatique de `play_v2.js` reste la meilleure protection contre
les régressions de gameplay. Il a trouvé, au fil des deux sessions : les
barres hors d'atteinte, le trapèze impossible à relancer depuis l'arrêt, et
plus récemment rien de neuf — signe que S1–S8 n'ont pas cassé le cœur du jeu,
seulement ajouté autour. Le garder vert à chaque changement.

Les captures Chromium (via `playwright-core` + le binaire préinstallé
`/opt/pw-browsers/chromium-1194/chrome-linux/chrome`) ont trouvé, cette
session-ci comme la précédente, des défauts qu'aucun test headless ne peut
attraper : mise à l'échelle, police canvas invalide, convention d'angle
inversée. **Toujours regarder le rendu réel après un changement visuel**,
pas seulement faire tourner le harnais.
