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
| S9 Tests appareils réels | ◐ | tout ce qui est vérifiable sans matériel est fait — voir ci-dessous |
| Limitation V1 portrait | ✅ | écran « tournez votre appareil », pause automatique |

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
