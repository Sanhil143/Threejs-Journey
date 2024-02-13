import * as Three from 'three';
import GUI from 'lil-gui';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import Engine from '../core/engine';

export default class GuiScene extends Engine{
  setup(){
    this.cube = new Three.Mesh(new Three.BoxGeometry(1,1,1),new Three.MeshBasicMaterial({color:'red'}));
    this.scene.add(this.cube);
    this.gui = new GUI();

    this.cubeControl = this.gui.addFolder('cube-controls');
    this.cubeControl.add(this.cube.position,'x').min(-3).max(3).step(0.1)

    this.camera.z = 15
    this.controls = new OrbitControls(this.canvas,this.camera);
  }
  update(){
    this.controls.update()
  }
}