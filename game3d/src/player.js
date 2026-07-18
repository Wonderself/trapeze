import * as THREE from 'three';

// Stylized low-poly acrobat. Hands are at the TOP of the group (local y ~ +1.6),
// so the group can hang from a bar placed at the group's origin-top.
export function createHero(char) {
  const g = new THREE.Group();
  const skin = 0xf7c9a0;
  const outfit = char === 'claire' ? 0xff6db0 : 0x3f9bff;
  const outfit2 = char === 'claire' ? 0xffd23f : 0xffcf3f;

  const M = (color, opts = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0.0, ...opts });

  // torso
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 0.7, 6, 12), M(outfit));
  torso.position.y = 0.55; torso.castShadow = true;
  g.add(torso);

  // chest star (emissive -> catches bloom)
  const star = new THREE.Mesh(new THREE.CircleGeometry(0.18, 5), new THREE.MeshStandardMaterial({ color: 0xfff2b0, emissive: outfit2, emissiveIntensity: 1.6, side: THREE.DoubleSide }));
  star.position.set(0, 0.7, 0.43);
  g.add(star);

  // head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 16), M(skin));
  head.position.y = 1.28; head.castShadow = true;
  g.add(head);
  // hair
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.36, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.62),
    M(char === 'claire' ? 0x8a5a2b : 0x3a2a1a));
  hair.position.y = 1.34;
  g.add(hair);
  // eyes
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x201020 });
  for (const sx of [-0.12, 0.12]) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 8), eyeMat);
    e.position.set(sx, 1.3, 0.3);
    g.add(e);
  }

  // arms raised to the bar
  const armMat = M(skin);
  const arms = [];
  for (const sx of [-1, 1]) {
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.85, 4, 8), armMat);
    arm.position.set(sx * 0.34, 1.15, 0);
    arm.rotation.z = sx * 0.16;
    g.add(arm);
    arms.push(arm);
  }
  // hands
  for (const sx of [-1, 1]) {
    const h = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 10), M(skin));
    h.position.set(sx * 0.42, 1.62, 0);
    g.add(h);
  }

  // legs (animated)
  const legMat = M(outfit2);
  const legs = [];
  for (const sx of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(sx * 0.18, 0.2, 0);
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.15, 0.8, 4, 8), legMat);
    leg.position.y = -0.45; leg.castShadow = true;
    pivot.add(leg);
    // shoe
    const shoe = new THREE.Mesh(new THREE.SphereGeometry(0.17, 8, 8), M(0x2a1533));
    shoe.position.set(0, -0.9, 0.05); pivot.add(shoe);
    g.add(pivot);
    legs.push(pivot);
  }

  g.userData = { legs, arms, char };
  return g;
}

// state: 'swing' | 'fly' | 'grab'
export function poseHero(hero, t, state, spin) {
  const { legs } = hero.userData;
  if (state === 'fly') {
    // tuck legs for a pirouette
    const tuck = -1.1;
    legs[0].rotation.x = tuck; legs[1].rotation.x = tuck;
  } else {
    const s = Math.sin(t * 3) * 0.25;
    legs[0].rotation.x = s; legs[1].rotation.x = -s;
  }
}
