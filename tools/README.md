# Outils de vérification

Trois familles d'outils, avec des besoins différents : sans dépendance,
avec Chromium réel, et un générateur d'image autonome.

## Sans dépendance — toujours disponibles

```
node tools/check.js <fichier.html>     # syntaxe, chargement, parcours des états, régression flashN
node tools/play_v2.js                  # joueur automatique, doit franchir les 12 niveaux de V2
node tools/monkey_v1.js [fichier]       # 8000 entrées aléatoires (clavier, tap, transitions brutales)
node tools/monkey_v2.js                # même principe pour V2, y compris réglages et sélection de niveau
node tools/reach_v3.js                 # preuve que chaque barre de Trapeze City est atteignable
node tools/play_v3.js [n]              # joueur automatique, doit boucler les 7 rigs de Trapeze City
node tools/monkey_v3.js [n]            # 8000 entrees aleatoires : jeu, menus, reglages, tactile
```

`monkey_v3.js` étend le principe de `monkey_v2.js` aux menus de la session 4 :
en plus des touches mitraillées et des taps à des coordonnées aléatoires, il
ouvre et ferme les réglages en plein vol, navigue au clavier dans les menus,
fait tourner des lignes de réglage hors de l'écran réglages, et force des
transitions brutales (démarrer, revenir au menu, changer de qualité ou de
langue) sans jamais respecter un ordre raisonnable. Une chose au moins doit
tenir : quel que soit le désordre, aucune exception.

`play_v3.js` est le test qui décide si la session 2 tient : six profils de
joueur différents doivent boucler la traversée des sept rigs sans
intervention, en passant par `action()`, `release()` et `figure()` — les
fonctions mêmes que les touches appellent. Il fait varier le pilote (patience
au lâcher, longueur des figures, proportion de pompages ratés) parce que le
jeu est déterministe : rejouer le même pilote cinq fois ne prouve rien de
plus qu'une fois.

Depuis que la note de prise se joue sur la trajectoire, le paramètre qui
sépare vraiment les pilotes est `patience` — l'écart maximal accepté avant
de lâcher, en fraction du rayon de saisie. Mesuré sur la traversée
complète, prises parfaites sur six : 0 pour un pilote large (0,95), 1 pour
le casse-cou, 2 pour le prudent (0,55), **3 pour le soigneux (0,40)**, 6
pour un pilote très précis (0,28). Le profil « soigneux » a été ajouté
exactement là : sans lui, aucun pilote n'atteignait plus la note 3/3 et le
test cessait d'exercer le haut de l'échelle. Quatre assertions vérifient
désormais que les trois qualités de prise existent *dans le jeu* et pas
seulement dans le code — la prise parfaite est atteignable, elle se mérite,
la note maximale est atteignable, elle se mérite.

Il enchaîne ensuite deux phases que la relecture de code ne remplace pas :
60 000 pas d'actions tirées au hasard (lâcher à l'instant d'une prise, retour
menu en plein vol, chute pendant un carton d'acte) qui doivent passer sans
une seule exception et laisser la machine à états capable de repartir ; puis
un scénario de chute qui vérifie que le filet rattrape, que la reprise se
fait au dernier toit atteint, et que la chute coûte bien la cagnotte et du
temps — jamais la partie.

`reach_v3.js` rejoue la physique de `trapeze-city-v3.html` pour balayer, à
chaque vol, le couple (amplitude, angle de lâcher). Il répond à la seule
question qui compte pour un niveau de trapèze — *cette barre est-elle
atteignable, et à partir de quelle amplitude ?* — à laquelle aucune
relecture de code ne répond. Il sort en échec si un vol devient
infranchissable : à relancer après tout changement de gravité, de longueur
de câble ou de position de rig.

Il affiche aussi, pour chaque vol, la **meilleure approche possible** de la
barre. Cette colonne est ce qui a révélé que le vol final était limité en
portée : sa meilleure trajectoire, à l'amplitude maximale du jeu, passait à
1,35 m de la barre — au-delà du seuil « parfait » de ce rig, qui devenait
donc structurellement inatteignable. « Franchissable » et « jouable
proprement » sont deux questions différentes, et seule la première était
posée jusque-là. Après correction du parcours : 0,11 m.

N'utilisent que `fs`/`vm` de Node, via un DOM et un audio simulés
(`sandbox.js`). Rien à installer. À lancer après **toute** modification de
`trapeze-stars-v1.html` ou `trapeze-stars-v2.html` — `play_v2.js` et les
`monkey_*.js` plusieurs fois de suite (aléatoires par construction).

`monkey_v1.js` prend un **fichier en argument**, parce que le dépôt contient
deux branches du même jeu 2D : `trapeze-stars-v1.html` (par défaut) et
`2d/index.html`. Les faire passer toutes les deux a demandé deux corrections
du harnais, et la seconde est la plus instructive : le pont avançait le jeu
en appelant `loop()`, ce qui marche sur V1 mais pas sur `2d/index.html`, dont
la boucle à pas fixe se contente d'alimenter un accumulateur à partir d'un
horodatage. Le test finissait donc à `frame=0` — **zéro crash, mais zéro
image jouée** : une réussite qui ne prouvait rien. Il appelle maintenant
`tick()` quand il existe. Un test vert sur un jeu qui n'a pas tourné est pire
qu'un test rouge.

`monkey_v1.js`/`monkey_v2.js` ne jouent pas intelligemment comme `play_v2.js` :
ils mitraillent des touches, des taps à des coordonnées aléatoires, et forcent
des transitions d'état brutales (game over en pleine figure, retour menu en
plein saut) pour attraper les crashs qu'un joueur raisonnable ou une lecture
manuelle du code ne provoquerait pas. C'est ce type de test qui a débusqué
qu'un bloc du gestionnaire clavier de V2 ouvrait les réglages sans `return`,
fragile même s'il ne causait pas encore de bug observable.

## Avec Chromium réel — nécessitent `npm install`

```
cd tools && npm install     # installe playwright-core
node tools/s9_storage.js    # localStorage hostile (navigation privée), les QUATRE jeux en Canvas
node tools/s9_memory.js     # 30 minutes simulées (V2) : le tas ne doit pas dériver
node tools/s9_memory_v3.js  # même vérification pour Trapeze City, sa propre machine à états
node tools/s9_multitouch.js # déplacement + action simultanés, V1 et V2
node tools/s9_refresh.js    # vitesse indépendante du taux de rafraîchissement, V2
node tools/s9_refresh_v3.js # même vérification pour Trapeze City
node tools/shot_v3.js [dossier] [fichier]   # captures de contrôle + enchaînement au clavier
node tools/shots_diff_v3.js <avant.html> <apres.html>  # régression visuelle : compare deux versions
node tools/s9_multitouch_v3.js  # preuve de multitouch REEL : pomper et orienter en meme temps
python3 tools/make_og_cover.py  # régénère assets/og-cover.png (zlib + struct, zéro dépendance)
```

`s9_storage.js` couvre désormais les quatre jeux en Canvas dans la même
passe : chacun a sa propre façon de démarrer une partie et de déclencher
l'écriture d'un nouveau record (`addScore()` n'a pas la même signature sur
Trapeze City que sur V1/V2), mais le chemin testé est identique — un
`localStorage` hostile ne doit jamais tuer la boucle de rendu.

**`2d/index.html` n'a été ajouté à cette liste que le jour de la fusion des
deux historiques du dépôt — et il a immédiatement échoué, deux fois.** Ce
fichier, celui qui est déployé et installable, lisait le record à la racine
du script sans protection : en navigation privée, l'exception interrompait
tout le chargement et le jeu ne démarrait pas du tout. Il écrivait aussi le
record sans `try/catch`, comme V1 avant la session S9. Les deux sont
corrigés. La leçon n'est pas sur le code mais sur la liste : un test qui ne
connaît pas un fichier ne le protège pas, et ce fichier-là était le plus
exposé de tous puisque c'est celui que les gens installent.

`s9_refresh_v3.js` reprend le principe de `s9_refresh.js` pour Trapeze
City : même pas fixe (1/120 s au lieu de 1/60), même méthode — on rejoue
`frameLoop()` à 60 Hz puis 120 Hz sur une durée d'horloge murale identique,
sous la même politique de pompage, et on compare l'amplitude atteinte.
Écart mesuré : 0,22 %, dans le bruit — la vitesse du jeu ne dépend pas du
taux de rafraîchissement, sur les trois jeux.

`s9_multitouch_v3.js` fait la même chose que `s9_multitouch.js`, pour
Trapeze City : deux contacts simultanés via CDP `Input.dispatchTouchEvent`
(pas des événements de pointeur synthétiques depuis la page), l'un sur le
manche virtuel de regard, l'autre sur le bouton pomper/saisir. Il vérifie
que les DEUX gestes agissent dans la même fenêtre de contact combiné — la
preuve qu'aucun geste ne bloque l'autre, pas seulement qu'ils marchent
chacun pris séparément.

**Ce test a longtemps été intermittent, et le coupable était le jeu.** Il
mesurait un écart de regard de 0,0002 à 0,0046 rad selon les lancements,
autour d'un seuil de 0,001 — donc il passait ou échouait au hasard. La
cause n'était pas le test : le manche virtuel appliquait le regard par
**impulsion à chaque `pointermove`**, or le navigateur n'en émet que si le
doigt bouge. Un pouce maintenu à fond n'envoyait plus rien pendant que le
regard libre retombait de 4,5 % par pas. Le manche est devenu une commande
de vitesse appliquée à chaque pas de simulation ; l'écart mesuré est passé
à 0,33 rad, et le test réussit désormais quatre fois sur quatre. Le seuil
du test n'a pas été touché : c'est la règle de ce dépôt — quand un test
vacille, on cherche d'abord ce qu'il attrape mal.

`shot_v3.js` fait deux choses. Il capture dix-huit situations choisies — dont
deux caméra collée contre une façade, qui prouvent le découpage au plan
proche, et trois de la session 2 : une prise ratée avec reprise au filet, une
réception au porteur, le drone de télévision en vol — et il **joue
l'enchaînement complet au clavier** : ouvrir la traversée en pompant jusqu'à
deux étoiles de hype, puis pomper, lâcher, saisir, six vols d'affilée, en
dispatchant de vrais événements `keydown`.
L'angle de lâcher n'y est pas codé en dur ; il est décidé image par image en
rejouant la balistique du jeu depuis l'état courant. Un angle fixe ne vaut
que pour une amplitude, et c'est en le découvrant que ce test a révélé
l'amortissement bien trop fort du pendule. Il sort en échec si la traversée
ne va pas jusqu'au bout.

Il affiche aussi le temps passé dans `render()`, mesuré dans le jeu, **avec
le drone en vol et les particules à l'écran** — une scène calme ne dit rien
du pire cas. C'est la seule mesure utile : le temps d'image vu du navigateur est plafonné par la
synchronisation verticale et vaut 16,7 ms quoi qu'il arrive, y compris quand
il reste dix fois la marge nécessaire.

Ces scripts pilotent un vrai Chromium (le binaire préinstallé
`/opt/pw-browsers/chromium-1194/chrome-linux/chrome` dans l'environnement de
développement d'origine ; ailleurs, `playwright-core` télécharchera le sien
sauf si `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD` est positionné). Ils ont trouvé
deux bugs réels que les outils sans dépendance ne pouvaient pas voir : un
`localStorage.setItem` non protégé en V1 (plantait en navigation privée) et
un bouton plein écran mort sur iOS Safari en V2. Voir `docs/RESTE-A-FAIRE.md`
pour le détail et pour ce qui reste hors de portée sans un vrai appareil
(WebKit ne s'exécute pas dans un conteneur minimal — les bibliothèques
système manquent — et aucune simulation ne remplace un vrai iPhone ou un
vrai Android).

### `shots_diff_v3.js` — la régression visuelle, et pourquoi elle a été dure

`shot_v3.js` se terminait par une phrase honnête : « il faut les OUVRIR ».
En pratique on en ouvre trois ou quatre — celles qu'on soupçonne — et on
déclare les autres vérifiées. Ce n'est pas une vérification, c'est un
sondage. Et juger vingt-huit images dans l'absolu est de toute façon le
mauvais exercice : l'œil juge mal la beauté, mais il juge très bien un
**écart**.

`shots_diff_v3.js` capture donc les mêmes scènes sur **deux versions** du
jeu, compare pixel par pixel (décodage PNG dans le navigateur déjà lancé,
aucune bibliothèque d'images à installer) et ne laisse à regarder que les
scènes qui ont bougé — avec un composite avant/après dans `shots/diff/`.

**Le premier résultat a été un échec instructif.** Sur 29 scènes, 26
« avaient changé »… et le témoin — le même fichier comparé à lui-même —
en donnait 24, avec des écarts PLUS grands que la comparaison réelle. La
capture n'était pas reproductible ; l'outil ne mesurait que du bruit. Il a
fallu trois corrections successives, chacune trouvée en remesurant :

1. `shot_v3.js` attendait 260 ms d'horloge avant de capturer. Pendant ce
   temps, `requestAnimationFrame` continuait d'avancer la simulation d'un
   nombre d'images dépendant de la charge de la machine. Remplacé par
   `__v3.still()`, qui fige la boucle et dessine **exactement une** image.
2. Il restait la fenêtre entre le chargement de la page et la mise en
   place de la scène : même problème, la scène démarrait à une image
   inconnue. Corrigé en figeant **avant le premier script du jeu**, via
   `window.__V3_HALT` posé par `addInitScript`.
3. `13-enchainement` est exclu de la comparaison : ce n'est pas une scène
   posée mais la traversée jouée au clavier, dont les événements partent
   d'une boucle d'animation dans la page. Elle dépend du temps d'horloge
   par construction — et c'est très bien, elle prouve un **comportement**,
   pas une image.

Après ces trois corrections, le témoin donne **0,000 % sur 28 scènes sur
28** : les captures sont reproductibles au pixel près. Une scène à 0,000 %
n'est plus « pas regardée », elle est **prouvée inchangée** — ce qui vaut
mieux qu'un coup d'œil.

Appliqué à la relecture des mécaniques : 25 scènes sur 28 identiques au
pixel, et exactement 3 qui bougent — la ligne d'horizon, la tour du final
et l'écran de résultats. Toutes les trois s'expliquent par le même
changement, le déplacement de deux mètres du dernier rig, confirmé par la
position affichée dans la surcouche de débogage (`pos 33.0 88.6 -3.2` →
`pos 31.6 88.6 -4.6`).

Pour un contrôle visuel d'un changement qui ne se compare pas à une version
antérieure, écrire un script Playwright ad hoc qui capture des
`page.screenshot()` puis les regarder avec l'outil `Read` — c'est ce qui a
débusqué la mise à l'échelle et la police canvas invalides que le harnais
headless ne pouvait pas voir.

`s9_memory_v3.js` reprend le principe de `s9_memory.js` pour Trapeze City :
30 minutes de temps simulé (soit 216 000 pas, au pas fixe de 1/120 s du
jeu), en pilotant le bot directement dans la page via `window.__v3`, sans
attendre en temps réel. La transposition n'était pas un simple changement
de nom : sa propre machine à états (`hang`/`fly`/`held`/`net`, pas
`run`/`air`/`swing`) et une traversée qui dure 50 à 90 s au lieu d'occuper
un niveau entier obligent le bot à redémarrer des dizaines de fois sur la
fenêtre de 30 minutes — un test plus dur que l'original, qui exerce aussi
le nettoyage d'état au redémarrage (`respawn()`, remise à zéro des listes
libres), pas seulement une session continue.

**Un vrai bug trouvé en écrivant ce bot, avant même son premier lancement
complet** : sa première version mesurait la distance à la barre visée
contre `rig.ax/ay/az` — l'**ancrage** du portique, à une longueur de câble
au-dessus d'où pend réellement la barre. Le bot pompait indéfiniment sur le
premier rig sans jamais rattraper le suivant, parce que la « distance »
qu'il mesurait n'avait aucun rapport avec la vraie fenêtre de saisie.
Corrigé en reprenant exactement le calcul de `barDist()` dans
`play_v3.js` (ancrage + longueur de câble × sinus/cosinus de l'angle
courant) : le bot progresse alors normalement à travers les sept rigs et
redémarre à la fin de chaque traversée, comme prévu. C'est exactement le
genre de défaut qu'une lecture du code de test n'aurait pas forcément
relevé — la formule *avait l'air* juste — et que seule l'exécution, avec le
rig affiché à chaque échantillon, a révélé.

Mesuré sur 30 minutes simulées : tas stable à 9,5 Mo du début à la fin,
pic de particules vivantes borné à 31 sur un plafond de 340, boucle
vivante à la fin. `s9_multitouch.js` reste spécifique à V1/V2 — le
multitouch réel de Trapeze City est déjà couvert par
`s9_multitouch_v3.js`, qui suit le même motif de portage que ce script.

## Générateur d'image

`tools/make_og_cover.py` régénère `assets/og-cover.png`, l'image Open Graph
de la page d'accueil. Aucune dépendance, pas même Pillow : un rasteriseur
minimal en Python pur, `zlib` pour la compression et `struct` pour les
chunks PNG. Le format du fichier est vérifié à la main (parcours des chunks,
CRC, décompression du flux `IDAT`) et par un vrai décodeur — Chromium,
chargé depuis une page du même répertoire — pas seulement supposé correct
parce que l'encodeur a tourné sans erreur.
