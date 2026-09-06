# Outils de vérification

Deux familles d'outils, avec des besoins différents.

## Sans dépendance — toujours disponibles

```
node tools/check.js <fichier.html>     # syntaxe, chargement, parcours des états, régression flashN
node tools/play_v2.js                  # joueur automatique, doit franchir les 12 niveaux de V2
node tools/monkey_v1.js                # 8000 entrées aléatoires (clavier, tap, transitions brutales)
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

`play_v3.js` est le test qui décide si la session 2 tient : cinq profils de
joueur différents doivent boucler la traversée des sept rigs sans
intervention, en passant par `action()`, `release()` et `figure()` — les
fonctions mêmes que les touches appellent. Il fait varier le pilote (patience
au lâcher, longueur des figures, proportion de pompages ratés) parce que le
jeu est déterministe : rejouer le même pilote cinq fois ne prouve rien de
plus qu'une fois.

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

N'utilisent que `fs`/`vm` de Node, via un DOM et un audio simulés
(`sandbox.js`). Rien à installer. À lancer après **toute** modification de
`trapeze-stars-v1.html` ou `trapeze-stars-v2.html` — `play_v2.js` et les
`monkey_*.js` plusieurs fois de suite (aléatoires par construction).

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
node tools/s9_storage.js    # localStorage hostile (navigation privée) ne doit pas planter le jeu
node tools/s9_memory.js     # 30 minutes simulées : le tas ne doit pas dériver
node tools/s9_multitouch.js # déplacement + action simultanés, deux points de contact réels
node tools/s9_refresh.js    # la vitesse du jeu ne doit pas dépendre du taux de rafraîchissement
node tools/shot_v3.js       # captures de contrôle de Trapeze City + enchaînement au clavier
node tools/s9_multitouch_v3.js  # preuve de multitouch REEL : pomper et orienter en meme temps
```

`s9_multitouch_v3.js` fait la même chose que `s9_multitouch.js`, pour
Trapeze City : deux contacts simultanés via CDP `Input.dispatchTouchEvent`
(pas des événements de pointeur synthétiques depuis la page), l'un sur le
manche virtuel de regard, l'autre sur le bouton pomper/saisir. Il vérifie
que les DEUX gestes agissent dans la même fenêtre de contact combiné — la
preuve qu'aucun geste ne bloque l'autre, pas seulement qu'ils marchent
chacun pris séparément.

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

Pour un contrôle visuel après un changement de rendu, écrire un script
Playwright ad hoc qui capture des `page.screenshot()` puis les regarder
avec l'outil `Read` — c'est ce qui a débusqué la mise à l'échelle et la
police canvas invalides que le harnais headless ne pouvait pas voir.
