# Reste à faire

État au terme de la session. Les lots ci-dessous sont volontairement cadrés
pour être exécutés séparément, y compris par un modèle plus léger : chacun
est court, local, et vérifiable.

**Avant toute modification** : `node tools/check.js <fichier>` doit passer, et
`node tools/play_v2.js` doit rester vert après une modification de V2 (lancer
plusieurs fois : la génération de niveau est aléatoire). Pour Trapeze City,
`node tools/play_v3.js` et `node tools/monkey_v3.js` jouent le même rôle.

---

## V3 « Trapeze City » — état après les cinq sessions

Les cinq sessions prévues dans `docs/V3-PLAN.md` sont livrées : socle 3D
(S1), gameplay et traversée (S2), direction artistique et post-traitement
(S3), HUD/menus/audio/tactile (S4), intégration à la page d'accueil et QA
finale (S5, celle-ci). Le détail mesuré de chaque session est dans
`docs/V3-PLAN.md`, sections « État après S1 » à « État après S5 » — ce qui
suit est le résumé côté outillage et QA, dans le même esprit que le reste
de ce fichier.

**Vérifié dans cette session**, sur les trois jeux à la fois :

- `tools/check.js` passe sur les trois fichiers.
- `tools/s9_storage.js` étendu à Trapeze City : un `localStorage` hostile
  (navigation privée simulée) ne tue la boucle de rendu sur aucun des trois.
- `tools/s9_refresh_v3.js` (nouveau) : même preuve que `s9_refresh.js` pour
  V2, transposée au pas fixe de 1/120 s de Trapeze City. Écart mesuré entre
  60 Hz et 120 Hz : 0,22 %, dans le bruit de calcul.
- `tools/s9_multitouch_v3.js` (nouveau) : deux contacts tactiles réels via
  CDP, pomper et orienter le regard fonctionnent dans la même fenêtre de
  contact combiné.
- Performance mesurée, 1280×720, scène chargée :

  | Jeu | Profils | Résultat |
  |---|---|---|
  | Classic (V1) | rendu fixe, pas de profil | ~46 ips |
  | Deluxe (V2) | basse / moyenne / haute | ~61 / ~32 / ~26 ips |
  | City (V3), drone en vol | basse / moyenne / haute | 60 / 60 / 43 ips |

  Les trois tournent dans le **même conteneur sans GPU** : la rastérisation
  logicielle du Canvas 2D y coûte nettement plus qu'sur un vrai poste, ce qui
  explique que Deluxe en qualité haute (26 ips ici) reste néanmoins fluide
  sur un ordinateur ou un téléphone réel — c'est la même limite déjà
  documentée pour V1/V2 dans la section S9 ci-dessous, désormais confirmée
  vraie aussi pour V3.
- Accessibilité de `index.html` : les trois liens de jeu, les deux
  `<details>` et le lien de pied de page sont atteignables par tabulation
  seule, dans cet ordre, sans piège au clavier. Contrastes mesurés (ratio
  WCAG) : texte courant 9,4 à 17,9 (seuil AA : 4,5), boutons d'action 5,4 à
  7,6 sur le pire point de leur dégradé (seuil AA gros texte : 3). Les trois
  aperçus animés ont un texte alternatif décrivant la scène, pas seulement
  le nom de la version.
- Régénération de l'image Open Graph (`assets/og-cover.png`, 1200×630) par
  un encodeur PNG en Python pur (`tools/make_og_cover.py`, zlib et struct
  seulement) : trois pastilles numérotées gold/cyan/magenta annoncent les
  trois versions au lieu de deux, avec une silhouette de toits en clin
  d'œil à Trapeze City. Décodage vérifié par un vrai navigateur, pas
  seulement par l'absence d'erreur de l'encodeur.

**Honnêteté sur ce qui n'a PAS pu être testé pour V3** (même limite que pour
V1/V2, voir la section S9 plus bas — elle s'applique ici à l'identique) :
aucun vrai iPhone, aucun vrai Android, aucun ressenti tactile réel. Le
multitouch, le stockage hostile et l'indépendance au taux de rafraîchissement
sont vérifiés par simulation fidèle, pas par du matériel physique.

**Écart de la session précédente, comblé dans celle-ci** : `s9_memory_v3.js`
porte désormais la dérive de tas sur 30 minutes simulées à Trapeze City,
avec sa propre machine à états (`hang`/`fly`/`held`/`net`) et son propre
bot — une vraie réécriture, pas un changement de nom de fichier. Le bot
redémarre la traversée des dizaines de fois sur la fenêtre de 30 minutes
(chaque traversée ne dure que 50 à 90 s de temps simulé), ce qui exerce en
plus le nettoyage d'état au redémarrage, pas seulement une session
continue.

Un vrai bug a été trouvé en écrivant ce bot, avant même son premier
lancement complet : sa première version mesurait la distance à la barre
visée contre l'**ancrage** du portique plutôt que contre la barre
elle-même (au bout du câble, qui oscille) — le bot pompait indéfiniment sur
le premier rig sans jamais rattraper le suivant. Corrigé en reprenant
exactement le calcul `barDist()` de `play_v3.js`. Mesuré ensuite sur 30
minutes simulées : tas stable à 9,5 Mo du début à la fin, pic de
particules vivantes borné à 31 sur un plafond de 340, boucle vivante à la
fin.

**Écart restant** : `s9_multitouch.js` reste spécifique à V1/V2 — le
multitouch réel de Trapeze City est déjà couvert séparément par
`s9_multitouch_v3.js`, écrit dès la session 4.

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
| S9 Tests appareils réels | ◐ | tout ce qui est vérifiable sans matériel est fait — voir ci-dessous |
| Limitation V1 portrait | ✅ | écran « tournez votre appareil », pause automatique |
| V3 « Trapeze City » (S1 à S5) | ✅ | socle 3D, gameplay, direction artistique, HUD/audio/tactile, intégration — détail plus haut et dans `docs/V3-PLAN.md` |

Tout ce qui était planifié dans les deux sessions précédentes est fait,
y compris la limitation V1 explicitement mise de côté la fois d'avant.
Ce qui suit est nouveau : des raffinements identifiés en cours de route,
plus le travail qui exige vraiment un appareil physique.

---

## V1 en portrait mobile — corrigé

Le canvas de V1 garde un ratio fixe 800/450 (platformer en vue de côté,
gameplay volontairement inchangé — pas de refonte de l'architecture de
rendu). Sur un téléphone tenu en portrait, ce ratio ne peut remplir l'écran
par **aucune** méthode, pas même le plein écran : la largeur reste toujours
le facteur limitant, et l'API de verrouillage d'orientation n'existe pas sur
Safari iOS. Le jeu se serait retrouvé, plein écran ou pas, dans une bande
étroite avec des boutons qui débordent visuellement du cadre.

**Correction appliquée** : un écran « Tournez votre appareil » s'affiche dès
que le rendu résultant serait trop petit pour être jouable (seuil calculé
sur la taille réelle, pas un test d'appareil en dur — une tablette en
portrait passe au travers et joue normalement, vérifié à 768×1024). Le jeu
se met en pause automatiquement si l'écran de rotation apparaît en cours de
partie, et reprend à la rotation inverse. Une fois en paysage, le jeu remplit
déjà tout l'écran nativement (vérifié à 844×390), sans avoir besoin du
bouton plein écran.

## S9 — Tests sur appareils réels : ce qui a pu être vérifié sans matériel

Aucun appareil physique n'était disponible dans cette session. WebKit a été
tenté (`npx playwright-core install webkit`) : le binaire télécharge, mais
ne peut pas s'exécuter dans ce conteneur (bibliothèques système manquantes —
libmanette, libenchant, libsecret, libGLESv2, libx264...). Plutôt que de
forcer l'installation de ces dépendances système ou de prétendre qu'un test
WebKit a eu lieu, le travail s'est concentré sur ce qui est réellement
vérifiable sans le moteur réel — et sur un audit de code ciblé pour les
incompatibilités Safari qui n'ont pas besoin d'être exécutées pour être
confirmées (des absences d'API stables et documentées, pas des nuances de
comportement).

**Deux vrais bugs trouvés et corrigés par cette méthode :**

- **`localStorage` non protégé en V1.** Simulé un `localStorage` hostile
  (comme en navigation privée Safari, où `setItem` lève une exception) :
  V1 plantait. `addScore()` appelait `localStorage.setItem` sans
  `try/catch`, dans le chemin de code exécuté à chaque nouveau record —
  c'est-à-dire quasi systématiquement en jeu normal. Une exception non
  rattrapée là tue `requestAnimationFrame` exactement comme le bug `flashN`
  d'origine (B1) : le jeu se serait figé, en navigation privée réelle, dès
  qu'un joueur dépasserait son record. Corrigé ; revérifié en forçant un
  nouveau record sous stockage hostile — la boucle continue de tourner
  (confirmé par le compteur de frames, pas seulement l'absence d'erreur).
- **Bouton plein écran mort sur iOS Safari en V2.** `Element.requestFullscreen`
  n'existe pas du tout sur iOS Safari (aucune version ne le supporte, y
  compris en PWA installée) — fait stable, pas besoin de l'exécuter pour le
  confirmer. Le bouton restait affiché et ne faisait rien au toucher, sans
  retour visuel, et pouvait même rester bloqué affichant l'icône « quitter »
  après un appui sans effet (l'icône était mise à jour de façon optimiste au
  clic plutôt que sur l'état réel du navigateur). Corrigé par détection de
  fonctionnalité (masque le bouton si l'API n'existe pas — plus fiable
  qu'un test d'user-agent, y compris sur iPadOS qui se fait souvent passer
  pour macOS Safari) et par un écouteur `fullscreenchange` qui garde
  l'icône honnête même si le plein écran est quitté par un geste du
  navigateur plutôt que par ce bouton. V1 n'a pas ce problème : son propre
  repli CSS pour iOS gérait déjà ce cas.

**Vérifié sain, sans modification nécessaire :**

- **Session de 30 minutes.** Simulé directement dans Chromium (108 000 pas
  de simulation, joueur automatique) plutôt qu'attendu en temps réel : le
  tas JS reste stable à 9,5 Mo sur toute la session, le compteur de
  particules vivantes ne dérive pas au-delà de son plafond. Aucun signe de
  fuite.
- **Multi-touch réel.** Testé avec deux points de contact simultanés via le
  protocole tactile bas niveau (CDP `Input.dispatchTouchEvent`), pas deux
  appuis séquentiels : déplacement et action s'enregistrent bien en même
  temps dans les deux versions, et se relâchent correctement.
- **Indépendance au taux de rafraîchissement.** Sans écran 120 Hz réel, testé
  ce qui compte vraiment : la logique de l'accumulateur à pas fixe. Fait
  tourner la simulation avec des timestamps espacés de 8,33 ms (120 Hz) et
  de 16,67 ms (60 Hz) sur une durée d'horloge murale identique : écart de
  progression de 0,12 % entre les deux, dans le bruit d'arrondi. La vitesse
  du jeu ne dépend pas du taux de rafraîchissement.

**Reste réellement hors de portée sans matériel physique :**

- Safari iOS en conditions réelles (le moteur JavaScriptCore et le Canvas 2D
  de WebKit ont leurs propres particularités qu'aucune simulation ne
  reproduit fidèlement).
- Un Android de milieu de gamme réel, pour éprouver `QUAL_PRESETS` et
  `autoQuality()` sous une vraie contrainte mémoire/GPU (SwiftShader dans ce
  conteneur n'a pas les mêmes limites qu'un GPU mobile réel).
- Le ressenti tactile réel (latence, taille des doigts) au-delà de ce que la
  géométrie des zones peut garantir.

## Lot S10 — Petits raffinements identifiés en cours de route

Les trois notés la dernière fois sont réglés :

- **`SV.guide` et la prévisualisation** — corrigé. Le message de tutoriel qui
  apprend le pompage (`tutStep===3`) mentionne désormais la ligne pointillée
  quand `SV.guide` est actif ; il s'affiche exactement au moment où la ligne
  devient visible (état `'swing'`), sans second système de message qui
  risquerait de se superposer.
- **Sélection de niveau et tutoriel** — corrigé. `startAtLevel()` applique
  désormais la même règle que `startRun()` (`tutStep=SV.seen.tut?0:1`)
  plutôt qu'un `tutStep=0` qui n'était sans conséquence que par accident du
  flux de déverrouillage actuel.
- **Vent de plage et grand soleil** — refermé sans changement de code. Le
  vent ne s'applique qu'en état `'air'`, jamais en `'swing'` : c'est le
  comportement voulu, pas un oubli — le but est justement de ne jamais
  fausser le pendule pendant une figure. Le corriger « pour la cohérence »
  aurait réintroduit exactement le risque que ce choix évite, pour un
  effet que le jeu normal ne rend même pas perceptible.

## Audit manuel du clavier et des transitions d'état — deux défauts corrigés

Le `code-review` automatisé n'a rien trouvé : lancé après un commit, il ne
voit que le diff non commité (vide). Un audit manuel ciblé sur la gestion
clavier — la zone la plus retouchée au fil des sessions, patchée par petits
bouts successifs — a trouvé deux défauts réels, tous deux en V2 :

- Le bloc `gs==='menu'` du gestionnaire `keydown` ouvrait réglages ou
  sélection de niveau (touches `s`/`l`) sans `return`, contrairement aux
  blocs équivalents pause/settings/levelselect. Sans effet observable par
  pure coïncidence (ni `s` ni `l` ne correspondaient aux tests plus bas dans
  la même fonction), mais fragile — le genre d'incohérence qui devient un
  vrai bug au prochain remappage de touche. Corrigé.
- Code mort dans la sélection de personnage au clavier : une comparaison en
  minuscule contre `'arrowleft'` ne pouvait jamais correspondre (`e.key` pour
  la flèche gauche vaut `'ArrowLeft'`, jamais mis en minuscule puisque
  seules les touches à un caractère le sont). La ligne suivante, avec la
  bonne casse, faisait déjà le travail. Nettoyé.

Ces deux défauts ont ensuite motivé un test plus dur que le joueur
automatique : `tools/monkey_v1.js` et `tools/monkey_v2.js` mitraillent des
touches, des taps à des coordonnées aléatoires, et forcent des transitions
d'état brutales (game over en pleine figure, retour menu en plein saut) —
8000 itérations par exécution, trois exécutions consécutives sur chaque
version, zéro crash. C'est ce type de test qui a débusqué le premier des deux
défauts ci-dessus ; le garder dans la routine de vérification.

## Outils

| Fichier | Rôle |
|---|---|
| `tools/check.js` | Syntaxe, chargement, et parcours de tous les états de jeu, sur les trois fichiers. Contient le test de non-régression du bug `flashN`. |
| `tools/play_v2.js` | Joueur automatique qui passe par les mêmes entrées qu'un humain, esquive les dangers, et doit franchir les 12 niveaux. |
| `tools/play_v3.js` | Cinq profils de joueur automatique, doivent boucler les sept rigs de Trapeze City. Enchaîne un fuzz de 60 000 pas et un scénario de chute. |
| `tools/monkey_v1.js`, `tools/monkey_v2.js`, `tools/monkey_v3.js` | Entrées aléatoires et transitions d'état brutales, 8000 itérations. Cherchent les crashs qu'un joueur raisonnable ne provoquerait pas. |
| `tools/reach_v3.js` | Balaie chaque vol de Trapeze City en (amplitude, angle de lâcher) : prouve que chaque barre est atteignable. |
| `tools/sandbox.js` | DOM et audio simulés, partagés par tous les scripts ci-dessus. |
| `tools/make_og_cover.py` | Régénère `assets/og-cover.png`, en Python pur (zlib + struct). |

Le joueur automatique de `play_v2.js` reste la meilleure protection contre
les régressions de *gameplay* — il a trouvé, au fil des sessions, les barres
hors d'atteinte et le trapèze impossible à relancer depuis l'arrêt. Les
scripts `monkey_*.js` couvrent un angle différent : la robustesse de la
*machine à états* face à des entrées désordonnées. Lancer les trois après
toute modification.

Les captures Chromium (via `playwright-core` + le binaire préinstallé
`/opt/pw-browsers/chromium-1194/chrome-linux/chrome`) ont trouvé, cette
session-ci comme la précédente, des défauts qu'aucun test headless ne peut
attraper : mise à l'échelle, police canvas invalide, convention d'angle
inversée. **Toujours regarder le rendu réel après un changement visuel**,
pas seulement faire tourner le harnais.
