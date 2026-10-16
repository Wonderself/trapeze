# Roadmaps et parcours recoupés — 16 octobre 2026

Référence avant ce passage : `0bc963c`. Aucune nouvelle session ni nouvelle mécanique inventée.

## Documents

- `CLAUDE.md:14–24`, `AUDIT.md:28–73` : protocole, NEXT et huit sessions closes.
- `ROADMAP.md:5,33–51`, `docs/RESTE-A-FAIRE.md:24–33` : vrais restes et décisions différées.
- `docs/MEGA-PLAN.md:12–25`, `docs/V3-PLAN.md:368–1236`, `docs/V3-PROMPTS.md:1–25` : plans historiques exécutés, pas nouvelles commandes.
- `docs/QA-APPAREILS-REELS.md:5–62` : critères matériels non exécutés.
- `docs/DEPLOIEMENT.md:61–89,214,253,304` : artefact, rollback, miroir et WORLD optionnel.
- `README.md:7–47`, `tools/README.md`, `game3d/SUPABASE_SETUP.md` : topologie et contrôles.

| Reste retrouvé | État recoupé |
|---|---|
| S10 tutoriel/guide et niveau de départ | Déjà réalisé : `trapeze-stars-v2.html:1259,2307,2497`. |
| Ancienne publication dans docs/ et sélection de deux/trois jeux | Historique remplacé : cinq jeux, `/3d` suivi et `_site` éphémère. |
| Tests physiques, clavier virtuel, sensations/performance réelle | Non acquis, nécessite les appareils ; tests automatisés ne les remplacent pas. |
| WORLD Supabase et réunion Classic/Alzahir | Différés explicitement ; configuration WORLD vide `game3d/src/net-config.js:22–23`. |
| Trailer, duo, ghost, localisation vitrine | Choix futurs non engagés, pas tâches à inventer. |
| Livraison des corrections stockage et écran final | Sources corrigées, `/3d` non régénéré sur Mac ; validation distante de la branche réussie sur0bc963c, pas publication. |
| Garde stockage dans le chemin normal de vérification | Manquait : nouveau `test:storage` branché avant build dans `verify:deploy` et avant installation des dépendances dans le workflow existant. Dix contrôles PASS par cette nouvelle commande, YAML syntax PASS. |

## Chaînes de clics, lues dans le code

1. PLAY (`game3d/index.html:237`) → handler `src/main.js:756` → `startGame:821` → `endGame:865` → `saveRec:45` → saisie/OK (`entryConfirm:683`) → `boardAdd:105`, tri/top10 et `saveBoard:98` → `showOver:889`. Les numéros sont des repères avant les futures éditions ; les fonctions nommées font foi.
2. Réduire les flashs (`index.html:291`) → handler `main.js:794–796` → inversion de `REC.reduceFx` → `saveRec:45–51` → `refreshFx:603–607` → rechargement `loadRec:32`.
3. DAILY (`index.html:238`) → handler `main.js:757` → `startGame(true):821–824` → `endGame:882` → `saveDaily:66–70` si meilleur score → `refreshDaily:699–701`. Daily ne rejoint pas le podium principal.

Lecture et preuves synthétiques précédentes seulement ; aucun nouveau navigateur, WebGL, build ou service réel exécuté pendant ce recoupement.

## Voie de livraison : diagnostic uniquement

GitHub Pages est déjà configuré dans `.github/workflows/deploy-pages.yml`. La vérification peut être déclenchée sur une branche de reprise ; publication/artefact Pages réservés à `refs/heads/main`. Aucun main modifié ni publication demandée. Le miroir Coolify reste manuel/optionnel. Cible : site statique `_site` produit par le workflow ; rollback : artefact ou commit antérieur complet attesté, seulement après autorisation de publication. Les scripts de contrôle public ne prouvent pas un nouveau déploiement.

Le run [38860877485](https://github.com/Wonderself/trapeze/actions/runs/38860877485) sur `0bc963c97dd009ebe040878d033d863e9fecd22c` a terminé SUCCESS : build, Canvas, pages/responsive/service-worker et Three.js. Les étapes Pages/upload et le job deploy sont SKIPPED. Il ne contenait pas `test:storage` ; ses dix contrôles locaux restent séparés. Le branchement de cette garde est sauvegardé après la fin du run, sans changement du code du jeu et sans nouveau déclenchement CI.
