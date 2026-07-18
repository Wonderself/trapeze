import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

export function createStage(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x06010f);
  scene.fog = new THREE.FogExp2(0x06010f, 0.018);

  const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 400);
  camera.position.set(-8, 6, 12);

  // --- lighting ---
  const ambient = new THREE.HemisphereLight(0x9a76ff, 0x160a2e, 0.55);
  scene.add(ambient);

  const key = new THREE.DirectionalLight(0xfff0d0, 0.7);
  key.position.set(-12, 26, 10);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.near = 1; key.shadow.camera.far = 90;
  key.shadow.camera.left = -40; key.shadow.camera.right = 40;
  key.shadow.camera.top = 40; key.shadow.camera.bottom = -40;
  key.shadow.bias = -0.0008;
  scene.add(key);
  scene.add(key.target);

  // --- post-processing (bloom) ---
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.7,   // strength
    0.85,  // radius
    0.82   // threshold
  );
  composer.addPass(bloom);

  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    composer.setSize(w, h);
  }
  window.addEventListener('resize', resize);

  return { renderer, scene, camera, composer, key, render: () => composer.render() };
}
