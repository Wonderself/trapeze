# Déploiement — GitHub Pages et miroir Coolify

Dernière mise à jour : **2026-11-04**.

L’audit multi-agents est publié sur GitHub Pages au SHA `e6bfb2739a5636cfc99b35245efebab9d6f2bd26` (run [41811161635](https://github.com/Wonderself/trapeze/actions/runs/41811161635) SUCCESS, tentative 2 après un 502 transitoire). Le miroir reste à mettre à jour avec authentification Coolify ; état et preuves dans [AUDIT-2026-11-04.md](AUDIT-2026-11-04.md).

## Reprise du 31 octobre 2026

Le snapshot versionné `3d/` est reconstruit avec les correctifs des sauvegardes
malformées et de défilement de l’écran de fin. Validation locale :
`npm run verify:deploy` PASS (28 vues, commandes, caches PWA), parcours
Three.js complet EXIT 0 et contrôle ciblé du build sur stockage malformé et
commandes de fin accessibles dans quatre viewports. Le parcours complet atteint
le tour infini avec 51 150 points et combo 47. Chromium système utilisé avec
le Playwright disponible dans l’environnement ; la CI réinstalle la version
verrouillée du dépôt.

Le miroir HTTPS et l’administration Coolify répondent de nouveau HTTP 200.
Administration retrouvée : `http://188.245.182.200:8000/login` ; application
Trapeze inchangée : `ns4sg8w44wow0wkowg0co4kk`. Aucun accès administratif
Coolify n’est configuré dans cette session : cette disponibilité ne vaut pas
preuve de redéploiement. GitHub Pages est publié au SHA
`70fb24f7cd7f2886e44d9e41778da7ebc135bb1d`, [run 41210281933](https://github.com/Wonderself/trapeze/actions/runs/41210281933)
SUCCESS : verify et deploy, y compris les tests sur dépendances verrouillées et
la vérification publique depuis le runner. Une comparaison externe indépendante
passe également sur sept routes, quatre assets et la 404, octet pour octet avec
le build local. Le miroir a été comparé avec succès à l’ancien snapshot
`34a4aec` pendant cette reprise ; sa mise à jour vers `70fb24f` reste à faire.
L’API de la ressource existante répond `401` sans authentification ; aucun
redéploiement Coolify n’est revendiqué. Les commits documentaires ultérieurs ne
modifient pas l’artefact applicatif qualifié ci-dessus.

Les appareils physiques et les fichiers non synchronisés du Mac restent hors
de la couverture de cette validation.

## État et cible

- **Production : `PASS_PRODUCTION`.** Le workflow
  `.github/workflows/deploy-pages.yml` construit, vérifie et publie le site.
- **Hébergement canonique : GitHub Pages.** URL publique :
  <https://wonderself.github.io/trapeze/>.
- **Miroir Coolify : disponibilité historique `PASS_PRODUCTION_MIRROR`, mise à jour des correctifs non attestée.** La ressource historique est
  conservée sur <https://trapeze.188.245.182.200.sslip.io/> ; elle ne remplace
  pas l'origine canonique GitHub Pages.
- **Branche de livraison : `main`.** Une pull request vers `main` exécute les
  vérifications sans publier. Un push sur `main`, ou un lancement manuel dont
  la référence est précisément `main`, publie seulement après succès de toutes
  les vérifications. Toute autre référence est explicitement non déployable.
- **Artefact publié : `_site/`.** Il est reconstruit à chaque run et envoyé à
  GitHub Pages par `actions/upload-pages-artifact`, puis
  `actions/deploy-pages`.
- **`docs/` est désormais réservé à la documentation.** Il ne constitue plus
  une source GitHub Pages et ne doit jamais recevoir le build Vite.

Une livraison n'est `PASS_PRODUCTION` qu'après un workflow vert **et** la
vérification des sept routes sur l'URL publique. Un build local, même vert,
n'est pas une preuve de production.

La première preuve de production a été obtenue le **2026-09-13** avec le
commit `a69e34d95e2faa76b09ff915a179ec3ee76fff60` et le
[run GitHub Actions 34778875942](https://github.com/Wonderself/trapeze/actions/runs/34778875942) :
jobs `verify` et `deploy` verts, sept routes en HTTP 200 et 404 personnalisée
confirmée. Ce statut couvre GitHub Pages; il ne prouve ni l'activation
Supabase, ni une QA sur appareils physiques. Le miroir Coolify possède sa
propre procédure de preuve et de rollback ci-dessous.

La release du sélecteur des cinq versions est en production depuis le
**2026-09-14** au commit `a5bd5bb765c4d8faaa06b78142ae2b6fb9fe7df6`,
avec le
[run GitHub Actions 34783583874](https://github.com/Wonderself/trapeze/actions/runs/34783583874)
vert et les sept routes publiques de nouveau vérifiées.

La release `7efd482f264a1a1c898fc6bea17606df20879ec9` du **2026-09-19**
conserve les cinq choix visibles, rend l'interface publique entièrement
anglaise et ajoute des guides de commande distincts selon l'appareil, y compris
sur l'écran de pause. Le
[run GitHub Actions 35459104595](https://github.com/Wonderself/trapeze/actions/runs/35459104595)
est vert : le job de déploiement a comparé le contenu exact des sept pages,
de trois assets et de la 404 depuis un runner extérieur. Le miroir Coolify
historique a ensuite été redéployé sur le même SHA et contrôlé de même, sans
modification de sa configuration.

La passe UI/UX suivante conserve la même ressource et les cinq versions. Les
liens du sélecteur et les liens retour utilisent `?release=20260919-ux2` afin
qu'un navigateur ayant conservé une ancienne page du miroir demande bien la
nouvelle version. L'image Open Graph active est `assets/og-cover-five.png` ;
l'ancien `assets/og-cover.png` reste disponible pour ne rien casser. Avant
publication, `npm run verify:deploy`, la suite Canvas et le smoke WebGL 3D
complet sont verts en local. La preuve publique de cette passe doit encore
être établie sur le commit publié, puis sur le miroir Coolify existant.

## Configuration GitHub à conserver

Dans le dépôt `Wonderself/trapeze` :

1. la branche par défaut doit être `main` ;
2. **Settings → Pages → Build and deployment → Source** doit être
   **GitHub Actions**, et non « Deploy from a branch » ni `main:/docs` ;
3. l'environnement `github-pages` doit autoriser le workflow ;
4. aucun secret applicatif n'est requis pour publier le site.

Le workflow utilise Node `22.23.0`, installe les dépendances verrouillées de
`game3d/` et `tools/`, construit `_site/`, exécute les tests puis publie
l'artefact. La concurrence est annulée au profit du dernier run de la même
référence.

## Contenu de l'artefact

`tools/prepare_site.mjs` fabrique `_site/` à partir des seuls fichiers publics :

- accueil, `404.html`, `robots.txt`, `sitemap.xml` et image Open Graph ;
- les trois jeux Canvas autonomes à la racine ;
- `2d/` ;
- le build Vite frais de `game3d/dist/`, copié sous `_site/3d/` ;
- `.nojekyll`.

Le code source, les outils et `docs/` ne sont pas publiés. La commande locale
`npm run build` synchronise également le build suivi dans `3d/`. La CI utilise
`npm run build:artifact` pour produire `_site/` sans modifier les fichiers
suivis.

## Les sept routes publiques

| Route | Contenu |
|---|---|
| `/trapeze/` | Accueil et choix des cinq jeux |
| `/trapeze/2d/` | Circus Alzahir 2D/PWA |
| `/trapeze/3d/` | Trapeze Stars 3D/PWA |
| `/trapeze/3d/showcase.html` | Étude de cas 3D |
| `/trapeze/trapeze-stars-v1.html` | Classic |
| `/trapeze/trapeze-stars-v2.html` | Deluxe |
| `/trapeze/trapeze-city-v3.html` | Trapeze City |

Les URL canoniques, Open Graph, Twitter et le sitemap utilisent toutes
`https://wonderself.github.io/trapeze/` comme base.

## Construire et vérifier localement

Depuis la racine du dépôt, sur un checkout propre de `main` :

```bash
npm ci --prefix game3d
npm ci --prefix tools
npx --prefix tools playwright-core install chromium

# Rebuild 3D, synchronisation de 3d/, artefact _site et tests web/PWA.
npm run verify:deploy

# Jeux Canvas : syntaxe, parcours, robustesse et géométrie.
for file in trapeze-stars-v1.html trapeze-stars-v2.html trapeze-city-v3.html 2d/index.html; do
  node tools/check.js "$file"
done
node tools/play_v3.js 6
node tools/play_v2.js
node tools/monkey_v1.js
node tools/monkey_v1.js 2d/index.html
node tools/monkey_v2.js
node tools/monkey_v3.js
node tools/reach_v3.js

# Parcours complet Three.js.
node game3d/test/smoke3d.mjs
```

Sur Linux CI, l'installation de Chromium est faite avec :

```bash
npx --prefix tools playwright-core install --with-deps chromium
```

`npm run verify:deploy` couvre précisément :

- `npm run build` : build Vite, synchronisation `3d/`, création `_site/` ;
- `npm run test:site` : sept routes dans quatre viewports (320×568, 390×844,
  844×390 et 1280×720), soit 28 contrôles ; zéro erreur JS, débordement,
  contrôle tactile coupé, lien interne cassé, ressource interne en échec ou
  dépendance réseau tierce ; métadonnées, dimensions réelles de l'image de
  partage, sitemap et vraie 404 ;
- `npm run test:controls` : parcours clavier/tactile ciblés de Classic,
  Deluxe, City et Circus Alzahir ; guides de démarrage/pause, attente sans
  progression avant la première action, pause d'inactivité et trois tailles
  tactiles ;
- `npm run test:sw` : migration des anciens caches publiés, redéploiement avec
  nouveau hash, rechargement en ligne et hors ligne, et coexistence des caches
  2D/3D.

Après la suite, vérifier que seuls les changements attendus sont présents :

```bash
git status --short
git diff --check
```

## PWA et politique de cache

Les deux PWA ont des caches isolés :

- 2D : préfixe `trapeze-2d-` ;
- 3D : préfixe `trapeze-3d-`.

Leur comportement est volontairement identique :

- navigation/document HTML : **network-first**, avec cache seulement en
  secours hors ligne ;
- assets same-origin : **cache-first** ;
- identifiant de build intégré à l'URL d'enregistrement du service worker,
  donc nouveau cache à chaque version ;
- à l'activation, chaque service worker ne supprime que les anciennes versions
  de son propre préfixe et son ancien cache historique nommé explicitement. Il
  ne peut pas effacer le cache de l'autre jeu.

Les sources sont `2d/sw.js` et `game3d/public/sw.js`. `3d/sw.js` est un produit
du build et doit être régénéré, pas corrigé isolément. Toute modification PWA
doit conserver `npm run test:sw` vert.

## Publier et vérifier la production

1. Faire relire les changements dans une pull request vers `main`.
2. Exiger le job `verify` vert.
3. Fusionner ou pousser le commit validé sur `main`.
4. Attendre le job `deploy` et relever le SHA ainsi que l'URL du run.
5. Vérifier les sept routes publiques et la 404 personnalisée. Le job `deploy`
   exécute désormais `tools/public_smoke.mjs` depuis son runner extérieur :
   chaque page, le bundle 3D et les deux service workers doivent répondre avec
   le contenu exact du checkout publié, pas seulement avec un code 200.

Commandes de contrôle :

```bash
gh run list --repo Wonderself/trapeze --workflow deploy-pages.yml --branch main --limit 5
gh run view --repo Wonderself/trapeze <RUN_ID>

base=https://wonderself.github.io/trapeze
for route in / /2d/ /3d/ /3d/showcase.html /trapeze-stars-v1.html /trapeze-stars-v2.html /trapeze-city-v3.html; do
  curl -fsS -o /dev/null -w '%{http_code} %{url_effective}\n' "$base$route"
done
curl -sS -o /dev/null -w '%{http_code}\n' "$base/route-inexistante"
```

Attendu : `200` sur les sept routes et `404` sur la route inexistante. Ouvrir
ensuite au minimum l'accueil, la 2D et la 3D dans un vrai navigateur, en mobile
et desktop, et confirmer zéro erreur console/404. Pour les PWA, visiter les
deux jeux, recharger en ligne après le déploiement, puis recharger hors ligne.

## Rollback

### Déclencheurs

Revenir immédiatement à la dernière version saine si l'un de ces cas apparaît :

- une des sept routes ne répond plus `200` ;
- écran noir, exception JavaScript ou asset 3D haché en `404` ;
- la navigation PWA reste sur une ancienne version ou ne démarre plus hors
  ligne ;
- page d'accueil ou contrôles principaux inutilisables sur mobile.

### Procédure normale

Conserver l'historique : ne jamais faire de `reset --hard` ni de push forcé sur
`main`.

```bash
git switch main
git pull --ff-only origin main
git revert <SHA_DE_LA_RELEASE_FAUTIVE>
git push origin main
```

Le push du commit de revert reconstruit et redéploie `_site/`. Attendre le run
vert puis refaire les sept contrôles HTTP et les trois ouvertures navigateur.
Si une release contient plusieurs commits, préparer un revert revu qui restaure
explicitement le dernier SHA sain.

En urgence, on peut relancer le dernier run GitHub Actions sain pour redéployer
son artefact :

```bash
gh run rerun --repo Wonderself/trapeze <GOOD_RUN_ID>
```

Cette mesure temporaire doit être suivie d'un revert sur `main`, afin que la
branche et la production ne divergent pas.

## Miroir Coolify

Statut historique : **`PASS_PRODUCTION_MIRROR`**, pas une preuve de synchronisation des nouvelles releases. La ressource historique a été remise en
ligne sans recréation ni changement de dépôt, de branche, de type de build ou
de port. Le déploiement `ihtq9ln70a4mlsnf0r1emkz0` a importé le commit
`7efd482f264a1a1c898fc6bea17606df20879ec9`, construit le site statique avec
`nginx:alpine`, puis terminé avec succès en 21 secondes. La ressource est
`Running (no healthcheck)`.

La preuve publique du **2026-09-14** comprend : certificat Let's Encrypt
valide sans contournement TLS, redirection HTTP→HTTPS, sept routes `200`, 404
personnalisée, bon asset 3D et consoles navigateur sans erreur sur l'accueil,
la 2D et la 3D. Coolify signale que les domaines publics `sslip.io` peuvent
subir les limites d'émission Let's Encrypt ; le certificat actuel est bien
valide, mais un domaine personnalisé réduira ce risque futur si Emmanuel le
choisit.

Configuration vérifiée dans Coolify :

- projet : `Trapeze`, environnement `production` ;
- application : `ns4sg8w44wow0wkowg0co4kk` ;
- dépôt : `Wonderself/trapeze`, branche `main`, révision `HEAD` ;
- type : Static, image `nginx:alpine`, port `80` ;
- base publiée : racine versionnée `/.` ;
- domaine cible : `https://trapeze.188.245.182.200.sslip.io` ;
- déploiement : manuel — aucun webhook GitHub n'est actuellement présent.

Cette ressource ne publie pas `_site/` : elle sert directement les fichiers
versionnés. Il faut donc exécuter `npm run build`, commiter le snapshot `3d/`,
attendre la CI GitHub verte, puis lancer **Deploy (without cache)** sur le SHA
de `main`. Ne pas modifier la configuration générale si Coolify affiche des
changements non enregistrés dont l'origine n'est pas comprise.

Routes du miroir, sans le préfixe `/trapeze` :

```text
/
/2d/
/3d/
/3d/showcase.html
/trapeze-stars-v1.html
/trapeze-stars-v2.html
/trapeze-city-v3.html
```

Après déploiement : vérifier le certificat sans `curl -k`, les sept réponses
`200`, une vraie `404`, puis ouvrir accueil, 2D et 3D dans un navigateur sans
erreur console. Relever le SHA et la preuve du déploiement. En cas d'échec,
redéployer depuis Coolify le dernier déploiement réussi, puis aligner `main`
par un `git revert` plutôt que par une réécriture d'historique.

## Leaderboard mondial — optionnel

Statut : **`DEFERRED_USER`**. Le jeu reste complet avec son top 10 local et
n'émet aucune requête Supabase tant que le choix produit n'est pas confirmé.

Si Emmanuel choisit le classement mondial, suivre
`game3d/SUPABASE_SETUP.md`, configurer uniquement :

- `SUPABASE_URL` ;
- `SUPABASE_ANON_KEY`.

La clé anon est publique par conception ; ne jamais exposer le mot de passe de
base, une clé `service_role` ou un autre secret privé. Après activation :
rebuild complet, onglet WORLD, soumission d'un score, politique RLS et repli
hors ligne local doivent être vérifiés. Cette option n'est pas un prérequis au
déploiement du site.

## Appareils physiques

Statut : **`BLOCKED_ACCESS`**. La recette détaillée est dans
[`QA-APPAREILS-REELS.md`](QA-APPAREILS-REELS.md).

Les simulations Chromium couvrent les formats, le multitouch, le stockage
hostile, le taux de rafraîchissement et les mises à jour PWA. Elles ne prouvent
pas :

- Safari sur un iPhone/iPad réel ;
- un Android milieu de gamme avec GPU et mémoire contraints ;
- la latence et l'ergonomie tactile ressenties ;
- l'installation/retour hors ligne depuis les écrans d'accueil réels.

Cette QA matérielle reste un contrôle humain post-publication, à consigner sans
transformer une simulation en preuve appareil réel.

## Livraison statique prête et retour arrière — 4 novembre 2026

La vérification indépendante de **22:42 UTC** confirme : GitHub Pages égale
au runtime `e6bfb273`, miroir égal à son ancien runtime `34a4aec`, API de
l’application Coolify `401`. Le miroir diffère de la livraison attendue sur
`/2d/`, `/3d/` et le nouveau bundle 3D. Aucun accès Coolify, SSH ou Hetzner
n’est configuré dans la session. Aucun changement de production n’a été fait
pendant cette préparation.

Un paquet de session est disponible sous
`/workspace/scratch/trapeze-delivery-20261104/` (non versionné) :

| Fichier | Contenu |
|---|---|
| `trapeze-e6bfb273-public.zip` | Les 28 fichiers publics du runtime audité, 1 834 586 octets. |
| `rollback-mirror-34a4aec-public.zip` | Les 28 fichiers publics correspondant exactement à la version actuelle du miroir, 1 834 087 octets. |
| `release-manifest.json` | Provenance des deux commits, tailles et SHA-256 de chaque fichier et de chaque ZIP. |
| `SHA256SUMS` | Vérification rapide des deux archives. |
| `public-manifest-release.json`, `public-manifest-rollback.json` | Manifestes utilisables par le vérificateur public existant. |
| `verification.json` | Résultats live bornés, sans relance de tests lourds : canonique actuel PASS, ancien miroir PASS, nouveau miroir non déployé, API 401. |

Hash de l’archive de livraison :
`71b31d8c4ef80b193b9aee03158d7942e20b122418458439975608e6f021e4e8`.

Hash de l’archive de retour arrière :
`d3add4b28a3e8fe48f7c41466573dcf7734ef633365cb7d469fb8b4d7377fffa`.

Deux vérifications indépendantes ont confirmé les CRC, les chemins et tous les
hashes : les octets décompressés sont identiques aux fichiers publics suivis
dans les commits annoncés. Aucun code interne, documentation, dossier Git ni
secret n’est inclus dans les ZIP. Les manifestes et guides sont conservés à
l’extérieur du contenu à publier. Le rollback ne couvre ni l’infrastructure,
ni la configuration Coolify, ni les volumes, ni les données du Mac.

Dès qu’un accès administratif authentifié est disponible, utiliser la ressource
existante et son bouton **Deploy (without cache)** sur `main`, sans appliquer
d’éventuels changements de configuration non compris. Les commits documentaires
après `e6bfb273` ne changent pas le runtime ; relever le SHA effectivement
déployé et comparer ses fichiers publics au manifeste de livraison. Une fois
le déploiement confirmé, le contrôle existant se lance depuis le dépôt :

```bash
GITHUB_SHA=e6bfb2739a5636cfc99b35245efebab9d6f2bd26 node --use-env-proxy tools/public_smoke.mjs https://trapeze.188.245.182.200.sslip.io/ _site
```

La commande ci-dessus correspond à Node 24 dans cette session avec son proxy
configuré ; sur un environnement sans proxy, retirer `--use-env-proxy`.
Attendu : PASS avec sept routes, quatre assets critiques et 404 exacte. Le
paquet est une sauvegarde statique prête ; sa préparation ne vaut pas preuve
de publication sur le miroir. Aucun nouveau chantier de gameplay, backend ou
fonctionnalité n’est requis pour cette synchronisation.
