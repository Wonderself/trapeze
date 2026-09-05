# V3 « TRAPEZE CITY » — PLAN D'EXÉCUTION

**Ce que c'est** : un troisième jeu de trapèze, sur les mêmes bases de gameplay
que Classic et Deluxe, mais transposé sur les toits d'une ville néon, avec la
présentation d'un GTA moderne — rendu 3D, direction artistique, HUD, cartons de
mission, radar, cinématiques, ambiance.

**Ce que ce n'est pas** : un GTA. Pas de voiture, pas de trafic, pas de police,
pas d'arme, pas de monde ouvert. **Le GTA est dans les graphismes et l'UI/UX,
jamais dans les mécaniques.** Si une session propose une mécanique de GTA, elle
sort du périmètre.

**Un seul niveau**, une seule traversée. C'est une démo.

**Contrainte de phase** : `trapeze-stars-v1.html` et `trapeze-stars-v2.html` ne
sont pas touchés. `index.html` n'est modifié qu'en S5.

---

## 1. Réponse courte

**Cinq sessions**, plus une sixième en tampon qui ne sert que si une session
déborde.

| # | Session | Modèle | Pourquoi ce modèle | Poids |
|---|---|---|---|---|
| S1 | Socle 3D, ville, rig, pendule, caméra | **Fable 5.1** | Session d'architecture. Elle fixe le repère, la projection, le tri de profondeur et la physique du pendule dont héritent toutes les autres. Une erreur ici se paie quatre fois. | XL |
| S2 | Gameplay trapèze complet et traversée | **Opus 5** | Beaucoup de systèmes et une machine à états, mais sur des fondations posées et des mécaniques déjà éprouvées en V2. Dense, pas spéculatif. | XL |
| S3 | Direction artistique GTA, post-traitement, identité | **Fable 5.1** | C'est là que se joue toute la promesse « à la GTA ». Jugement visuel et arbitrages coût/rendu. | L |
| S4 | HUD façon GTA, menus, audio, tactile | **Sonnet 5** | Périmètre entièrement spécifié, motifs déjà éprouvés en V2. Rien à inventer. | M |
| S5 | Page d'accueil 3 versions, QA, outils, docs | **Sonnet 5** | Intégration et vérification. Mécanique, checklist. | M |
| S6 | *(tampon)* finition | **Sonnet 5** | Ne se lance que si S5 remonte des défauts. | S |

**Chemin critique** : S1 → S2 → S3 → S4 → S5. Aucune parallélisation : les cinq
sessions écrivent dans le même fichier.

---

## 2. Le principe directeur

Une seule phrase à garder en tête dans les cinq sessions :

> **Mécaniques de trapèze, langage visuel de GTA.**

La traduction concrète, système par système :

| Élément de GTA | Ce qu'il devient ici |
|---|---|
| Étoiles de recherche | **Étoiles de HYPE** — la chaleur du public, de 0 à 5, dessinées comme les étoiles de recherche d'un GTA |
| Hélicoptère de police | **Drone de télévision** qui vient te filmer quand la hype est haute |
| Carton « MISSION START » | Carton d'entrée en scène, même grammaire typographique |
| Radar en bas à gauche | **Radar des toits** : le parcours, le prochain rig, ta position |
| Compteur de dollars | **Cagnotte de figures**, la mécanique de V2, affichée comme un compteur de fric |
| Briefing de mission | Briefing du numéro, avec bandes cinéma |
| Écran de fin de braquage | Écran de fin de traversée : temps, meilleur enchaînement, étoiles, note sur trois |

C'est la meilleure idée de cette version : on garde une mécanique de trapèze
intacte et on l'habille d'un vocabulaire d'interface que tout le monde
reconnaît immédiatement.

---

## 3. Les bases reprises de V2, sans les réinventer

Ces systèmes sont déjà conçus, équilibrés et testés dans
`trapeze-stars-v2.html`. Ils sont **repris et adaptés**, pas refaits :

- **Le pompage** : l'ampleur du balancé se gagne par des impulsions données au
  bon moment, elle ne se donne pas. Avec l'impulsion plancher (`PUMP_MIN`) qui
  permet toujours de relancer un trapèze arrêté — sans elle, le joueur reste
  bloqué, c'était un vrai bug de V2.
- **Trois qualités de prise** à la saisie de barre, toujours volontaire.
- **La cagnotte de figures** : les figures s'accumulent et ne sont encaissées
  que si la réception passe.
- **Le porteur** : fenêtre annoncée, suspension, relance.
- **Le filet** : tomber coûte le score et du temps, jamais la partie.
- **La chaleur du public**, ici en cinq étoiles de hype au lieu de trois
  paliers, avec multiplicateur.
- **Le socle technique** : pas de temps fixe, profils de qualité avec
  rétrogradation automatique, i18n, sauvegarde versionnée, listes libres sans
  allocation dans la boucle chaude, musique en couches selon l'intensité.

**Ce qui est nouveau en V3** : une vraie caméra 3D libre au lieu de la
perspective fixe de V2, un décor urbain au lieu du chapiteau, une traversée
enchaînée de plusieurs rigs au lieu de niveaux séparés, et toute la couche de
présentation GTA.

---

## 4. Ce que je décide seul, ce que tu peux changer

| Sujet | Ma décision | Alternative |
|---|---|---|
| **Nom** | **TRAPEZE CITY** | fixé par toi |
| **Fichier** | `trapeze-city-v3.html` | `trapeze-stars-v3.html` |
| **Page d'accueil** | Reste « Trapeze Stars », troisième carte « Version 3 · Trapeze City ». La question de titre que j'avais soulevée n'existe plus : les trois sont des jeux de trapèze. | — |
| **Époque / palette** | Crépuscule néon, ville côtière, asphalte mouillé loin en bas | nuit pluvieuse, ou plein jour désaturé |
| **Rendu** | Canvas 2D, pipeline 3D écrit à la main | WebGL — voir §5.1 |
| **Scène** | Toits, à 60–120 m au-dessus de la rue. Le vide sous les pieds est l'argument du décor. | rigs au sol dans la rue — beaucoup moins spectaculaire |
| **Violence** | Aucune. Aucune arme, aucun véhicule, aucun délit. | rien à ajouter : ça rend la démo montrable partout |
| **Ville** | 9 × 9 pâtés, ~940 m, générée par graine fixe, décor non interactif sauf les toits du parcours | ville tracée à la main — plus long, pas mieux |

**Cadre légal, non négociable.** Aucune marque Rockstar. Pas de « GTA », pas de
« Vice City », pas de « Los Santos », aucun logo, aucune police, aucun visuel,
aucun son repris. On s'inspire d'un genre visuel, ce qui est libre ; on ne
copie ni nom ni actif.

**Attente honnête.** Le cadrage, le HUD, l'étalonnage et la grammaire des
menus peuvent vraiment évoquer un GTA. La densité de matière non : pas de
textures photo, pas de foule détaillée. Le résultat visé est un **indé stylisé
haut de gamme à lecture GTA**, pas une imitation photoréaliste.

---

## 5. Bible technique

### 5.1 Pourquoi Canvas 2D et pas WebGL

- **Le harnais de test headless (`tools/sandbox.js`) n'a pas de contexte
  WebGL.** En y passant, on perd `check.js`, le parcours d'états et le singe
  adversarial — exactement les outils qui ont trouvé les vrais bugs de V1 et
  V2. On échangerait de jolis pixels contre une cécité aux régressions.
- **Le conteneur de développement n'a pas de GPU** : WebGL y tourne en
  logiciel, les mesures seraient fausses.
- **Le look visé n'a pas besoin de per-pixel** : faces plates, éclairage par
  orientation, néons émissifs, bloom en post.
- **Zéro dépendance, un fichier, aucune étape de build** : la discipline de
  tout le dépôt.

Le budget le prouve : ~900 faces par image en qualité haute, chacune un
`fill()` sur quatre points. Un ordre de grandeur sous le seuil de difficulté.
Et sans trafic ni véhicules, la charge est plus faible que ce que Canvas 2D
encaisse sans effort.

### 5.2 Repère et unités

- **1 unité = 1 mètre.** X est, **Y haut**, Z nord. Ce n'est pas le repère de
  V2, où Z était la profondeur de l'avancée : ici c'est un vrai repère monde
  avec caméra libre.
- Acrobate 1,75 m. Barre de trapèze 1,4 m de large, câbles de 6 à 9 m.
- Pâté de maisons 90 m, rue 14 m, pas de grille 104 m. **9 × 9 pâtés ≈ 940 m.**
- Immeubles de 40 à 140 m. Les toits du parcours sont entre 60 et 120 m.

### 5.3 Caméra et projection

Caméra à lacet et tangage, sans roulis sauf secousse.

```
focal = (SW * 0.5) / Math.tan(FOV * 0.5)      // FOV horizontal, 58° au repos
```

Monde → œil : translation, rotation de lacet autour de Y, rotation de tangage
autour de X, puis division perspective.

**Le piège qui coûte une session si on l'ignore** : un polygone à cheval sur le
plan de la caméra doit être **découpé dans l'espace œil contre `z = NEAR`
(Sutherland–Hodgman) avant projection**. Sans ça, un mur frôlé s'étale en
travers de tout l'écran. C'est le mode de défaillance classique de tout
pipeline 3D écrit à la main. `NEAR = 0.35 m`.

**Comportement de la caméra** — ce n'est pas une caméra de poursuite de
véhicule, c'est une caméra de cadreur :
- Ancrée sur l'acrobate, avec du retard élastique.
- Elle se place **de trois quarts par rapport au plan du balancé**, jamais
  dedans : c'est ce qui donne la lisibilité du geste et la profondeur du décor.
- Elle recule et le FOV s'ouvre quand l'ampleur du balancé grandit.
- Pendant un vol entre deux rigs, elle anticipe la barre visée.
- Ralenti et resserrement au moment d'une réception ratée.
- Regard libre au doigt ou à la souris, recentrage progressif.

### 5.4 Pipeline de rendu, dans cet ordre

Le tri par peintre seul produit des artefacts sur une ville. La parade est de
**séparer en couches** ce qui ne peut pas s'entrecroiser :

1. **Ciel** — dégradé en cache, disque solaire, bandes de nuages.
2. **Ville lointaine** — silhouettes fondues dans le brouillard, très peu de
   faces, redessinées rarement (cache sur canevas hors-écran, invalidé quand
   la caméra tourne assez).
3. **Ville proche** — faces convexes triées par profondeur œil décroissante,
   élimination des faces arrière et par cône de vue.
4. **Toits du parcours et structures de rig** — les surfaces de jeu.
5. **Acrobate, porteur, barres, câbles, filet.**
6. **Billboards** — néons, drone de télévision, particules.
7. **Post-traitement** — bloom, grain, vignette, étalonnage.
8. **HUD** — jamais transformé.

**Grille spatiale** : ville indexée par cellules de 104 m, seules les cellules
dans le cône de vue et la distance de rendu sont collectées. Le brouillard fond
le lointain dans la couleur du ciel, l'apparition devient invisible.

**Budget de faces par image** : 900 en haute, 550 en moyenne, 320 en basse.
Reprendre le mécanisme de V2 : profil détecté automatiquement, rétrogradation
si le 95e centile du temps d'image dépasse le seuil.

### 5.5 Physique et boucle

**Pas de temps fixe à 1/120 s**, rendu interpolé. L'accumulateur de V2 est déjà
vérifié à 60 et 120 Hz, on le reprend.

**Le pendule reste en deux dimensions.** C'est la simplification qui fait tout
tenir : chaque rig définit un plan de balancé ; à l'intérieur, on simule un
pendule plan avec angle et vitesse angulaire, exactement la physique éprouvée
de V2 ; puis on place le résultat dans le repère 3D. On garde donc un équilibre
déjà réglé, et on n'hérite d'aucune instabilité nouvelle.

**Le vol est en trois dimensions.** Au lâcher, la vitesse angulaire se convertit
en vecteur vitesse 3D dans le plan du rig, puis c'est de la balistique avec
gravité et une traînée légère. La saisie de la barre suivante se teste sur une
distance 3D, avec les trois qualités de prise de V2.

**L'acrobate** : squelette de points en 3D (bassin, torse, tête, épaules,
coudes, mains, genoux, pieds), projetés, puis membres dessinés en espace écran
comme en V2, avec une épaisseur qui suit l'échelle de projection.
*Attention* : la fonction `limb()` de V2 considère l'angle 0 comme « vers le
bas ». Ça a déjà provoqué des membres pointant vers le haut. Vérifie
visuellement, ne suppose pas.

### 5.6 Chiffres cibles

| Mesure | Cible |
|---|---|
| Images par seconde, 1280×720, portable milieu de gamme | 60 |
| Images par seconde, mobile, échelle de rendu 1/1,5 | 45+ |
| Faces par image, qualité haute | ≤ 900 |
| Temps d'image 95e centile | < 16 ms haute, < 22 ms basse |
| Taille du fichier | < 300 Ko |
| Allocations dans la boucle chaude | zéro |

---

## 6. Bible artistique

**La direction** : ville côtière, crépuscule, néon, vue depuis les toits. Elle
lit immédiatement « GTA moderne », elle masque l'absence de textures (le
contre-jour transforme le manque de détail en silhouette assumée), et elle est
bon marché à rendre. Le vide sous les pieds de l'acrobate est l'argument
spectaculaire du décor.

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
| Rue tout en bas | `#141420` avec traînées de reflet |

**Règles de rendu**

- **Aucune face n'est grise.** L'éclairage est simulé par teinte selon
  l'orientation : vers le soleil ça tire orange, à l'opposé ça tire bleu. C'est
  ce qui donne le volume sans aucun calcul d'éclairage.
- **Fenêtres émissives** : trame de rectangles par façade, allumage
  pseudo-aléatoire mais **stable** — fonction de hachage de la position, jamais
  `Math.random()` par image, sinon toute la ville scintille.
- **Néons** en rose et cyan sur les façades et les toits, avec lueur additive.
- **Reflets** : traînées verticales sous chaque source, très loin en bas, qui
  vendent la rue mouillée sans la détailler.
- **Post-traitement** : bloom sur canevas hors-écran au quart de résolution ;
  grain depuis une tuile de bruit pré-rendue ; vignette en dégradé radial mis
  en cache ; étalonnage par deux rectangles composés (`multiply` puis
  `screen`) ; aberration chromatique en qualité haute seulement, très légère ;
  bandes cinéma pendant briefing et écran final.
- **Typographie** : capitales larges très espacées pour les cartons, chiffres
  condensés pour le HUD. Pile système, aucune police externe. Et **jamais
  `inherit` dans `CX.font`** : c'est invalide en canvas, le texte retombe
  silencieusement en 10 px, ça a déjà coûté une session sur V2.

---

## 7. Le niveau unique

**« Traversée en direct »** — un numéro diffusé en direct, d'un bout à l'autre
du district, de toit en toit.

**Le parcours** : sept rigs enchaînés, du toit du port au sommet de la tour du
centre. Chaque rig a son plan de balancé, sa hauteur, sa distance à franchir.
La difficulté monte : écarts plus grands, fenêtres de prise plus courtes, un
porteur au cinquième, un vent latéral au sixième.

**Trois actes :**

1. **L'entrée en scène.** Premier toit, rig d'échauffement. Il faut monter à
   deux étoiles de hype pour que la traversée s'ouvre. C'est le tutoriel
   déguisé : pompage, prise, figure simple.
2. **La traversée.** Rigs 2 à 6, enchaînés. Chaque toit atteint est un point de
   reprise. La cagnotte de figures s'accumule et se garde tant qu'on ne tombe
   pas. Un drone de télévision vient cadrer à partir de trois étoiles.
3. **Le final.** La tour. Dernier vol, le plus long, avec le porteur, puis la
   réception qui boucle le numéro.

**Chute** : le filet rattrape, on repart du dernier toit atteint. On perd la
cagnotte en cours et du temps, jamais la partie. Une démo ne punit pas.

**Écran final** : temps total, meilleur enchaînement, étoiles de hype maximales,
nombre de chutes, cagnotte totale, note sur trois. Rejouable immédiatement.

---

## 8. Découpage détaillé

### S1 — Socle 3D, ville, rig, pendule, caméra *(Fable 5.1)*
**Livre** : `trapeze-city-v3.html`, ~1500 lignes.
**Contenu** : caméra lacet/tangage, projection, découpage au plan proche, rendu
en couches, élimination des faces, grille spatiale, générateur de ville par
graine, toits, structures de rig, pendule plan placé en 3D, vol balistique,
saisie de barre, acrobate en squelette projeté, caméra de cadreur, boucle à pas
fixe, profils de qualité.
**Fini quand** : on se balance et on saute d'un rig au suivant, à 60 images par
seconde, sans étalement de polygone, et `node tools/check.js` passe.

### S2 — Gameplay trapèze et traversée *(Opus 5)*
**Contenu** : pompage avec impulsion plancher, trois qualités de prise, figures
et cagnotte encaissée à la réception, porteur, filet et reprise au dernier toit,
cinq étoiles de hype avec multiplicateur, drone de télévision, vent latéral,
les sept rigs et leur progression de difficulté, machine à états des trois
actes, échec et reprise, écran de résultats.
**Fini quand** : `node tools/play_v3.js` termine la traversée de bout en bout
sans intervention.

### S3 — Direction artistique et post-traitement *(Fable 5.1)*
**Contenu** : ciel crépusculaire, éclairage par teinte de face, fenêtres
émissives stables, néons, reflets, brouillard, bloom, grain, vignette,
aberration, étalonnage, bandes cinéma, logo TRAPEZE CITY, écran-titre,
cinématique d'ouverture qui survole la ville jusqu'au premier rig.
**Fini quand** : les captures sont relues et jugées, et les budgets tiennent
aux trois qualités.

### S4 — HUD façon GTA, menus, audio, tactile *(Sonnet 5)*
**Contenu** : radar des toits, étoiles de hype, compteur de cagnotte, chrono,
jauge d'ampleur, cartons de mission, menus au canvas, commandes tactiles
multitouch, audio synthétisé (vent, câbles, prise, foule, radio en couches),
i18n fr/en, sauvegarde versionnée, accessibilité.
**Fini quand** : jouable au doigt en portrait et en paysage, et
`node tools/monkey_v3.js` passe plusieurs fois d'affilée.

### S5 — Intégration et QA *(Sonnet 5)*
**Contenu** : troisième carte sur `index.html` avec aperçu animé, tableau
comparatif à trois colonnes, Open Graph, outils `play_v3.js`, `monkey_v3.js`,
`shot_v3.js`, mise à jour de `tools/README.md` et `docs/RESTE-A-FAIRE.md`,
passes de performance et d'accessibilité.
**Fini quand** : les trois démos se lancent depuis l'accueil, tous les outils
passent, et ce qui reste hors de portée est écrit noir sur blanc.

---

## 9. Risques et parades

| Risque | Parade, décidée d'avance |
|---|---|
| Étalement de polygone au ras des murs | Découpage Sutherland–Hodgman au plan proche, **obligatoire en S1** |
| Artefacts du tri par peintre | Rendu en couches (§5.4), ville lointaine mise en cache |
| La caméra rend le geste illisible | Cadrage de trois quarts au plan du balancé, jamais dedans — spécifié en S1 et rejugé en S3 |
| Membres de l'acrobate à l'envers | L'angle 0 de `limb()` est « vers le bas ». Vérification visuelle obligatoire, pas de supposition |
| Trapèze arrêté et joueur bloqué | Impulsion plancher au pompage, comme en V2 |
| Fenêtres qui scintillent | Allumage par hachage de position, jamais `Math.random()` par image |
| **Dérive vers un jeu de GTA** | Le principe directeur du §2 est rappelé dans chaque prompt : mécaniques de trapèze, langage visuel de GTA |
| S1 déborde | S6 en tampon |

---

## 10. Les prompts

Un prompt autonome par session, dans [`V3-PROMPTS.md`](V3-PROMPTS.md).
