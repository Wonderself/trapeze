# Déploiement Coolify — état réel, ce qui manque, et les prompts pour finir

> **À qui s'adresse ce document.** À l'agent (Codex ou autre) qui prend en
> charge la mise en ligne, et à Emmanuel pour les trois décisions qui ne
> peuvent pas être prises sans lui. Tout ce qui suit a été **mesuré sur le
> dépôt tel qu'il est**, pas supposé : chaque constat indique comment il a
> été obtenu, pour qu'il soit rejouable.
>
> Dernière vérification complète : commit `ebeb1bf` sur `main`.

---

## 1. Ce qui marche déjà — vérifié, pas supposé

Le dépôt **est** un site statique servable tel quel. Aucun Dockerfile,
aucun serveur applicatif, aucune étape de build à l'exécution : Coolify
sert les fichiers, point.

**Méthode de vérification** (rejouable en trois minutes) : un serveur HTTP
minimal sur la racine du dépôt — c'est exactement ce que fait Coolify — puis
un vrai Chromium sur chaque page, en relevant les erreurs JS et les
ressources en échec.

```bash
# 1. servir la racine (le script est trivial : http + fs, aucune dépendance)
node -e "const h=require('http'),f=require('fs'),p=require('path'),R=process.cwd(),
M={'.html':'text/html','.js':'text/javascript','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'};
h.createServer((q,s)=>{let u=decodeURIComponent(q.url.split('?')[0]);if(u.endsWith('/'))u+='index.html';
f.readFile(p.join(R,u),(e,d)=>{if(e){s.writeHead(404);return s.end();}s.writeHead(200,{'content-type':M[p.extname(u)]||'application/octet-stream'});s.end(d);});}).listen(8099);" &
# 2. ouvrir http://127.0.0.1:8099/ et parcourir les sept pages
```

Résultat au dernier passage — **les sept pages se chargent, aucune erreur
JS, toutes les ressources internes en 200** :

| URL | Page | État |
|---|---|---|
| `/` | Page d'accueil (cinq jeux) | ✅ |
| `/2d/index.html` | Circus Alzahir (2D, installable) | ✅ |
| `/3d/index.html` | Trapeze Stars 3D (Three.js) | ✅ |
| `/trapeze-stars-v1.html` | Classic | ✅ |
| `/trapeze-stars-v2.html` | Deluxe | ✅ |
| `/trapeze-city-v3.html` | Trapeze City | ✅ |
| `/3d/showcase.html` | Étude de cas 3D | ✅ |

Manifestes, icônes, service workers, image Open Graph, captures : tous en
**200**. Les seules requêtes en échec sont les **Google Fonts**, bloquées
par le bac à sable de développement — elles passeront en production (voir
tout de même le point 2.5).

**Configuration Coolify attendue** : ressource *Static Site*, dépôt
`Wonderself/trapeze`, branche `main`, **racine de publication `/`**, pas de
commande de build. C'est tout.

---

## 2. Ce qui manque — par ordre de gravité

### 2.1 🔴 Les service workers vont casser le jeu 3D au premier redéploiement

**C'est le point le plus important de ce document.** Il ne se voit pas
aujourd'hui et se déclenchera exactement au moment où vous mettrez une
nouvelle version en ligne.

`3d/sw.js` et `2d/sw.js` sont en **cache-first avec une version de cache
codée en dur** (`trapeze3d-v2`, `trapeze-stars-v2`), et ils précachent
`./index.html`.

```js
// 3d/sw.js — la ligne qui pose problème
const CACHE = 'trapeze3d-v2';
// ... install : c.addAll(['./', './index.html', ...])
// ... fetch  : caches.match(e.request).then(hit => hit || fetch(...))
```

Conséquence, en trois temps :

1. Un visiteur ouvre `/3d/` aujourd'hui. Le service worker met en cache
   `index.html`, qui pointe vers `assets/index-xUpFyqD-.js`.
2. Vous rebuildez le jeu 3D. Vite produit un **nouveau nom haché**, par
   exemple `assets/index-a1b2c3d4.js`. L'ancien fichier n'existe plus sur
   le serveur.
3. Le visiteur revient. Le service worker lui sert l'**ancien**
   `index.html` depuis le cache, qui demande l'**ancien** JS — qui renvoie
   404. **Écran noir.** Et comme la version de cache n'a pas changé, il n'y
   a aucune sortie de secours : le cache ne se purgera jamais tout seul.

Le jeu 2D souffre du même mécanisme en moins grave : un seul fichier, donc
le visiteur reste simplement bloqué sur l'ancienne version pour toujours.

**Correction** : passer les requêtes de navigation en *network-first* (le
réseau d'abord, le cache seulement en secours hors ligne) et faire varier
la constante `CACHE` à chaque build. → **mégaprompt A**.

### 2.2 🟠 L'aperçu des liens partagés n'affichera aucune image

`index.html` déclare :

```html
<meta property="og:image" content="assets/og-cover.png">
```

L'URL est **relative**. Facebook, WhatsApp, Slack, LinkedIn, iMessage
exigent tous une **URL absolue** ; avec une URL relative, ils n'affichent
aucune image. L'image existe pourtant (`assets/og-cover.png`, 1200×630,
vérifiée par un vrai décodeur) — elle est simplement inatteignable pour eux.

Il manque aussi `og:url` et `og:site_name`.

Cette correction demande **le domaine réel**, que je n'ai pas.
→ **mégaprompt B**, avec une question à Emmanuel s'il n'est pas encore fixé.

### 2.3 🟠 `docs/` fait deux métiers, et les deux hébergements ne montrent pas la même chose

`docs/` est à la fois :

- la **racine du site GitHub Pages** (`main:/docs`), où `docs/index.html`
  est le **jeu 3D** ;
- le **dossier de documentation** du projet (`MEGA-PLAN.md`,
  `RESTE-A-FAIRE.md`, `V3-PLAN.md`, `V3-PROMPTS.md`, et ce fichier).

Résultat : `https://wonderself.github.io/trapeze/` ouvre directement le jeu
3D, alors que le domaine Coolify ouvre la page d'accueil des cinq jeux.
**Deux hébergements, deux pages d'accueil différentes.** Ce n'est pas cassé,
mais c'est incohérent pour quiconque partage l'un ou l'autre lien.

Trois options, à trancher par Emmanuel → **mégaprompt C**.

### 2.4 🟡 Pas de `robots.txt`, pas de `sitemap.xml`, pas de page 404

Aucun des trois n'existe. Pour un site public de cinq jeux, les trois se
justifient — et la page 404 d'autant plus que les URL sont nombreuses.
→ **mégaprompt D**.

### 2.5 🟡 Quatre pages sur six n'ont pas de favicon

`2d/index.html`, `trapeze-stars-v1.html`, `trapeze-stars-v2.html` et
`trapeze-city-v3.html` ne déclarent aucun `<link rel="icon">`. Le navigateur
demande alors `/favicon.ico` et reçoit un 404 à chaque chargement — c'est
d'ailleurs le seul 404 relevé pendant l'audit. La page d'accueil et le jeu
3D en ont un, eux.
→ **mégaprompt D** (même lot).

### 2.6 🟡 Dépendance externe aux Google Fonts

`2d/index.html` charge Heebo et `3d/index.html` charge Fredoka depuis
`fonts.googleapis.com`. Deux conséquences : une requête bloquante vers un
tiers au premier rendu, et une donnée de connexion envoyée à Google à chaque
visite (sujet RGPD si le site est public en Europe).

Ni Classic, ni Deluxe, ni City n'ont ce problème : ils n'utilisent que des
polices système. → **mégaprompt E** (optionnel, à faire seulement si
Emmanuel veut un site sans tiers).

### 2.7 🟡 Le classement mondial du jeu 3D est éteint

`game3d/src/net-config.js` contient deux chaînes vides :

```js
export const SUPABASE_URL = '';
export const SUPABASE_ANON_KEY = '';
```

Tant qu'elles le restent, le jeu 3D fonctionne parfaitement mais garde un
top-10 **local** et ne fait aucune requête réseau. L'onglet « WORLD » reste
éteint. Le guide complet est déjà écrit : `game3d/SUPABASE_SETUP.md`
(5 minutes, gratuit, sans carte bancaire).

**Cela demande un compte Supabase, donc une décision d'Emmanuel.**
→ **question 3**, puis **mégaprompt F**.

### 2.8 ⚪ La dette connue : Classic et Circus Alzahir sont deux forks du même jeu

Documentée en détail dans `docs/RESTE-A-FAIRE.md` (inventaire complet des
différences). Ce n'est **pas** un problème de déploiement — les deux jeux
tournent — mais c'est la seule vraie incohérence de contenu du site : deux
cartes pour deux versions divergentes du même jeu 2D. La page d'accueil le
dit franchement plutôt que de le cacher.

Ne pas traiter pendant le déploiement. → **mégaprompt G**, plus tard.

---

## 3. Les trois questions pour Emmanuel

Un agent ne peut pas trancher celles-ci seul. Elles se posent **avant** les
mégaprompts B, C et F.

1. **Quel est le domaine définitif ?** (ex. `trapeze.mondomaine.fr`). Il est
   nécessaire pour `og:url`, `og:image` absolue et le `sitemap.xml`.
2. **Que doit montrer `wonderself.github.io/trapeze/` ?** La même page
   d'accueil que Coolify, ou le jeu 3D directement, ou faut-il arrêter
   GitHub Pages maintenant que Coolify sert tout ? (voir 2.3)
3. **Veux-tu allumer le classement mondial du jeu 3D ?** Si oui, il faut
   créer un projet Supabase gratuit — le guide est déjà écrit et prend cinq
   minutes. Si non, on n'y touche pas : le jeu marche très bien en local.

---

## 4. Les mégaprompts, prêts à coller

Chacun est autonome : contexte, tâche, critères d'acceptation, commandes de
vérification. Ils sont classés par priorité. **A est le seul urgent.**

Règles communes à tous — à ne pas répéter dans chaque prompt :

> - Le dépôt n'a **aucune dépendance de production** : pas de framework, pas
>   d'étape de build pour le site (le jeu 3D est déjà compilé dans `3d/`).
>   N'en introduis aucune.
> - Ne touche pas à la logique de jeu de `trapeze-stars-v1.html`,
>   `trapeze-stars-v2.html`, `trapeze-city-v3.html` ni `2d/index.html`
>   au-delà de ce que la tâche demande explicitement.
> - Après toute modification, relance la suite : `node tools/check.js <fichier>`
>   sur les quatre jeux Canvas, `node tools/play_v3.js`,
>   `node tools/monkey_v1.js`, `node tools/monkey_v1.js 2d/index.html`,
>   `node tools/monkey_v2.js`, `node tools/monkey_v3.js`,
>   `node tools/play_v2.js`, `node tools/reach_v3.js`. Zéro échec.
> - Si un test échoue, **corrige-le**. Ne le désactive pas, ne le contourne pas.
> - Vérifie **avant** de conclure. Sur ce dépôt, plusieurs « défauts »
>   supposés se sont révélés intentionnels après mesure, et les « corriger »
>   aurait dégradé le jeu.
> - Commits atomiques, messages en français, un commit par mégaprompt.

---

### 🔴 Mégaprompt A — Réparer les service workers avant le premier redéploiement

```
Dépôt Wonderself/trapeze, branche main. Site statique servi par Coolify
depuis la racine.

PROBLÈME MESURÉ
2d/sw.js et 3d/sw.js sont en cache-first avec une version de cache codée en
dur (CACHE = 'trapeze-stars-v2' et 'trapeze3d-v2') et précachent
'./index.html'. Le jeu 3D est un build Vite dont le JS porte un nom haché
(actuellement 3d/assets/index-xUpFyqD-.js). Au prochain rebuild, ce nom
change ; un visiteur déjà venu recevra depuis son cache l'ANCIEN index.html,
qui demandera l'ANCIEN fichier JS, désormais absent du serveur : écran noir,
sans purge automatique possible puisque la version de cache n'a pas bougé.

TÂCHE
1. Dans 3d/sw.js et 2d/sw.js, passer les requêtes de NAVIGATION
   (e.request.mode === 'navigate', ou destination === 'document') en
   network-first : réseau d'abord, cache seulement si le réseau échoue.
   Les autres requêtes (JS, images, polices) restent cache-first — leurs
   noms sont hachés, donc sûrs.
2. Faire varier la constante CACHE à chaque déploiement. Le plus simple et
   le plus robuste ici : y intégrer une chaîne de version que le script de
   build met à jour, ou à défaut la faire dériver du nom du fichier JS haché
   déjà présent. Choisis, et explique ton choix en commentaire dans le
   fichier.
3. Vérifier que l'ancien cache est bien supprimé à l'activation (le code
   actuel le fait déjà, ne le casse pas).

VÉRIFICATION EXIGÉE — ne conclus pas sans elle
Un service worker ne fonctionne pas sur file://. Sers le dépôt en HTTP
(un serveur statique de dix lignes suffit), puis avec Playwright :
  a. charger /3d/, attendre que le service worker prenne le contrôle ;
  b. renommer sur le disque 3d/assets/index-<hash>.js en un nouveau hash et
     mettre à jour 3d/index.html en conséquence — c'est la simulation exacte
     d'un rebuild ;
  c. recharger /3d/ dans le MÊME contexte de navigateur (donc avec le cache
     et le service worker déjà en place) ;
  d. exiger : la page se charge, aucune erreur JS, aucune ressource en 404.
  e. remettre les fichiers dans leur état d'origine.
Sans l'étape (b), le test ne prouve rien : c'est précisément le changement
de nom haché qui déclenche le défaut.

ACCEPTATION
- Le scénario a→e passe sur 3d/ et sur 2d/.
- Le mode hors ligne fonctionne encore : charger la page, couper le réseau,
  recharger — le jeu doit toujours s'afficher.
- node tools/check.js 2d/index.html : OK.
```

---

### 🟠 Mégaprompt B — Aperçus de partage corrects

```
Dépôt Wonderself/trapeze, branche main.

PROBLÈME MESURÉ
index.html déclare <meta property="og:image" content="assets/og-cover.png">
— une URL RELATIVE. Facebook, WhatsApp, Slack, LinkedIn et iMessage exigent
une URL absolue et n'afficheront aucune image. Il manque aussi og:url et
og:site_name.

DOMAINE
Si le domaine définitif ne t'a pas été donné, DEMANDE-LE avant de commencer.
Ne devine pas, et n'invente pas de valeur de remplacement : une mauvaise URL
absolue est pire qu'une relative, elle est mise en cache par les robots des
réseaux sociaux.

TÂCHE
1. og:image et twitter:image en URL absolue sur le domaine réel.
2. Ajouter og:url (URL canonique de la page d'accueil) et og:site_name.
3. Ajouter <link rel="canonical">.
4. Vérifier au passage que la description reste exacte : la page présente
   maintenant CINQ jeux (Classic, Deluxe, City, Circus Alzahir, la version
   3D), alors que le titre et la description parlent encore de « trois
   versions ». Corrige la formulation si elle est devenue fausse — sans
   noyer le message : les trois versions de la série restent le sujet
   principal, les deux autres jeux sont présentés à part.

ACCEPTATION
- Toutes les URL absolues renvoient 200 sur le domaine réel (teste-les).
- L'image fait bien 1200×630 (elle est déjà correcte, ne la régénère pas).
- La page se charge sans erreur JS et sans ressource manquante, en 1280 px
  et en 390 px de large.
```

---

### 🟠 Mégaprompt C — Décider ce que sert GitHub Pages

```
Dépôt Wonderself/trapeze, branche main.

SITUATION MESURÉE
docs/ fait deux métiers à la fois : c'est la racine du site GitHub Pages
(main:/docs, où docs/index.html EST le jeu 3D compilé) et le dossier de
documentation du projet (MEGA-PLAN.md, RESTE-A-FAIRE.md, V3-PLAN.md,
V3-PROMPTS.md, DEPLOIEMENT.md). Conséquence : le domaine Coolify ouvre la
page d'accueil des cinq jeux, tandis que wonderself.github.io/trapeze/ ouvre
directement le jeu 3D. Deux hébergements, deux pages d'accueil.

Par ailleurs CLAUDE.md impose que docs/ et 3d/ contiennent le même build 3D
et soient régénérés ensemble. Cette règle reste valable si l'option 2 est
retenue.

TÂCHE
DEMANDE D'ABORD à Emmanuel laquelle des trois options il veut :
  1. GitHub Pages sert la même page d'accueil que Coolify (il faut alors
     déplacer le build 3D dans un sous-dossier de docs/ et y poser une copie
     de la page d'accueil — attention aux chemins relatifs et au scope du
     service worker).
  2. On garde tel quel : GitHub Pages reste un miroir du seul jeu 3D. On se
     contente alors de sortir la documentation de docs/ vers un dossier qui
     n'est pas publié, pour que le site et la doc cessent de se mélanger.
  3. On arrête GitHub Pages : Coolify sert tout. docs/ redevient un simple
     dossier de documentation et le build 3D ne vit plus que dans 3d/.

Puis exécute l'option choisie, et mets à jour CLAUDE.md, README.md et
AUDIT.md — les trois décrivent la règle actuelle et deviendraient faux.

ACCEPTATION
- Aucun lien mort dans index.html, README.md ni docs/*.md (vérifie-les tous).
- Si l'option 1 ou 3 est retenue, l'étape 5 du protocole de CLAUDE.md est
  réécrite pour correspondre à la nouvelle réalité.
```

---

### 🟡 Mégaprompt D — Finitions publiques du site

```
Dépôt Wonderself/trapeze, branche main. Site statique, aucune dépendance.

TÂCHE — quatre finitions, un seul commit
1. robots.txt à la racine : autoriser l'indexation, référencer le sitemap.
   Exclure shots/ et tools/ (ce dernier n'est de toute façon pas servi).
2. sitemap.xml à la racine, listant les sept pages publiques :
   /, /2d/index.html, /3d/index.html, /3d/showcase.html,
   /trapeze-stars-v1.html, /trapeze-stars-v2.html, /trapeze-city-v3.html
   Le domaine absolu est nécessaire : demande-le s'il ne t'a pas été donné.
3. 404.html à la racine, dans le style de la page d'accueil (mêmes variables
   CSS, même sobriété), avec un lien de retour. Vérifie comment la ressource
   Coolify sert les 404 — selon la configuration, il peut falloir la déclarer.
4. Favicon manquant sur QUATRE pages : 2d/index.html, trapeze-stars-v1.html,
   trapeze-stars-v2.html, trapeze-city-v3.html n'ont aucun <link rel="icon">,
   ce qui provoque un 404 sur /favicon.ico à chaque chargement (c'est le seul
   404 relevé pendant l'audit du site). index.html utilise une icône SVG en
   data-URI, sans fichier — reprends la même approche pour rester sans
   dépendance, en adaptant l'emoji à chaque jeu.

ACCEPTATION
- Plus aucun 404 lors du chargement des sept pages (vérifie avec un vrai
  navigateur sur un serveur HTTP, pas en file://).
- node tools/check.js passe sur les quatre jeux Canvas.
- Le sitemap est un XML valide et toutes ses URL renvoient 200.
```

---

### 🟡 Mégaprompt E — Supprimer la dépendance aux Google Fonts (optionnel)

```
Dépôt Wonderself/trapeze, branche main.

CONSTAT
2d/index.html charge Heebo et 3d/index.html charge Fredoka depuis
fonts.googleapis.com. Deux conséquences : une requête bloquante vers un
tiers au premier rendu, et une donnée de connexion transmise à Google à
chaque visite (sujet RGPD pour un site public en Europe). Classic, Deluxe et
City n'ont pas ce problème : ils n'utilisent que des polices système.

TÂCHE
Demande d'abord à Emmanuel s'il veut un site sans tiers. Si oui, deux voies
— choisis en expliquant :
  a. héberger les deux polices en local (fichiers woff2 dans le dépôt,
     @font-face, font-display:swap) ;
  b. remplacer par une pile de polices système proche visuellement.
La voie (a) garde le rendu exact au prix de quelques dizaines de kilo-octets
versionnés ; la voie (b) ne coûte rien mais change l'apparence.

ATTENTION
Le dépôt a une règle absolue : ne JAMAIS écrire 'inherit' comme famille dans
un CX.font de canevas. Les jeux dessinent leur texte au canevas ; si tu
changes une famille, vérifie visuellement le rendu, ne te fie pas à
l'absence d'erreur.

ACCEPTATION
- Aucune requête vers un domaine tiers au chargement des sept pages
  (vérifie-le en relevant les requêtes réseau dans un vrai navigateur).
- Captures avant/après des écrans-titres de 2d/ et 3d/, comparées à l'œil.
```

---

### 🟡 Mégaprompt F — Allumer le classement mondial du jeu 3D

```
Dépôt Wonderself/trapeze, branche main.

PRÉALABLE
Ne commence QUE si Emmanuel a confirmé qu'il veut le classement mondial et
t'a fourni les deux valeurs Supabase. Sinon, ne fais rien : sans
configuration, le jeu marche déjà très bien avec un top-10 local et
n'émet aucune requête réseau. C'est un comportement voulu, pas un défaut.

TÂCHE
1. Suis game3d/SUPABASE_SETUP.md — le guide est complet, y compris le script
   SQL de la table `scores` et ses politiques Row Level Security.
2. Renseigne SUPABASE_URL et SUPABASE_ANON_KEY dans
   game3d/src/net-config.js. La clé « anon » est publique par conception :
   la sécurité vient de la RLS côté serveur. Ne cherche pas à la masquer.
3. Rebuild : cd game3d && npm install && npm run build
4. Recopie game3d/dist/ vers 3d/ ET vers docs/ — les deux doivent rester
   identiques (règle de CLAUDE.md, étape 5), en gardant docs/.nojekyll.
   Si le mégaprompt C a changé cette règle, applique la nouvelle.

VÉRIFICATION
- L'onglet WORLD s'allume et affiche le classement.
- Un score soumis apparaît bien dans la table Supabase.
- Coupe le réseau : le jeu doit retomber silencieusement sur le top-10
  local, sans message d'erreur à l'écran. C'est explicitement le
  comportement attendu, décrit en tête de game3d/src/net.js.
- node test/smoke.mjs passe.
```

---

### ⚪ Mégaprompt G — Réunir Classic et Circus Alzahir (plus tard, pas au déploiement)

```
Dépôt Wonderself/trapeze, branche main.

CONTEXTE
trapeze-stars-v1.html (« Classic ») et 2d/index.html (« Circus Alzahir »)
sont deux branches du MÊME jeu 2D, développées en parallèle pendant des mois
et jamais réunies. 65 zones de différence, dont la moitié est du contenu de
jeu et non de la traduction. NI L'UNE NI L'AUTRE n'est un sur-ensemble :

  seulement dans Classic : trampolines, porteurs avec fenêtre de réception,
    plateformes mobiles, saut à hauteur variable, enchaînement d'écrasements,
    difficulté adaptative, pause manuelle, prefers-reduced-motion, écran
    « tournez votre appareil », étoiles par niveau, mode développeur
  seulement dans Circus Alzahir : application installable (manifeste,
    service worker, bouton d'installation), cinématique d'ouverture,
    annonces de monde en plein écran, musique qui boucle par monde, couche
    de parallaxe supplémentaire, cône de projecteur, natte animée, retour
    haptique, verrou d'écran allumé, bloom désactivé sous 45 ips

L'inventaire complet est dans docs/RESTE-A-FAIRE.md, section « Fusion des
deux historiques ».

TÂCHE
Ce n'est PAS une fusion de fichiers, c'est un portage système par système.
Procède ainsi, et pas autrement :
1. Choisis la base et JUSTIFIE-LA. 2d/index.html est le fichier déployé et
   installable ; c'est probablement la bonne base, mais vérifie.
2. Porte les systèmes de l'autre branche UN PAR UN, en relançant
   `node tools/check.js` et `node tools/monkey_v1.js <fichier>` après chacun.
   Un commit par système porté. Ne porte jamais deux systèmes à la fois : si
   quelque chose casse, tu dois savoir lequel.
3. Quand tout est porté et vérifié, supprime le fichier devenu redondant et
   mets à jour la page d'accueil (une carte au lieu de deux), les outils qui
   le référencent (tools/s9_storage.js, tools/monkey_v1.js) et
   docs/RESTE-A-FAIRE.md.

ACCEPTATION
- Aucune fonctionnalité de la liste ci-dessus n'a disparu. Vérifie-les une
  par une, en jouant, pas en lisant le code.
- node tools/s9_storage.js passe sur tous les fichiers restants.
- node tools/monkey_v1.js <fichier fusionné> : 0 crash, et le compteur
  d'images à la fin n'est PAS à zéro (un test vert sur un jeu qui n'a pas
  tourné ne prouve rien — c'est un piège déjà rencontré sur ce dépôt).
```

---

## 5. Ordre d'exécution conseillé

```
       Emmanuel répond aux 3 questions du §3
                    │
     ┌──────────────┼──────────────┐
     ▼              ▼              ▼
  A (urgent)      B (domaine)    C (GitHub Pages)
  service         partage        cohérence des
  workers                        deux hébergements
     │              │              │
     └──────────────┴──────────────┘
                    ▼
                D (finitions : robots, sitemap, 404, favicons)
                    ▼
              MISE EN LIGNE
                    ▼
          E (polices) et F (leaderboard), au choix
                    ▼
          G (fusion des deux jeux 2D), plus tard
```

**A peut et doit être fait avant la mise en ligne** : après, chaque visiteur
qui passe se retrouve avec un service worker défectueux en cache, et le
problème devient beaucoup plus pénible à corriger.

---

## 6. Comment vérifier que tout tient, à tout moment

```bash
# Les quatre jeux en Canvas : syntaxe, chargement, parcours des états
for f in trapeze-stars-v1.html trapeze-stars-v2.html trapeze-city-v3.html 2d/index.html; do
  node tools/check.js $f; done

# Jouabilité : les pilotes automatiques doivent boucler les parcours
node tools/play_v3.js 6      # 20 assertions, six profils, les 7 rigs
node tools/play_v2.js        # les 12 niveaux de Deluxe

# Robustesse : entrées aléatoires, aucun crash toléré
node tools/monkey_v1.js
node tools/monkey_v1.js 2d/index.html
node tools/monkey_v2.js
node tools/monkey_v3.js

# Géométrie du parcours de Trapeze City
node tools/reach_v3.js

# Avec un vrai Chromium (cd tools && npm install une fois)
node tools/s9_storage.js         # localStorage hostile, les quatre jeux
node tools/s9_refresh_v3.js      # vitesse indépendante du taux de rafraîchissement
node tools/s9_multitouch_v3.js   # deux doigts simultanés
node tools/s9_memory_v3.js       # 30 minutes simulées, dérive du tas
node tools/shot_v3.js            # captures + traversée complète au clavier

# Régression visuelle entre deux versions d'un même jeu
node tools/shots_diff_v3.js <avant.html> <apres.html>
```

Le détail de chaque outil, et ce que chacun a réellement trouvé, est dans
`tools/README.md`.

---

## 7. Ce que ce document ne couvre pas

- **La configuration de la ressource Coolify elle-même** (domaine, TLS,
  redirections, en-têtes de cache) : elle se fait dans l'interface, pas dans
  le dépôt. Un point mérite tout de même attention une fois en ligne :
  vérifier que `Cache-Control` sur les fichiers **HTML** est court ou
  `no-cache`, tandis que les assets hachés de `3d/assets/` peuvent être mis
  en cache longtemps. Combiné au mégaprompt A, c'est ce qui garantit qu'un
  redéploiement soit réellement visible.
- **Les tests sur appareils réels.** Aucun iPhone, aucun Android n'a servi.
  Le multitouch, le stockage hostile et l'indépendance au taux de
  rafraîchissement sont vérifiés par simulation fidèle, pas par du matériel.
  Voir `docs/RESTE-A-FAIRE.md`.
