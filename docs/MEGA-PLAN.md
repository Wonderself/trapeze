# MEGA-PLAN — Trapeze Stars

**Objectif** : livrer deux versions jouables et une page de garde de démo.
**V1 « Classic »** = le build actuel, débuggé et fiabilisé, gameplay inchangé.
**V2 « Deluxe »** = refonte profonde du gameplay, du feel, de l'art direction et de l'UI/UX.
**Page de garde** = hub de démo présentant les deux, mobile-first et desktop.

Ce document est le contrat d'exécution. Il est découpé en lots (WP) autonomes,
chacun avec son périmètre, ses fichiers, et ses critères d'acceptation.
Un lot peut être confié à une session séparée sans contexte supplémentaire.

> **État d'avancement.** WP-0, WP-B, WP-A, WP-C et WP-H sont réalisés.
> WP-D, WP-E, WP-F, WP-G et WP-I sont partiels.
> L'état détaillé et les lots restants, découpés pour une exécution séparée,
> sont dans [`RESTE-A-FAIRE.md`](RESTE-A-FAIRE.md).
>
> Deux décisions ont changé depuis la rédaction : **V1 assume son identité de
> platformer en vue de côté** (saut à hauteur variable, écrasement d'ennemis),
> et **V2 est passée en perspective 3D** plutôt qu'en 2D améliorée. Les
> objectifs de gameplay de WP-C restent ceux appliqués.

---

## 0. Carte d'exécution rapide

| Lot | Titre | Dépend de | Parallélisable | Poids |
|---|---|---|---|---|
| WP-0 | Restructuration du repo | — | non | S |
| WP-A | Socle technique (rendu responsive, boucle, qualité, i18n) | WP-0 | non | L |
| WP-B | V1 Classic — corrections | WP-0 | oui | M |
| WP-C | V2 — game design & mécaniques | WP-A | non | XL |
| WP-D | V2 — game feel & juice | WP-C | non | L |
| WP-E | V2 — art direction & rendu | WP-A | oui | XL |
| WP-F | V2 — UI/UX, menus, accessibilité | WP-A | oui | L |
| WP-G | Audio & musique | WP-A | oui | M |
| WP-H | Page de garde (démo) | WP-0 | oui | M |
| WP-I | Perf, QA, matrice de tests | tous | non | M |

**Chemin critique** : WP-0 → WP-A → WP-C → WP-D → WP-I.
**Lots détachables immédiatement** (à envoyer ailleurs) : WP-B, WP-E, WP-F, WP-G, WP-H.

---

## 1. État des lieux

### 1.1 Ce qui existe

Un seul jeu, dupliqué en deux fichiers identiques.

```
index.html              1604 lignes, 117 Ko  ─┐  MD5 identiques
trapeze-stars-v2.html   1604 lignes, 117 Ko  ─┘
```

C'est un jeu HTML5 Canvas 2D mono-fichier, sans dépendance, en français avec un
titre et des médailles en hébreu. Le contenu réel :

- Canvas fixe 800x450, boucle `requestAnimationFrame`.
- Deux personnages jouables dessinés en vectoriel à la main, Marc et Claire.
- Quatre mondes thématiques : Cirque, Jungle, Plage, Futur.
- Douze niveaux, trois par monde, générés proceduralement.
- Un pendule de trapèze, des cerceaux à traverser, des étoiles à collecter.
- Post-traitement : grain, vignette, bloom, letterbox.
- Audio synthétisé par `WebAudio`, une musique par monde.
- Un final avec feux d'artifice.
- Quatre boutons tactiles superposés au canvas.

### 1.2 Bugs bloquants (P0)

Ces défauts cassent le jeu ou une fonctionnalité entière.

**B1 — `flashN` non déclaré, écran Game Over mort.**
`index.html:1464` lit `flashN`, qui n'existe nulle part dans le fichier.
La lecture d'un identifiant non déclaré lève une `ReferenceError`. L'erreur se
produit dans `drawGameOver()`, appelé par `loop()`, **avant** le
`requestAnimationFrame(loop)` de fin. La boucle n'est donc jamais reprogrammée :
à la première partie perdue, le jeu se fige définitivement, écran noir figé, plus
aucune entrée ne répond. C'est le bug le plus grave du build.

**B2 — Pile `save`/`restore` du contexte déséquilibrée.**
`loop()` fait `CX.save()` sous la condition `shakeDur>0` (ligne 1487) mais
`CX.restore()` sous la condition `shakeDur>=0 && shakeX` (ligne 1503). Les deux
conditions ne coïncident pas. Quand `shakeDur` vaut 0 et que `shakeX` est resté
non nul d'un tremblement précédent, on exécute un `restore()` sans `save()`
correspondant, ce qui dépile un état de contexte appartenant à un autre bloc.
Résultat : transformations et styles corrompus de manière intermittente.

**B3 — Le mécanisme du porteur (catcher) est du code mort.**
Les objets `catchers` sont créés avec la forme
`{bar, angle, angV, state, af, timer}` (lignes 338, 356, 357).
Mais `catHandPos(c)` (ligne 1102) lit `c.x`, `c.w` et `c.h`, qui n'existent pas
sur ces objets. Le calcul produit `NaN`, toutes les comparaisons de
`findNearCatcher()` sont donc fausses, la fonction retourne toujours `null`.
L'état `P.state==='caught'` (ligne 1318) est par conséquent inatteignable.
La figure la plus emblématique du trapèze, le passage de porteur, n'existe pas.

**B4 — Les trampolines n'ont aucune collision.**
`tramps` est peuplé (lignes 340, 359) et dessiné (ligne 790), mais aucune
détection de collision ne le référence dans `update()`. La constante d'impulsion
`JP_TR` (ligne 154) n'est utilisée nulle part. Les trampolines sont purement
décoratifs.

**B5 — Les plateformes mobiles ne sont jamais créées.**
`genChunk()` pousse les plateformes surélevées dans `plats` avec `type:'elev'`
(ligne 350), jamais dans `elevPlats`. Le tableau `elevPlats` reste vide en
permanence, donc la boucle de collision (ligne 1251), la mise à jour de phase
(ligne 1331) et `drawElevPlatform()` ne s'exécutent jamais.

**B6 — Durées de vie des particules ignorées.**
Les fonctions de spawn écrivent le champ `dec` (lignes 370 à 373), mais
`updateParts()` lit `p.decay` (ligne 1176). L'opérande gauche étant toujours
`undefined`, le `||` retombe systématiquement sur `0.022`. Toutes les particules
ont donc exactement la même durée de vie, quelle que soit leur nature. Même
défaut pour la rotation : écriture dans `rotSp`, lecture de `rotV` (ligne 1177),
donc les confettis ne tournent jamais.

**B7 — Couleur de particule invalide.**
`doLegsault()` appelle `spawnStarPts(x, y, 6, '#FFD700')` (ligne 1119), alors que
la signature est `spawnStarPts(x, y, col)` (ligne 372). Le paramètre `col` reçoit
le nombre `6`, qui n'est pas une couleur CSS valide.

**B8 — Le flash rouge de dégât n'existe pas.**
`loseLife()` appelle `doFlash(12, '#FF0000')` (ligne 1158) mais `doFlash(v)`
n'accepte qu'un argument (ligne 376) et écrit toujours un flash blanc.

**B9 — Le texte « COMBO! » est positionné en `NaN`.**
`passHoop()` calcule `h.x + h.w/2 - scrollX` (ligne 1167), or les cerceaux n'ont
pas de champ `w`, seulement `r`. La coordonnée vaut `NaN`, le texte n'est jamais
visible.

**B10 — Le bouton « ← Menu » est invisible.**
`#btnQuit` est déclaré `display:none` en CSS (ligne 20) et aucun code ne le
repasse jamais en `flex`. Son gestionnaire de clic (ligne 1592) est inatteignable.
Il n'existe donc aucun moyen de quitter une partie sur mobile.

### 1.3 Systèmes déclarés mais jamais alimentés

Ces variables sont initialisées, parfois lues, jamais mises à jour. Chacune
représente une mécanique annoncée dans le code mais absente du jeu.

| Symbole | Ligne | Ce qui manque |
|---|---|---|
| `mult`, `multTimer` | 167 | Multiplicateur de score, jamais incrémenté |
| `scrollSpd` | 167, 321 | Défilement auto, calculé puis jamais appliqué |
| `lastHoop`, `hoopStreak` | 168 | Séries de cerceaux, jamais suivies |
| `levelCatchCount` | 182 | Compteur de passages, jamais incrémenté |
| `ddaEasing`, `consecutiveDeaths` | 183 | Difficulté adaptative : `dda` vaut toujours 1 |
| `P.jumps` | 295 | Remplacé par `P.djump`, jamais nettoyé |
| `P.giantSwing` | 295 | Grand soleil, jamais déclenché |
| `audience` | 305 | Tableau de spectateurs, jamais peuplé |
| `combo` | 1163 | Incrémenté à l'infini, jamais remis à zéro |
| `gs === 'ceremony'` | 1493 | État de cérémonie inatteignable |

### 1.4 Défauts de conception

**D1 — La saisie de barre est automatique.**
Ligne 1288 : dès que le joueur passe à moins de 45 pixels d'une barre avec
`vy < 6`, il s'y accroche sans avoir rien pressé. Il est impossible de passer
devant une barre volontairement, impossible de choisir sa barre, impossible de
rater une prise. Toute l'expression de compétence du trapèze disparaît. C'est le
défaut de game design numéro un.

**D2 — Score et vies remis à zéro à chaque niveau.**
`initWorld()` fait `score=0; lives=3;` (ligne 322), et il est appelé à chaque
changement de niveau depuis `updateLevelComplete()`. Il n'existe donc aucune
continuité sur les douze niveaux : pas de run, pas d'enjeu cumulatif, le score
final affiché est celui du dernier niveau seulement.

**D3 — Aucun indicateur de progression.**
Le niveau se termine quand `P.x > goalX` (ligne 1366), mais le HUD n'affiche
jamais la distance restante. Le joueur ne sait pas où il en est ni combien il
lui reste.

**D4 — Le tap sur le canvas entre en conflit avec les boutons.**
`CV.addEventListener('touchstart', ...)` déclenche `handleSpace()` sur n'importe
quel appui en jeu (ligne 1551), en plus des quatre boutons dédiés. Le swipe vers
le bas déclenche en plus une saisie (ligne 1566). Le résultat est un système à
trois couches d'entrées qui se marchent dessus.

**D5 — Le canvas est en résolution fixe.**
`CV.width = 800; CV.height = 450;` (ligne 57), sans prise en compte du
`devicePixelRatio` ni du format d'écran. Sur mobile en portrait, le jeu est une
bande étroite au milieu de l'écran. Sur écran Retina, tout est flou. Ce n'est pas
un rendu mobile-first, c'est un rendu desktop rétréci.

**D6 — Post-traitement coûteux et non dégradable.**
Le canvas porte un `filter: contrast() saturate() brightness() hue-rotate()` en
CSS (ligne 16), qui force une passe de composition GPU sur la surface entière à
chaque frame. `drawBloom()` (ligne 117) redessine tout le canvas dans un buffer
puis applique deux `ctx.filter = blur()` successifs, opération notoirement lente
en Canvas 2D. `updateGrain()` régénère 128x128 pixels en JavaScript une frame sur
trois. Aucun de ces effets n'est désactivable ni adaptatif.

**D7 — Le code de triche est exposé en production.**
`checkCheat()` (ligne 283) donne 15000 points et saute au final après cinq appuis
dans le coin supérieur gauche en moins de trois secondes. Sur une page de démo
publique, un visiteur le déclenchera par accident en cherchant un bouton retour.

**D8 — Incohérence linguistique.**
`<html lang="he">` avec un titre en hébreu, une interface en français, des
médailles en hébreu (ligne 375) et des `aria-label` en français. Aucune couche
d'internationalisation.

**D9 — Effets de bord dans le rendu.**
`drawBar()` appelle `spawnStarPts()` (ligne 781), c'est-à-dire qu'une fonction
de dessin modifie l'état du monde. À 12 particules toutes les 8 frames par barre
proche, cela alimente aussi la saturation du pool de 420 particules.

**D10 — Fonctions manquantes attendues par l'UX.**
Pas de pause. Pas de coupure du son. Pas de reprise au niveau atteint. Pas de
réglages. Pas de tutoriel autre qu'une ligne de texte pendant cinq secondes.

---

## 2. WP-0 — Restructuration du repo

**But** : séparer réellement les deux versions et libérer `index.html` pour la
page de garde.

### Cible

```
index.html                      Page de garde / hub de démo          (WP-H)
trapeze-stars-v1.html           V1 Classic, corrigée                 (WP-B)
trapeze-stars-v2.html           V2 Deluxe, refondue                  (WP-C..G)
assets/og-cover.png             Image de partage social
docs/MEGA-PLAN.md               Ce document
docs/V2-GAMEDESIGN.md           Spécification détaillée V2           (WP-C)
docs/QA-CHECKLIST.md            Matrice de tests                     (WP-I)
```

L'URL `trapeze-stars-v2.html` est préservée : tout lien existant continue de
fonctionner et pointera vers la version refondue, ce qui est le comportement
attendu.

### Étapes

1. `git mv index.html trapeze-stars-v1.html`
2. Créer un `index.html` provisoire qui redirige vers `trapeze-stars-v2.html`,
   remplacé par la vraie page de garde en WP-H.
3. Aligner le titre de V1 sur « Trapeze Stars — Classic », celui de V2 sur
   « Trapeze Stars — Deluxe ».
4. Ajouter un `.nojekyll` si le déploiement passe par GitHub Pages.

### Critères d'acceptation

- Les trois fichiers HTML existent et ont des MD5 distincts.
- Ouvrir `trapeze-stars-v1.html` et `trapeze-stars-v2.html` lance chacun un jeu
  jouable.
- Aucun lien mort.

---

## 3. WP-A — Socle technique

**But** : le moteur sur lequel V2 sera construite. Ce lot ne change aucune
mécanique, il change la manière dont le jeu est rendu, cadencé et configuré.
À faire avant WP-C.

### A1 — Rendu réellement responsive

Remplacer la résolution fixe par une résolution virtuelle et un viewport adaptatif.

- Définir une zone de jeu logique de référence : `1280 x 720` en paysage.
- Définir une **safe area** de gameplay de `1120 x 630` centrée. Tout élément
  critique (joueur, barres, dangers, HUD) reste dans la safe area. Le reste de
  l'écran est du décor, jamais de l'information.
- Calculer à chaque redimensionnement :
  `scale = min(cssW / SAFE_W, cssH / SAFE_H)`, puis étendre la caméra pour
  remplir l'écran réel plutôt que d'ajouter des bandes noires.
- Dimensionner le backing store avec le DPR, plafonné :
  `dpr = min(devicePixelRatio, 2)`. Sur mobile bas de gamme, plafonner à `1.5`.
- Toute la logique de jeu reste en unités monde. Aucune constante de gameplay ne
  doit dépendre de la taille du canvas.

### A2 — Portrait et paysage

Le mobile-first impose que le portrait soit un mode de première classe, pas un
message d'erreur.

- **Paysage** : caméra large, ratio cible 16:9, contrôles en surimpression aux
  deux pouces, opacité réduite.
- **Portrait** : caméra resserrée horizontalement et étendue verticalement, champ
  de vision vertical augmenté d'environ 25 %, zone d'action sur les 64 % hauts,
  bandeau de contrôles opaque sur les 36 % bas. Le joueur est décalé plus bas
  dans le cadre pour laisser voir ce qui arrive.
- Un même niveau doit être franchissable dans les deux orientations. Ajuster la
  distance d'anticipation de la caméra, jamais la difficulté.
- Basculer entre les deux sans recharger, sans perdre l'état de la partie.

### A3 — Boucle et pas de temps fixe

La boucle actuelle suppose 60 Hz constants. Sur un écran 120 Hz le jeu tourne au
double de la vitesse, sur un appareil chargé il ralentit.

- Accumulateur à pas fixe : `DT = 1/60`, jusqu'à 5 pas de rattrapage par frame,
  puis abandon du surplus pour éviter la spirale de la mort.
- Interpolation du rendu entre deux pas pour les objets rapides.
- Toutes les constantes de physique restent exprimées par pas, pas par frame.

### A4 — Paliers de qualité

Trois profils, détectés automatiquement puis surchargeables dans les réglages.

| Profil | Bloom | Grain | Particules max | Parallaxe | DPR |
|---|---|---|---|---|---|
| Haut | oui, seuillé | oui | 900 | 5 couches | 2 |
| Moyen | oui, demi-résolution | 1 frame sur 6 | 450 | 3 couches | 1.5 |
| Bas | non | non | 200 | 2 couches | 1 |

- Mesurer le temps de frame glissant sur 90 frames. Sous 50 fps soutenus,
  descendre d'un palier. Ne jamais remonter automatiquement pendant la même
  partie, pour éviter les oscillations.
- Supprimer le `filter` CSS sur le canvas (ligne 16) : le grading couleur passe
  en interne, dans la passe de post-traitement, où il est désactivable.
- Réécrire `drawBloom()` en bloom seuillé : extraire les pixels au-dessus d'un
  seuil de luminance dans un buffer quart de résolution, deux passes de flou
  séparables, composition additive. Coût divisé par quatre environ.

### A5 — Couche d'internationalisation

- Un objet `I18N = { fr: {...}, en: {...}, he: {...} }`, une fonction `t(key)`.
- Zéro chaîne littérale dans le code de rendu.
- Détection via `navigator.language`, surchargeable dans les réglages, persistée.
- `<html lang>` mis à jour dynamiquement, `dir="rtl"` quand la langue est
  l'hébreu.
- Décision par défaut : **français**, avec anglais et hébreu disponibles.

### A6 — Persistance

- Un seul objet de sauvegarde versionné dans `localStorage`, clé
  `trapeze.v2.save`, champ `schema: 1`.
- Contenu : meilleur score, meilleur score par niveau, niveaux débloqués,
  personnage choisi, langue, profil de qualité, volumes, options
  d'accessibilité.
- Toute lecture passe par un `try/catch` avec valeurs par défaut. Le mode privé
  de Safari peut faire échouer l'écriture.
- Migration explicite si `schema` change.

### Critères d'acceptation

- Le jeu remplit correctement l'écran en portrait et en paysage, sur un écran
  360x640 comme sur un 2560x1440.
- La vitesse du personnage est identique sur un écran 60 Hz et 120 Hz.
- Le profil bas tient 60 fps sur un mobile de milieu de gamme de 2020.
- Changer de langue met à jour toute l'interface sans rechargement.

---

## 4. WP-B — V1 Classic, corrections

**But** : rendre V1 irréprochable **sans toucher au game design**. C'est la
version de référence, celle qui montre d'où on part. Le contrat est : mêmes
sensations, zéro bug.

Ce lot est indépendant de WP-A et peut partir immédiatement en parallèle.

### Corrections obligatoires

1. **B1** — Déclarer `flashN`, ou plus simplement remplacer l'expression de la
   ligne 1464 par `flashTimer > 0 ? Math.random()*4-2 : 0`. Vérifier ensuite
   qu'une partie perdue rend bien la main.
2. **B2** — Rendre la pile symétrique : conditionner `save()` et `restore()` sur
   un même booléen local calculé une fois par frame.
3. **B6** — Aligner les noms de champs : lire `p.dec` et `p.rotSp`, ou renommer
   à l'écriture. Un seul nom, pas deux.
4. **B7** — Corriger l'appel `spawnStarPts` de la ligne 1119.
5. **B8** — Donner un second paramètre couleur à `doFlash`, et l'utiliser dans
   le rendu du flash de la boucle.
6. **B9** — Remplacer `h.w/2` par `0` : les cerceaux sont centrés sur `h.x`.
7. **B10** — Afficher `#btnQuit` pendant les états `playing`, `levelcomplete`
   et `gameover`, le masquer au menu.
8. **B4** — Ajouter la collision trampoline, en utilisant `JP_TR` qui existe
   déjà. C'est cinq lignes et un gain de sensation important : un objet visible
   qui ne fait rien est pire qu'un objet absent.
9. **B5** — Peupler `elevPlats` dans `genChunk()` avec les champs `phase` et
   `range` attendus par le code de collision, ou supprimer entièrement le
   système. Ne pas laisser de code mort.
10. **B3** — Deux options : donner aux `catchers` les champs `x`, `w`, `h`
    attendus par `catHandPos()`, ou retirer le système de V1 et le réserver à V2.
    **Recommandation** : le retirer de V1, le construire proprement en V2. Un
    demi-porteur cassé dessert la démonstration.

### Corrections de conception minimales

11. **D2** — Sortir `score = 0` et `lives = 3` de `initWorld()` et les déplacer
    dans `startGame()` uniquement. Le run devient continu sur les douze niveaux.
12. **Combo** — Remettre `combo` à zéro après 150 frames sans cerceau franchi.
    Sans cela le multiplicateur est acquis pour toujours dès le cinquième
    cerceau.
13. **D3** — Ajouter une barre de progression du niveau dans le HUD, alimentée
    par `P.x / goalX`.
14. **D4** — Retirer `handleSpace()` du `touchstart` du canvas quand les boutons
    tactiles sont visibles. Conserver le tap plein écran uniquement pour valider
    les écrans de menu, victoire et défaite.
15. **D7** — Placer le code de triche derrière `location.hash === '#dev'`.
16. **D9** — Sortir l'appel `spawnStarPts` de `drawBar()` et le déplacer dans
    `update()`.
17. **D8** — Corriger `<html lang>` en `fr`, traduire les médailles en français,
    garder le sous-titre hébreu si souhaité mais comme choix explicite.
18. Accepter les touches en majuscule dans le menu, via `e.key.toLowerCase()`.
19. Ne pas laisser `Escape` déclencher à la fois la sortie de plein écran et le
    retour au menu.

### Critères d'acceptation

- Perdre trois vies, revenir au menu, relancer une partie : aucune erreur en
  console, la boucle tourne toujours.
- Aucune référence à un identifiant non déclaré dans le fichier.
- Aucun tableau ni variable déclarés et jamais alimentés.
- Une partie complète des douze niveaux conserve son score.

---

## 5. WP-C — V2, game design

**But** : faire du trapèze un vrai système de jeu. C'est le lot qui décide si la
V2 est remarquable ou seulement plus jolie.

Le diagnostic tient en une phrase : **le jeu actuel est un platformer générique
avec un pendule collé dessus.** Le pendule doit devenir le cœur, et tout le
reste doit s'organiser autour de lui.

Ce lot produit `docs/V2-GAMEDESIGN.md` en plus du code.

### C1 — Le momentum est la monnaie du jeu

Le pendule actuel est passif : on s'accroche, on oscille, on lâche. Aucune
décision entre les deux.

**Pompage.** Le joueur gagne de l'amplitude en pressant le bouton d'action au
bon moment dans l'arc, comme sur une vraie balançoire.

- Fenêtre de pompage : `|angle| < 0.18 rad` et `angV` de même signe que le
  mouvement, soit environ 10 frames au passage au point bas.
- Réussite : `angV *= 1.22`, plafonné. Retour haptique court, éclat visuel sur
  la corde, note ascendante.
- Échec : `angV *= 0.94`. Pas de punition sèche, juste une perte de rendement.
- Trois pompages consécutifs réussis : « rythme », le personnage se redresse,
  une traînée apparaît.

**Grand soleil.** Le champ `P.giantSwing` existe déjà et n'est jamais utilisé.
Quand `|angle|` dépasse `2.6 rad`, le personnage passe au-dessus de la barre.

- Le tour complet donne un bonus de score et arme un multiplicateur.
- La vitesse de sortie est nettement supérieure, ce qui ouvre des trajectoires
  inaccessibles autrement.
- C'est la récompense de la maîtrise du pompage. Un joueur qui ne pompe pas
  termine le jeu ; un joueur qui pompe le domine.

**Lâcher.** L'angle de lâcher détermine la trajectoire, ce qui est déjà le cas,
mais doit devenir lisible : afficher une prévisualisation d'arc de trois à cinq
points estompés, activée uniquement pendant la suspension, et masquable dans les
réglages pour les joueurs experts.

### C2 — La saisie devient intentionnelle

**Supprimer l'accrochage automatique de la ligne 1288.** C'est la correction de
design la plus importante du projet.

À la place, un système d'assistance qui aide sans décider :

- Le joueur doit presser le bouton de saisie. Toujours.
- Fenêtre d'entrée généreuse : tampon de 8 frames avant, 8 frames après le
  moment optimal, soit environ 260 ms au total. Large sur mobile, invisible pour
  le joueur.
- Rayon d'assistance de 64 px, avec correction de trajectoire douce vers la
  barre plutôt que téléportation.
- La barre ciblée est mise en évidence dès qu'elle entre dans le rayon : halo,
  léger agrandissement, et un repère de synchronisation qui se resserre à
  l'approche de l'instant idéal.
- Rater volontairement une barre devient possible, donc choisir sa barre devient
  une décision.

**Qualité de prise.** Trois niveaux selon l'écart au moment optimal.

| Qualité | Fenêtre | Effet |
|---|---|---|
| Parfaite | ±4 frames | Momentum conservé à 100 %, bonus, éclair doré |
| Bonne | ±8 frames | Momentum à 85 % |
| Rattrapée | ±14 frames | Momentum à 60 %, animation de rattrapage |

### C3 — Le système de figures, moteur du score

C'est ce qui donne au joueur une raison de prendre des risques.

**Principe.** Les figures exécutées en vol remplissent une **cagnotte**. La
cagnotte n'est encaissée que si l'on se réceptionne proprement : saisie d'une
barre, passage de porteur, ou atterrissage debout. Une chute annule la cagnotte.

**Figures disponibles.**

| Figure | Entrée | Points de base |
|---|---|---|
| Salto groupé | saisie en l'air | 100 par demi-tour |
| Salto carpé | saisie + bas | 140 par demi-tour |
| Vrille | saisie + direction | 120 par demi-tour |
| Double vrille | vrille maintenue | 320 |
| Passage de porteur | voir C4 | 500 |
| Grand soleil | voir C1 | 400 |
| Lâcher aveugle | lâcher sans prévisualisation | x1.3 sur la cagnotte |

- La rotation est comptée en demi-tours, pas en degrés. Un demi-tour entamé mais
  non terminé ne compte pas : il faut boucler.
- Répéter la même figure dans la même cagnotte réduit sa valeur de 40 % à chaque
  répétition. Cela force la variété.
- L'affichage montre la figure en cours et la cagnotte qui grossit, en temps
  réel, sur le côté et non au centre.

**Encaissement.** À la réception, la cagnotte est multipliée par la qualité de
prise puis par le multiplicateur de chaleur, et ajoutée au score avec une
animation de compteur.

### C4 — Le porteur, mécanique signature

Actuellement du code mort (B3). C'est pourtant la figure la plus reconnaissable
du trapèze et le moment le plus spectaculaire à montrer en démo. Elle doit être
reconstruite proprement.

**Fonctionnement.**

- Le porteur est suspendu par les jarrets à une barre fixe, tête en bas, bras
  tendus, et oscille selon son propre pendule, indépendant de celui du joueur.
- Le joueur lâche sa barre, exécute des figures, et doit atteindre les mains du
  porteur pendant sa fenêtre de réception.
- La fenêtre s'ouvre quand le porteur est dans le tiers avant de son arc et que
  sa vitesse angulaire est de même sens que celle du joueur. Elle dure environ
  20 frames.
- Réussite : le joueur est saisi, un temps d'arrêt de 12 frames marque l'impact,
  la foule explose, la cagnotte est encaissée avec un multiplicateur de 2,
  puis le porteur relance le joueur vers l'avant avec un gain de vitesse.
- Échec : le joueur passe à travers, perd sa cagnotte, tombe dans le filet. Pas
  de mort.

**Lisibilité.** Le porteur doit annoncer sa fenêtre : ses bras s'écartent, une
lueur apparaît sur ses mains, un son de préparation monte. Le joueur doit
pouvoir apprendre le timing en trois essais.

Les données du porteur deviennent
`{x, y, w, h, angle, angV, phase, windowOpen, state}`, ce qui rend
`catHandPos()` correct par construction.

### C5 — La chaleur du public

Remplace le combo actuel, qui ne se réinitialise jamais et n'a aucune
conséquence. Réutilise les systèmes `olaActive`, `clapActive` et
`ovationActive`, aujourd'hui orphelins.

- Une jauge de 0 à 100, visible mais discrète, en haut de l'écran.
- Monte : figures encaissées, prises parfaites, passages de porteur, grands
  soleils, cerceaux enflammés.
- Descend : lentement en continu, plus vite après une chute ou un temps sans
  action.
- Trois paliers, chacun changeant l'état du monde et non seulement un chiffre :

| Palier | Seuil | Effet |
|---|---|---|
| Applaudissements | 35 | Multiplicateur x1.5, le public applaudit en rythme |
| Ola | 70 | Multiplicateur x2, une vague traverse les gradins |
| Ovation | 100 | Multiplicateur x3, projecteurs sur le joueur, couche musicale ajoutée, saturation accrue |

L'ovation dure tant que le joueur enchaîne. C'est l'état que l'on veut atteindre
et maintenir, et c'est le meilleur moment de la démo à filmer.

### C6 — Le filet, ou la fin de la mort injuste

Le jeu actuel retire une vie sur chaque chute, ce qui est brutal, surtout sur
mobile où le contrôle est moins précis.

- Un filet de sécurité est tendu sous toute la zone de trapèze.
- Tomber dedans coûte la cagnotte et une part importante de la chaleur, puis
  renvoie le joueur en l'air avec une animation de rebond. Aucune vie perdue.
- Les vies ne sont perdues que sur les dangers explicites : pointes, obstacles,
  clowns, lasers.
- Trois chutes dans le filet sur un même niveau : la difficulté adaptative
  s'active.

Cela transforme la boucle d'échec. Le joueur perd sa progression de score, ce
qui est frustrant de la bonne manière, mais ne perd pas sa partie, ce qui est
frustrant de la mauvaise.

### C7 — Difficulté adaptative, enfin branchée

`ddaEasing` est lu par `getLevelParams()` mais jamais écrit. Le brancher.

- `consecutiveDeaths` incrémenté à chaque perte de vie, remis à zéro à chaque
  niveau terminé.
- À partir de deux : `ddaEasing` monte progressivement jusqu'à `1`.
- Effets : densité de dangers réduite, écarts raccourcis, fenêtres de timing
  élargies de 30 %, un point de contrôle intermédiaire ajouté.
- Effets **jamais annoncés au joueur**. Une aide visible est une humiliation.
- Redescend à zéro après deux niveaux réussis sans chute.

### C8 — Structure des niveaux

La génération actuelle est intégralement procédurale, ce qui rend les douze
niveaux indiscernables les uns des autres.

**Modèle en trois actes par niveau.**

1. **Ouverture**, environ 25 % : séquence écrite à la main, sûre, qui présente
   la mécanique du niveau.
2. **Développement**, environ 50 % : blocs procéduraux tirés d'une banque de
   modèles validés, pas de génération purement aléatoire.
3. **Final**, environ 25 % : séquence écrite à la main, la plus exigeante, conçue
   pour être filmable.

**Banque de blocs.** Chaque bloc est un modèle validé à la main avec une
difficulté notée de 1 à 5, une mécanique dominante et une durée. Le générateur
tire dans la banque en respectant une courbe de difficulté, et n'enchaîne jamais
deux fois le même bloc.

**Mécanique signature par monde.**

| Monde | Mécanique propre |
|---|---|
| Cirque | Porteurs, cerceaux enflammés, canon humain |
| Jungle | Lianes mobiles, singes qui volent la cagnotte, branches qui cèdent |
| Plage | Vent latéral qui courbe les arcs, parasols rebondissants, marée qui monte |
| Futur | Zones de gravité inversée, anneaux de téléportation, lasers balayants |

Chaque monde introduit sa mécanique au niveau 1, la complexifie au 2, la combine
avec celles des mondes précédents au 3.

### C9 — Progression et rejouabilité

- Score et vies continus sur toute la partie. Corrige D2.
- Trois étoiles par niveau, sur des critères explicites et affichés :
  terminer, atteindre un seuil de score, terminer sans chute.
- Le meilleur score par niveau est sauvegardé.
- Sélection de niveau parmi les niveaux atteints, pour que la démo puisse
  démarrer directement sur un beau niveau.
- Mode « Une chance » optionnel, une seule vie, pour les joueurs qui veulent
  la tension.

### Critères d'acceptation

- Un joueur qui ne presse jamais le bouton de saisie ne s'accroche jamais.
- Le pompage produit une différence d'amplitude visible en trois oscillations.
- Le passage de porteur se déclenche, se rate, et est réapprenable.
- La jauge de chaleur atteint l'ovation en jeu normal, sans triche.
- Tomber dans le filet ne coûte pas de vie.
- Les douze niveaux sont distinguables à l'œil en dix secondes chacun.

---

## 6. WP-D — Game feel et juice

**But** : chaque action doit être physiquement satisfaisante. Le game design de
WP-C décide de ce que fait le joueur ; ce lot décide de ce qu'il ressent.

### D-1 — Réponse à l'entrée

- Latence perçue nulle : l'animation de réaction démarre à la frame de l'appui,
  avant même que la physique n'ait bougé.
- Tampon d'entrée déjà présent (6 frames), à porter à 8 et à appliquer
  uniformément à toutes les actions, pas seulement au saut.
- Coyote time présent (10 frames), à conserver et à étendre au lâcher de barre.

### D-2 — Temps d'arrêt

Le hit stop est l'outil le plus efficace et le moins cher du game feel.

| Événement | Gel |
|---|---|
| Prise parfaite | 4 frames |
| Passage de porteur | 12 frames |
| Grand soleil bouclé | 6 frames |
| Perte de vie | 10 frames |
| Encaissement de grosse cagnotte | 8 frames |

Pendant le gel, la physique s'arrête mais les particules et l'interface
continuent, ce qui rend l'arrêt lisible plutôt que confus.

### D-3 — Caméra

La caméra actuelle est un simple lerp à 0.09 sur X, sans anticipation, sans
gestion de la verticale.

- Anticipation horizontale proportionnelle à `vx`, jusqu'à 140 px.
- Suivi vertical amorti, plus lâche que l'horizontal, avec zone morte de 60 px.
- Dézoom progressif jusqu'à 15 % quand la vitesse est élevée, pour donner de
  l'air. Rezoom quand le joueur ralentit.
- Cadrage automatique pendant la suspension : la caméra recule pour montrer la
  barre suivante ou le porteur.
- Léger recentrage sur le porteur pendant sa fenêtre de réception.
- Tremblement d'écran par enveloppe : amplitude, fréquence, décroissance, sur un
  bruit continu et non un `Math.random()` par frame, qui produit un scintillement
  au lieu d'une secousse.

### D-4 — Écrasement et étirement

Le système `SQ` existe et fonctionne. Il faut l'appliquer partout.

- Impulsion d'appel au saut, réception, prise de barre, rebond de filet, rebond
  de trampoline, passage de porteur.
- Ajouter une inclinaison du personnage proportionnelle à `vx`, jusqu'à 12
  degrés.
- La rotation en figure doit suivre une courbe, pas une vitesse constante :
  accélération à l'entrée, palier, décélération à la sortie.

### D-5 — Traînées et particules

- Traînée de mouvement adaptative : longueur et opacité selon la vitesse, plutôt
  que 18 points constants.
- Traînée arc-en-ciel réservée à l'état d'ovation, pour qu'elle signifie quelque
  chose.
- Poussière au décollage et à la réception.
- Étincelles sur la corde pendant les pompages réussis.
- Pool de particules géré par index avec liste libre, pas par `splice` sur un
  tableau, qui recopie à chaque suppression.

### D-6 — Retours haptiques

`navigator.vibrate` sur les appareils qui le supportent, désactivable.

| Événement | Motif |
|---|---|
| Prise de barre | 8 ms |
| Prise parfaite | 8 ms, 40 ms de pause, 8 ms |
| Passage de porteur | 30 ms |
| Perte de vie | 60 ms |
| Ovation atteinte | 12 ms x 3 |

### Critères d'acceptation

- Une prise parfaite se distingue d'une prise correcte sans regarder le HUD.
- La caméra ne perd jamais le joueur, y compris en grand soleil.
- Aucun `splice` dans les boucles de particules.

---

## 7. WP-E — Art direction et rendu

**But** : que la V2 soit visuellement au niveau d'un jeu commercial. Lot
détachable, exécutable en parallèle de WP-C.

### E1 — Système de design

Un fichier de tokens en tête de script, source unique de vérité.

- **Palette par monde** : une couleur d'accent, une secondaire, trois tons de
  fond, une couleur de danger, une couleur de récompense. Aucune couleur écrite
  en dur ailleurs.
- **Modèle d'éclairage cohérent** : une source principale par monde, avec une
  direction fixe. Toutes les ombres portées suivent cette direction. C'est ce
  qui manque le plus au rendu actuel, où chaque dégradé a sa propre logique.
- **Échelle typographique** : cinq tailles, deux graisses, une famille
  d'affichage et une famille d'interface. Abandonner Heebo comme police unique
  pour du texte français.
- **Rythme spatial** : une grille de 8 px pour tout l'interface.
- **Durées de mouvement** : 120 ms pour les micro-interactions, 240 ms pour les
  transitions d'état, 400 ms pour les entrées d'écran. Courbes définies une fois.

### E2 — Décors

Les fonds actuels sont dessinés en une passe, sans profondeur réelle.

- Cinq couches de parallaxe par monde, avec des facteurs répartis de 0.1 à 0.9.
- Chaque couche pré-rendue dans un canvas hors écran, redessinée seulement au
  changement de monde. Le fond ne doit pas être reconstruit à chaque frame.
- Éléments animés placés en couche intermédiaire : projecteurs balayants au
  cirque, feuillage qui ondule en jungle, vagues à la plage, trafic aérien dans
  le futur.
- Gradins avec des spectateurs individualisés, réellement peuplés cette fois :
  le tableau `audience` doit enfin être rempli. Réactions synchronisées avec la
  chaleur, ola qui traverse réellement les gradins colonne par colonne.

### E3 — Personnages

- Conserver le style vectoriel dessiné à la main, qui est une vraie signature.
- Passer d'un dessin par état à un rig articulé : hanches, torse, épaules, tête,
  quatre membres, chacun avec une rotation propre. Les poses deviennent des jeux
  de valeurs, pas des fonctions séparées.
- États nécessaires : repos, course, appel, montée, sommet, descente,
  suspension, pompage, grand soleil, salto, vrille, réception, rattrapage,
  chute, filet, célébration.
- Anticipation avant chaque action, suivi après. Deux frames d'anticipation
  suffisent à transformer la lisibilité.
- Silhouette lisible en noir uni : c'est le test. Si la pose n'est pas
  identifiable en silhouette, elle est ratée.

### E4 — Objets

- **Barres** : corde avec caténaire réelle qui se tend sous la charge, pas une
  ligne droite. Vibration après le lâcher.
- **Cerceaux** : anneau avec épaisseur, flammes animées sur les cerceaux
  enflammés, déformation au passage.
- **Filet** : maillage déformable qui absorbe l'impact et rebondit, avec
  propagation de l'onde. C'est un objet nouveau et très visible, il mérite du
  soin.
- **Porteur** : le personnage le plus travaillé du jeu, puisqu'il porte la
  figure signature.
- **Dangers** : lecture immédiate. Un danger doit être rouge, animé, et annoncé
  avant d'entrer dans le champ.

### E5 — Post-traitement

- Grading couleur interne, par monde, remplaçant le `filter` CSS.
- Bloom seuillé quart de résolution, décrit en A4.
- Vignette dynamique qui se resserre à basse vie.
- Aberration chromatique très légère, uniquement pendant l'ovation et les
  impacts.
- Grain optionnel, désactivé en profil bas.
- Éclair blanc plafonné à 0.6 d'opacité : le flash actuel à pleine opacité est
  agressif et pose un problème d'accessibilité.

### Critères d'acceptation

- Une capture d'écran de chaque monde est reconnaissable sans texte.
- Aucune couleur littérale hors du fichier de tokens.
- Le fond n'est pas redessiné intégralement à chaque frame.

---

## 8. WP-F — UI, UX et accessibilité

**But** : une interface irréprochable, pensée mobile d'abord. Lot détachable.

### F1 — Contrôles tactiles

Le schéma actuel superpose trois systèmes qui se contredisent (D4). Le
remplacer par un seul, cohérent.

**Zone gauche, déplacement.** Un pavé directionnel horizontal, ou mieux, une
zone de glissement relative : le pouce se pose n'importe où dans la moitié
gauche basse et le déplacement se fait au glissement. Plus tolérant qu'un bouton
fixe qu'on rate.

**Zone droite, actions.** Deux boutons.
- **Action principale** : sauter, lâcher, pomper. Contextuel selon l'état.
- **Saisie** : attraper, figure en l'air. Contextuel également.

**Règles.**
- Cible tactile de 56 px minimum, 64 px recommandé, respectant
  `env(safe-area-inset-*)`.
- Boutons semi-transparents en jeu, opaques au premier lancement.
- Le libellé du bouton principal change avec le contexte : « SAUTER », puis
  « LÂCHER » en suspension, puis « POMPER » quand la fenêtre est ouverte. Le
  joueur apprend en jouant.
- Multi-touch réel : se déplacer et agir simultanément doit fonctionner, ce qui
  impose de suivre les identifiants de touches et non seulement `touches[0]`.
- Aucun tap plein écran pendant le jeu. Le tap plein écran ne sert qu'aux écrans
  non jouables.

### F2 — Contrôles clavier et manette

- Flèches et ZQSD/WASD, en majuscules comme en minuscules.
- Espace pour l'action principale, Maj ou F pour la saisie.
- P ou Échap pour la pause, distinct de la sortie de plein écran.
- Support de l'API Gamepad : stick gauche, A pour l'action, X pour la saisie,
  Start pour la pause. Peu coûteux et très valorisant en démo.
- Remappage des touches dans les réglages.

### F3 — Écrans

**Menu principal.** Titre animé, sélection de personnage avec aperçu animé plutôt
que statique, sélection de monde, meilleur score, accès aux réglages, accès à
la sélection de niveau. Navigable entièrement au clavier et à la manette.

**Pause.** Absente aujourd'hui, indispensable. Reprendre, recommencer le niveau,
réglages, retour au menu. Se déclenche aussi automatiquement à la perte de focus
de la fenêtre, comportement attendu sur mobile quand un appel arrive.

**Réglages.** Volume musique, volume effets, langue, profil de qualité,
vibrations, prévisualisation d'arc, mode daltonien, réduction des animations,
remappage.

**Fin de niveau.** Étoiles obtenues avec l'explication du critère manqué,
décompte de score animé, meilleur score, figures réalisées, continuer ou
rejouer.

**Fin de partie.** Score, meilleur score, niveau atteint, meilleure figure,
rejouer au dernier niveau ou revenir au menu. Jamais un cul-de-sac.

**Tutoriel.** Les trois premiers écrans du niveau 1 enseignent, dans l'ordre :
sauter, saisir, pomper. Un panneau contextuel par mécanique, qui disparaît dès
que le geste est réussi une fois. Pas de mur de texte.

### F4 — HUD

Le HUD doit dire, en un coup d'œil : combien il me reste, où j'en suis, ce que
je risque, ce que je gagne.

- Vies, en haut à gauche, avec animation de perte.
- Score et cagnotte en cours, en haut au centre, la cagnotte visuellement
  distincte car elle n'est pas encore acquise.
- Barre de progression du niveau, corrigeant D3.
- Jauge de chaleur du public, avec ses trois paliers marqués.
- Nom de la figure en cours, sur le côté, jamais au centre où il masquerait
  l'action.
- Tout le HUD contenu dans la safe area définie en A1, avec marges respectant
  les encoches.

### F5 — Accessibilité

- Contraste de 4.5:1 minimum sur tout texte d'interface.
- Mode daltonien : les informations critiques ne reposent jamais sur la seule
  couleur. Les dangers reçoivent un motif, pas seulement une teinte rouge.
- `prefers-reduced-motion` respecté : suppression du tremblement, du grain, de
  l'aberration, réduction des particules.
- Option de ralentissement global du jeu à 80 % ou 60 %, qui ouvre le jeu aux
  joueurs qui ne peuvent pas suivre au rythme nominal.
- Aucun clignotement supérieur à trois par seconde, pour la sécurité
  photosensible. Le flash actuel doit être vérifié sur ce point.
- Sous-titrage des indices sonores importants.

### Critères d'acceptation

- Le jeu se joue à une main sur mobile en portrait.
- Se déplacer et agir en même temps fonctionne sur écran tactile.
- Chaque écran est atteignable et quittable au clavier seul.
- Aucun cul-de-sac : tout écran offre une sortie.

---

## 9. WP-G — Audio

**But** : le son porte la moitié de la sensation. Lot détachable.

- **Bus de mixage** : un bus maître, un bus musique, un bus effets, chacun avec
  son gain. Aujourd'hui chaque oscillateur se connecte directement à la
  destination, ce qui rend tout réglage de volume impossible.
- **Limiteur** en sortie, pour éviter la saturation quand beaucoup d'effets se
  superposent.
- **Musique en couches** : une base rythmique, une mélodie, une couche d'intensité
  qui n'entre qu'à partir du palier « ola », une couche de cuivres réservée à
  l'ovation. Les couches se fondent, elles ne se coupent pas.
- **Réactivité** : le tempo monte légèrement avec la chaleur, la musique
  s'assourdit pendant les temps d'arrêt.
- **Effets manquants** : pompage, grand soleil, ouverture de fenêtre du porteur,
  impact du filet, encaissement de cagnotte, prise parfaite distincte de prise
  correcte.
- **Public** : nappe de foule continue, dont le volume suit la chaleur, avec des
  pics d'applaudissements et de « oooh » sur les figures ratées.
- **Reprise du contexte audio** : gérer la suspension automatique par le
  navigateur, notamment iOS, en reprenant sur la première interaction et à chaque
  retour de visibilité.
- **Coupure du son** accessible en un geste depuis le jeu.

### Critères d'acceptation

- Régler le volume de la musique n'affecte pas les effets.
- Le son ne sature jamais, même en ovation avec beaucoup de particules.
- Quitter l'onglet et revenir ne casse pas l'audio.

---

## 10. WP-H — Page de garde

**But** : la vitrine. C'est ce que le visiteur voit en premier et c'est ce qui
sera partagé. Lot détachable, exécutable dès WP-0.

Fichier : `index.html`. Aucune dépendance externe hors polices.

### Contenu

**En-tête.** Titre du jeu, une phrase de positionnement, un fond animé discret
reprenant l'identité visuelle du jeu, sans jamais gêner la lecture.

**Les deux cartes de version.** Le cœur de la page.

| | V1 Classic | V2 Deluxe |
|---|---|---|
| Statut | Version de référence | Version complète |
| Aperçu | Animation canvas en boucle | Animation canvas en boucle |
| Contenu | 12 niveaux, 4 mondes | 12 niveaux, 4 mondes, mécaniques signature |
| Mécaniques | Trapèze, cerceaux, saut | Pompage, grand soleil, porteur, figures, chaleur |
| Public | Découverte | Démonstration |

Chaque carte porte un bouton « Jouer » très visible et un lien secondaire
« Voir les nouveautés » qui déroule le détail.

**Tableau comparatif.** Honnête et factuel, listant ce que la V2 ajoute. C'est
l'argument de vente et cela montre le travail accompli.

**Section technique.** Court bloc mentionnant : zéro dépendance, un seul fichier
par version, Canvas 2D, fonctionne hors ligne, mobile et desktop. Ce sont les
points qui impressionnent un interlocuteur technique.

**Pied de page.** Contrôles, crédits, lien vers le dépôt.

### Exigences

- **Mobile-first strict.** La page se conçoit à 360 px de large puis s'étend.
  Les deux cartes sont empilées en portrait, côte à côte à partir de 768 px.
- Bouton « Jouer » atteignable sans défilement sur mobile, dans le premier écran.
- Thème sombre par défaut, cohérent avec le jeu, avec respect de
  `prefers-color-scheme`.
- Métadonnées Open Graph et Twitter Card complètes, avec image de couverture
  `assets/og-cover.png` en 1200x630. Sans cela, un lien partagé est laid.
- Score Lighthouse visé : 95 et plus sur les quatre catégories.
- Chargement sous une seconde en 3G simulée. Les aperçus animés se chargent en
  différé et se figent si `prefers-reduced-motion` est actif.
- Accessible au clavier, avec un ordre de tabulation correct et des libellés
  explicites.

### Critères d'acceptation

- La page se lit et se navigue parfaitement sur un écran de 360x640.
- Partager le lien sur une messagerie affiche un aperçu correct.
- Les deux jeux se lancent depuis la page.

---

## 11. WP-I — Performance, QA et tests

**But** : garantir que tout ce qui précède tient sur de vrais appareils.

### Budget de performance

| Métrique | Cible |
|---|---|
| Images par seconde, desktop | 60 constant |
| Images par seconde, mobile milieu de gamme | 60 en profil moyen |
| Temps de frame, 95e centile | sous 16 ms |
| Pic mémoire | sous 120 Mo |
| Temps de premier affichage jouable | sous 1,5 s |
| Poids du fichier de jeu | sous 250 Ko |

### Règles d'optimisation

- Aucune allocation d'objet dans la boucle de jeu. Pools préalloués pour les
  particules, les textes flottants, les feux d'artifice.
- Aucun `splice` dans une boucle chaude. Compactage par échange avec le dernier
  élément, ou liste libre.
- Fonds pré-rendus, redessinés au changement de monde uniquement.
- Élagage par cadre : ne rien mettre à jour ni dessiner à plus d'un écran et demi
  de la caméra.
- Aucun appel de fonction de spawn depuis une fonction de dessin. Corrige D9.
- `ctx.save()` et `ctx.restore()` toujours appariés, vérifiés par une assertion
  de profondeur de pile en mode développement.

### Matrice de tests

| Appareil | Navigateur | Orientations |
|---|---|---|
| iPhone SE, petit écran | Safari | portrait, paysage |
| iPhone récent, encoche | Safari | portrait, paysage |
| Android milieu de gamme | Chrome | portrait, paysage |
| iPad | Safari | paysage |
| Desktop 1080p | Chrome, Firefox, Safari | — |
| Desktop 4K | Chrome | — |
| Écran 120 Hz | Chrome | — |

### Scénarios à valider

1. Partie complète des douze niveaux sans rechargement.
2. Perdre toutes ses vies, revenir au menu, relancer. **Test de non-régression
   du bug B1.**
3. Passer en plein écran, tourner l'appareil, revenir. Aucune perte d'état.
4. Recevoir un appel, revenir dans le jeu. Pause automatique, audio repris.
5. Jouer en mode privé Safari, où `localStorage` échoue. Aucun plantage.
6. Couper la connexion. Le jeu continue de fonctionner.
7. Laisser le jeu tourner trente minutes. Aucune fuite mémoire, aucune dérive
   de framerate.
8. Marteler tous les boutons simultanément. Aucun état incohérent.

### Livrables

- `docs/QA-CHECKLIST.md` avec la matrice cochable.
- Un compteur de performance activable par `#debug`, affichant fps, temps de
  frame, nombre de particules, profil de qualité actif.

---

## 12. Ordre d'exécution recommandé

**Ici, sur cette session**, dans l'ordre :

1. WP-0, restructuration. Rapide et bloquant pour tout le reste.
2. WP-B, corrections V1. Autonome, gain immédiat, produit une version
   présentable tout de suite.
3. WP-A, socle technique. Le plus structurant.
4. WP-C, game design V2. Le plus long et le plus important.
5. WP-D, game feel.
6. WP-I, passe finale de performance et de QA.

**Ailleurs, en parallèle**, dès maintenant :

- **WP-H, page de garde.** Ne dépend que de WP-0. À lancer en premier ailleurs,
  car c'est le livrable le plus visible et le plus indépendant.
- **WP-E, art direction.** Gros volume, très peu de couplage avec la logique de
  jeu si l'interface entre rendu et état est définie d'abord.
- **WP-F, UI et UX.** Se développe contre des états de jeu simulés.
- **WP-G, audio.** Totalement indépendant, se teste isolément.

**Points de synchronisation.** Trois seulement, pour limiter les conflits :

1. Après WP-0, tout le monde part de la même arborescence.
2. Après WP-A, l'interface du moteur est figée : signatures de la caméra, du
   rendu, de l'entrée, des tokens. C'est le contrat que WP-E, WP-F et WP-G
   consomment.
3. Avant WP-I, tout est fusionné.

**Conflits de fusion.** V2 étant un fichier unique de plusieurs milliers de
lignes, les lots parallèles doivent travailler dans des zones nettement
délimitées par des bannières de section. Chaque lot déclare en tête du plan les
sections qu'il modifie. En cas de doute, préférer une fusion séquentielle à une
résolution de conflit dans un fichier de cette taille.

---

## 13. Definition of Done

Le projet est terminé quand :

- Les trois pages existent, sont distinctes, et se lancent sans erreur en
  console.
- Aucun identifiant non déclaré, aucun tableau jamais alimenté, aucun état de
  jeu inatteignable dans les deux versions.
- V1 est jouable de bout en bout, score et vies continus, sans aucun des
  défauts listés en section 1.
- V2 tient les six piliers de gameplay de WP-C, vérifiés un par un.
- Les deux versions se jouent en portrait et en paysage, sur mobile et sur
  desktop, à 60 images par seconde en profil adapté.
- La page de garde passe 95 à Lighthouse sur les quatre catégories.
- La matrice de tests de WP-I est intégralement cochée.
- Une capture vidéo de trente secondes de V2 en état d'ovation est produite.
  C'est l'objet de démonstration final.

---

## Annexe A — Récapitulatif des défauts, par référence

| Réf | Ligne | Gravité | Résumé |
|---|---|---|---|
| B1 | 1464 | Critique | `flashN` non déclaré, boucle de rendu tuée au Game Over |
| B2 | 1487, 1503 | Haute | Pile `save`/`restore` déséquilibrée |
| B3 | 1102, 338 | Haute | Porteur : champs inexistants, mécanique morte |
| B4 | 790, 154 | Haute | Trampolines sans collision |
| B5 | 305, 350 | Haute | `elevPlats` jamais peuplé |
| B6 | 1176, 1177 | Moyenne | `dec`/`decay` et `rotSp`/`rotV` désaccordés |
| B7 | 1119 | Moyenne | `spawnStarPts` reçoit `6` comme couleur |
| B8 | 1158, 376 | Basse | Flash de dégât toujours blanc |
| B9 | 1167 | Basse | Texte « COMBO! » positionné en `NaN` |
| B10 | 20, 1592 | Moyenne | Bouton « ← Menu » jamais affiché |
| D1 | 1288 | Critique | Saisie de barre automatique, compétence supprimée |
| D2 | 322 | Haute | Score et vies remis à zéro à chaque niveau |
| D3 | 1366 | Moyenne | Aucun indicateur de progression |
| D4 | 1551, 1566 | Haute | Tap canvas en conflit avec les boutons |
| D5 | 57 | Haute | Canvas fixe, pas de DPR, pas de responsive |
| D6 | 16, 117 | Haute | Post-traitement coûteux et non dégradable |
| D7 | 283 | Moyenne | Code de triche exposé en production |
| D8 | 2, 375 | Basse | `lang="he"` avec interface française |
| D9 | 781 | Moyenne | Fonction de dessin qui modifie l'état du monde |
| D10 | — | Haute | Ni pause, ni coupure du son, ni réglages |

Systèmes déclarés jamais alimentés : `mult`, `multTimer`, `scrollSpd`,
`lastHoop`, `hoopStreak`, `levelCatchCount`, `ddaEasing`, `consecutiveDeaths`,
`P.jumps`, `P.giantSwing`, `audience`, état `ceremony`, et `combo` jamais remis
à zéro.
