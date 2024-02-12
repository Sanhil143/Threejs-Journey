import * as Three from "three";

const canvas = document.querySelector("canvas.webgl");
const scene = new Three.Scene();
const renderer = new Three.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
const camera = new Three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const sphere = new Three.Mesh(
  new Three.SphereGeometry(1, 10, 10),
  new Three.MeshBasicMaterial({ color: "yellow", wireframe: true })
);
const sphere1 = new Three.Mesh(
  new Three.SphereGeometry(1, 10, 10),
  new Three.MeshBasicMaterial({ color: "skyblue", wireframe: true })
);
const sphere2 = new Three.Mesh(
  new Three.SphereGeometry(1, 10, 10),
  new Three.MeshBasicMaterial({ color: "skyblue", wireframe: true })
);
const sphere3 = new Three.Mesh(
  new Three.SphereGeometry(1, 10, 10),
  new Three.MeshBasicMaterial({ color: "red", wireframe: true })
);
const sphere4 = new Three.Mesh(
  new Three.SphereGeometry(1, 10, 10),
  new Three.MeshBasicMaterial({ color: "red", wireframe: true })
);

sphere1.position.x = -3;
sphere2.position.x = 3;
sphere3.position.y = 3;
sphere4.position.y = -3;

camera.position.z = 7;

const group = new Three.Group();
scene.add(group);
group.rotation.reorder("YXZ");
group.add(sphere);
group.add(sphere1);
group.add(sphere2);
group.add(sphere3);
group.add(sphere4);

const animate = () => {
  
  group.rotation.y += 0.01;
  group.rotation.x += 0.1;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
