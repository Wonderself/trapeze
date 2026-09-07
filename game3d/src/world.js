import * as THREE from 'three';

// Red/cream vertical-stripe canvas texture for the big-top canvas.
function stripeTexture(cRED = '#d4293a', cCREAM = '#f6e9cf', stripes = 2) {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 8;
  const ctx = c.getContext('2d');
  for (let i = 0; i < stripes * 2; i++) {
    ctx.fillStyle = i % 2 ? cCREAM : cRED;
    ctx.fillRect((i / (stripes * 2)) * c.width, 0, c.width / (stripes * 2), c.height);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function gridTexture(color = '#20e0ff') {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  ctx.strokeStyle = color; ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, 62, 62);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

/* Per-world light/fog/background palettes, blended by hero X. */
const MOODS = [
  { bg: 0x06010f, fd: 0.018, hs: 0x9a76ff, hg: 0x160a2e, key: 0xfff0d0, ki: 0.7 },   // Circus
  { bg: 0x041306, fd: 0.024, hs: 0x8fff9f, hg: 0x07230b, key: 0xe8ffd0, ki: 0.75 },  // Jungle
  { bg: 0x3a1026, fd: 0.012, hs: 0xffb070, hg: 0x35202a, key: 0xffc890, ki: 0.85 },  // Beach sunset
  { bg: 0x010208, fd: 0.008, hs: 0x6f7fff, hg: 0x04040c, key: 0xbfd4ff, ki: 0.55 },  // Space
].map((m) => ({
  bg: new THREE.Color(m.bg), fd: m.fd,
  hs: new THREE.Color(m.hs), hg: new THREE.Color(m.hg),
  key: new THREE.Color(m.key), ki: m.ki,
}));

// Builds the 4-world environment: Circus big-top → Jungle → Beach → Space.
// segs = [{x0,x1} × 4] world x-ranges along the rail.
export function createWorld(scene, segs) {
  const group = new THREE.Group();
  scene.add(group);
  const spots = [];
  const updaters = [];
  const [sCirc, sJung, sBeach, sSpace] = segs;
  const fullX0 = sCirc.x0, fullX1 = sSpace.x1;
  const fullLen = fullX1 - fullX0;

  // ---- per-world floor strips ----
  const floorSpecs = [
    { c: 0x1c0a2c, rough: 0.42, metal: 0.45 },  // circus: dark glossy
    { c: 0x0c2410, rough: 0.85, metal: 0.05 },  // jungle: mossy
    { c: 0xe0bc74, rough: 0.95, metal: 0.0 },   // beach: sand
    { c: 0x090914, rough: 0.5, metal: 0.6 },    // space: dark slab
  ];
  segs.forEach((s, i) => {
    const pad = i === 0 ? 20 : 0, padR = i === 3 ? 20 : 0;
    const w = s.x1 - s.x0 + pad + padR;
    const f = new THREE.Mesh(
      new THREE.BoxGeometry(w, 1, 40),
      new THREE.MeshStandardMaterial({ color: floorSpecs[i].c, roughness: floorSpecs[i].rough, metalness: floorSpecs[i].metal })
    );
    f.position.set(s.x0 - pad + w / 2, -8.5, 0);
    f.receiveShadow = true;
    group.add(f);
  });

  /* ══════════════ WORLD 1 — CIRCUS (big top over its own segment) ══════════════ */
  const cx = (sCirc.x0 + sCirc.x1) / 2;
  const segLen = sCirc.x1 - sCirc.x0;

  // central bright ring (piste) with a glossy disk + gold rim
  const piste = new THREE.Mesh(
    new THREE.CircleGeometry(13, 48),
    new THREE.MeshStandardMaterial({ color: 0x8a1330, roughness: 0.3, metalness: 0.55, emissive: 0x2a0410, emissiveIntensity: 0.5 })
  );
  piste.rotation.x = -Math.PI / 2; piste.position.set(cx, -7.97, 0);
  piste.receiveShadow = true;
  group.add(piste);
  const pisteRim = new THREE.Mesh(
    new THREE.TorusGeometry(13, 0.28, 8, 64),
    new THREE.MeshStandardMaterial({ color: 0xffcf3f, emissive: 0xff8a00, emissiveIntensity: 1.1, roughness: 0.4 })
  );
  pisteRim.rotation.x = -Math.PI / 2; pisteRim.position.set(cx, -7.9, 0);
  group.add(pisteRim);

  // glowing edge stripes along the circus runway
  const stripeMat = new THREE.MeshStandardMaterial({ color: 0xffcf3f, emissive: 0xff8a00, emissiveIntensity: 1.2, roughness: 0.5 });
  for (const z of [-9, 9]) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(segLen + 16, 0.25, 0.5), stripeMat);
    s.position.set(cx, -7.9, z);
    group.add(s);
  }

  // big top: striped walls + conical roof, sized to the circus segment only
  const R = segLen / 2 + 18;
  const wallTop = 13, apexY = 33;
  const wallTex = stripeTexture('#5a1420', '#3a2a1e', 26);
  wallTex.repeat.set(26, 1);
  const wall = new THREE.Mesh(
    new THREE.CylinderGeometry(R, R, wallTop + 8.5, 48, 1, true),
    new THREE.MeshStandardMaterial({ map: wallTex, side: THREE.BackSide, roughness: 0.95, emissive: 0x120a14, emissiveIntensity: 0.35 })
  );
  wall.position.set(cx, (wallTop - 8.5) / 2, 0);
  group.add(wall);

  const roofTex = stripeTexture('#d4293a', '#f6e9cf', 1);
  roofTex.repeat.set(24, 1);
  const roof = new THREE.Mesh(
    new THREE.CylinderGeometry(6, R, apexY - wallTop, 48, 1, true),
    new THREE.MeshStandardMaterial({ map: roofTex, side: THREE.DoubleSide, roughness: 0.8, emissive: 0x2a0d10, emissiveIntensity: 0.5 })
  );
  roof.position.set(cx, (wallTop + apexY) / 2, 0);
  group.add(roof);

  const rim = new THREE.Mesh(
    new THREE.TorusGeometry(6, 0.4, 8, 40),
    new THREE.MeshStandardMaterial({ color: 0xffcf3f, emissive: 0xffab00, emissiveIntensity: 1.3, roughness: 0.4 })
  );
  rim.rotation.x = Math.PI / 2; rim.position.set(cx, apexY, 0);
  group.add(rim);

  const mast = new THREE.Mesh(
    new THREE.CylinderGeometry(0.3, 0.36, apexY + 12, 10),
    new THREE.MeshStandardMaterial({ color: 0xe8d9b8, roughness: 0.7, metalness: 0.2 })
  );
  mast.position.set(cx, (apexY + 12) / 2 - 8.5, 0);
  group.add(mast);
  const pennant = new THREE.Mesh(
    new THREE.ConeGeometry(0.5, 1.6, 3),
    new THREE.MeshStandardMaterial({ color: 0xff5c7a, emissive: 0xff2d55, emissiveIntensity: 0.7, side: THREE.DoubleSide })
  );
  pennant.position.set(cx + 0.8, apexY + 3.2, 0); pennant.rotation.z = -Math.PI / 2;
  group.add(pennant);

  // lit archway marking the exit toward the Jungle
  const arch = new THREE.Mesh(
    new THREE.TorusGeometry(3.4, 0.45, 10, 32, Math.PI),
    new THREE.MeshStandardMaterial({ color: 0xffe08a, emissive: 0xffab30, emissiveIntensity: 1.4, roughness: 0.4 })
  );
  arch.position.set(sCirc.x1, -4.6, 0);
  group.add(arch);

  // ---- starfield backdrop across the whole run ----
  const starGeo = new THREE.BufferGeometry();
  const N = 700, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    pos[i * 3] = fullX0 - 30 + Math.random() * (fullLen + 90);
    pos[i * 3 + 1] = 24 + Math.random() * 46;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xfff2c0, size: 0.5, sizeAttenuation: true, transparent: true, opacity: 0.9 }));
  group.add(stars);

  // ---- audience: instanced glowing heads, circus segment only ----
  const rows = 3, per = Math.ceil(segLen / 2.2) + 6;
  const count = rows * per * 2;
  const headGeo = new THREE.SphereGeometry(0.5, 10, 10);
  const headMat = new THREE.MeshStandardMaterial({ roughness: 0.7, vertexColors: false });
  const crowd = new THREE.InstancedMesh(headGeo, headMat, count);
  const palette = [0x54c8ff, 0xff6db0, 0xffcf3f, 0x8affc1, 0xb98cff, 0xff8a5c];
  const dummy = new THREE.Object3D();
  const baseY = [];
  let idx = 0;
  for (const side of [-1, 1]) {
    for (let r = 0; r < rows; r++) {
      for (let i = 0; i < per; i++) {
        const x = sCirc.x0 + 4 + i * 2.2 + (r % 2) * 1.1;
        const z = side * (12 + r * 2.2);
        const y = -6.5 + r * 1.4;
        dummy.position.set(x, y, z);
        dummy.scale.setScalar(0.8 + Math.random() * 0.5);
        dummy.updateMatrix();
        crowd.setMatrixAt(idx, dummy.matrix);
        crowd.setColorAt(idx, new THREE.Color(palette[(Math.random() * palette.length) | 0]).multiplyScalar(0.6));
        baseY.push({ x, y, z });
        idx++;
      }
    }
  }
  crowd.instanceMatrix.needsUpdate = true;
  if (crowd.instanceColor) crowd.instanceColor.needsUpdate = true;
  group.add(crowd);
  updaters.push((t) => {
    for (let i = 0; i < baseY.length; i++) {
      const b = baseY[i];
      dummy.position.set(b.x, b.y + Math.sin(t * 2 + i * 0.7) * 0.12, b.z);
      dummy.updateMatrix();
      crowd.setMatrixAt(i, dummy.matrix);
    }
    crowd.instanceMatrix.needsUpdate = true;
  });

  // ---- bunting flags overhead, circus segment (INSTANCED — one draw call) ----
  const flagColors = [0xff5c7a, 0xffcf3f, 0x54c8ff, 0x8affc1, 0xb98cff];
  const nFlags = Math.floor(segLen / 3);
  const flagGeo = new THREE.ConeGeometry(0.5, 1.1, 4);
  const flagMat = new THREE.MeshStandardMaterial({ emissive: 0x000000, roughness: 0.6, side: THREE.DoubleSide, vertexColors: false });
  const flags = new THREE.InstancedMesh(flagGeo, flagMat, nFlags);
  const fdummy = new THREE.Object3D();
  for (let i = 0; i < nFlags; i++) {
    const c = new THREE.Color(flagColors[i % flagColors.length]);
    fdummy.position.set(sCirc.x0 + 4 + i * 3, 13 + Math.sin(i * 0.6) * 0.4, -6);
    fdummy.rotation.set(Math.PI, Math.PI / 4, 0);
    fdummy.scale.setScalar(1);
    fdummy.updateMatrix();
    flags.setMatrixAt(i, fdummy.matrix);
    flags.setColorAt(i, c);
  }
  flags.instanceMatrix.needsUpdate = true;
  if (flags.instanceColor) flags.instanceColor.needsUpdate = true;
  group.add(flags);

  // ---- sweeping circus spotlights (with glowing cone meshes) ----
  const spotDefs = [
    { x: sCirc.x0 + 12, col: 0xff6db0 }, { x: cx, col: 0x54c8ff }, { x: sCirc.x1 - 6, col: 0xffcf3f },
  ];
  for (const def of spotDefs) {
    const sp = new THREE.SpotLight(def.col, 120, 60, Math.PI / 9, 0.5, 1.4);
    sp.position.set(def.x, 20, 6);
    const tgt = new THREE.Object3D(); tgt.position.set(def.x, 0, 0); group.add(tgt);
    sp.target = tgt;
    group.add(sp);
    const beam = new THREE.Mesh(
      new THREE.ConeGeometry(2.5, 26, 24, 1, true),
      new THREE.MeshBasicMaterial({ color: def.col, transparent: true, opacity: 0.03, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    beam.position.copy(sp.position);
    group.add(beam);
    spots.push({ sp, beam, tgt, x: def.x, phase: Math.random() * 6 });
  }
  updaters.push((t) => {
    for (const s of spots) {
      const sway = Math.sin(t * 0.7 + s.phase) * 7;
      s.tgt.position.x = s.x + sway;
      s.beam.rotation.z = -Math.atan2(sway, 26);
    }
    pennant.rotation.z = -Math.PI / 2 + Math.sin(t * 3) * 0.2;
  });

  /* ══════════════ WORLD 2 — JUNGLE (trees, hanging vines, fireflies) ══════════════ */
  {
    const jLen = sJung.x1 - sJung.x0;
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x1f7a2c, roughness: 0.85 });
    const leafMat2 = new THREE.MeshStandardMaterial({ color: 0x2f9c38, roughness: 0.85 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3018, roughness: 0.9 });
    for (let i = 0; i < 8; i++) {
      const tx = sJung.x0 + 2 + Math.random() * (jLen - 4);
      const tz = (i % 2 ? 1 : -1) * (9 + Math.random() * 5);
      const th = 4 + Math.random() * 3;
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.5, th, 7), trunkMat);
      trunk.position.set(tx, -8 + th / 2, tz);
      group.add(trunk);
      const blob = new THREE.Mesh(new THREE.SphereGeometry(1.6 + Math.random(), 9, 9), i % 2 ? leafMat : leafMat2);
      blob.position.set(tx, -8 + th + 0.8, tz);
      blob.scale.y = 0.8;
      group.add(blob);
    }
    // hanging vines from the canopy (off the flight lane)
    const vineMat = new THREE.MeshStandardMaterial({ color: 0x3d8a33, roughness: 0.9 });
    for (let i = 0; i < 7; i++) {
      const vl = 4 + Math.random() * 4;
      const v = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, vl, 5), vineMat);
      v.position.set(sJung.x0 + 2 + Math.random() * (jLen - 4), 13 - vl / 2, (i % 2 ? 1 : -1) * (4 + Math.random() * 3));
      group.add(v);
    }
    // fireflies — drifting additive points
    const FN = 60;
    const fPos = new Float32Array(FN * 3);
    const fBase = [];
    for (let i = 0; i < FN; i++) {
      fBase.push({ x: sJung.x0 + Math.random() * jLen, y: -6 + Math.random() * 14, z: (Math.random() - 0.5) * 18, p: Math.random() * 6.28 });
    }
    const fGeo = new THREE.BufferGeometry();
    fGeo.setAttribute('position', new THREE.BufferAttribute(fPos, 3));
    const flies = new THREE.Points(fGeo, new THREE.PointsMaterial({ color: 0xd8ff70, size: 0.28, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
    group.add(flies);
    updaters.push((t) => {
      for (let i = 0; i < FN; i++) {
        const b = fBase[i];
        fPos[i * 3] = b.x + Math.sin(t * 0.7 + b.p) * 1.4;
        fPos[i * 3 + 1] = b.y + Math.sin(t * 1.1 + b.p * 2) * 0.9;
        fPos[i * 3 + 2] = b.z + Math.cos(t * 0.5 + b.p) * 1.2;
      }
      fGeo.attributes.position.needsUpdate = true;
    });
  }

  /* ══════════════ WORLD 3 — BEACH (sunset, sea, palms, gulls) ══════════════ */
  {
    const bLen = sBeach.x1 - sBeach.x0;
    const bcx = (sBeach.x0 + sBeach.x1) / 2;
    // sun — big emissive disk, catches bloom
    const sun = new THREE.Mesh(
      new THREE.CircleGeometry(8, 32),
      new THREE.MeshBasicMaterial({ color: 0xffa040 })
    );
    sun.position.set(bcx, 9, -38);
    group.add(sun);
    const sunHalo = new THREE.Mesh(
      new THREE.CircleGeometry(12, 32),
      new THREE.MeshBasicMaterial({ color: 0xff7030, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    sunHalo.position.set(bcx, 9, -38.5);
    group.add(sunHalo);
    // sea — flat glossy plane behind the sand
    const sea = new THREE.Mesh(
      new THREE.PlaneGeometry(bLen + 34, 20),
      new THREE.MeshStandardMaterial({ color: 0x1a6a8a, roughness: 0.25, metalness: 0.6, emissive: 0x0a3a4a, emissiveIntensity: 0.5 })
    );
    sea.rotation.x = -Math.PI / 2;
    sea.position.set(bcx, -7.95, -22);
    group.add(sea);
    // palm trees
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8a6034, roughness: 0.9 });
    const frondMat = new THREE.MeshStandardMaterial({ color: 0x2a9a4a, roughness: 0.8, side: THREE.DoubleSide });
    for (let i = 0; i < 5; i++) {
      const px = sBeach.x0 + 3 + (i / 5) * (bLen - 6) + Math.random() * 2;
      const pz = (i % 2 ? 1 : -1) * (9 + Math.random() * 4);
      const ph = 5 + Math.random() * 2;
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.34, ph, 7), trunkMat);
      trunk.position.set(px, -8 + ph / 2, pz);
      trunk.rotation.z = (Math.random() - 0.5) * 0.25;
      group.add(trunk);
      for (let k = 0; k < 5; k++) {
        const frond = new THREE.Mesh(new THREE.ConeGeometry(0.35, 2.6, 4), frondMat);
        const a = (k / 5) * Math.PI * 2;
        frond.position.set(px + Math.cos(a) * 1.1, -8 + ph + 0.3, pz + Math.sin(a) * 1.1);
        frond.rotation.set(Math.sin(a) * 1.9, 0, -Math.cos(a) * 1.9);
        group.add(frond);
      }
    }
    // seagulls — simple flapping wing pairs drifting across the sky
    const gullMat = new THREE.MeshBasicMaterial({ color: 0xfff4e0, side: THREE.DoubleSide });
    const gulls = [];
    for (let i = 0; i < 3; i++) {
      const gull = new THREE.Group();
      const wings = [];
      for (const sx of [-1, 1]) {
        const w = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.28), gullMat);
        w.position.x = sx * 0.45;
        gull.add(w);
        wings.push(w);
      }
      gull.position.set(sBeach.x0 + 4 + i * bLen / 3, 8 + i * 2, -12 - i * 4);
      group.add(gull);
      gulls.push({ gull, wings, bx: gull.position.x, ph: i * 2.1 });
    }
    updaters.push((t) => {
      for (const g of gulls) {
        const f = Math.sin(t * 7 + g.ph) * 0.6;
        g.wings[0].rotation.y = f; g.wings[1].rotation.y = -f;
        g.gull.position.x = g.bx + Math.sin(t * 0.22 + g.ph) * 5;
        g.gull.position.y += Math.sin(t * 1.3 + g.ph) * 0.004;
      }
    });
  }

  /* ══════════════ WORLD 4 — SPACE (neon gates, grid, planet, shooting stars) ══════════════ */
  {
    const spLen = sSpace.x1 - sSpace.x0;
    const scx = (sSpace.x0 + sSpace.x1) / 2;
    // neon grid floor overlay
    const gridTex = gridTexture('#20e0ff');
    gridTex.repeat.set(spLen / 2.4, 16);
    const grid = new THREE.Mesh(
      new THREE.PlaneGeometry(spLen + 16, 40),
      new THREE.MeshBasicMaterial({ map: gridTex, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    grid.rotation.x = -Math.PI / 2;
    grid.position.set(scx, -7.9, 0);
    group.add(grid);
    // neon gates the rail threads through
    for (let i = 0; i < 5; i++) {
      const gate = new THREE.Mesh(
        new THREE.TorusGeometry(6, 0.14, 8, 40),
        new THREE.MeshStandardMaterial({
          color: i % 2 ? 0xff4fd8 : 0x30e8ff,
          emissive: i % 2 ? 0xb0189a : 0x0898c0, emissiveIntensity: 1.6, roughness: 0.3,
        })
      );
      gate.rotation.y = Math.PI / 2;
      gate.position.set(sSpace.x0 + 3 + (i + 0.5) * (spLen - 6) / 5, 0, 0);
      group.add(gate);
    }
    // distant ringed planet
    const planet = new THREE.Mesh(
      new THREE.SphereGeometry(4, 20, 20),
      new THREE.MeshStandardMaterial({ color: 0x9a6aff, emissive: 0x38126a, emissiveIntensity: 0.8, roughness: 0.6 })
    );
    planet.position.set(scx + 10, 20, -34);
    group.add(planet);
    const pring = new THREE.Mesh(
      new THREE.TorusGeometry(6, 0.35, 8, 40),
      new THREE.MeshStandardMaterial({ color: 0xffd9a0, emissive: 0xa06a20, emissiveIntensity: 0.9, roughness: 0.5 })
    );
    pring.rotation.x = Math.PI / 2.6;
    pring.position.copy(planet.position);
    group.add(pring);
    // shooting stars
    const SN = 6;
    const sPos = new Float32Array(SN * 3);
    const sVel = [];
    for (let i = 0; i < SN; i++) {
      sPos[i * 3] = sSpace.x0 + Math.random() * spLen;
      sPos[i * 3 + 1] = 20 + Math.random() * 25;
      sPos[i * 3 + 2] = -20 - Math.random() * 15;
      sVel.push({ vx: -14 - Math.random() * 10, vy: -6 - Math.random() * 5 });
    }
    const sGeo = new THREE.BufferGeometry();
    sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
    const shooting = new THREE.Points(sGeo, new THREE.PointsMaterial({ color: 0xd0f0ff, size: 0.7, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
    group.add(shooting);
    let sLast = 0;
    updaters.push((t) => {
      const dt = Math.min(0.05, t - sLast); sLast = t;
      for (let i = 0; i < SN; i++) {
        sPos[i * 3] += sVel[i].vx * dt;
        sPos[i * 3 + 1] += sVel[i].vy * dt;
        if (sPos[i * 3 + 1] < 5 || sPos[i * 3] < sSpace.x0 - 10) {
          sPos[i * 3] = sSpace.x0 + 10 + Math.random() * (spLen + 10);
          sPos[i * 3 + 1] = 26 + Math.random() * 20;
        }
      }
      sGeo.attributes.position.needsUpdate = true;
    });
  }

  /* ══════════════ MOOD BLENDING (fog/bg/lights follow the hero across worlds) ══════════════ */
  const bounds = [sJung.x0, sBeach.x0, sSpace.x0];
  const smooth = (v) => { v = Math.max(0, Math.min(1, v)); return v * v * (3 - 2 * v); };
  const _bg = new THREE.Color(), _hs = new THREE.Color(), _hg = new THREE.Color(), _key = new THREE.Color();
  function applyMood(stage, x) {
    let f = 0;
    for (const b of bounds) f += smooth((x - (b - 4)) / 8);  // blend over 8 units around each border
    const i = Math.min(2, Math.floor(f)), t = f - i;
    const A = MOODS[i], B = MOODS[Math.min(3, i + 1)];
    _bg.lerpColors(A.bg, B.bg, t);
    _hs.lerpColors(A.hs, B.hs, t);
    _hg.lerpColors(A.hg, B.hg, t);
    _key.lerpColors(A.key, B.key, t);
    stage.scene.background.copy(_bg);
    stage.scene.fog.color.copy(_bg);
    stage.scene.fog.density = A.fd + (B.fd - A.fd) * t;
    stage.ambient.color.copy(_hs);
    stage.ambient.groundColor.copy(_hg);
    stage.key.color.copy(_key);
    stage.key.intensity = A.ki + (B.ki - A.ki) * t;
  }

  function update(t) { for (const u of updaters) u(t); }
  return { group, update, applyMood, spots };
}
