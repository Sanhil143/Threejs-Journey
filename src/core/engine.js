import * as Three from 'three';


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
    this.setup();
  }

  render(){
    this.update();
    this.renderer.render(this.scene,this.camera);
    requestAnimationFrame(() => this.render())
  }
}