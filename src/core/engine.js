import * as Three from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'


export default class Engine{
  constructor({canvas}){
    this.canvas = canvas;
    this.init();
    this.render();
  }

  init(){
    this.scene = new Three.Scene();
    this.camera = new Three.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
    this.renderer =new Three.WebGLRenderer({canvas:this.canvas});
    this.renderer.setSize(window.innerWidth,window.innerHeight);
    this.setupOrbitControl();
    this.setup();
  }

  render(){
    this.update();
    this.orbitControl.update();
    this.renderer.render(this.scene,this.camera);
    requestAnimationFrame(() => this.render())
  }

  setupOrbitControl(){
    this.orbitControl = new OrbitControls(this.canvas,this.camera);
    this.orbitControl.enableDamping = true;
  }
}