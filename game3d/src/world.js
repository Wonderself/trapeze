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

// Builds the circus "show" environment along a level of given length (in +X).
export function createWorld(scene, length) {
  const group = new THREE.Group();
  scene.add(group);
  const spots = [];
  const updaters = [];
  const cx = length / 2;

  // ---- floor (the ring runway) — subtly reflective ----
  const floorMat = new THREE.MeshStandardMaterial({ color: 0x1c0a2c, roughness: 0.42, metalness: 0.45 });
  const floor = new THREE.Mesh(new THREE.BoxGeometry(length + 40, 1, 40), floorMat);
  floor.position.set(cx, -8.5, 0);
  floor.receiveShadow = true;
  group.add(floor);

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

  // glowing ring edge stripes on the floor
  const stripeMat = new THREE.MeshStandardMaterial({ color: 0xffcf3f, emissive: 0xff8a00, emissiveIntensity: 1.2, roughness: 0.5 });
  for (const z of [-9, 9]) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(length + 40, 0.25, 0.5), stripeMat);
    s.position.set(cx, -7.9, z);
    group.add(s);
  }

  // ══════════════ BIG TOP (chapiteau) ══════════════
  const R = cx + 30;                    // tent radius: encloses the whole rail
  const wallTop = 13, apexY = 33;
  // canvas walls — dark striped cylinder
  const wallTex = stripeTexture('#5a1420', '#3a2a1e', 26);
  wallTex.repeat.set(26, 1);
  const wall = new THREE.Mesh(
    new THREE.CylinderGeometry(R, R, wallTop + 8.5, 48, 1, true),
    new THREE.MeshStandardMaterial({ map: wallTex, side: THREE.BackSide, roughness: 0.95, emissive: 0x120a14, emissiveIntensity: 0.35 })
  );
  wall.position.set(cx, (wallTop - 8.5) / 2, 0);
  group.add(wall);

  // conical canopy roof — bright red/cream stripes, open at the top
  const roofTex = stripeTexture('#d4293a', '#f6e9cf', 1);
  roofTex.repeat.set(24, 1);
  const roof = new THREE.Mesh(
    new THREE.CylinderGeometry(6, R, apexY - wallTop, 48, 1, true),
    new THREE.MeshStandardMaterial({ map: roofTex, side: THREE.DoubleSide, roughness: 0.8, emissive: 0x2a0d10, emissiveIntensity: 0.5 })
  );
  roof.position.set(cx, (wallTop + apexY) / 2, 0);
  group.add(roof);

  // top opening rim (gold) — starfield shows through it
  const rim = new THREE.Mesh(
    new THREE.TorusGeometry(6, 0.4, 8, 40),
    new THREE.MeshStandardMaterial({ color: 0xffcf3f, emissive: 0xffab00, emissiveIntensity: 1.3, roughness: 0.4 })
  );
  rim.rotation.x = Math.PI / 2; rim.position.set(cx, apexY, 0);
  group.add(rim);

  // central mast + pennant
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

  // lit entrance archway at the far end
  const arch = new THREE.Mesh(
    new THREE.TorusGeometry(3.4, 0.45, 10, 32, Math.PI),
    new THREE.MeshStandardMaterial({ color: 0xffe08a, emissive: 0xffab30, emissiveIntensity: 1.4, roughness: 0.4 })
  );
  arch.position.set(length + 7, -4.6, 0);
  group.add(arch);
  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(7, 8),
    new THREE.MeshBasicMaterial({ color: 0xffe6b0, transparent: true, opacity: 0.35, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  glow.position.set(length + 7.6, -3.5, 0); glow.rotation.y = -Math.PI / 2;
  group.add(glow);

  // ---- starfield backdrop (visible through the roof opening) ----
  const starGeo = new THREE.BufferGeometry();
  const N = 600, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    pos[i * 3] = (Math.random() - 0.3) * (length + 120);
    pos[i * 3 + 1] = 30 + Math.random() * 40;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xfff2c0, size: 0.5, sizeAttenuation: true, transparent: true, opacity: 0.9 }));
  group.add(stars);

  // ---- audience: instanced glowing heads in rows on both sides ----
  const rows = 3, per = Math.ceil(length / 2.2) + 6;
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
        const x = i * 2.2 + (r % 2) * 1.1;
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

  // ---- bunting flags overhead (INSTANCED — one draw call) ----
  const flagColors = [0xff5c7a, 0xffcf3f, 0x54c8ff, 0x8affc1, 0xb98cff];
  const nFlags = Math.floor(length / 3);
  const flagGeo = new THREE.ConeGeometry(0.5, 1.1, 4);
  const flagMat = new THREE.MeshStandardMaterial({ emissive: 0x000000, roughness: 0.6, side: THREE.DoubleSide, vertexColors: false });
  const flags = new THREE.InstancedMesh(flagGeo, flagMat, nFlags);
  const fdummy = new THREE.Object3D();
  for (let i = 0; i < nFlags; i++) {
    const c = new THREE.Color(flagColors[i % flagColors.length]);
    fdummy.position.set(i * 3, 13 + Math.sin(i * 0.6) * 0.4, -6);
    fdummy.rotation.set(Math.PI, Math.PI / 4, 0);
    fdummy.scale.setScalar(1);
    fdummy.updateMatrix();
    flags.setMatrixAt(i, fdummy.matrix);
    flags.setColorAt(i, c);
  }
  flags.instanceMatrix.needsUpdate = true;
  if (flags.instanceColor) flags.instanceColor.needsUpdate = true;
  group.add(flags);

  // ---- sweeping spotlights (with glowing cone meshes) ----
  const spotDefs = [
    { x: 6, col: 0xff6db0 }, { x: cx, col: 0x54c8ff }, { x: length - 4, col: 0xffcf3f },
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

  function update(t) { for (const u of updaters) u(t); }
  return { group, update, spots };
}
