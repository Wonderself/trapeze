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

## 10. État après S1

**Livré** : `trapeze-city-v3.html`, 1533 lignes de JavaScript, un seul fichier,
zéro dépendance, aucune étape de build. On se balance, on lâche, on vole,
on rattrape la barre suivante, trois fois de suite, jusqu'à la fin du parcours.

**Vérifié, pas supposé**

| Vérification | Outil | Résultat |
|---|---|---|
| Syntaxe, chargement, parcours des états | `tools/check.js` | passe, boucle vivante sur Game Over |
| Découpage au plan proche | `shot_v3.js`, captures `07` et `08` | caméra à 25 cm d'une façade, de face puis en rasant : aucun étalement |
| Franchissabilité du parcours | `tools/reach_v3.js` | 3 vols, amplitude mini 87° / 96° / 107° sur 164° possibles |
| Chaîne d'entrée complète | `shot_v3.js`, scénario `13` | pomper, lâcher, saisir au clavier, 3 vols, traversée bouclée |
| Robustesse | fuzz de 12 000 images et 4 200 actions aléatoires | aucune exception, deux passages |
| Coût du rendu | mesuré dans le jeu | 0,6 / 1,4 / 2,3 ms médian en basse / moyenne / haute |
| Non-régression V1 et V2 | `tools/check.js` | les deux passent toujours, fichiers non modifiés |

**Trois bugs réels trouvés, qu'aucune relecture n'aurait donnés**

1. **L'impulsion plancher enfermait le pendule.** Elle *fixait* l'amplitude à
   0,30 rad au lieu de garantir un minimum : chaque pompage y ramenait le
   pendule et l'amplitude ne montait plus jamais. 185 appuis parfaits ne
   servaient à rien. C'est l'ironie de la situation — le garde-fou censé
   éviter le blocage était devenu le blocage.
2. **Le budget de fenêtres était dépensé à l'envers.** Il était consommé dans
   l'ordre du tri, donc par les façades lointaines, et les grandes façades du
   premier plan finissaient nues. La répartition part maintenant des plus
   proches, avec une trame plus grossière au loin.
3. **L'amortissement mangeait 9 % d'énergie par seconde.** Invisible en
   lisant le code (0,9992 par pas semble anodin), flagrant dès qu'on multiplie
   par 120 pas par seconde. Ramené à 3 %.

**Écarts assumés par rapport au plan**

- **Densité relevée.** `render()` mesuré à 1,6 ms sur un budget de 16,7 laissait
  dix fois la marge. Les budgets sont passés à 460 / 850 / 1400 faces et
  360 / 520 / 700 m de distance. Laisser un décor artificiellement vide aurait
  donné une fausse idée de ce que le socle peut porter en session 3.
- **Niveau de détail plutôt que cache.** Le plan prévoyait un cache hors-écran
  de la ville lointaine, invalidé à la rotation de la caméra. Remplacé par une
  simple dégression : moins de faces et pas de fenêtres au loin. Aucun état à
  invalider, donc aucun bug d'invalidation, pour un coût mesuré identique.
- **Quatre rigs au lieu de deux.** Trois vols enchaînés valident ce que deux ne
  valident pas : que la caméra, la saisie et l'état survivent à la répétition.
  Le parcours complet à sept rigs reste à la session 2.
- **Le sol n'est pas de la géométrie.** Un plan infini à y = 0 est exactement ce
  que le tri par peintre gère le plus mal. Il est rempli en espace écran sous
  la ligne d'horizon calculée : correct, et gratuit.

**Deux décisions de conception à connaître pour la suite**

- **Le pompage passe par l'énergie**, pas par un facteur ad hoc comme en Deluxe :
  l'amplitude est déduite de l'énergie du pendule, donc un pompage vaut la même
  chose où qu'on appuie dans la fenêtre. Il est verrouillé à un par demi-balancé,
  armé au passage par le point bas. Résultat mesuré : 7,3 s pour atteindre le
  grand soleil avec un timing juste, 13,7 s en martelant. Le martèlement marche
  donc, mais deux fois moins bien — forgiving sans être gratuit.
- **Les membres de l'acrobate sont tracés entre deux points projetés**, jamais
  à partir d'angles. La convention d'angle de Deluxe (0 = vers le bas) avait
  fini par produire des bras à l'envers ; ici cette classe d'erreur est
  structurellement impossible.

**Ce qui reste ouvert pour la session 2** : les figures et la cagnotte, le
porteur, le filet, les étoiles de hype et le drone, les sept rigs, la machine
à états des trois actes. Le compteur de vies (5) et l'écran de Game Over sont
des béquilles temporaires, présentes pour que `check.js` traverse les trois
jeux avec le même pont ; ils seront remplacés par le filet et la reprise au
dernier toit, comme le prévoit le §7.

---

## 11. État après S2

**Livré** : le gameplay complet et la traversée, dans le même
`trapeze-city-v3.html` — 2 750 lignes, 120 Ko, un seul fichier, zéro
dépendance, aucune étape de build. Sept rigs, trois actes, figures et
cagnotte, cinq étoiles de hype, drone de télévision, porteur, filet et
reprise, vent latéral, écran de résultats.

**Vérifié, pas supposé**

| Vérification | Outil | Résultat |
|---|---|---|
| Syntaxe, chargement, parcours des états | `tools/check.js` | passe, boucle vivante sur Game Over |
| Franchissabilité des 7 rigs | `tools/reach_v3.js` | 6 vols, amplitude mini 91° / 99° / 109° / 120° / 129° / 144° sur 164° possibles |
| Traversée de bout en bout | `tools/play_v3.js` | **5 profils de joueur sur 5 bouclent les 7 rigs**, 51 à 84 s, 0 chute |
| Désordre d'entrées | `tools/play_v3.js` | 60 000 pas, 41 880 actions au hasard, aucune exception, machine à états repart |
| Filet et reprise | `tools/play_v3.js` | chute rattrapée, reprise au dernier toit, cagnotte perdue, +4 s au chrono |
| Enchaînement complet AU CLAVIER | `tools/shot_v3.js` | porte des 2 étoiles ouverte en pompant, puis 6 vols, rig 7/7 |
| Prise ratée, porteur, drone | `shot_v3.js`, captures `14`, `15`, `16`, **regardées** | trois défauts de rendu trouvés, voir plus bas |
| Découpage au plan proche (non-régression S1) | captures `07` et `08` | caméra à 25 cm d'une façade : aucun étalement |
| Coût du rendu, **drone en vol** | mesuré dans le jeu | 0,9 / 1,7 / 2,6 ms médian, p95 3,1 ms en haute, 60 ips |
| Particules | instrumenté | pic 40 sur 340 en traversée complète |
| Non-régression V1 et V2 | `tools/check.js` | les deux passent, fichiers non modifiés |
| Non-régression jouabilité V2 | `tools/play_v2.js` | 12 niveaux sur 12 franchis, final atteint |

**Cinq bugs réels, qu'aucune relecture n'aurait donnés**

1. **Les deux derniers vols étaient infranchissables.** `reach_v3.js` l'a dit
   au premier essai : le vol 6 n'avait *aucune* solution, le vol 5 en avait
   109 sur un balayage complet. Le dénivelé coûte bien plus cher que l'écart —
   14 m de montée annulaient 40 m de portée. Profil de hauteurs et écarts
   recalés jusqu'à une progression régulière de 91° à 144°.
2. **Le porteur était posé sur une trajectoire tirée au hasard.** Il était
   placé au mi-parcours du vol qui visait le mieux — mais il y a trois cents
   trajectoires gagnantes, et leurs mi-parcours s'étalent sur dix mètres de
   hauteur. Le vol réel du joueur passait à 4,5–6,8 m de ses mains, pour un
   rayon de 3,1. Il est maintenant placé sur la **médiane** du nuage : on
   attrape en volant la bonne ligne, ce qui est une adresse, au lieu de
   dépendre du tirage.
3. **La réception au porteur visait un point où personne n'est.** La distance
   était mesurée 1,55 m sous ses mains, alors que le porteur saisit le
   voltigeur aux poignets — les mains des deux se rejoignent, le corps pend
   dessous. 1,55 m d'erreur sur un rayon de 3,4.
4. **Les étoiles de hype oscillaient au seuil et rejouaient leur
   célébration.** Déduire l'étoile de la hype par une division la fait
   clignoter dès que la jauge se stabilise sur un palier. Mesuré sur une
   capture : 316 particules vivantes sur 340 et une traînée de confettis
   longue de toute l'image, pour une hype qui ne bougeait plus. Hystérésis
   de 4 points ; le pic est retombé à 40.
5. **La caméra s'enfonçait dans une façade à chaque chute.** Sa place est
   déduite du portique : correcte au niveau des toits, catastrophique quinze
   mètres plus bas. La capture d'une prise ratée montrait l'intérieur d'un
   immeuble. Sous le niveau des toits elle se cale maintenant sur l'acrobate
   lui-même, à 13 m perpendiculairement au plan du vol.

**Un outil réparé au passage** : `tools/play_v2.js` ne démarrait plus du tout
— il cherchait `sandbox.js` dans un dossier temporaire d'une session passée,
qui n'existe plus. Le test de non-régression de la jouabilité de V2 était donc
muet depuis un moment. Chemins rendus relatifs au script ; il repasse, 12
niveaux sur 12. `trapeze-stars-v2.html` n'a pas été touché.

**Un défaut de conception trouvé par le pilote automatique**

**Marteler le pompage ne coûte pas qu'un ralentissement.** La session 1 avait
mesuré 7,3 s au timing juste contre 13,7 s en martelant, et concluait
« forgiving sans être gratuit ». C'est plus sévère que ça : en martelant,
l'amplitude s'installe dans un cycle qui oscille entre 1,7 et 2,8 rad **sans
jamais tenir le maximum**, et un appui donné juste avant le lâcher casse la
vitesse au pire moment. Le dernier vol en demande 2,52 : il n'est pas
franchissable en martelant. Le pilote automatique s'est bloqué dessus
pendant 200 s avant qu'on comprenne. C'est assumé — le pompage rythmé est la
compétence que l'acte 1 enseigne, et le final est l'endroit où elle se paie.

**Écarts assumés par rapport au plan**

- **Le vent est figé au lâcher, pas continu.** Le plan demandait un vent
  latéral qui décale la trajectoire. Le joueur ne peut pas se diriger en vol :
  un vent qui varie pendant le vol serait une taxe, pas une difficulté. Il
  oscille donc lentement, il est affiché en permanence, et sa valeur est figée
  à l'instant du lâcher — **choisir son moment devient la parade**. Ramené de
  0,95 à 0,70 m/s² après mesure : le vol final approche déjà à 1,43 m de la
  barre au mieux, et un décalage de 2,3 m l'aurait rendu infranchissable.
- **La relance du porteur est résolue, pas simulée.** Elle vise la barre
  suivante en rejouant la balistique du jeu, vent compris. Le porteur est une
  récompense ; en faire une deuxième difficulté aurait puni le joueur d'avoir
  réussi.
- **Le vol final porte le vent ET le porteur.** Le plan disait « porteur au 5 »
  et « vent latéral au 6 » d'un côté, « le final : la tour, le vol le plus
  long, avec le porteur » de l'autre. Les deux lectures se rejoignent sur le
  dernier vol : il a les deux.
- **Les vies et l'écran de Game Over ne sont plus du jeu.** Comme le §7 le
  prévoyait, le filet les remplace : une chute coûte la cagnotte, de la hype
  et 4 s, jamais la partie. Les deux restent déclarés et rendus uniquement
  parce que `check.js` traverse les trois jeux avec le même pont de test.

**Deux décisions de conception à connaître pour la suite**

- **La cagnotte s'encaisse à la réception, et seulement là.** Une figure suivie
  d'une chute ne vaut rien. Répéter la même figure dans une cagnotte la dévalue
  (×0,62 par répétition), chaque figure déjà en réserve majore la suivante
  (+10 %), et redresser le corps avant la prise donne une **sortie propre**
  (×1,35) — le seul bonus du jeu qui récompense d'*arrêter* une figure au bon
  moment plutôt que de la prolonger.
- **Le porteur cale son balancé sur le départ du voltigeur**, comme au vrai
  trapèze : sa phase est fixée au lâcher pour que ses bras soient tendus quand
  le vol médian arrive au mi-parcours. La fenêtre récompense donc une
  trajectoire juste au lieu de tirer au sort.

**Ce qui reste ouvert pour la session 3** : toute la direction artistique et
le post-traitement. Le rendu de la session 2 est fonctionnel et volontairement
brut — étoiles de hype en aplat, cartons d'acte en bandes simples, filet en
trame de lignes, porteur et drone en segments et boîtes. Les captures `14` à
`19` montrent l'état exact à reprendre.

---

## 12. État après S3

**Livré** : la direction artistique et le post-traitement, dans le même
`trapeze-city-v3.html` — 3 403 lignes, 149 Ko, un seul fichier, zéro
dépendance, aucune police ni image externe. Ciel crépusculaire à nuages,
néons roses et cyan avec lueur additive, édicules de toit, reflets de rue,
lueur, frange chromatique, étalonnage, vignette, grain, bandes cinéma,
ralenti sur réception ratée, traînée de figure, poussière de magnésie,
logo TRAPEZE CITY dessiné au canvas, écran-titre en survol de ville et
cinématique d'ouverture.

**Le vrai sujet de cette session : le budget d'image**

Le post-traitement a crevé le budget dès la première version — 20,7 ms en
qualité haute contre 2,6 avant, soit 21 images par seconde. Deux mesures,
et deux réécritures, l'ont ramené dans les clous.

| Étape | Version 1 | Version finale | Ce qui a changé |
|---|---|---|---|
| Lueur | 8,3 ms | 2,5 ms | Ne relit plus le canevas fini. Les sources lumineuses sont connues — soleil, fenêtres, néons, particules, liseré — alors chacune dépose sa tache dans un tampon au quart de résolution **au moment où elle est dessinée**. |
| Frange chromatique | 9,3 ms | ~0 ms | Fabriquée **en espace de lueur**, à 320 × 180, au lieu de deux copies plein écran. Une aberration ne se voit que sur les hautes lumières : c'est exactement là qu'elle est calculée. |
| Étalonnage + vignette | 2 passes | 1 passe | Les deux multiplient l'image par une couleur. Il suffit que cette couleur varie du centre vers le bord : un seul dégradé radial fait les deux. |
| Grain | 8,7 ms | 0,5 ms | Le carrelage du motif se refaisait à chaque image. Il est fait **une fois**, au redimensionnement, dans un canevas de la taille de l'écran. |

**Deux pièges de mesure, à connaître pour la suite**

1. **Le chronomètre autour de `render()` ment.** Il annonçait 4,8 ms pendant
   que l'image en prenait 50. Le canevas 2D diffère son travail et le vide
   en fin d'image : le coût tombe *après* la fenêtre de mesure. La seule
   mesure fiable est le temps d'image réel. `shot_v3.js` affiche désormais
   les deux, et le second seul fait foi.
2. **Les passes plein écran ne s'additionnent pas, elles s'empilent.**
   Mesurées une par une, toutes étaient « gratuites ». Ensemble : 44 ms.
   Chaque changement de mode de composition sur le canevas principal force
   un vidage. Sept passes sont devenues trois.

**Mesures finales**, 1280 × 720, scène chargée, drone en vol :

| Profil | Temps d'image | Images/s | Faces | Fenêtres |
|---|---|---|---|---|
| basse | 16,7 ms | **60** | 289 | 405 |
| moyenne | 16,7 ms | **60** | 413 | 1 361 |
| haute | 28,7 ms | 35 | 511 | 2 959 |

**Le conteneur de développement n'a pas de GPU** : tout est rastérisé en
logiciel, et une passe additive plein écran y coûte 6 ms là où elle est
quasi gratuite sur une carte graphique. La qualité haute est donc mesurée
dans le pire cas imaginable. Deux garde-fous, et ils fonctionnent :
la lueur et la frange sont descendues d'un cran — **la qualité moyenne n'a
plus de bloom**, comme le §8 l'exige d'un effet qui crève le budget — et la
rétrogradation automatique de la session 1 a été vérifiée de bout en bout :
partie lancée en haute, elle se stabilise en **moyenne à 60 images par
seconde** sans intervention.

**Quatre défauts trouvés en REGARDANT les captures**

1. **L'étalonnage repeignait la ville en mauve pastel.** Deux rectangles
   composés à pleine opacité : le `multiply` teintait jusqu'aux hautes
   lumières et le `screen` relevait les noirs. Une ville de nuit ressortait
   en plein jour. Ramené à 62 % d'un dégradé qui assombrit au lieu de lever.
2. **La lueur des fenêtres noyait l'image.** Deux cents façades déposant
   chacune une tache à pleine intensité, en composition additive : le
   tampon saturait et la lueur éclairait la ville au lieu de l'auréoler.
   Rayon et intensité bridés ; le gros de la lueur vient maintenant des
   vraies sources.
3. **Les halos de néon faisaient des disques de trois cents pixels.** Ils
   étaient dimensionnés sur la LONGUEUR du bandeau. Un tube de néon
   rayonne à quelques centimètres de lui-même : ils suivent désormais son
   épaisseur.
4. **L'écran-titre s'est trompé deux fois de distance.** À 210 m et 168 m
   de haut, on ne voyait que du brouillard ; à 158 m, on était *dans* les
   tours et l'image se remplissait d'une seule façade. La trame fait 918 m
   de côté : à 340 m on est dehors, et la ville redevient une silhouette
   découpée sur le couchant.

**Écarts assumés par rapport au plan**

- **La lueur n'a pas de seuil de luminance.** Le plan décrivait un bloom
  classique : réduire l'image, seuiller, flouter, recomposer. Sans accès
  pixel abordable, le seuil se paie par une relecture du canevas — 8,3 ms.
  On ne seuille donc pas : **on sait déjà ce qui brille**, et chaque source
  le déclare. Le résultat est plus contrôlable, et dix fois moins cher.
- **La cinématique d'ouverture n'est pas une liste de points.** C'est une
  interpolation amortie entre un plan large très haut et la place que la
  caméra de jeu occuperait de toute façon. Elle se termine donc exactement
  là où le jeu prend la main : aucun raccord à cacher, et rien à re-régler
  si le cadrage de jeu change en session 4. Elle se saute d'une touche, et
  `prefers-reduced-motion` la supprime.
- **Le ralenti étire le temps de jeu, pas le pas de simulation.** On
  nourrit l'accumulateur plus lentement ; la physique reste identique au
  pas fixe près. Les outils, qui appellent `sim()` directement, ne le
  voient pas — donc aucune mesure n'en dépend.

**Ce qui reste ouvert pour la session 4** : le HUD façon jeu urbain (radar
des toits, compteur de cagnotte typographié, chrono), les menus au canvas,
l'audio synthétisé, les commandes tactiles multitouch, l'i18n complète et
l'accessibilité. Les étoiles de hype, les cartons d'acte et l'écran de
résultats ont désormais leur grammaire typographique : la session 4 les
habille, elle ne les réinvente pas.

---

## 13. Les prompts

Un prompt autonome par session, dans [`V3-PROMPTS.md`](V3-PROMPTS.md).
