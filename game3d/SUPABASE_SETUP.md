# 🌍 Activer le leaderboard mondial — Supabase gratuit (5 min, 0 €)

Le jeu embarque déjà tout le client réseau (`src/net.js`). Tant que rien n'est
configuré, il se comporte exactement comme aujourd'hui (top-10 local). Ce guide
allume l'onglet **WORLD** en collant deux valeurs dans **un seul fichier**.

## Pourquoi la clé « anon » est publique (2 lignes)
La clé anon est *conçue* pour être embarquée dans le code client (comme une clé
d'API Google Maps) : la sécurité vient de la **Row Level Security** côté serveur,
qui n'autorise que la lecture du classement et l'insertion de scores bornés.

## Étape 1 — Créer le compte et le projet (gratuit, sans carte bancaire)
1. Va sur <https://supabase.com> → **Start your project** → inscris-toi
   (GitHub ou e-mail). Le plan **Free** suffit largement, aucune CB demandée.
2. **New project** : choisis un nom (ex. `trapeze-stars`), un mot de passe de
   base de données (garde-le quelque part, on ne s'en resservira pas ici), et
   une région proche (ex. `eu-west-3` Paris). Attends ~1 min que le projet démarre.

## Étape 2 — Créer la table `scores` (script à coller tel quel)
Dans le menu de gauche : **SQL Editor** → **New query** → colle tout le bloc
ci-dessous → **Run**.

```sql
-- Table des scores du leaderboard mondial
create table public.scores (
  id bigint generated always as identity primary key,
  initials text not null check (char_length(initials) between 1 and 20),
  score int not null check (score >= 0 and score <= 500000),
  world int not null default 0 check (world between 0 and 3),
  lap int not null default 0 check (lap between 0 and 999),
  created_at timestamptz not null default now()
);

-- Row Level Security : la table n'accepte QUE ces deux opérations anonymes
alter table public.scores enable row level security;

-- Lecture du classement par tout le monde
create policy "anon can read scores"
  on public.scores for select to anon using (true);

-- Ajout d'un score par tout le monde, avec les mêmes bornes que la table
create policy "anon can insert a score"
  on public.scores for insert to anon with check (
    char_length(initials) between 1 and 20
    and score between 0 and 500000
    and world between 0 and 3
    and lap between 0 and 999
  );

-- Volontairement AUCUNE policy UPDATE / DELETE : personne ne peut modifier
-- ou effacer un score depuis le jeu.
```

> ℹ️ La colonne s'appelle `initials` pour rester compatible avec l'ancien design (3 lettres
> arcade), mais elle contient désormais le **nom complet** du joueur (jusqu'à 20 caractères) —
> le jeu ne demande plus que 3 initiales, voir CLAUDE.md/AUDIT.md pour l'historique du correctif.
>
> Si tu as déjà créé cette table avec l'ancienne contrainte à 3 lettres, mets-la à jour sans
> perdre les scores existants :
> ```sql
> alter table public.scores drop constraint scores_initials_check;
> alter table public.scores add constraint scores_initials_check check (char_length(initials) between 1 and 20);
> drop policy "anon can insert a score" on public.scores;
> create policy "anon can insert a score" on public.scores for insert to anon with check (
>   char_length(initials) between 1 and 20
>   and score between 0 and 500000 and world between 0 and 3 and lap between 0 and 999
> );
> ```

Tu dois voir `Success. No rows returned`.

## Étape 3 — Récupérer les deux valeurs publiques
Menu de gauche : **Settings** (roue crantée) → **API** :
- **Project URL** — ex. `https://abcdefgh.supabase.co`
- **anon public** (section *Project API keys*) — longue chaîne `eyJ...`

## Étape 4 — Les coller dans le jeu
Ouvre **`game3d/src/net-config.js`** (c'est le seul fichier à toucher) :

```js
export const SUPABASE_URL = 'https://abcdefgh.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJ...ta-cle-anon...';
```

## Étape 5 — Rebuild et déployer
```bash
cd game3d && npm run build
# puis remplacer le contenu de docs/ par celui de game3d/dist/ (garder docs/.nojekyll)
```
Commit + push : GitHub Pages sert la nouvelle version.

## C'est allumé ✅
- Au menu et à l'écran de fin, le panneau HIGH SCORES gagne deux onglets
  **LOCAL / WORLD** ; WORLD affiche le top 10 mondial (initiales, score, monde/lap).
- Le score part automatiquement au moment de la saisie des initiales (un envoi
  max par partie). Les runs DAILY restent hors classement (rail différent).
- Hors-ligne ou en cas de pépin serveur : repli silencieux sur le top-10 local,
  jamais de message d'erreur — le jeu reste un cadeau, pas un formulaire.

## Ménage éventuel (plus tard)
Pour purger des scores de test : **Table Editor** → `scores` → sélectionner →
Delete (toi seul le peux, via le dashboard ; le jeu, lui, ne peut pas effacer).
