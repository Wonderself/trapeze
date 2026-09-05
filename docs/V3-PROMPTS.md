# V3 « TRAPEZE CITY » — LES PROMPTS DE CHAQUE SESSION

Chaque bloc se colle tel quel dans une session neuve. Ils sont autonomes :
aucun contexte des sessions précédentes n'est supposé au-delà du dépôt lui-même.

Ordre obligatoire : S1 → S2 → S3 → S4 → S5. Les cinq écrivent dans le même
fichier, rien ne se parallélise.

| Session | Modèle à sélectionner avant de coller |
|---|---|
| S1 | **Fable 5.1** |
| S2 | **Opus 5** |
| S3 | **Fable 5.1** |
| S4 | **Sonnet 5** |
| S5 | **Sonnet 5** |
| S6 (tampon) | **Sonnet 5** |

---

## S1 — Socle 3D, ville, rig, pendule, caméra  ·  **Fable 5.1**

```text
Tu travailles sur le dépôt Wonderself/trapeze, branche
claude/game-versions-improvement-plan-9y3dqs.

Lis d'abord docs/V3-PLAN.md en entier. C'est le contrat. Lis ensuite
trapeze-stars-v2.html : c'est le jeu dont V3 reprend les bases — sa physique de
pendule, son pompage, ses qualités de prise, son pas de temps fixe, ses profils
de qualité, ses listes libres. Tu vas les transposer, pas les réinventer.

PRINCIPE DIRECTEUR, à garder en tête du début à la fin :
MÉCANIQUES DE TRAPÈZE, LANGAGE VISUEL DE GTA.
TRAPEZE CITY est un jeu de trapèze, sur les mêmes bases que Classic et Deluxe.
Le côté GTA est dans les graphismes et l'UI/UX, jamais dans les mécaniques.
Pas de voiture, pas de trafic, pas de police, pas d'arme, pas de monde ouvert.
Si tu te surprends à écrire de la conduite ou une IA de poursuite, tu es sorti
du périmètre.

INTERDICTION ABSOLUE : ne modifie ni trapeze-stars-v1.html, ni
trapeze-stars-v2.html, ni index.html. Tu crées un fichier neuf.

TA MISSION — session 1 sur 5 : poser le socle technique. Tu crées
trapeze-city-v3.html. À la fin, on doit pouvoir se balancer sur un trapèze
au-dessus d'une ville en 3D, lâcher, voler, et attraper la barre du rig
suivant, à 60 images par seconde, sans artefact.

Tu ne fais PAS : les figures, le porteur, la hype, le filet, les sept rigs, la
direction artistique finale, le HUD, l'audio, les menus, le tactile. Ce sont
les sessions 2 à 4. Un décor gris qui fonctionne vaut mieux qu'un joli rendu
bâti sur une projection fausse.

PÉRIMÈTRE EXACT

1. Repère et projection
   - 1 unité = 1 mètre. X est, Y haut, Z nord. Ce n'est PAS le repère de V2.
   - Caméra à lacet et tangage, sans roulis sauf secousse.
     focal = (SW*0.5)/tan(FOV*0.5), FOV horizontal 58° au repos.
   - Monde vers œil : translation, rotation de lacet autour de Y, rotation de
     tangage autour de X, puis division perspective.
   - IMPÉRATIF : tout polygone à cheval sur le plan de la caméra doit être
     découpé dans l'espace œil contre z = NEAR (Sutherland–Hodgman) AVANT
     projection. NEAR = 0.35. Sans ça, un mur frôlé s'étale en travers de
     l'écran. C'est le mode de défaillance classique de tout pipeline 3D écrit
     à la main : traite-le en premier et écris un test qui le prouve.
   - Gestion du ratio de pixels et du redimensionnement, comme en V2.

2. Rendu en couches, ordre strict
   ciel → ville lointaine (silhouettes fondues au brouillard, mises en cache
   sur un canevas hors-écran, invalidées quand la caméra a assez tourné) →
   ville proche (faces convexes triées par profondeur œil décroissante) → toits
   du parcours et structures de rig → acrobate, barres, câbles → billboards →
   HUD. La séparation en couches est ce qui rend le tri par peintre acceptable
   sur une ville, ne la contourne pas.
   Élimination des faces arrière au sens de parcours, élimination par cône de
   vue et par distance, brouillard qui fond le lointain dans le ciel.

3. Grille spatiale
   Ville indexée par cellules de 104 m ; chaque image ne collecte que les
   cellules dans le cône de vue et la distance de rendu.

4. Générateur de ville, graine fixe
   - 9 × 9 pâtés de 90 m, rues de 14 m, pas de grille 104 m, ~940 m de côté.
   - Immeubles de 40 à 140 m, boîtes extrudées, au plus 5 faces visibles.
     Plus bas vers le port au sud, plus hauts au centre.
   - La graine est fixe : la ville doit être identique à chaque chargement,
     sinon elle n'est pas testable.
   - Rue tout en bas, sommairement suggérée : on la voit de 100 m de haut.

5. Rigs de trapèze
   - Deux rigs pour cette session (le parcours complet est en session 2).
     Chacun est posé sur un toit, avec sa structure : portique, câbles, barre,
     plateforme de départ.
   - Chaque rig définit un PLAN DE BALANCÉ (un point d'ancrage et une
     direction). C'est la donnée clé dont tout le gameplay dépend.

6. Physique
   - Pas de temps fixe à 1/120 s, rendu interpolé. Reprends l'accumulateur de
     V2, il est vérifié à 60 et 120 Hz.
   - LE PENDULE RESTE EN 2D. C'est la simplification qui fait tout tenir :
     dans le plan du rig, on simule un pendule plan avec angle et vitesse
     angulaire — exactement la physique éprouvée de V2 — puis on place le
     résultat dans le repère 3D. On garde un équilibre déjà réglé et on
     n'hérite d'aucune instabilité nouvelle.
   - Pompage : impulsion donnée au bon moment, avec une IMPULSION PLANCHER qui
     permet toujours de relancer un trapèze arrêté. Sans elle le joueur reste
     bloqué : c'était un vrai bug de V2, ne le réintroduis pas.
   - LE VOL EST EN 3D : au lâcher, la vitesse angulaire devient un vecteur
     vitesse 3D dans le plan du rig, puis balistique avec gravité et traînée
     légère.
   - Saisie de la barre suivante : test de distance 3D, avec les trois qualités
     de prise de V2 (parfaite, correcte, ratée).
   - Filet très bas ou reprise simple pour cette session : le système complet
     est en session 2.

7. L'acrobate
   Squelette de points en 3D (bassin, torse, tête, épaules, coudes, mains,
   genoux, pieds), projetés, puis membres dessinés en espace écran comme en V2,
   avec une épaisseur qui suit l'échelle de projection.
   ATTENTION : la fonction limb() de V2 considère l'angle 0 comme « vers le
   bas ». Ça a déjà produit des membres pointant vers le haut. Vérifie
   visuellement sur une capture, ne suppose pas.

8. Caméra de cadreur — ce n'est pas une caméra de poursuite de véhicule
   - Ancrée sur l'acrobate, avec retard élastique.
   - Placée DE TROIS QUARTS par rapport au plan du balancé, jamais dedans :
     c'est ce qui donne à la fois la lisibilité du geste et la profondeur du
     décor. C'est le point de cadrage le plus important de la session.
   - Recul et ouverture de FOV jusqu'à 70° quand l'ampleur du balancé grandit.
   - Anticipation de la barre visée pendant un vol.
   - Regard libre à la souris ou au doigt, recentrage progressif.

9. Profils de qualité et instrumentation
   Trois profils avec budget de faces 320 / 550 / 900, distance de rendu et
   échelle de rendu associées, détection automatique puis rétrogradation si le
   95e centile du temps d'image dépasse le seuil, comme en V2.
   Expose un objet global de débogage (position, angle, vitesse angulaire,
   état, faces dessinées, temps d'image) : les sessions suivantes et les outils
   de test en dépendent. Affichage de diagnostic activable par une touche.

CONTRAINTES

- Canvas 2D uniquement. Pas de WebGL, pas de dépendance, pas d'étape de build,
  un seul fichier. Les raisons sont dans docs/V3-PLAN.md §5.1 et elles
  tiennent : le harnais de test headless n'a pas de contexte WebGL, on perdrait
  tous les tests de non-régression.
- Zéro allocation dans la boucle chaude. Listes libres, pas de splice, pas
  d'objet littéral par image.
- Jamais 'inherit' comme famille dans CX.font : invalide en canvas, le texte
  retombe silencieusement en 10 px. Pile système sans espaces.
- Tout est original. Aucune marque, aucun nom, aucun actif d'un éditeur
  existant.
- Le jeu est en français, chaînes prêtes pour l'anglais.

VÉRIFICATION — tu ne déclares pas fini sans ça

1. node tools/check.js trapeze-city-v3.html doit passer (adapte l'outil s'il ne
   prend qu'un fichier en dur, sans casser son usage pour V1 et V2).
2. Écris tools/shot_v3.js : un script playwright-core qui charge le jeu, pilote
   l'acrobate et capture des images à des moments choisis — dont une caméra
   collée contre un mur, pour prouver que le découpage au plan proche marche,
   et une en plein balancé pour vérifier les membres.
   Chromium préinstallé : /opt/pw-browsers/chromium-1194/chrome-linux/chrome ;
   cd tools && npm install.
3. REGARDE les captures avec l'outil Read. Ne te contente pas de « le script
   n'a pas planté ». Le rendu se vérifie à l'œil : c'est comme ça qu'on a
   trouvé la mise à l'échelle fausse et la police canvas invalide de V2.
4. Mesure vraiment les images par seconde et le nombre de faces, écris les
   chiffres.

À LA FIN : commit et push sur claude/game-versions-improvement-plan-9y3dqs.
Ajoute dans docs/V3-PLAN.md une section « État après S1 » : ce qui est fait, ce
qui a été mesuré, tout écart au plan avec sa raison. Ne crée pas de pull
request.
```

---

## S2 — Gameplay trapèze et traversée  ·  **Opus 5**

```text
Tu travailles sur le dépôt Wonderself/trapeze, branche
claude/game-versions-improvement-plan-9y3dqs.

Lis docs/V3-PLAN.md en entier, puis trapeze-city-v3.html. Lis aussi
trapeze-stars-v2.html : ses mécaniques sont la référence, elles sont déjà
équilibrées et testées, tu les transposes plutôt que tu ne les réinventes.

PRINCIPE DIRECTEUR :
MÉCANIQUES DE TRAPÈZE, LANGAGE VISUEL DE GTA.
Pas de voiture, pas de trafic, pas de police, pas d'arme. Le vocabulaire de GTA
sert uniquement à habiller des mécaniques de trapèze.

INTERDICTION ABSOLUE : ne modifie ni trapeze-stars-v1.html, ni
trapeze-stars-v2.html, ni index.html.

TA MISSION — session 2 sur 5 : le gameplay complet et la traversée. Le socle
3D, la ville, le pendule et le vol existent depuis la session 1 ; reprends ses
conventions sans les changer. Tu ne touches ni à la direction artistique
(session 3), ni au HUD, aux menus, à l'audio et au tactile (session 4). Un
indicateur en aplat de couleur qui marche vaut mieux qu'un joli HUD dans un
système cassé.

PÉRIMÈTRE EXACT

1. Mécaniques reprises de V2, transposées
   - Pompage : l'ampleur se gagne, elle ne se donne pas. Impulsion plancher
     conservée pour toujours pouvoir relancer un trapèze arrêté.
   - Trois qualités de prise, toujours volontaire, avec la fenêtre de timing.
   - Figures pendant le vol, avec CAGNOTTE : elles s'accumulent et ne sont
     encaissées que si la réception passe. Enchaîner augmente la valeur.
   - Porteur : fenêtre annoncée, suspension, relance. Il apparaît au rig 5 et
     au final.
   - Filet : tomber coûte la cagnotte en cours et du temps, jamais la partie.
     Reprise au dernier toit atteint, jamais au début.

2. Étoiles de HYPE — la chaleur du public de V2, en langage GTA
   - Jauge de 0 à 5 étoiles, qui remplace les trois paliers de V2.
   - Monte avec les prises parfaites, les figures enchaînées, l'ampleur du
     balancé. Redescend quand on joue prudemment ou après une chute.
   - Multiplicateur de score attaché aux étoiles, jusqu'à ×3.
   - À partir de 3 étoiles, un DRONE DE TÉLÉVISION vient cadrer l'acrobate : il
     tourne autour, avec du retard, et repart quand la hype retombe. C'est
     l'équivalent visuel de l'hélicoptère de police, mais c'est une caméra de
     diffusion, pas une menace. Il ne gêne pas le gameplay.
   - Le rendu des étoiles est un placeholder ici, la session 4 les habille.

3. Le parcours : sept rigs
   - Du toit du port au sommet de la tour du centre. Chaque rig a son plan de
     balancé, sa hauteur, son écart à franchir.
   - Difficulté croissante : écarts plus grands, fenêtres de prise plus
     courtes, porteur au 5, vent latéral au 6 qui décale la trajectoire de vol.
   - Chaque toit atteint est un point de reprise.

4. Machine à états de la traversée, en trois actes
   - Acte 1, l'entrée en scène : rig d'échauffement, il faut atteindre 2
     étoiles de hype pour ouvrir la suite. C'est le tutoriel déguisé.
   - Acte 2, la traversée : rigs 2 à 6 enchaînés.
   - Acte 3, le final : la tour, le vol le plus long, le porteur, la réception
     qui boucle le numéro.
   - Écran de résultats : temps total, meilleur enchaînement, étoiles maximales,
     nombre de chutes, cagnotte totale, note sur trois, rejouable
     immédiatement.

5. Robustesse
   Toutes les transitions doivent survivre à n'importe quel ordre d'entrée :
   chute pendant un carton d'acte, lâcher au moment exact d'une prise, retour
   menu en plein vol. C'est ce type de désordre qui a révélé des défauts en V1
   et V2.

CONTRAINTES

- Canvas 2D, zéro dépendance, un seul fichier, aucune étape de build.
- Zéro allocation dans la boucle chaude : listes libres pour les particules,
  les textes flottants, les segments de câble.
- Respecte les budgets de faces de la session 1.
- Jamais 'inherit' comme famille dans CX.font.
- Tout est original, aucune marque d'un éditeur existant.

VÉRIFICATION — tu ne déclares pas fini sans ça

1. node tools/check.js trapeze-city-v3.html doit passer.
2. Écris tools/play_v3.js, sur le modèle de tools/play_v2.js : un joueur
   automatique qui franchit les sept rigs et termine la traversée sans
   intervention, et qui échoue bruyamment s'il reste bloqué. C'est exactement
   ce type d'outil qui a trouvé les barres inatteignables de V2, un défaut
   qu'aucune relecture de code n'aurait vu. Lance-le plusieurs fois.
3. Captures d'écran d'une prise ratée, d'un passage au porteur et du drone en
   action, REGARDÉES avec l'outil Read.
4. Mesure le temps d'image avec le drone et les particules à l'écran.

À LA FIN : commit et push sur la branche. Section « État après S2 » dans
docs/V3-PLAN.md. Ne crée pas de pull request.
```

---

## S3 — Direction artistique et post-traitement  ·  **Fable 5.1**

```text
Tu travailles sur le dépôt Wonderself/trapeze, branche
claude/game-versions-improvement-plan-9y3dqs.

Lis docs/V3-PLAN.md en entier, surtout la §6 (bible artistique), puis
trapeze-city-v3.html. Le moteur, la ville, le trapèze, la traversée et la hype
existent. Tout fonctionne, mais c'est laid.

PRINCIPE DIRECTEUR :
MÉCANIQUES DE TRAPÈZE, LANGAGE VISUEL DE GTA.
Cette session est la raison d'être de ce principe. C'est ICI que se joue toute
la promesse « à la GTA » — et uniquement dans le visuel. Tu ne touches à aucune
mécanique.

INTERDICTION ABSOLUE : ne modifie ni trapeze-stars-v1.html, ni
trapeze-stars-v2.html, ni index.html.

TA MISSION — session 3 sur 5 : transformer le rendu. Si tu trouves un bug de
gameplay, note-le ; ne le corrige que s'il est trivial. Tu ne fais pas le HUD
ni les menus, c'est la session 4 — mais tu fais l'écran-titre, les cartons
d'acte et la cinématique, parce que c'est de l'art direction.

PÉRIMÈTRE EXACT

1. Ciel et atmosphère
   Crépuscule côtier : indigo #1B1040 en haut, magenta #B0316E au milieu,
   orange brûlé #FF8A3D en bas. Disque solaire bas avec halo #FFD98A. Bandes de
   nuages. Brouillard cohérent avec la couleur du ciel à la hauteur visée.
   Dégradés mis en cache, pas recalculés par image.

2. Éclairage des volumes
   AUCUNE FACE N'EST GRISE. L'éclairage est simulé par teinte selon
   l'orientation : vers le soleil ça tire orange chaud, à l'opposé ça tire
   bleu froid. C'est ce qui donne le volume sans aucun calcul d'éclairage.
   Assombrissement progressif avec la distance, vers la couleur du ciel.

3. Fenêtres émissives
   Trame de rectangles par façade, allumage pseudo-aléatoire mais STABLE :
   hachage de la position du bâtiment et de l'index de fenêtre, jamais
   Math.random() par image, sinon toute la ville scintille. Densité et teinte
   variables par bâtiment.

4. Néons et ville
   Enseignes émissives rose #FF2E88 et cyan #25E5FF sur les façades et les
   toits, lueur additive autour de chaque source. Antennes, châteaux d'eau,
   groupes de climatisation sur les toits : c'est ce qui donne l'échelle et
   fait exister la hauteur. Traînées de reflet très loin en bas, dans la rue,
   qui vendent l'asphalte mouillé sans le détailler.

5. Le vide
   L'argument spectaculaire de ce jeu, c'est le vide sous les pieds de
   l'acrobate. Travaille-le : perspective accentuée vers le bas, profondeur
   atmosphérique, mouvement de parallaxe. Une capture prise en plein vol doit
   donner le vertige.

6. L'acrobate et le rig
   Costume qui accroche la lumière du couchant, liseré néon, traînée pendant
   les figures. Câbles fins qui vibrent. Poussière de magnésie au lâcher.
   Vérifie sur capture que les membres pointent dans le bon sens : l'angle 0
   de limb() est « vers le bas », l'erreur inverse a déjà eu lieu.

7. Post-traitement, dégressif par profil de qualité
   - Bloom : canevas hors-écran au quart de résolution, flou par double
     drawImage réduit puis agrandi, composition en 'lighter'.
   - Grain : tuile de bruit pré-rendue, décalée aléatoirement, alpha faible.
   - Vignette : dégradé radial mis en cache.
   - Étalonnage : deux rectangles composés ('multiply' puis 'screen') pour
     pousser contraste et teintes.
   - Aberration chromatique : qualité haute seulement, très légère.
   - Bandes cinéma pendant briefing, cartons d'acte et écran final.
   - Ralenti et resserrement de caméra sur une réception ratée.

8. Identité
   Logo TRAPEZE CITY dessiné au canvas : lettrage large, capitales, très
   espacé, liseré néon. Écran-titre avec une cinématique d'ouverture qui
   survole la ville et vient se poser sur le premier rig. Cartons d'acte
   typographiés dans la même grammaire.

CONTRAINTES

- Les budgets de faces et de temps d'image de la session 1 sont des plafonds,
  pas des suggestions. Si un effet les crève, il descend d'un cran de qualité
  ou il saute. Mesure avant et après.
- Zéro allocation dans la boucle chaude : dégradés, tuiles de bruit et canevas
  hors-écran créés une seule fois.
- Jamais 'inherit' comme famille dans CX.font. Pile système sans espaces.
- Aucune police externe, aucune image externe, aucun actif téléchargé. Tout est
  dessiné dans le fichier.
- Tout est original. Aucune marque, aucun nom, aucun visuel de Rockstar ou d'un
  autre éditeur. On s'inspire d'un genre visuel, on ne copie pas un jeu.

VÉRIFICATION — c'est la partie la plus importante de cette session

Le rendu ne se vérifie pas en lisant du code. Il se vérifie en regardant.
1. Avec tools/shot_v3.js, capture au moins dix images : écran-titre, balancé au
   rig 1, plein vol au-dessus du vide, prise parfaite, chute dans le filet,
   porteur, drone en action, final sur la tour, carton d'acte, écran de
   résultats — aux trois profils de qualité.
2. REGARDE chaque capture avec l'outil Read. Juge-la. Si elle ne va pas,
   corrige et recapture. Recommence jusqu'à ce que ce soit bon. C'est cette
   boucle qui fait la différence entre « le code a l'air correct » et « ça a de
   la gueule ».
3. node tools/check.js et node tools/play_v3.js doivent toujours passer : tu
   n'as pas le droit de casser le gameplay en embellissant.
4. Écris les temps d'image mesurés aux trois qualités, avant et après.

À LA FIN : commit et push sur la branche. Section « État après S3 » dans
docs/V3-PLAN.md avec les mesures. Ne crée pas de pull request.
```

---

## S4 — HUD façon GTA, menus, audio, tactile  ·  **Sonnet 5**

```text
Tu travailles sur le dépôt Wonderself/trapeze, branche
claude/game-versions-improvement-plan-9y3dqs.

Lis docs/V3-PLAN.md, surtout la §2 (la table de correspondance GTA vers
trapèze), puis trapeze-city-v3.html. Lis aussi trapeze-stars-v2.html : son
système de menus au canvas (registre hitZones / zone() / hitTest() repeuplé à
chaque image), son i18n, sa sauvegarde versionnée et son audio WebAudio sont
exactement les motifs à reprendre. Ne réinvente pas, adapte.

PRINCIPE DIRECTEUR :
MÉCANIQUES DE TRAPÈZE, LANGAGE VISUEL DE GTA.
Cette session est la seconde moitié de la promesse : l'UI/UX. Le HUD doit se
lire comme celui d'un GTA moderne, tout en n'affichant que des informations de
trapèze.

INTERDICTION ABSOLUE : ne modifie ni trapeze-stars-v1.html, ni
trapeze-stars-v2.html, ni index.html.

TA MISSION — session 4 sur 5 : rendre la démo utilisable et l'habiller de son.
Le moteur, le gameplay et l'art direction sont faits, tu ne les touches pas.

PÉRIMÈTRE EXACT

1. HUD, grammaire GTA, contenu trapèze
   - RADAR DES TOITS en bas à gauche, rond ou carré aux angles arrondis,
     orienté selon le cap de la caméra : le parcours des sept rigs, ta
     position, le prochain rig en surbrillance, le drone. Peu coûteux, la ville
     est une grille.
   - ÉTOILES DE HYPE en haut à droite, dessinées comme les étoiles de recherche
     d'un GTA, avec l'animation d'apparition et le clignotement quand ça monte.
   - CAGNOTTE affichée comme un compteur de fric : chiffres condensés, montée
     animée, couleur qui passe au chaud quand le multiplicateur monte.
   - Chrono de la traversée, jauge d'ampleur du balancé, indicateur de fenêtre
     de prise, flèche vers le prochain rig hors champ.
   - Cartons d'acte et sous-titres de briefing.
   - Tout s'adapte au portrait comme au paysage.

2. Menus au canvas
   Menu principal, réglages, pause, écran de résultats. Réglages : musique,
   effets, langue, qualité, sensibilité de caméra, inversion d'axe, aides.
   Reprends le registre de zones cliquables de V2. Navigation au clavier ET au
   doigt, avec un état de sélection visible.

3. Commandes tactiles
   - Pompage, lâcher, figure, prise : boutons clairs à droite ; orientation du
     corps et de la figure au manche virtuel à gauche ; caméra au glissement
     sur le reste de l'écran.
   - Multitouch réel : pomper et orienter en même temps doit marcher.
   - Zones de contact généreuses, retour visuel à l'appui.
   - Écran de rotation en portrait si la surface jouable devient trop petite,
     avec mise en pause automatique et reprise à la rotation. Le motif est dans
     trapeze-stars-v1.html, fonction checkRotate().

4. Audio, entièrement synthétisé en WebAudio
   - Vent en altitude, dont l'intensité suit la hauteur et la vitesse.
   - Grincement des câbles et de la barre, lié à la tension du pendule.
   - Claquement de la prise, avec trois timbres selon la qualité.
   - Foule : rumeur de fond, réaction aux figures, ovation aux 5 étoiles.
   - Rotors du drone, avec effet Doppler selon la distance.
   - Musique de RADIO en couches qui entrent selon les étoiles de hype, comme
     la musique par paliers de chaleur de V2.
   - Bus séparés musique et effets derrière un DynamicsCompressor en limiteur.
     Atténuation pendant les temps d'arrêt.
   - L'audio ne démarre qu'après une interaction utilisateur.

5. i18n, sauvegarde, accessibilité
   - Français et anglais, toutes les chaînes passées par la fonction de
     traduction.
   - Sauvegarde versionnée sous 'trapezecity.v3.save', schéma 1, TOUS les accès
     à localStorage dans un try/catch. En navigation privée Safari, un
     localStorage non protégé lève et tue la boucle de rendu : ce bug exact a
     déjà été trouvé en V1, ne le réintroduis pas.
   - Accessibilité : réduction des secousses, réduction du flash, taille de
     texte, contraste renforcé.

CONTRAINTES

- Canvas 2D, zéro dépendance, un seul fichier.
- Jamais 'inherit' comme famille dans CX.font.
- Attention aux chevauchements de texte dans les réglages : mesure la largeur
  réelle avec measureText et réduis la taille si besoin. Ce défaut précis a
  demandé deux passes en V2 parce que la première correction avait été devinée
  au lieu d'être mesurée. Mesure.
- Ne casse ni le budget de faces, ni le temps d'image.

VÉRIFICATION

1. node tools/check.js trapeze-city-v3.html doit passer.
2. node tools/play_v3.js doit toujours terminer la traversée.
3. Écris tools/monkey_v3.js sur le modèle de tools/monkey_v2.js : 8000 entrées
   aléatoires — touches mitraillées, taps à des coordonnées aléatoires,
   transitions d'état brutales, ouverture des réglages en plein vol. Lance-le
   plusieurs fois de suite, il est aléatoire par construction.
4. Écris un script playwright-core qui simule un vrai multitouch via CDP
   (Input.dispatchTouchEvent) et prouve que pomper et orienter simultanément
   fonctionne. Le modèle est tools/s9_multitouch.js.
5. Captures du HUD en portrait et en paysage, REGARDÉES avec Read.

À LA FIN : commit et push sur la branche. Section « État après S4 » dans
docs/V3-PLAN.md. Ne crée pas de pull request.
```

---

## S5 — Page d'accueil, QA, documentation  ·  **Sonnet 5**

```text
Tu travailles sur le dépôt Wonderself/trapeze, branche
claude/game-versions-improvement-plan-9y3dqs.

Lis docs/V3-PLAN.md, docs/RESTE-A-FAIRE.md, tools/README.md, index.html et
trapeze-city-v3.html.

TA MISSION — session 5 sur 5 : intégrer la troisième démo à la page d'accueil
et faire la passe de vérification finale.

C'est la SEULE session autorisée à modifier index.html. Tu ne modifies toujours
ni trapeze-stars-v1.html ni trapeze-stars-v2.html, sauf si la QA révèle une
régression réelle sur l'une d'elles — auquel cas tu la signales avant de la
corriger.

PÉRIMÈTRE EXACT

1. index.html — troisième carte
   - La grille passe de deux à trois cartes, et doit rester mobile d'abord :
     une colonne en portrait, deux puis trois en largeur croissante.
   - Carte TRAPEZE CITY avec son aperçu animé au canvas, dans le même esprit
     que les aperçus existants de V1 et V2 : une petite scène de toits en
     perspective avec des néons et un acrobate qui se balance, pas une image
     fixe.
   - Palette de la carte accordée à la démo : magenta et cyan sur fond sombre.
   - Quatre points forts, comme les deux autres cartes. Ils doivent dire
     clairement que c'est le MÊME jeu de trapèze dans une nouvelle peau : la
     ville, le rendu 3D, le HUD, la traversée en un seul numéro.
   - Le tableau comparatif passe à trois colonnes. Ajoute les lignes qui ont du
     sens à trois, accepte les cases sans objet.
   - Le titre annonce aujourd'hui « Deux versions jouables » : passe à trois.
     Le nom « Trapeze Stars » reste valable pour l'ensemble, les trois sont des
     jeux de trapèze.
   - Métadonnées Open Graph mises à jour. L'image de couverture actuelle
     (assets/og-cover.png) parle de deux versions : régénère-la à trois avec le
     même encodeur PNG écrit en Python pur (zlib et struct seulement), ou
     rends-la neutre.

2. Outillage
   - tools/check.js doit accepter les trois jeux.
   - Vérifie que play_v3.js, monkey_v3.js et shot_v3.js existent, marchent et
     sont documentés.
   - Mets tools/README.md à jour : les commandes, ce que chaque outil attrape,
     les vrais bugs qu'ils ont trouvés.

3. Passe de QA
   - Lance TOUS les outils sur les trois jeux, plusieurs fois pour ceux qui
     sont aléatoires.
   - Captures des trois jeux et de la page d'accueil, portrait et paysage,
     REGARDÉES avec l'outil Read.
   - Performance : temps d'image des trois jeux aux trois qualités, chiffres
     écrits.
   - Accessibilité : navigation au clavier de bout en bout sur la page
     d'accueil et dans les menus, contrastes, textes alternatifs.
   - Vérifie les liens de la page d'accueil vers les trois jeux.

4. Documentation
   - docs/RESTE-A-FAIRE.md : état de V3, ce qui est fait, ce qui reste, et
     surtout ce qui est HORS DE PORTÉE sans matériel réel. Sois honnête : aucun
     vrai iPhone, aucun vrai Android milieu de gamme, aucun vrai ressenti
     tactile n'a pu être testé. Ne prétends pas le contraire.
   - docs/V3-PLAN.md : section finale « État après S5 ».

CONTRAINTES

- Aucune dépendance ajoutée à la page d'accueil, elle reste HTML et CSS
  autonomes.
- Aucune marque, aucun nom, aucun visuel d'un éditeur existant, ni dans la page
  ni dans les métadonnées.
- Si un test échoue, corrige-le. Ne le désactive pas, ne le contourne pas.

À LA FIN : commit et push sur la branche. Ne crée pas de pull request sauf
demande explicite. Termine par un récapitulatif qui tient debout tout seul : ce
qui a été livré, ce qui a été mesuré, ce qui reste ouvert.
```

---

## S6 — Tampon  ·  **Sonnet 5**

À ne lancer que si S5 a remonté des défauts, ou si une session a débordé.

```text
Tu travailles sur le dépôt Wonderself/trapeze, branche
claude/game-versions-improvement-plan-9y3dqs.

Lis docs/V3-PLAN.md, en particulier les sections « État après » de chaque
session, et docs/RESTE-A-FAIRE.md.

TA MISSION : traiter la liste des défauts et des points restés ouverts à
l'issue de la session 5, dans l'ordre où ils y sont écrits.

Rappel du principe directeur : TRAPEZE CITY est un jeu de trapèze sur les mêmes
bases que Classic et Deluxe ; le côté GTA est dans les graphismes et l'UI/UX,
jamais dans les mécaniques.

Pour chaque point : vérifie qu'il est réel avant de le corriger. Sur ce dépôt,
plusieurs « défauts » supposés se sont révélés intentionnels ou sans effet après
vérification, et les « corriger » aurait dégradé le jeu. Mesure avant de
conclure.

Après chaque correction : node tools/check.js sur le fichier touché,
node tools/play_v3.js, node tools/monkey_v3.js plusieurs fois, et une capture
REGARDÉE si le rendu est concerné.

Ne modifie trapeze-stars-v1.html et trapeze-stars-v2.html que si la liste le
demande explicitement.

À LA FIN : commit et push. Mets à jour docs/RESTE-A-FAIRE.md avec ce qui a été
réglé et ce qui reste. Ne crée pas de pull request.
```
