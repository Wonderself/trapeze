# QA étendue sur appareils réels

Dernière mise à jour : **2026-09-14**.

## Statut actuel

`BLOCKED_ACCESS` — cette recette est prête, mais aucun iPhone, iPad ou appareil
Android n'est connecté à la machine et aucune session de ferme d'appareils réels
n'est disponible. Les contrôles Chromium automatisés restent `PASS`, mais ne
constituent pas une preuve Safari, GPU ARM, tactile physique ou installation PWA
sur matériel.

La recette doit être exécutée sur le SHA livré, en relevant pour chaque appareil
le modèle, la version du système, le navigateur, l'orientation et l'URL testée.

## Matrice minimale étendue

| Appareil physique | Navigateur | Points spécifiques |
|---|---|---|
| Petit iPhone, par exemple format SE | Safari | largeur réduite, portrait/paysage, clavier et gestes système |
| iPhone récent avec encoche | Safari | safe areas, audio, vibration disponible et feuille de partage |
| iPad | Safari | portrait, paysage, installation PWA et Split View si utilisé |
| Android milieu de gamme | Chrome | GPU/mémoire, vibration, Wake Lock, installation PWA et partage |

Une ferme distante n'est recevable que si elle fournit de **vrais appareils**.
Une simple émulation de viewport ne ferme pas cette QA.

## Parcours à exécuter sur chaque appareil

1. Ouvrir la page centrale et confirmer que les cinq versions sont visibles.
2. Ouvrir successivement Classic, Deluxe, City, Circus Alzahir et Stars 3D.
3. Dans chaque version, démarrer une partie, jouer, perdre ou terminer un niveau,
   recommencer, puis utiliser **Toutes les versions** pour revenir au sélecteur.
4. Tester tous les contrôles tactiles, dont deux contacts simultanés lorsque le
   jeu les accepte; aucun geste navigateur involontaire ne doit bloquer le jeu.
5. Passer du portrait au paysage pendant une partie puis revenir; l'état ne doit
   ni disparaître ni devenir inaccessible.
6. Mettre le navigateur en arrière-plan pendant dix secondes puis revenir;
   pause, rendu et audio doivent reprendre proprement.
7. Tester une session privée ou un stockage indisponible; le jeu doit rester
   jouable sans crash même si les records ne persistent pas.
8. Sur Circus Alzahir et Stars 3D, installer la PWA, la fermer puis la rouvrir.
9. Après un premier chargement en ligne, activer le mode avion et rouvrir chacune
   des deux PWA; l'écran principal et une partie doivent démarrer hors ligne.
10. Sur Stars 3D, vérifier l'intro, les quatre mondes, la saisie du nom, le podium,
    la capture de fin et la feuille de partage.
11. Jouer au moins trente minutes réelles à Circus Alzahir et Stars 3D; relever
    tout ralentissement, chauffe excessive, rechargement de page ou perte de
    commande.

## Critères d'acceptation

- cinq versions ouvrables et retour central disponible sur chaque appareil;
- aucun écran noir, crash, exception visible ou ressource manquante;
- aucune commande principale coupée, masquée ou trop petite;
- orientation, arrière-plan et reprise sans perte bloquante;
- installation puis redémarrage hors ligne réussis pour les deux PWA;
- session de trente minutes sans dégradation perceptible;
- photo et partage 3D fonctionnels, ou fallback de téléchargement visible.

Un échec sur le lancement, le retour au sélecteur, les commandes, le mode hors
ligne ou un écran noir est bloquant pour une diffusion mobile large.

## Fiche de preuve

```text
SHA / URL :
Appareil et année :
OS :
Navigateur et version :
Orientations testées : portrait / paysage
5 versions : PASS / FAIL
Retour Toutes les versions : PASS / FAIL
Tactile et multitouch : PASS / FAIL
Arrière-plan / reprise : PASS / FAIL
PWA 2D en ligne / hors ligne : PASS / FAIL
PWA 3D en ligne / hors ligne : PASS / FAIL
Session 30 min 2D / 3D : PASS / FAIL
Photo / partage 3D : PASS / FAIL
Captures ou vidéo :
Anomalies reproductibles :
Verdict appareil : PASS / FAIL
```

Le statut global devient `PASS_PHYSICAL_QA` uniquement lorsque toute la matrice
est renseignée avec des preuves. En l'absence d'appareils ou de session distante,
conserver `BLOCKED_ACCESS`.
