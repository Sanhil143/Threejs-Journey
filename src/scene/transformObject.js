import * as Three from "three";
import Engine from "../core/engine";

export default class TransformObject extends Engine {
  setup() {
    this.sphere = new Three.Mesh(
      new Three.SphereGeometry(1, 10, 10),
      new Three.MeshBasicMaterial({ color: "yellow", wireframe: true })
    );
    this.sphere1 = new Three.Mesh(
      new Three.SphereGeometry(1, 10, 10),
      new Three.MeshBasicMaterial({ color: "skyblue", wireframe: true })
    );
    this.sphere2 = new Three.Mesh(
      new Three.SphereGeometry(1, 10, 10),
      new Three.MeshBasicMaterial({ color: "skyblue", wireframe: true })
    );
    this.sphere3 = new Three.Mesh(
      new Three.SphereGeometry(1, 10, 10),
      new Three.MeshBasicMaterial({ color: "red", wireframe: true })
    );
    this.sphere4 = new Three.Mesh(
      new Three.SphereGeometry(1, 10, 10),
      new Three.MeshBasicMaterial({ color: "red", wireframe: true })
    );

    this.sphere1.position.x = -3;
    this.sphere2.position.x = 3;
    this.sphere3.position.y = 3;
    this.sphere4.position.y = -3;

    this.camera.position.z = 7;

    this.group = new Three.Group();
    this.scene.add(this.group);
    this.group.rotation.reorder("YXZ");
    this.group.add(this.sphere);
    this.group.add(this.sphere1);
    this.group.add(this.sphere2);
    this.group.add(this.sphere3);
    this.group.add(this.sphere4);
  }
  update() {
    this.group.rotation.y += 0.01;
    this.group.rotation.x += 0.1;
  }
}
