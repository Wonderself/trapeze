# `public/art/` — marquee artwork (optional)

Drop AI-generated art here, then **declare it in `game3d/src/assets.js`** (`ART` list).
Nothing is requested unless it is declared, which is what keeps the console 100 % clean
when a file is absent (a 404 is logged as a console error by Chromium).

| File | Where it shows | Suggested size |
|---|---|---|
| `logo.png` | replaces the big "TRAPEZE STARS" panel of the marquee | 1024 × 288, transparent or dark background |
| `poster-1.jpg` | left show poster on the marquee façade | 384 × 576 (portrait 2:3) |
| `poster-2.jpg` | right show poster | 384 × 576 |

Style brief: circus / Hollywood-Boulevard theatre, red & cream stripes, gold art-deco
frame, warm bulbs. Characters are **Marc** (young, long blond hair, braid) and
**Claire** (taller, light blond, gold star) — see `CHARACTERS.md`.
Text on posters must be **English only**.

Fallback when absent: procedural `CanvasTexture` drawn in `src/world.js`
(`posterTexture()` / `signTexture()`) — the game looks complete without any of this.
