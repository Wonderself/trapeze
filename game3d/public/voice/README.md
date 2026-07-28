# `public/voice/` — ringmaster voice lines (optional)

MP3, mono, 44.1 kHz, normalised to about −14 LUFS, **English**, upbeat circus-MC tone.
File name = the stable line id used by `say(id)` in `src/audio.js`.

| Id / file | Line |
|---|---|
| `welcome.mp3` | "Ladies and gentlemen... welcome to Trapeze Stars!" |
| `begin.mp3` | "Let the show begin!" |
| `perfect.mp3` | "Perfect!" |
| `combo10.mp3` | "Ten in a row! Incredible!" |
| `combo25.mp3` | "Twenty-five! The crowd goes wild!" |
| `world_jungle.mp3` | "Into the jungle!" |
| `world_beach.mp3` | "To the beach!" |
| `world_space.mp3` | "Off to the stars!" |
| `net.mp3` | "Saved by the net!" |
| `record.mp3` | "A new world record!" |
| `endless.mp3` | "Endless mode! No stopping now!" |
| `bye.mp3` | "What a performance! Come back soon!" |

Keep each line under ~2.5 s (that is the minimum gap between two spoken lines).

Declare the ids in `game3d/src/assets.js` (`VOICE` list). As soon as **one** id is
declared the backend switches from `speechSynthesis` to `files`; ids without a file
still fall back to speech, and a playback error falls back to speech too — silently.
Undeclared = never requested = zero console error.
