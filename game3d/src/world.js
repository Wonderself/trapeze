import * as THREE from 'three';

// Builds the circus "show" environment along a level of given length (in +X).
export function createWorld(scene, length) {
  const group = new THREE.Group();
  scene.add(group);
  const spots = [];
  const updaters = [];

  // ---- floor (the ring runway) ----
  const floorMat = new THREE.MeshStandardMaterial({ color: 0x2a0f3a, roughness: 0.9, metalness: 0.0 });
  const floor = new THREE.Mesh(new THREE.BoxGeometry(length + 40, 1, 40), floorMat);
  floor.position.set(length / 2, -8.5, 0);
  floor.receiveShadow = true;
  group.add(floor);

  // glowing ring edge stripes on the floor
  const stripeMat = new THREE.MeshStandardMaterial({ color: 0xffcf3f, emissive: 0xff8a00, emissiveIntensity: 1.2, roughness: 0.5 });
  for (const z of [-9, 9]) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(length + 40, 0.25, 0.5), stripeMat);
    s.position.set(length / 2, -7.9, z);
    group.add(s);
  }

  // ---- starfield backdrop ----
  const starGeo = new THREE.BufferGeometry();
  const N = 600, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    pos[i * 3] = (Math.random() - 0.3) * (length + 120);
    pos[i * 3 + 1] = Math.random() * 60 - 6;
    pos[i * 3 + 2] = -30 - Math.random() * 60;
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

  // ---- bunting flags overhead ----
  const flagColors = [0xff5c7a, 0xffcf3f, 0x54c8ff, 0x8affc1, 0xb98cff];
  for (let i = 0; i < length / 3; i++) {
    const c = flagColors[i % flagColors.length];
    const flag = new THREE.Mesh(
      new THREE.ConeGeometry(0.5, 1.1, 4),
      new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 0.4, roughness: 0.6, side: THREE.DoubleSide })
    );
    flag.rotation.x = Math.PI;
    flag.rotation.y = Math.PI / 4;
    flag.position.set(i * 3, 13 + Math.sin(i * 0.6) * 0.4, -6);
    group.add(flag);
  }

  // ---- sweeping spotlights (with glowing cone meshes) ----
  const spotDefs = [
    { x: 6, col: 0xff6db0 }, { x: length * 0.5, col: 0x54c8ff }, { x: length - 4, col: 0xffcf3f },
  ];
  for (const def of spotDefs) {
    const sp = new THREE.SpotLight(def.col, 120, 60, Math.PI / 9, 0.5, 1.4);
    sp.position.set(def.x, 20, 6);
    const tgt = new THREE.Object3D(); tgt.position.set(def.x, 0, 0); group.add(tgt);
    sp.target = tgt;
    group.add(sp);
    // visible beam
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
  });

  function update(t) { for (const u of updaters) u(t); }
  return { group, update, spots };
}
