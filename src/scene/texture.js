import * as Three from 'three';
import Engine from '../core/engine';


export default class textureScene extends Engine{
  setup(){
    this.textureLoader = new Three.TextureLoader();
    this.colorTexture = this.textureLoader.load('/textures/rai.jpg');
    this.colorTexture.colorSpace = Three.SRGBColorSpace;

    this.cube = new Three.Mesh(new Three.BoxGeometry(1,1,1), new Three.MeshBasicMaterial({map:this.colorTexture}));
    this.scene.add(this.cube);

    this.camera.position.z = 5
  }
  update(){}
}