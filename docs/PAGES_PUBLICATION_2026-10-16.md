# Publication Pages — candidat du 16 octobre 2026

Cible exclusive : https://wonderself.github.io/trapeze/ ; Coolify inchangé. `main` relue à `cea4db4bb92e6d25968d64f94571ed5a49702968`, ancêtre de `07c6228ab6af420d72891e0a7495bfa4b46badd0` (0 commit exclusif main, 6 côté reprise). L'arbre game3d du candidat est identique au SHA `0bc963c97dd009ebe040878d033d863e9fecd22c` validé par le run38860877485.

Revue prépublication : défaut de preuve découvert dans le workflow existant. Le job verify construit `_site/3d` à partir de game3d ; le job deploy comparait le site public au dossier `3d` versionné, potentiellement ancien. Le nouveau contrôle capture les SHA256 des sept pages, quatre assets et de la 404 dans l'artefact réellement construit. Ce petit manifeste public passe via les outputs du job existant ; aucun nouvel accès, action tierce, secret ni dépendance ajouté. Le contrôle public vérifie aussi le SHA du commit du manifeste. Aucune logique de jeu changée.

Tests locaux légers : 10 contrôles stockage PASS ; deux tests du contrat de publication PASS (nouveau bundle accepté, ancien bundle et mauvaise 404 refusés, manifeste invalide rejeté), syntaxe JS/YAML et diff PASS. Aucun rebuild lourd Mac. Une validation distante du nouveau SHA est requise avant publication. Publication non attestée par cette note préparatoire.

## Procédure et rollback préparés

1. Workflow existant déclenché sur la branche de reprise : validation complète, aucun Configure/Upload/Deploy Pages grâce aux conditions main.
2. Si succès et autorisation acceptée, vérifier main inchangée et avancer main par fast-forward normal vers le candidat exact ; aucun force-push, aucune réécriture, pas de fusion divergente. Le push main déclenche le workflow Pages existant.
3. Attendre résultat terminal ; contrôler les pages/assets/404 avec les hashes de l'artefact du SHA publié. Aucune réussite déclarée avant cette preuve.
4. En cas de défaut après publication : arrêter les nouvelles publications, conserver run/SHA/artefact. Préparer un commit de revert normal des seuls changements depuis `cea4db4`, sans reset/force-push ; valider ce rollback puis publier via le même workflow avec autorisation applicable. Le retour rétablit les anciens comportements de stockage/écran final ; aucun backend ni donnée distante à migrer. Ne pas injecter une ancienne base ou supprimer les sauvegardes navigateur.

Toute divergence de main, nouveau coût, droit, secret ou refus du contrôle d'autorisation arrête l'action externe concernée. Ne pas contourner par une autre voie. Aucun état de production modifié pendant la préparation.
