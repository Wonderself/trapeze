#!/usr/bin/env python3
# Encodeur PNG minimal : zlib et struct seulement, aucune dépendance externe
# (ni Pillow, ni aucune bibliothèque d'image). Régénère l'image Open Graph
# de la page d'accueil, assets/og-cover.png, annonçant les trois versions.
#
#   python3 tools/make_og_cover.py
#
# La session précédente (deux versions) avait écrit ce même genre de script
# à la volée sans le conserver dans le dépôt : la couverture n'était donc
# régénérable qu'en le réécrivant de zéro. Il est cette fois committé.
import zlib, struct, os, math

W, H = 1200, 630

# ── Tampon RGB, un octet par canal, ligne par ligne ──────────────────────
buf = bytearray(W * H * 3)

def blend(x, y, r, g, b, a):
    if x < 0 or x >= W or y < 0 or y >= H or a <= 0:
        return
    i = (y * W + x) * 3
    if a >= 1:
        buf[i] = r; buf[i+1] = g; buf[i+2] = b
        return
    buf[i]   = int(buf[i]   * (1-a) + r*a)
    buf[i+1] = int(buf[i+1] * (1-a) + g*a)
    buf[i+2] = int(buf[i+2] * (1-a) + b*a)

def fill_rect(x0, y0, w, h, col, a=1.0):
    x1, y1 = x0+w, y0+h
    for y in range(max(0,y0), min(H,y1)):
        for x in range(max(0,x0), min(W,x1)):
            blend(x, y, *col, a)

def lerp(a, b, k): return a + (b-a)*k
def lerp_col(c0, c1, k): return tuple(int(lerp(c0[i], c1[i], k)) for i in range(3))

# ── Fond : dégradé vertical, la palette exacte de Trapeze City ──────────
top = (21, 12, 54)      # #150C36
mid = (90, 34, 96)      # vers le magenta
bot = (10, 4, 20)
for y in range(H):
    k = y / H
    if k < 0.55:
        col = lerp_col(top, mid, k/0.55)
    else:
        col = lerp_col(mid, bot, (k-0.55)/0.45)
    i0 = y * W * 3
    for x in range(W):
        i = i0 + x*3
        buf[i], buf[i+1], buf[i+2] = col

# ── Projecteur, doux, centré en haut ─────────────────────────────────────
cx0, cy0, R = W*0.5, H*0.06, W*0.42
glow = (255, 226, 168)
y0, y1 = 0, int(H*0.62)
for y in range(y0, y1):
    dy = y - cy0
    for x in range(0, W, 2):        # un pixel sur deux : le flou masque l'aliasing
        dx = x - cx0
        d = math.hypot(dx, dy) / R
        if d >= 1:
            continue
        a = (1-d)**2 * 0.30
        blend(x, y, *glow, a)
        blend(x+1, y, *glow, a)

# ── Piste au sol, en perspective (trapèze qui se resserre vers l'horizon) ─
floor_y0 = int(H*0.66)
horizon_half = W*0.05
front_half = W*0.62
bands = [(196, 32, 96), (58, 16, 48)]
for y in range(floor_y0, H):
    k = (y - floor_y0) / (H - floor_y0)
    half = lerp(horizon_half, front_half, k**1.4)
    band = bands[int(k*9) % 2]
    x0, x1 = int(cx0-half), int(cx0+half)
    i0 = y*W*3
    for x in range(max(0,x0), min(W,x1)):
        i = i0+x*3
        buf[i], buf[i+1], buf[i+2] = band

# ── Police en blocs 5×7, juste les lettres et chiffres nécessaires ───────
FONT = {
'T':["#####",".#...",".#...",".#...",".#...",".#...",".#..."],
'R':["####.","#...#","#...#","####.","#.#..","#..#.","#...#"],
'A':[".###.","#...#","#...#","#####","#...#","#...#","#...#"],
'P':["####.","#...#","#...#","####.","#....","#....","#...."],
'E':["#####","#....","#....","####.","#....","#....","#####"],
'Z':["#####","....#","...#.","..#..",".#...","#....","#####"],
'S':[".####","#....","#....",".###.","....#","....#","####."],
'1':["..#..",".##..","..#..","..#..","..#..","..#..",".###."],
'2':[".###.","#...#","....#","...#.","..#..",".#...","#####"],
'3':["####.","....#","...#.",".##..","....#","....#","####."],
}

def draw_text(x, y, text, scale, col, a=1.0, spacing=1):
    cx = x
    for ch in text:
        if ch == ' ':
            cx += (5+spacing)*scale
            continue
        pat = FONT.get(ch)
        if not pat:
            cx += (5+spacing)*scale
            continue
        for ry, row in enumerate(pat):
            for rx, c in enumerate(row):
                if c == '#':
                    fill_rect(cx+rx*scale, y+ry*scale, scale, scale, col, a)
        cx += (5+spacing)*scale
    return cx

def text_width(text, scale, spacing=1):
    return sum((5+spacing)*scale if ch!=' ' else (5+spacing)*scale for ch in text)

# ── Le mot-symbole, deux tons ─────────────────────────────────────────────
GOLD   = (255, 197, 61)
MAGENTA= (255, 46, 136)
CYAN   = (37, 229, 255)

scale1 = 12
w1 = text_width("TRAPEZE", scale1)
x1 = int(cx0 - w1/2)
y1_ = int(H*0.15)
# ombre portée, puis la lettre
draw_text(x1+4, y1_+5, "TRAPEZE", scale1, (0,0,0), 0.35)
draw_text(x1, y1_, "TRAPEZE", scale1, GOLD)

w2 = text_width("STARS", scale1)
x2 = int(cx0 - w2/2)
y2_ = y1_ + 7*scale1 + 14
draw_text(x2+4, y2_+5, "STARS", scale1, (0,0,0), 0.35)
draw_text(x2, y2_, "STARS", scale1, MAGENTA)

# ── Trois pastilles numérotées : gold, cyan, magenta — TROIS versions ────
tag_y = y2_ + 7*scale1 + 34
tag_cols = [GOLD, CYAN, MAGENTA]
tag_w, tag_h, gap = 150, 54, 26
total_w = tag_w*3 + gap*2
tx = int(cx0 - total_w/2)
for i in range(3):
    x = tx + i*(tag_w+gap)
    col = tag_cols[i]
    # pastille : fond sombre teinté, bord de la couleur de la version
    fill_rect(x, tag_y, tag_w, tag_h, (10, 4, 20), 0.88)
    fill_rect(x, tag_y, tag_w, 3, col, 0.95)
    fill_rect(x, tag_y+tag_h-3, tag_w, 3, col, 0.95)
    fill_rect(x, tag_y, 3, tag_h, col, 0.95)
    fill_rect(x+tag_w-3, tag_y, 3, tag_h, col, 0.95)
    draw_text(x+16, tag_y+13, str(i+1), 4, col)

# ── Silhouette de toits à droite (City), pour ancrer visuellement la 3e ──
sky_y = int(H*0.60)
rng = 1234567
def rnd():
    global rng
    rng = (rng*1103515245+12345) & 0x7fffffff
    return rng / 0x7fffffff
bx = int(W*0.70)
while bx < W:
    bw = int(30 + rnd()*40)
    bh = int(40 + rnd()*90)
    fill_rect(bx, sky_y-bh, bw, bh+40, (20, 14, 40), 0.9)
    if rnd() > 0.5:
        fill_rect(bx+6, sky_y-bh+8, bw-12, 4, MAGENTA, 0.8)
    bx += bw+4

# Silhouette symétrique à gauche, plus basse (le port de Trapeze City).
bx = 0
while bx < int(W*0.30):
    bw = int(24 + rnd()*30)
    bh = int(20 + rnd()*50)
    fill_rect(bx, sky_y-bh, bw, bh+40, (18, 12, 34), 0.85)
    if rnd() > 0.6:
        fill_rect(bx+5, sky_y-bh+6, bw-10, 3, CYAN, 0.75)
    bx += bw+4

# ── Écriture du PNG ───────────────────────────────────────────────────────
def chunk(tag, data):
    return (struct.pack('>I', len(data)) + tag + data +
            struct.pack('>I', zlib.crc32(tag+data) & 0xffffffff))

raw = bytearray()
for y in range(H):
    raw.append(0)  # filtre "none" par ligne
    raw += buf[y*W*3:(y+1)*W*3]

sig = b'\x89PNG\r\n\x1a\n'
ihdr = struct.pack('>IIBBBBB', W, H, 8, 2, 0, 0, 0)
idat = zlib.compress(bytes(raw), 9)

out = sig + chunk(b'IHDR', ihdr) + chunk(b'IDAT', idat) + chunk(b'IEND', b'')
path = os.path.join(os.path.dirname(__file__), '..', 'assets', 'og-cover.png')
with open(path, 'wb') as f:
    f.write(out)
print('written', path, len(out), 'bytes')
