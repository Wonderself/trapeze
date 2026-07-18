import * as THREE from 'three';

// Stylized low-poly acrobat. Hands sit near the TOP of the group (local y ~ +1.7),
// so the group can hang from a bar placed at the group's origin-top.
// Marc and Claire are clearly differentiated (hair, outfit, cape vs tutu, face).
export function createHero(char) {
  const claire = char === 'claire';
  const g = new THREE.Group();
  const skin = 0xf7c9a0;
  const outfit = claire ? 0xff5ba6 : 0x2f7fe0;
  const outfit2 = claire ? 0xffd23f : 0x7fe0ff;
  const hairCol = claire ? 0x7a4a22 : 0x2a1c12;

  const M = (color, opts = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0.0, ...opts });

  // ---- cape (Marc) : short flowing cape behind the shoulders ----
  if (!claire) {
    const cape = new THREE.Mesh(
      new THREE.ConeGeometry(0.62, 1.1, 12, 1, true, 0, Math.PI),
      new THREE.MeshStandardMaterial({ color: 0xd42b3a, emissive: 0x5a0d13, emissiveIntensity: 0.35, roughness: 0.6, side: THREE.DoubleSide })
    );
    cape.position.set(0, 0.7, -0.34);
    cape.rotation.x = -0.35;
    g.add(cape);
    g.userData.cape = cape;
  }

  // ---- torso ----
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 0.7, 6, 12), M(outfit));
  torso.position.y = 0.55; torso.castShadow = true;
  g.add(torso);

  // ---- tutu (Claire) : flared skirt at the waist ----
  if (claire) {
    const tutu = new THREE.Mesh(
      new THREE.ConeGeometry(0.66, 0.42, 16, 1, true),
      new THREE.MeshStandardMaterial({ color: 0xffe1f0, emissive: 0xff6db0, emissiveIntensity: 0.5, roughness: 0.5, side: THREE.DoubleSide })
    );
    tutu.position.y = 0.34; tutu.rotation.x = Math.PI; // flare downward
    g.add(tutu);
  }

  // ---- chest star (emissive -> catches bloom) ----
  const star = new THREE.Mesh(new THREE.CircleGeometry(0.18, 5), new THREE.MeshStandardMaterial({ color: 0xfff2b0, emissive: outfit2, emissiveIntensity: 1.6, side: THREE.DoubleSide }));
  star.position.set(0, 0.72, 0.43);
  g.add(star);

  // ---- head ----
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 16), M(skin));
  head.position.y = 1.28; head.castShadow = true;
  g.add(head);

  // hair cap
  const hair = new THREE.Mesh(
    new THREE.SphereGeometry(0.37, 16, 16, 0, Math.PI * 2, 0, Math.PI * (claire ? 0.66 : 0.5)),
    M(hairCol)
  );
  hair.position.y = claire ? 1.34 : 1.4;
  g.add(hair);

  if (claire) {
    // pigtails: two buns on the sides
    for (const sx of [-1, 1]) {
      const tail = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 12), M(hairCol));
      tail.position.set(sx * 0.4, 1.32, -0.02);
      g.add(tail);
      const tie = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.04, 6, 12), new THREE.MeshStandardMaterial({ color: 0xffd23f, emissive: 0xffab00, emissiveIntensity: 0.5 }));
      tie.position.set(sx * 0.34, 1.36, 0); tie.rotation.y = Math.PI / 2;
      g.add(tie);
    }
  } else {
    // Marc: side-swept quiff/fringe
    const fringe = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 10), M(hairCol));
    fringe.scale.set(1.2, 0.6, 0.6);
    fringe.position.set(-0.1, 1.5, 0.22);
    g.add(fringe);
  }

  // eyes
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x201020 });
  for (const sx of [-0.12, 0.12]) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 8), eyeMat);
    e.position.set(sx, 1.31, 0.3);
    g.add(e);
    // sparkle highlight
    const hl = new THREE.Mesh(new THREE.SphereGeometry(0.02, 6, 6), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1 }));
    hl.position.set(sx + 0.02, 1.33, 0.35);
    g.add(hl);
  }
  // rosy cheeks
  const cheekMat = new THREE.MeshStandardMaterial({ color: 0xff9ec4, transparent: true, opacity: 0.7 });
  for (const sx of [-0.21, 0.21]) {
    const c = new THREE.Mesh(new THREE.CircleGeometry(0.07, 10), cheekMat);
    c.position.set(sx, 1.22, 0.3);
    g.add(c);
  }
  // smile (arc)
  const smile = new THREE.Mesh(
    new THREE.TorusGeometry(0.11, 0.022, 6, 14, Math.PI),
    new THREE.MeshStandardMaterial({ color: 0x7a2030 })
  );
  smile.position.set(0, 1.16, 0.3);
  smile.rotation.z = Math.PI; // opens upward -> smile
  g.add(smile);

  // ---- arms as shoulder pivots (default: raised toward the bar) ----
  const arms = [];
  for (const sx of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(sx * 0.34, 1.02, 0);
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.72, 4, 8), M(skin));
    arm.position.y = 0.45; arm.castShadow = true;
    pivot.add(arm);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 10), M(skin));
    hand.position.y = 0.9;
    pivot.add(hand);
    // small wristband in outfit color
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.045, 6, 12), M(outfit2, { emissive: outfit2, emissiveIntensity: 0.4 }));
    band.position.y = 0.72; band.rotation.x = Math.PI / 2;
    pivot.add(band);
    g.add(pivot);
    arms.push(pivot);
  }

  // ---- legs (animated) ----
  const legMat = M(outfit2);
  const legs = [];
  for (const sx of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(sx * 0.18, 0.2, 0);
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.15, 0.8, 4, 8), legMat);
    leg.position.y = -0.45; leg.castShadow = true;
    pivot.add(leg);
    const shoe = new THREE.Mesh(new THREE.SphereGeometry(0.17, 8, 8), M(0x2a1533));
    shoe.position.set(0, -0.9, 0.05); pivot.add(shoe);
    g.add(pivot);
    legs.push(pivot);
  }

  g.userData.legs = legs;
  g.userData.arms = arms;
  g.userData.char = char;
  return g;
}

// state: 'swing' | 'fly' | 'salute' | 'idle'
// `salute` = celebratory wave (perfect catch / menu selection).
export function poseHero(hero, t, state, spin) {
  const { legs, arms, cape } = hero.userData;
  if (state === 'fly') {
    const tuck = -1.15;
    legs[0].rotation.x = tuck; legs[1].rotation.x = tuck;
    // arms flung outward in a star
    arms[0].rotation.z = 1.15; arms[1].rotation.z = -1.15;
    arms[0].rotation.x = 0; arms[1].rotation.x = 0;
  } else if (state === 'salute') {
    // one arm waving overhead, legs proud
    legs[0].rotation.x = 0.15; legs[1].rotation.x = -0.15;
    const wave = Math.sin(t * 9) * 0.35;
    arms[0].rotation.z = 0.15; arms[0].rotation.x = 0;
    arms[1].rotation.z = -0.15 + wave; arms[1].rotation.x = -0.2;
  } else if (state === 'idle') {
    const s = Math.sin(t * 2) * 0.06;
    legs[0].rotation.x = s; legs[1].rotation.x = -s;
    arms[0].rotation.z = 0.35; arms[1].rotation.z = -0.35;
    arms[0].rotation.x = 0.1; arms[1].rotation.x = 0.1;
  } else { // swing
    const s = Math.sin(t * 3) * 0.25;
    legs[0].rotation.x = s; legs[1].rotation.x = -s;
    arms[0].rotation.z = 0.05; arms[1].rotation.z = -0.05;
    arms[0].rotation.x = 0; arms[1].rotation.x = 0;
  }
  if (cape) cape.rotation.x = -0.35 + Math.sin(t * 4) * 0.12 + (state === 'fly' ? 0.5 : 0);
}
