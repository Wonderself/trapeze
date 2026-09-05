# V3 — LES PROMPTS DE CHAQUE SESSION

Chaque bloc se colle tel quel dans une session neuve. Ils sont autonomes :
aucun contexte des sessions précédentes n'est supposé, au-delà du dépôt lui-même.

Ordre obligatoire : S1 → S2 → S3 → S4 → S5. Les cinq écrivent dans le même
fichier, rien ne se parallélise.

Rappel du modèle à sélectionner avant de coller :

| Session | Modèle |
|---|---|
| S1 | **Fable 5.1** |
| S2 | **Opus 5** |
| S3 | **Fable 5.1** |
| S4 | **Sonnet 5** |
| S5 | **Sonnet 5** |
| S6 (tampon) | **Sonnet 5** |

---

## S1 — Moteur 3D, ville, véhicule  ·  **Fable 5.1**

```text
Tu travailles sur le dépôt Wonderself/trapeze, branche
claude/game-versions-improvement-plan-9y3dqs.

Lis d'abord docs/V3-PLAN.md en entier. C'est le contrat. Lis aussi
trapeze-stars-v2.html pour t'imprégner des conventions du dépôt : jeu Canvas 2D
mono-fichier, zéro dépendance, aucune étape de build, boucle à pas de temps
fixe, profils de qualité, listes libres sans allocation dans la boucle chaude.

INTERDICTION ABSOLUE : ne modifie ni trapeze-stars-v1.html, ni
trapeze-stars-v2.html, ni index.html. Tu crées un fichier neuf.

TA MISSION — session 1 sur 5 : poser le socle technique de NEON BAY, une démo
de conduite en monde ouvert à l'esthétique GTA moderne. Tu crées
v3-neon-bay.html. À la fin de cette session on doit pouvoir conduire une
voiture dans une ville en 3D, à 60 images par seconde, sans artefact.

Tu ne fais PAS dans cette session : la police, le trafic, la mission, le mode à
pied, la direction artistique finale, le HUD, l'audio, les menus, le tactile.
Ce sont les sessions 2 à 4. Tiens-t'en au socle. Un placeholder gris qui
fonctionne vaut mieux qu'un joli rendu bâti sur une projection fausse.

PÉRIMÈTRE EXACT

1. Repère et projection
   - 1 unité = 1 mètre. X est, Y haut, Z nord. Ce n'est PAS le repère de V2.
   - Caméra à lacet et tangage, sans roulis (sauf secousse). focal =
     (SW*0.5)/tan(FOV*0.5), FOV horizontal 62° au repos.
   - Transformation monde vers œil : translation, rotation de lacet autour de Y,
     rotation de tangage autour de X, puis division perspective.
   - IMPÉRATIF : tout polygone à cheval sur le plan de la caméra doit être
     découpé dans l'espace œil contre z = NEAR (Sutherland–Hodgman) AVANT
     projection. NEAR = 0.35. Sans ce découpage, un mur frôlé s'étale en travers
     de l'écran. C'est le mode de défaillance classique de tout pipeline 3D
     écrit à la main : traite-le en premier, et écris un test qui le prouve.
   - Gestion du ratio de pixels de l'écran et du redimensionnement, comme en V2.

2. Rendu en couches, dans cet ordre strict
   ciel → sol et routes (tous à Y=0, triés par distance) → bâtiments (faces
   convexes triées par profondeur œil décroissante) → véhicules → billboards →
   HUD. La séparation en couches est ce qui rend le tri par peintre acceptable
   sur une ville ; ne la contourne pas.
   Élimination des faces arrière au sens de parcours. Élimination par cône de
   vue et par distance. Brouillard qui fond le lointain dans la couleur du ciel.

3. Grille spatiale
   Ville indexée par cellules de 104 m. Chaque image ne collecte que les
   cellules dans le cône de vue et la distance de rendu. Sers-t'en aussi pour
   les collisions.

4. Générateur de ville, par graine fixe
   - 9 × 9 pâtés de 90 m, rues de 14 m, pas de grille 104 m, soit ~940 m de côté.
   - Front de mer au sud (immeubles bas), quartier d'affaires au nord (hauts),
     port à l'est. Hauteurs de 12 à 80 m.
   - Bâtiments = boîtes extrudées, au plus 5 faces visibles. Trottoirs.
   - La graine est fixe : la ville doit être identique à chaque chargement,
     sinon elle n'est pas testable.

5. Physique du véhicule, arcade et pas simulation
   - Pas de temps fixe à 1/120 s pour la physique, rendu interpolé. Reprends
     l'accumulateur de V2, il est vérifié à 60 et 120 Hz.
   - Vitesse le long du cap, braquage plafonné par la vitesse, adhérence
     latérale avec glissement au-delà d'un seuil, frein à main qui casse
     l'adhérence arrière pour le drift.
   - Transfert de masse visuel : tangage à l'accélération et au freinage, roulis
     en virage, suspension qui rebondit sur les trottoirs.
   - Collisions contre les bâtiments par boîtes alignées sur les axes via la
     grille, réponse par impulsion, secousse caméra, compteur de dégâts.
   - Voiture : 4,4 × 1,9 × 1,35 m, modèle en boîtes, roues visibles qui tournent
     et braquent.

6. Caméra de poursuite
   Ressort amorti, distance 8,5 m, hauteur 3,2 m, visée 1,2 m au-dessus du toit,
   anticipation proportionnelle à la vitesse, FOV qui s'ouvre jusqu'à 74° à
   pleine vitesse. Regard libre à la souris ou au doigt, recentrage progressif.

7. Profils de qualité
   Trois profils (basse, moyenne, haute) avec budget de faces 320 / 550 / 900,
   distance de rendu et échelle de rendu associées. Détection automatique puis
   rétrogradation si le 95e centile du temps d'image dépasse le seuil. Même
   mécanisme qu'en V2.

8. Instrumentation
   Expose un objet global de débogage (position, cap, vitesse, faces dessinées,
   temps d'image, état) : les sessions suivantes et les outils de test en
   dépendent. Un affichage de diagnostic activable par une touche.

CONTRAINTES

- Canvas 2D uniquement. Pas de WebGL, pas de dépendance, pas d'étape de build,
  un seul fichier. Les raisons sont dans docs/V3-PLAN.md §4.1 et elles tiennent :
  le harnais de test headless n'a pas de contexte WebGL, on perdrait tous les
  tests de non-régression.
- Zéro allocation dans la boucle chaude. Listes libres, pas de splice, pas
  d'objet littéral par image.
- Jamais 'inherit' comme famille dans CX.font : c'est invalide en canvas et le
  texte retombe silencieusement en 10 px. Utilise une pile système sans espaces.
- Tout est original. Aucune marque, aucun nom, aucun actif de Rockstar ou d'un
  autre éditeur.
- Le jeu est en français, avec les chaînes prêtes pour l'anglais.

VÉRIFICATION — tu ne déclares pas fini sans ça

1. node tools/check.js v3-neon-bay.html doit passer (adapte l'outil s'il ne
   prend qu'un fichier en dur, sans casser son usage pour V1 et V2).
2. Écris tools/shot_v3.js : un script playwright-core qui charge le jeu, pilote
   la voiture, et capture des images à des positions choisies — dont une
   collée contre un mur, pour prouver que le découpage au plan proche marche.
   Le Chromium préinstallé est à
   /opt/pw-browsers/chromium-1194/chrome-linux/chrome ; cd tools && npm install.
3. REGARDE les captures avec l'outil Read. Ne te contente pas de « le script
   n'a pas planté ». Le rendu se vérifie à l'œil, c'est comme ça qu'on a trouvé
   la mise à l'échelle fausse et la police canvas invalide de V2.
4. Mesure vraiment les images par seconde et le nombre de faces, et écris les
   chiffres.

À LA FIN : commit et push sur claude/game-versions-improvement-plan-9y3dqs.
Puis écris dans docs/V3-PLAN.md une courte section « État après S1 » disant ce
qui est fait, ce qui a été mesuré, et tout écart par rapport à ce plan avec sa
raison. Ne crée pas de pull request.
```

---

## S2 — Trafic, police, à pied, mission  ·  **Opus 5**

```text
Tu travailles sur le dépôt Wonderself/trapeze, branche
claude/game-versions-improvement-plan-9y3dqs.

Lis docs/V3-PLAN.md en entier, puis v3-neon-bay.html. Le socle 3D, la ville et
la conduite existent déjà : c'est la session 1 qui les a posés. Reprends ses
conventions de repère et de rendu sans les changer.

INTERDICTION ABSOLUE : ne modifie ni trapeze-stars-v1.html, ni
trapeze-stars-v2.html, ni index.html.

TA MISSION — session 2 sur 5 : donner vie à la ville et livrer la mission
unique de la démo. Tu ne touches pas à la direction artistique (session 3) ni
au HUD, aux menus, à l'audio et au tactile (session 4). Un marqueur en aplat de
couleur qui marche vaut mieux qu'un joli marqueur dans un système cassé.

PÉRIMÈTRE EXACT

1. Trafic
   Véhicules qui suivent le réseau routier, respectent les voies, tournent aux
   intersections, freinent derrière un véhicule lent, évitent le joueur.
   Apparition et disparition dans une couronne autour du joueur, avec un plafond
   dur par profil de qualité. Collisions entre véhicules par cercles.

2. Piétons
   Simples : ils marchent sur les trottoirs, s'écartent d'une voiture qui
   arrive. Pas de simulation de foule, pas d'IA élaborée. Ils servent à ce que
   la ville ne soit pas morte, rien de plus.

3. Mode à pied
   Sortie et entrée de véhicule avec une transition de caméra propre. Marche et
   course. Collision contre les bâtiments. Ramassage d'objet. La caméra passe
   en épaule, plus proche et plus basse. Ce mode reste secondaire : pas
   d'arme, pas de combat, pas de tir — c'est un choix assumé du plan.

4. Police et niveau de recherche
   - Jauge de 0 à 5 étoiles. Monte en percutant une voiture de police, en
     renversant un piéton, en déclenchant le scénario. Redescend après un délai
     hors de la ligne de vue de toute unité.
   - Voitures de police qui poursuivent : conduite vers le joueur avec
     anticipation, tentative d'interception aux intersections, béliers.
     Élastique léger pour qu'elles ne décrochent pas ni ne trichent trop.
   - Nombre d'unités croissant avec les étoiles. Plafonné par profil de qualité.
   - Un cône de vision par unité, et un état « recherche » quand le joueur est
     perdu de vue : elles convergent vers la dernière position connue.

5. Mission « Dernière tournée », machine à états explicite
   - Temps 1 : départ au volant, libre. Marqueur cylindrique deux pâtés plus
     loin. Y entrer lance le briefing.
   - Temps 2 : rejoindre le point de récupération à l'autre bout de la ville.
     Flèche directionnelle à l'écran. Chrono souple qui compte au score sans
     faire échouer. À l'arrivée : descendre, marcher, ramasser le colis.
   - Temps 3 : au ramassage, deux étoiles. La police arrive. Rejoindre le
     garage pour terminer.
   - Écran final : temps total, vitesse maximale, dégâts, étoiles maximales,
     note sur trois, rejouable immédiatement.
   - Échec (véhicule détruit ou joueur arrêté) : reprise au dernier temps de la
     mission, jamais au début. Une démo ne punit pas.

6. Robustesse
   Toutes les transitions d'état doivent survivre à n'importe quel ordre
   d'entrée : échec pendant un briefing, sortie de véhicule pendant une
   poursuite, retour au menu en plein saut de caméra. C'est exactement ce type
   de désordre qui a révélé des défauts en V1 et V2.

CONTRAINTES

- Canvas 2D, zéro dépendance, un seul fichier, aucune étape de build.
- Zéro allocation dans la boucle chaude : listes libres pour les véhicules, les
  piétons, les particules.
- Respecte les budgets de faces posés en session 1. Si le trafic les fait
  exploser, réduis le nombre d'entités, pas le budget.
- Tout est original. Aucune marque, aucun actif d'un éditeur existant.

VÉRIFICATION — tu ne déclares pas fini sans ça

1. node tools/check.js v3-neon-bay.html doit passer.
2. Écris tools/drive_v3.js : un pilote automatique qui joue la mission de bout
   en bout, sans intervention, et échoue bruyamment s'il reste bloqué. C'est ce
   type d'outil qui a trouvé les barres inatteignables de V2 — un défaut qu'une
   relecture du code n'aurait jamais vu. Lance-le plusieurs fois.
3. Prends des captures d'écran d'une poursuite et REGARDE-LES avec l'outil
   Read.
4. Mesure le temps d'image avec le trafic et cinq voitures de police à l'écran.

À LA FIN : commit et push sur la branche. Ajoute une section « État après S2 »
dans docs/V3-PLAN.md. Ne crée pas de pull request.
```

---

## S3 — Direction artistique et post-traitement  ·  **Fable 5.1**

```text
Tu travailles sur le dépôt Wonderself/trapeze, branche
claude/game-versions-improvement-plan-9y3dqs.

Lis docs/V3-PLAN.md en entier — surtout la §5, la bible artistique — puis
v3-neon-bay.html. Le moteur, la ville, la conduite, le trafic, la police et la
mission existent. Tout fonctionne, mais c'est laid.

INTERDICTION ABSOLUE : ne modifie ni trapeze-stars-v1.html, ni
trapeze-stars-v2.html, ni index.html.

TA MISSION — session 3 sur 5 : c'est la session qui décide si la démo évoque
vraiment un GTA moderne ou pas. Tu transformes le rendu. Tu ne touches ni à la
physique, ni à l'IA, ni à la mission : si tu trouves un bug de gameplay,
note-le, ne le corrige que s'il est trivial.

Tu ne fais pas le HUD ni les menus : c'est la session 4. Tu fais l'écran-titre
et les cartons de mission, parce qu'ils sont de l'art direction.

PÉRIMÈTRE EXACT

1. Ciel et atmosphère
   Crépuscule côtier : dégradé indigo #1B1040 en haut, magenta #B0316E au
   milieu, orange brûlé #FF8A3D en bas. Disque solaire bas avec halo #FFD98A.
   Bandes de nuages. Brouillard atmosphérique cohérent avec la couleur du ciel
   à la hauteur visée. Dégradé mis en cache, pas recalculé par image.

2. Éclairage des volumes
   AUCUNE FACE N'EST GRISE. L'éclairage est simulé par teinte selon
   l'orientation : les faces tournées vers le soleil tirent vers l'orange
   chaud, les faces opposées vers le bleu froid. C'est ce qui donne le volume
   sans aucun calcul d'éclairage. Assombrissement progressif avec la distance,
   vers la couleur du ciel.

3. Fenêtres émissives
   Trame de rectangles par façade, allumage pseudo-aléatoire mais STABLE :
   fonction de hachage de la position du bâtiment et de l'index de fenêtre,
   jamais Math.random() par image, sinon toute la ville scintille. Densité et
   teinte variables par bâtiment.

4. Néons et enseignes
   Enseignes émissives en rose #FF2E88 et cyan #25E5FF sur les façades, à
   hauteur de rue. Quelques grandes enseignes de toit. Lueur additive autour de
   chaque source.

5. Asphalte mouillé
   Traînées de reflet verticales sous chaque source lumineuse, alpha faible,
   largeur croissante avec la distance. Trois traits par source suffisent à
   vendre l'effet. Marquages au sol, passages piétons, plaques d'égout.

6. Décor
   Palmiers en silhouette noire à contre-jour, cinq variantes, en billboards.
   Lampadaires. Feux de circulation. Barrières le long du front de mer.

7. Post-traitement, avec dégressivité par profil de qualité
   - Bloom : canevas hors-écran au quart de résolution, flou par double
     drawImage réduit puis agrandi, composition en 'lighter'.
   - Grain : tuile de bruit pré-rendue, décalée aléatoirement, alpha faible.
   - Vignette : dégradé radial mis en cache.
   - Étalonnage : composition de deux rectangles pleins ('multiply' puis
     'screen') pour pousser le contraste et les teintes.
   - Aberration chromatique : qualité haute seulement, très légère.
   - Bandes cinéma pendant les briefings et l'écran final.

8. Identité
   Logo NEON BAY dessiné au canvas — lettrage large, capitales, très espacé,
   avec un liseré néon. Écran-titre avec une caméra cinématique qui survole la
   ville. Cartons de mission typographiés.

CONTRAINTES

- Le budget de faces et le temps d'image de la session 1 sont des plafonds, pas
  des suggestions. Si un effet les crève, il descend d'un cran de qualité ou il
  saute. Mesure avant et après.
- Zéro allocation dans la boucle chaude : les dégradés, les tuiles de bruit et
  les canevas hors-écran se créent une fois.
- Jamais 'inherit' comme famille dans CX.font. Pile système sans espaces.
- Aucune police externe, aucune image externe, aucun actif téléchargé. Tout est
  dessiné dans le fichier.
- Tout est original. Aucune marque, aucun nom, aucun visuel de Rockstar ou d'un
  autre éditeur. On s'inspire d'un genre, on ne copie pas un jeu.

VÉRIFICATION — c'est la partie la plus importante de cette session

Le rendu ne se vérifie pas en lisant du code. Il se vérifie en regardant.
1. Utilise tools/shot_v3.js pour capturer au moins dix images : écran-titre,
   rue de nuit, front de mer, quartier d'affaires vu d'en bas, poursuite,
   collision, mode à pied, carton de mission — aux trois profils de qualité.
2. REGARDE chaque capture avec l'outil Read. Juge-la. Si elle ne va pas,
   corrige et recapture. Recommence jusqu'à ce que ce soit bon. C'est cette
   boucle qui fait la différence entre « le code a l'air correct » et « ça a de
   la gueule ».
3. node tools/check.js v3-neon-bay.html et node tools/drive_v3.js doivent
   toujours passer : tu n'as pas le droit de casser le gameplay en embellissant.
4. Écris les temps d'image mesurés aux trois qualités, avant et après.

À LA FIN : commit et push sur la branche. Section « État après S3 » dans
docs/V3-PLAN.md, avec les mesures. Ne crée pas de pull request.
```

---

## S4 — HUD, menus, audio, mobile  ·  **Sonnet 5**

```text
Tu travailles sur le dépôt Wonderself/trapeze, branche
claude/game-versions-improvement-plan-9y3dqs.

Lis docs/V3-PLAN.md, puis v3-neon-bay.html. Lis aussi trapeze-stars-v2.html :
son système de menus au canvas (registre hitZones / zone() / hitTest()
repeuplé à chaque image), son i18n, sa sauvegarde versionnée et son audio
WebAudio sont exactement les motifs à reprendre ici. Ne réinvente pas, adapte.

INTERDICTION ABSOLUE : ne modifie ni trapeze-stars-v1.html, ni
trapeze-stars-v2.html, ni index.html.

TA MISSION — session 4 sur 5 : rendre la démo utilisable et l'habiller de son.
Le moteur, le gameplay et l'art direction sont faits. Tu ne les touches pas.

PÉRIMÈTRE EXACT

1. HUD
   - Minimap ronde en haut à gauche, orientée selon le cap du joueur, dessinée
     à partir des données de la ville (le réseau est une grille, c'est peu
     coûteux). Rues, position du joueur, objectif, unités de police.
   - Jauge de recherche en étoiles, avec animation d'apparition.
   - Compteur de vitesse et régime, en bas à droite.
   - Chrono de mission, santé du véhicule, flèche d'objectif.
   - Cartons de mission et sous-titres de briefing.
   - Tout le HUD s'adapte au portrait comme au paysage.

2. Menus au canvas
   Menu principal, réglages, pause, écran de fin. Réglages : musique, effets,
   langue, qualité, sensibilité de caméra, inversion de l'axe, aide à la
   conduite. Reprends le registre de zones cliquables de V2. Navigation au
   clavier ET au doigt, avec un état de sélection visible.

3. Commandes tactiles
   - Manche virtuel à gauche pour la direction, accélérateur et frein à droite,
     frein à main, bouton de caméra, bouton entrer/sortir.
   - Multitouch réel : diriger et accélérer en même temps doit marcher.
   - À pied : manche de déplacement, bouton d'action.
   - Zones de contact généreuses, retour visuel à l'appui.
   - Écran de rotation en portrait si la surface jouable devient trop petite,
     avec mise en pause automatique et reprise à la rotation — le motif est
     dans trapeze-stars-v1.html, fonction checkRotate().

4. Audio, entièrement synthétisé en WebAudio
   - Moteur : oscillateur en dents de scie dont la fréquence suit le régime,
     plus une bande de bruit. Doit rester agréable, pas strident.
   - Crissement de pneus au drift, filtré, lié au glissement.
   - Sirène de police : deux sinus alternés, avec effet Doppler selon la
     distance et la vitesse relative.
   - Impacts, collisions, portière, ramassage.
   - Musique de radio en couches qui entrent selon l'intensité (poursuite),
     comme la musique par paliers de chaleur de V2.
   - Bus séparés musique et effets, derrière un DynamicsCompressor en
     limiteur. Atténuation pendant les temps d'arrêt.
   - L'audio ne démarre qu'après une interaction utilisateur.

5. i18n, sauvegarde, accessibilité
   - Français et anglais, toutes les chaînes passées par la fonction de
     traduction.
   - Sauvegarde versionnée sous 'neonbay.v3.save', schéma 1, TOUS les accès à
     localStorage dans un try/catch. En navigation privée Safari, un
     localStorage non protégé lève et tue la boucle de rendu : ce bug exact a
     déjà été trouvé en V1, ne le réintroduis pas.
   - Réglages d'accessibilité : réduction des secousses, réduction du flash,
     taille de texte, contraste renforcé.

CONTRAINTES

- Canvas 2D, zéro dépendance, un seul fichier.
- Jamais 'inherit' comme famille dans CX.font.
- Attention aux chevauchements de texte dans les réglages : mesure la largeur
  réelle avec measureText et réduis la taille si besoin. Ce défaut précis a
  demandé deux passes en V2 parce que la première correction avait été devinée
  au lieu d'être mesurée. Mesure.
- Ne casse ni le budget de faces, ni le temps d'image.

VÉRIFICATION

1. node tools/check.js v3-neon-bay.html doit passer.
2. node tools/drive_v3.js doit toujours terminer la mission.
3. Écris tools/monkey_v3.js sur le modèle de tools/monkey_v2.js : 8000 entrées
   aléatoires — touches mitraillées, taps à des coordonnées aléatoires,
   transitions d'état brutales, ouverture de réglages en pleine poursuite.
   Lance-le plusieurs fois de suite, il est aléatoire par construction.
4. Écris un script playwright-core qui simule un vrai multitouch via CDP
   (Input.dispatchTouchEvent) et prouve que diriger et accélérer simultanément
   fonctionne. Le modèle est tools/s9_multitouch.js.
5. Captures d'écran du HUD en portrait et en paysage, REGARDÉES avec Read.

À LA FIN : commit et push sur la branche. Section « État après S4 » dans
docs/V3-PLAN.md. Ne crée pas de pull request.
```

---

## S5 — Page d'accueil, QA, documentation  ·  **Sonnet 5**

```text
Tu travailles sur le dépôt Wonderself/trapeze, branche
claude/game-versions-improvement-plan-9y3dqs.

Lis docs/V3-PLAN.md, docs/RESTE-A-FAIRE.md, tools/README.md, index.html et
v3-neon-bay.html.

TA MISSION — session 5 sur 5 : intégrer la troisième démo à la page d'accueil
et faire la passe de vérification finale.

C'est la SEULE session autorisée à modifier index.html. Tu ne modifies toujours
ni trapeze-stars-v1.html, ni trapeze-stars-v2.html — sauf si la QA révèle une
régression réelle sur l'une d'elles, auquel cas tu la signales avant de la
corriger.

PÉRIMÈTRE EXACT

1. index.html — troisième carte
   - La grille de cartes passe de deux à trois colonnes, et doit rester
     lisible en mobile d'abord : une colonne en portrait, deux puis trois en
     largeur croissante.
   - Carte NEON BAY avec son aperçu animé au canvas, dans le même esprit que
     les aperçus existants de V1 et V2 : une petite scène de ville en
     perspective avec des néons, pas une image fixe.
   - Palette de la carte accordée à la direction artistique de la démo :
     magenta et cyan sur fond sombre.
   - Quatre points forts, comme les deux autres cartes.
   - Le tableau comparatif passe à trois colonnes. Ajoute les lignes qui ont du
     sens pour une comparaison à trois, et accepte les cases sans objet.
   - Le titre et l'accroche annoncent aujourd'hui « Deux versions jouables ».
     Fais-en un hub de trois démos. Garde « Trapeze Stars » comme nom des deux
     premières, NEON BAY est un jeu différent et doit se lire comme tel.
   - Métadonnées Open Graph mises à jour. L'image de couverture actuelle
     (assets/og-cover.png) parle de deux versions : régénère-la à trois, avec
     le même encodeur PNG écrit en Python pur (zlib et struct seulement), ou
     rends-la neutre.

2. Outillage
   - tools/check.js doit accepter les trois jeux.
   - Vérifie que drive_v3.js, monkey_v3.js et shot_v3.js existent, marchent et
     sont documentés.
   - Mets tools/README.md à jour : les commandes, ce que chaque outil attrape,
     et les vrais bugs qu'ils ont trouvés.

3. Passe de QA
   - Lance TOUS les outils sur les trois jeux, plusieurs fois pour ceux qui
     sont aléatoires.
   - Captures d'écran des trois jeux et de la page d'accueil, en portrait et en
     paysage, REGARDÉES avec l'outil Read.
   - Passe de performance : mesure le temps d'image des trois jeux aux trois
     qualités, écris les chiffres.
   - Passe d'accessibilité : navigation au clavier de bout en bout sur la page
     d'accueil et dans les menus, contrastes, textes alternatifs.
   - Vérifie les liens de la page d'accueil vers les trois jeux.

4. Documentation
   - docs/RESTE-A-FAIRE.md : ajoute l'état de V3, ce qui est fait, ce qui reste,
     et surtout ce qui est HORS DE PORTÉE sans matériel réel. Sois honnête :
     aucun vrai iPhone, aucun vrai Android milieu de gamme, aucun vrai ressenti
     tactile n'a pu être testé. Ne prétends pas le contraire.
   - docs/V3-PLAN.md : section finale « État après S5 ».

CONTRAINTES

- Aucune dépendance ajoutée à la page d'accueil. Elle reste du HTML et du CSS
  autonomes.
- Aucune marque, aucun nom, aucun visuel d'un éditeur existant, ni dans la
  page ni dans les métadonnées.
- Si un test échoue, corrige-le. Ne le désactive pas, ne le contourne pas.

À LA FIN : commit et push sur la branche. Ne crée pas de pull request sauf
demande explicite. Termine par un récapitulatif qui tient debout tout seul :
ce qui a été livré, ce qui a été mesuré, ce qui reste ouvert.
```

---

## S6 — Tampon  ·  **Sonnet 5**

À ne lancer que si S5 a remonté des défauts, ou si une session précédente a
débordé.

```text
Tu travailles sur le dépôt Wonderself/trapeze, branche
claude/game-versions-improvement-plan-9y3dqs.

Lis docs/V3-PLAN.md, en particulier les sections « État après » de chaque
session, et docs/RESTE-A-FAIRE.md.

TA MISSION : traiter la liste des défauts et des points restés ouverts à
l'issue de la session 5, dans l'ordre où ils y sont écrits.

Pour chaque point : vérifie qu'il est réel avant de le corriger. Sur ce dépôt,
plusieurs « défauts » supposés se sont révélés intentionnels ou sans effet
après vérification, et les « corriger » aurait dégradé le jeu. Mesure avant de
conclure.

Après chaque correction : node tools/check.js sur le fichier touché,
node tools/drive_v3.js, node tools/monkey_v3.js plusieurs fois, et une capture
d'écran REGARDÉE si le rendu est concerné.

Ne modifie trapeze-stars-v1.html et trapeze-stars-v2.html que si la liste le
demande explicitement.

À LA FIN : commit et push. Mets à jour docs/RESTE-A-FAIRE.md avec ce qui a été
réglé et ce qui reste. Ne crée pas de pull request.
```
