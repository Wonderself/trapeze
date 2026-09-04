# Outils de vérification

Deux familles d'outils, avec des besoins différents.

## Sans dépendance — toujours disponibles

```
node tools/check.js <fichier.html>     # syntaxe, chargement, parcours des états, régression flashN
node tools/play_v2.js                  # joueur automatique, doit franchir les 12 niveaux de V2
node tools/monkey_v1.js                # 8000 entrées aléatoires (clavier, tap, transitions brutales)
node tools/monkey_v2.js                # même principe pour V2, y compris réglages et sélection de niveau
```

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
```

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
