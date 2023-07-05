import * as THREE from "three";

// Styles
import "./style.css";

// Let's create a scene
const scene = new THREE.Scene();

// Let's create donut object
const geometry = new THREE.TorusGeometry(0.5, 0.2);
const donutTexture = new THREE.TextureLoader().load("/donut.png");

const material = new THREE.MeshStandardMaterial({
  map: donutTexture,
});
const donut = new THREE.Mesh(geometry, material);
scene.add(donut);

// Camera
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;
scene.add(camera);

// Let's add lights!
const light = new THREE.PointLight(0xffffff);
light.position.set(0, 0, 3);
scene.add(light);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas"),
});

renderer.setSize(window.innerWidth, window.innerHeight);

const animate = () => {
  renderer.render(scene, camera);
  donut.rotation.z += 0.001;
  requestAnimationFrame(animate);
};

animate();

// Transformations
donut.rotation.x = -0.75;
donut.rotation.y = -0.75;
donut.position.y = -0.6;
