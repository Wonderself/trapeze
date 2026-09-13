# Déploiement — runbook GitHub Pages

Dernière mise à jour : **2026-09-13**.

## État et cible

- **Déploiement technique : achevé côté dépôt.** Le workflow
  `.github/workflows/deploy-pages.yml` construit, vérifie et publie le site.
- **Hébergement canonique : GitHub Pages.** URL publique :
  <https://wonderself.github.io/trapeze/>.
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
  dépendance réseau tierce ; métadonnées, image 1200×630, sitemap et vraie 404 ;
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
5. Vérifier les sept routes publiques et la 404 personnalisée.

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

## Coolify — optionnel

Statut : **`BLOCKED_ACCESS`**. Aucun accès, domaine, TLS ni ressource Coolify
active n'est prouvé dans le dépôt. Coolify n'est pas requis pour la cible
canonique GitHub Pages et ne doit pas bloquer sa publication.

Si Emmanuel décide plus tard d'ajouter un miroir Coolify :

- type : Static Site ;
- dépôt : `Wonderself/trapeze` ;
- branche : `main` ;
- Node : 22 ;
- commande de build : `npm ci --prefix game3d && npm run build:artifact` ;
- répertoire publié : `_site` ;
- HTML : cache court ou `no-cache` ; assets hachés : cache long ;
- domaine, TLS, redirections, webhook et premier smoke public à vérifier dans
  l'interface Coolify.

Ne pas appeler ce miroir « déployé » sans URL, SHA et smoke public vérifiés.

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

Statut : **`NOT_RUN`**.

Les simulations Chromium couvrent les formats, le multitouch, le stockage
hostile, le taux de rafraîchissement et les mises à jour PWA. Elles ne prouvent
pas :

- Safari sur un iPhone/iPad réel ;
- un Android milieu de gamme avec GPU et mémoire contraints ;
- la latence et l'ergonomie tactile ressenties ;
- l'installation/retour hors ligne depuis les écrans d'accueil réels.

Cette QA matérielle reste un contrôle humain post-publication, à consigner sans
transformer une simulation en preuve appareil réel.
