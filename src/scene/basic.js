import * as Three from "three";
import Engine from "../core/engine";

export default class BasicScene extends Engine {
  setup() {
    this.cubeGeometry = new Three.BoxGeometry(1, 1, 1);
    this.cubeMaterial = new Three.MeshBasicMaterial({
      color: "red",
      wireframe: true,
    });
    this.cube = new Three.Mesh(this.cubeGeometry, this.cubeMaterial);
    this.scene.add(this.cube);
    this.camera.position.z = 5;
  }
  update() {}
}
