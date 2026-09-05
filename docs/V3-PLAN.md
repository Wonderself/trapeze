# V3 — PLAN D'EXÉCUTION

**Objectif** : une troisième démo jouable, au feel et au look d'un GTA moderne,
présentée à côté de Classic et Deluxe sur la page d'accueil.
**Un seul niveau, une seule mission.** C'est une démo, pas un monde ouvert complet.

**Contrainte absolue de cette phase** : `trapeze-stars-v1.html` et
`trapeze-stars-v2.html` ne sont pas touchés. `index.html` n'est modifié qu'à la
toute dernière session (S5), et uniquement pour ajouter une troisième carte.

---

## 1. Réponse courte

**Cinq sessions.** Une sixième est prévue en tampon, elle ne sert que si une
session déborde.

| # | Session | Modèle | Pourquoi ce modèle | Poids |
|---|---|---|---|---|
| S1 | Moteur 3D, ville, véhicule | **Fable 5.1** | Session d'architecture. Elle fixe le repère, la projection, le tri de profondeur et les conventions dont héritent toutes les autres. Une erreur ici se paie cinq fois. | XL |
| S2 | Trafic, police, niveau de recherche, à pied, mission | **Opus 5** | Beaucoup de systèmes et une machine à états, mais sur des fondations déjà posées. Travail dense, pas spéculatif. | XL |
| S3 | Direction artistique, post-traitement, ambiance | **Fable 5.1** | C'est là que se joue le « ça ressemble à un GTA ». Ça demande du jugement visuel et des arbitrages coût/rendu, pas de l'exécution. | L |
| S4 | HUD, minimap, menus, audio, mobile, i18n, sauvegarde | **Sonnet 5** | Périmètre entièrement spécifié, motifs déjà éprouvés en V2. Rien à inventer. | M |
| S5 | Page d'accueil 3 versions, QA, perf, outils, docs | **Sonnet 5** | Intégration et vérification. Mécanique, checklist. | M |
| S6 | *(tampon)* finition, correctifs remontés en S5 | **Sonnet 5** | Ne se lance que si S5 remonte des défauts. | S |

**Chemin critique** : S1 → S2 → S3 → S4 → S5. Aucune parallélisation possible :
les cinq sessions écrivent dans le même fichier.

---

## 2. Ce que je décide seul, ce que tu peux changer

Tu m'as dit de construire seul à 100 % si je peux. Donc je tranche tout, et je
liste ci-dessous mes choix avec l'alternative. Si un choix ne te va pas, c'est
une ligne à changer dans le prompt de la session concernée, pas une refonte.

| Sujet | Ma décision | Alternative si tu préfères |
|---|---|---|
| **Nom du jeu** | **NEON BAY**, ville de **Vespera Bay** | n'importe quel autre nom original ; à changer dans S1 et S5 |
| **Nom de fichier** | `v3-neon-bay.html` | `trapeze-stars-v3.html` si tu veux garder la nomenclature de la collection |
| **Époque / palette** | Crépuscule néon, côte, palmiers, asphalte mouillé — la lecture « Vice City / GTA VI » | nuit pluvieuse pure, ou plein jour désaturé style GTA V Los Santos |
| **Rendu** | Canvas 2D, pipeline 3D écrit à la main | WebGL — voir §4.1 pour pourquoi je ne le prends pas |
| **Cœur du jeu** | Conduite d'abord, à pied en second (marcher, entrer/sortir, ramasser) | à pied plus développé (combat, tir) — hors périmètre d'une démo |
| **Armes / violence** | Aucune arme, aucun tir. Poursuite, collisions, fuite. | rien à ajouter : c'est aussi ce qui rend la démo montrable partout |
| **Mission** | Une livraison en trois temps (§6) | course chronométrée pure, ou fuite libre sans objectif |
| **Ville** | 9 × 9 pâtés, ~940 m de côté, générée par graine fixe | ville tracée à la main — plus long, pas mieux à cette échelle |

**Cadre légal, non négociable.** Aucune marque Rockstar. Pas de « GTA », pas de
« Vice City », pas de « Los Santos », aucun logo, aucune police, aucun visuel,
aucun son repris. Tout est original et écrit dans le fichier. On s'inspire d'un
genre et d'une esthétique, ce qui est libre ; on ne copie ni nom ni actif.

**Attente honnête sur le résultat.** La silhouette, le cadrage caméra, le HUD,
l'étalonnage des couleurs et le feel de conduite peuvent vraiment évoquer un
GTA. La densité de matière ne le peut pas : pas de textures photo, pas de
personnages détaillés, pas de foule. Le résultat visé est un **indé stylisé
haut de gamme à lecture GTA**, pas une imitation photoréaliste. Viser autre
chose serait mentir sur ce que trois mille lignes de Canvas 2D peuvent rendre.

---

## 3. Ce dont j'ai besoin de toi

Rien pour démarrer S1. Trois questions seulement, et elles peuvent attendre S5 :

1. **Le nom.** Je pars sur NEON BAY. Si tu en veux un autre, dis-le avant S3
   (c'est là que le logo est dessiné).
2. **La page d'accueil.** Elle s'appelle aujourd'hui « Trapeze Stars » et
   annonce « Deux versions jouables ». Avec une troisième démo qui n'a rien à
   voir avec le cirque, je propose de la retitrer en hub de démos et de garder
   Trapeze Stars comme nom des deux premières. À arbitrer en S5.
3. **Le déploiement.** Si la démo doit vivre ailleurs que sur ce dépôt (nom de
   domaine, sous-domaine), dis-le en S5 pour que les métadonnées Open Graph
   pointent au bon endroit.

---

## 4. Bible technique

### 4.1 Pourquoi Canvas 2D et pas WebGL

Ce n'est pas un choix par facilité, c'est un choix par contrainte de
vérification.

- **Le harnais de test headless (`tools/sandbox.js`) n'a pas de contexte
  WebGL.** En passant à WebGL, on perd `check.js`, les tests de parcours
  d'états et le singe adversarial — c'est-à-dire exactement les outils qui ont
  trouvé les vrais bugs de V1 et V2. On échangerait de jolis pixels contre une
  cécité totale sur les régressions.
- **Le conteneur de développement n'a pas de GPU.** WebGL y tourne sur
  SwiftShader, en logiciel : les mesures de performance seraient fausses et les
  captures d'écran lentes.
- **Le look visé n'a pas besoin de per-pixel.** Faces plates, éclairage
  précalculé par orientation de face, néons émissifs, bloom en post. Tout ça se
  fait en `fill()` de quadrilatères.
- **Zéro dépendance, un seul fichier, aucune étape de build** : c'est la
  discipline de tout ce dépôt, et c'est ce qui rend la démo déployable partout.

Le budget prouve que ça tient : ~900 faces par image en qualité haute, chacune
étant un `fill()` sur un chemin de quatre points. C'est un ordre de grandeur en
dessous de ce qui met Canvas 2D en difficulté.

### 4.2 Repère et unités

- **1 unité = 1 mètre.** X vers l'est, **Y vers le haut**, Z vers le nord.
  (Attention : ce n'est pas le repère de V2, où Z était la profondeur de
  l'avancée. Ici c'est un vrai repère monde avec caméra libre.)
- Voiture : 4,4 m × 1,9 m × 1,35 m. Personnage : 1,8 m.
- Voie 3,5 m, rue à deux fois deux voies = 14 m.
- Pâté de maisons 90 m, pas de grille 104 m. **9 × 9 pâtés ≈ 940 m de côté.**
- Immeubles de 12 à 80 m de haut, plus bas près de la côte, plus hauts au
  centre.

### 4.3 Caméra et projection

Caméra à lacet et tangage (pas de roulis, sauf secousse).

```
focal = (SW * 0.5) / Math.tan(FOV * 0.5)     // FOV horizontal, 62° au repos
```

Transformation monde → œil : translation, puis rotation de lacet autour de Y,
puis rotation de tangage autour de X. Projection : division par la profondeur
œil.

**Le piège qui coûte une session si on l'ignore** : un polygone à cheval sur le
plan de la caméra doit être **découpé dans l'espace œil contre `z = NEAR`
(Sutherland–Hodgman) avant projection**. Sans ce découpage, un immeuble frôlé
s'étale en travers de tout l'écran. C'est le mode de défaillance classique de
tout pipeline 3D écrit à la main. `NEAR = 0.35 m`.

Caméra de poursuite : ressort amorti sur la position, distance 8,5 m, hauteur
3,2 m, point visé 1,2 m au-dessus du toit, anticipation proportionnelle à la
vitesse, FOV qui s'ouvre jusqu'à 74° à pleine vitesse. Regard libre au doigt ou
à la souris, retour progressif derrière le véhicule.

### 4.4 Pipeline de rendu, dans cet ordre

Le tri par peintre seul produit des artefacts sur une ville. La parade est de
**séparer en couches** ce qui ne peut pas s'entrecroiser :

1. **Ciel** — dégradé vertical en cache, disque solaire, nuages en bandes.
2. **Sol et routes** — tous à Y = 0, donc aucun conflit de profondeur entre
   eux. Découpés par tuile de pâté, triés du plus loin au plus près.
3. **Bâtiments et décor** — faces convexes triées par profondeur œil
   décroissante. Élimination des faces arrière au sens de parcours, élimination
   par distance et par cône de vue.
4. **Véhicules et personnages** — même tri, mais après les bâtiments.
5. **Panneaux et billboards** — néons, panneaux, palmiers.
6. **Post-traitement** — bloom, grain, aberration, vignette, étalonnage.
7. **HUD** — jamais transformé.

**Grille spatiale** : la ville est indexée par cellules de 104 m. Chaque image
ne collecte que les cellules dans le cône de vue et dans la distance de rendu.
Le brouillard fait fondre le lointain dans la couleur du ciel, ce qui rend
l'apparition invisible.

**Budget de faces par image** : 900 en haute, 550 en moyenne, 320 en basse.
Reprendre le mécanisme de V2 : détection automatique du profil, puis
rétrogradation si le 95e centile du temps d'image dépasse le seuil.

### 4.5 Boucle et physique

Pas de temps fixe à **1/120 s pour la physique** (le véhicule devient instable
en dessous), rendu interpolé. Reprendre l'accumulateur de V2, déjà vérifié à 60
et 120 Hz.

Modèle de conduite **arcade, pas simulation** : vitesse le long du cap, angle
de braquage plafonné par la vitesse, adhérence latérale avec glissement au-delà
d'un seuil, frein à main qui casse l'adhérence arrière pour le drift, transfert
de masse visuel (tangage à l'accélération, roulis en virage), suspension qui
rebondit sur les trottoirs.

Collisions contre les bâtiments : boîtes alignées sur les axes, testées via la
grille spatiale, réponse par impulsion + dégâts + secousse caméra. Collisions
entre véhicules : cercles, largement suffisant.

### 4.6 Chiffres cibles

| Mesure | Cible |
|---|---|
| Images par seconde, 1280×720, portable milieu de gamme | 60 |
| Images par seconde, mobile, échelle de rendu 1/1,5 | 45+ |
| Faces par image, qualité haute | ≤ 900 |
| Temps d'image 95e centile | < 16 ms haute, < 22 ms basse |
| Taille du fichier | < 300 Ko |
| Allocations dans la boucle chaude | zéro (listes libres, comme V2) |

---

## 5. Bible artistique

**La direction** : côte, crépuscule, néon, asphalte mouillé. Elle est choisie
pour trois raisons — elle lit immédiatement « GTA moderne », elle masque
l'absence de textures (le contre-jour transforme le manque de détail en
silhouette assumée), et elle est bon marché à rendre.

**Palette**

| Rôle | Couleur |
|---|---|
| Ciel haut | `#1B1040` indigo profond |
| Ciel milieu | `#B0316E` magenta |
| Ciel bas | `#FF8A3D` orange brûlé |
| Halo solaire | `#FFD98A` |
| Faces éclairées | teintées vers l'orange chaud |
| Faces à l'ombre | teintées vers le bleu froid, jamais du gris |
| Néon rose | `#FF2E88` |
| Néon cyan | `#25E5FF` |
| Asphalte | `#141420`, avec traînées de reflet verticales |

**Règles de rendu**

- **Aucune face n'est grise.** L'éclairage est simulé par teinte selon
  l'orientation : les faces vers le soleil tirent vers l'orange, les faces
  opposées vers le bleu. C'est ce qui donne le volume sans calcul.
- **Fenêtres émissives** : une trame de rectangles par face, allumés
  aléatoirement mais de façon stable (fonction de hachage de la position, pas de
  `Math.random()` par image, sinon ça scintille).
- **Reflets au sol** : traînées verticales sous chaque source lumineuse, alpha
  faible, largeur croissante avec la distance. Trois traits par source suffisent
  à vendre l'asphalte mouillé.
- **Palmiers** : silhouettes noires en contre-jour, dessinées comme billboards,
  cinq variantes.
- **Post-traitement** : bloom sur un canevas hors-écran au quart de résolution,
  flou par double `drawImage` réduit puis agrandi, composition en `lighter`.
  Grain à partir d'une tuile de bruit pré-rendue, décalée aléatoirement.
  Vignette en dégradé radial mis en cache. Aberration chromatique en qualité
  haute seulement, très légère.
- **Bandes cinéma** en haut et en bas pendant les briefings et l'écran final.

**Typographie** : sans-serif large en capitales, très espacée, pour les cartons
de mission ; chiffres condensés pour le HUD. Aucune police externe, on reste sur
une pile système comme en V2 — et **jamais `inherit` dans `CX.font`**, c'est
invalide en canvas et ça a déjà coûté une session sur V2.

---

## 6. Le niveau unique et la mission

Un district côtier, 9 × 9 pâtés, un front de mer au sud, un quartier d'affaires
au nord, un port à l'est. Généré par graine fixe : la ville est identique à
chaque partie, ce qui la rend testable et mémorisable.

**Mission « Dernière tournée », en trois temps :**

1. **Prise en main.** Le joueur démarre au volant, libre. Un marqueur
   cylindrique jaune l'attend deux pâtés plus loin. Entrer dedans lance le
   briefing.
2. **Le colis.** Rejoindre le point de récupération à l'autre bout de la ville.
   Flèche directionnelle et minimap. Chrono souple : pas d'échec, mais le temps
   compte au score. À l'arrivée, le joueur descend du véhicule, marche jusqu'au
   colis, le ramasse. C'est la séquence à pied de la démo.
3. **La fuite.** Au ramassage, deux étoiles de recherche. La police apparaît et
   poursuit. Il faut rejoindre le garage. Percuter une voiture de police monte
   la jauge, se cacher hors de vue la fait redescendre. Arriver au garage
   termine la mission.

**Écran final** : temps total, vitesse maximale, dégâts, étoiles maximales
atteintes, note sur trois. Rejouable immédiatement.

**Échec** : véhicule détruit ou joueur arrêté → reprise au dernier point de la
mission, pas au début. Une démo ne punit pas.

---

## 7. Découpage détaillé

### S1 — Moteur 3D, ville, véhicule *(Fable 5.1)*

**Livre** : `v3-neon-bay.html` créé, ~1600 lignes.
**Contenu** : caméra lacet/tangage, projection, découpage au plan proche, tri
par couches, élimination des faces arrière et par cône, grille spatiale,
générateur de ville par graine, réseau routier, physique véhicule arcade,
caméra de poursuite, collisions, boucle à pas fixe, profils de qualité,
placeholder HUD minimal.
**Fini quand** : on conduit dans une ville à 60 fps, sans déchirure ni
étalement de polygone, et `node tools/check.js v3-neon-bay.html` passe.

### S2 — Trafic, police, à pied, mission *(Opus 5)*

**Contenu** : véhicules de trafic suivant le réseau, piétons simples, mode à
pied (marche, entrée/sortie de véhicule, ramassage), IA de poursuite policière,
jauge de recherche 0–5 avec ligne de vue et décroissance, machine à états de
la mission en trois temps, marqueurs, flèche d'objectif, échec et reprise,
écran de fin.
**Fini quand** : `node tools/drive_v3.js` termine la mission de bout en bout
sans intervention.

### S3 — Direction artistique et post-traitement *(Fable 5.1)*

**Contenu** : ciel crépusculaire, soleil, nuages, éclairage par teinte de face,
fenêtres émissives stables, néons et enseignes, reflets d'asphalte mouillé,
palmiers, brouillard, bloom, grain, vignette, aberration, étalonnage, bandes
cinéma, logo NEON BAY, écran-titre, caméra cinématique d'ouverture.
**Fini quand** : les captures d'écran sont lues et jugées, et le budget de
faces et le temps d'image tiennent aux trois qualités.

### S4 — HUD, menus, audio, mobile *(Sonnet 5)*

**Contenu** : minimap rotative, jauge de recherche, compteur de vitesse,
chrono, santé du véhicule, cartons de mission, menu principal, réglages,
pause, commandes tactiles (manche virtuel, accélérateur, frein, frein à main,
caméra), moteur audio synthétisé (régime moteur, crissement, sirène, radio en
couches), i18n fr/en, sauvegarde versionnée, accessibilité.
**Fini quand** : jouable au doigt en portrait et en paysage, et
`node tools/monkey_v3.js` passe plusieurs fois d'affilée.

### S5 — Intégration et QA *(Sonnet 5)*

**Contenu** : troisième carte sur `index.html` avec aperçu animé, tableau
comparatif étendu, métadonnées Open Graph, outils `drive_v3.js`,
`monkey_v3.js`, `shot_v3.js`, mise à jour de `tools/README.md`, de
`docs/RESTE-A-FAIRE.md`, passe de performance, passe d'accessibilité, revue
finale du code.
**Fini quand** : les trois démos se lancent depuis l'accueil, tous les outils
passent, et ce qui reste hors de portée est écrit noir sur blanc.

---

## 8. Risques et parades

| Risque | Parade, décidée d'avance |
|---|---|
| Étalement de polygone au ras des murs | Découpage Sutherland–Hodgman contre le plan proche, **obligatoire en S1** |
| Artefacts du tri par peintre | Rendu en couches (§4.4), routes à plat séparées des volumes |
| Chute de performance en ville dense | Grille spatiale + budget de faces + rétrogradation automatique |
| Physique instable au drift | Pas fixe à 1/120 s, pas 1/60 |
| Fenêtres qui scintillent | Allumage par hachage de position, jamais `Math.random()` par image |
| S1 déborde | S6 en tampon ; en cas de dépassement, la police passe de S2 à S6 |
| Le look ne « fait pas GTA » | S3 est chez le modèle le plus fort, avec vérification par captures relues |

---

## 9. Les prompts

Chaque prompt ci-dessous est autonome : il se colle tel quel dans une session
neuve, sans autre contexte. Ils sont dans le fichier `docs/V3-PROMPTS.md`.
