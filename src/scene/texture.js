import * as Three from 'three';
import Engine from '../core/engine';


export default class textureScene extends Engine{
  setup(){
    this.textureLoader = new Three.TextureLoader();
    this.colorTexture = this.textureLoader.load('/textures/rai.jpg');
    this.colorTexture.colorSpace = Three.SRGBColorSpace;
    this.colorTexture.minFilter = Three.NearestFilter

    this.group = new Three.Group()
    this.scene.add(this.group);

    this.cube = new Three.Mesh(new Three.BoxGeometry(1,1,1), new Three.MeshBasicMaterial({map:this.colorTexture}));
    this.cube1 = new Three.Mesh(new Three.BoxGeometry(1,1,1), new Three.MeshBasicMaterial({map:this.colorTexture}));
    this.cube1.position.x = 2
    this.cube2 = new Three.Mesh(new Three.BoxGeometry(1,1,1), new Three.MeshBasicMaterial({map:this.colorTexture}));
    this.cube2.position.x = -2
    this.cube3 = new Three.Mesh(new Three.BoxGeometry(1,1,1), new Three.MeshBasicMaterial({map:this.colorTexture}));
    this.cube3.position.y = 2
    this.group.add(this.cube);
    this.group.add(this.cube1);
    this.group.add(this.cube2);
    this.group.add(this.cube3);

    this.camera.position.z = 5
  }
  update(){
    this.cube.rotation.x += 0.02
    this.cube1.rotation.x += -0.02
    this.cube2.rotation.y += 0.02
    this.cube3.rotation.y += -0.02
  }
}