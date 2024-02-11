import * as Three from "three";


const canvas = document.querySelector("canvas.webgl");
const scene = new Three.Scene();
const renderer = new Three.WebGLRenderer({canvas:canvas});
renderer.setSize(window.innerWidth, window.innerHeight)
const camera = new Three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000)

const cubeGeometry = new Three.BoxGeometry(1,1,1);
const cubeMaterial = new Three.MeshBasicMaterial({color:'white'});
const cube = new Three.Mesh(cubeGeometry,cubeMaterial);
cube.position.x = 1
cube.position.y = -3
cube.position.z = 3
console.log(cube.position.length());  //return  orgin ----distance---- cube
scene.add(cube);

// cube.position.normalize();
console.log(cube.position.length());  //return  orgin ----distance---- cube


const sphereGeometry = new Three.SphereGeometry(1,10,10);
const sphereMaterial = new Three.MeshBasicMaterial({color:'yellow'});
const sphere =  new Three.Mesh(sphereGeometry,sphereMaterial);
sphere.position.x = 10
scene.add(sphere)
console.log(sphere.position.distanceTo(cube.position)); //return cube and sphere distance

const axisHelper = new Three.AxesHelper(5);
axisHelper.position.copy(cube.position)
scene.add(axisHelper)



camera.position.z = 15;

renderer.render(scene,camera)