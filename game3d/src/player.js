import * as THREE from 'three';

// Stylized low-poly acrobat. Hands sit near the TOP of the group (local y ~ +1.9),
// so the group can hang from a bar placed at the group's origin-top.
// Character identity (canonical — see CHARACTERS.md):
//  - Marc : the little one. Young, long BLOND hair with a BRAID swinging behind, blue outfit, red cape.
//  - Claire : a bit TALLER. Long bright blonde hair with a gold star, pink outfit, tutu.
// Body parts live in an inner group scaled about the hand-grip height, so both
// characters still grip the bar at the same point despite different sizes.
const GRIP_Y = 1.92;

export function createHero(char) {
  const claire = char === 'claire';
  const g = new THREE.Group();
  const body = new THREE.Group();
  const skin = 0xf7c9a0;
  const outfit = claire ? 0xff5ba6 : 0x2f7fe0;
  const outfit2 = claire ? 0xffd23f : 0x7fe0ff;
  const hairCol = claire ? 0xf7d878 : 0xf0cc50; // both blond — Claire lighter

  const M = (color, opts = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0.0, ...opts });
  const hairM = () => M(hairCol, { roughness: 0.45 });

  // ---- cape (Marc) : short flowing cape behind the shoulders ----
  if (!claire) {
    const cape = new THREE.Mesh(
      new THREE.ConeGeometry(0.62, 1.1, 12, 1, true, 0, Math.PI),
      new THREE.MeshStandardMaterial({ color: 0xd42b3a, emissive: 0x5a0d13, emissiveIntensity: 0.35, roughness: 0.6, side: THREE.DoubleSide })
    );
    cape.position.set(0, 0.7, -0.34);
    cape.rotation.x = -0.35;
    body.add(cape);
    g.userData.cape = cape;
  }

  // ---- torso ----
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 0.7, 6, 12), M(outfit));
  torso.position.y = 0.55; torso.castShadow = true;
  body.add(torso);

  // ---- tutu (Claire) : flared skirt at the waist ----
  if (claire) {
    const tutu = new THREE.Mesh(
      new THREE.ConeGeometry(0.66, 0.42, 16, 1, true),
      new THREE.MeshStandardMaterial({ color: 0xffe1f0, emissive: 0xff6db0, emissiveIntensity: 0.5, roughness: 0.5, side: THREE.DoubleSide })
    );
    tutu.position.y = 0.34; tutu.rotation.x = Math.PI; // flare downward
    body.add(tutu);
  }

  // ---- chest star (emissive -> catches bloom) ----
  const star = new THREE.Mesh(new THREE.CircleGeometry(0.18, 5), new THREE.MeshStandardMaterial({ color: 0xfff2b0, emissive: outfit2, emissiveIntensity: 1.6, side: THREE.DoubleSide }));
  star.position.set(0, 0.72, 0.43);
  body.add(star);

  // ---- head ----
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 16), M(skin));
  head.position.y = 1.28; head.castShadow = true;
  body.add(head);

  // ---- hair: both blond, both LONG ----
  const hair = new THREE.Mesh(
    new THREE.SphereGeometry(0.37, 16, 16, 0, Math.PI * 2, 0, Math.PI * (claire ? 0.7 : 0.62)),
    hairM()
  );
  hair.position.y = claire ? 1.33 : 1.37;
  body.add(hair);

  if (claire) {
    // Claire: long loose blonde hair — back curtain + two side strands + gold star
    const back = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.6, 4, 10), hairM());
    back.scale.set(1.5, 1, 0.55);
    back.position.set(0, 0.95, -0.26);
    body.add(back);
    for (const sx of [-1, 1]) {
      const strand = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.62, 4, 8), hairM());
      strand.position.set(sx * 0.33, 0.98, -0.06);
      strand.rotation.z = sx * -0.08;
      body.add(strand);
    }
    const hstar = new THREE.Mesh(new THREE.CircleGeometry(0.09, 5), new THREE.MeshStandardMaterial({ color: 0xfff2b0, emissive: 0xffd23f, emissiveIntensity: 1.4, side: THREE.DoubleSide }));
    hstar.position.set(-0.24, 1.52, 0.24);
    hstar.rotation.y = -0.4;
    body.add(hstar);
  } else {
    // Marc: fringe + side strands + BRAID hanging behind (animated in poseHero)
    const fringe = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 10), hairM());
    fringe.scale.set(1.2, 0.6, 0.6);
    fringe.position.set(-0.1, 1.5, 0.22);
    body.add(fringe);
    for (const sx of [-1, 1]) {
      const strand = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.34, 4, 8), hairM());
      strand.position.set(sx * 0.31, 1.16, 0.02);
      strand.rotation.z = sx * -0.1;
      body.add(strand);
    }
    // braid: chain of shrinking beads inside a pivot group at the back of the head
    const braid = new THREE.Group();
    braid.position.set(0, 1.42, -0.3);
    let by = 0;
    for (let i = 0; i < 5; i++) {
      const r = 0.13 - i * 0.017;
      const bead = new THREE.Mesh(new THREE.SphereGeometry(r, 10, 10), hairM());
      by -= r * 1.55;
      bead.position.set(0, by, -0.02 * i);
      braid.add(bead);
      if (i === 4) {
        const tie = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.022, 6, 10), new THREE.MeshStandardMaterial({ color: 0xe83050, emissive: 0xa01020, emissiveIntensity: 0.5 }));
        tie.position.set(0, by + r * 0.6, -0.08);
        tie.rotation.x = Math.PI / 2;
        braid.add(tie);
      }
    }
    body.add(braid);
    g.userData.braid = braid;
  }

  // eyes
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x201020 });
  for (const sx of [-0.12, 0.12]) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 8), eyeMat);
    e.position.set(sx, 1.31, 0.3);
    body.add(e);
    // sparkle highlight
    const hl = new THREE.Mesh(new THREE.SphereGeometry(0.02, 6, 6), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1 }));
    hl.position.set(sx + 0.02, 1.33, 0.35);
    body.add(hl);
  }
  // rosy cheeks
  const cheekMat = new THREE.MeshStandardMaterial({ color: 0xff9ec4, transparent: true, opacity: 0.7 });
  for (const sx of [-0.21, 0.21]) {
    const c = new THREE.Mesh(new THREE.CircleGeometry(0.07, 10), cheekMat);
    c.position.set(sx, 1.22, 0.3);
    body.add(c);
  }
  // smile (arc)
  const smile = new THREE.Mesh(
    new THREE.TorusGeometry(0.11, 0.022, 6, 14, Math.PI),
    new THREE.MeshStandardMaterial({ color: 0x7a2030 })
  );
  smile.position.set(0, 1.16, 0.3);
  smile.rotation.z = Math.PI; // opens upward -> smile
  body.add(smile);

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
    body.add(pivot);
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
    body.add(pivot);
    legs.push(pivot);
  }

  // ---- size identity: Marc is the little one, Claire a bit taller ----
  // Scale about the grip height so hands keep meeting the bar exactly.
  const s = claire ? 1.06 : 0.92;
  body.scale.setScalar(s);
  body.position.y = GRIP_Y * (1 - s);
  g.add(body);

  g.userData.legs = legs;
  g.userData.arms = arms;
  g.userData.char = char;
  return g;
}

// state: 'swing' | 'fly' | 'salute' | 'idle'
// `salute` = celebratory wave (perfect catch / menu selection).
export function poseHero(hero, t, state, spin) {
  const { legs, arms, cape, braid } = hero.userData;
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
  // Marc's braid reacts to the move: flies up during tricks, trails in the swing
  if (braid) {
    if (state === 'fly') {
      braid.rotation.x = -1.25 + Math.sin(t * 10) * 0.08;
      braid.rotation.z = Math.sin(t * 7) * 0.15;
    } else if (state === 'swing') {
      braid.rotation.x = -0.25 + Math.sin(t * 3) * 0.3;
      braid.rotation.z = 0;
    } else {
      braid.rotation.x = -0.12 + Math.sin(t * 2.2) * 0.08;
      braid.rotation.z = Math.sin(t * 1.7) * 0.1;
    }
  }
}
