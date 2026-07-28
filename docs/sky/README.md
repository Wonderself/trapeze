# `public/sky/` — per-world skyboxes (optional)

Equirectangular JPGs, ~2048 × 1024, used as `scene.background` on the matching world
segment. `applyMood()` keeps driving fog, hemisphere light and key light exactly as
today — the skybox only replaces the flat background colour.

| File | World | Mood |
|---|---|---|
| `circus.jpg` | 1 — Circus | deep violet night, distant stars, warm tent glow |
| `jungle.jpg` | 2 — Jungle | dense green canopy, dappled light, mist |
| `beach.jpg` | 3 — Beach | orange sunset, sea horizon, soft clouds |
| `space.jpg` | 4 — Space | deep space, nebula, neon accents |

Declare them in `game3d/src/assets.js` (`SKY` map) — undeclared = never requested =
current look strictly unchanged, zero console noise. Loading is non-blocking and any
failure is silent.
