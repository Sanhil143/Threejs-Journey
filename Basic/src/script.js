import * as Three from "three";

const canvas = document.querySelector('canvas.webgl');
const scene = new Three.Scene();
const renderer = new Three.WebGLRenderer({canvas:canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight)


const cubeGeometry = new Three.BoxGeometry(1,1,1);
const cubeMaterial = new Three.MeshBasicMaterial({color:'red' , wireframe:true});
const cube = new Three.Mesh(cubeGeometry,cubeMaterial);
scene.add(cube);
camera.position.z = 5;

renderer.render(scene,camera);


