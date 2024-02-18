import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Engine {
  constructor({ canvas }) {
    this.canvas = canvas;
    this.init();
    this.render();
  }

  init() {
    this.scene = new Three.Scene();
    this.camera = new Three.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new Three.WebGLRenderer({ canvas: this.canvas });
    this.resize();
    this.fullSize();
    this.setupOrbitControl();
    this.setup();
  }

  render() {
    this.update();
    this.orbitControl.update();
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this.render());
  }

  resize() {
    window.addEventListener("resize", () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
  }

  fullSize() {
    window.addEventListener("dblclick", () => {
      const fullScreenElement =
        document.fullscreenElement || document.webkitFullScreenElement;
      if (!fullScreenElement) {
        if (this.canvas.requestFullscreen) {
          this.canvas.requestFullscreen();
        } else if (this.canvas.webkitFullScreenElement) {
          this.canvas.webkitFullScreenElement();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitFullScreenElement) {
          document.webkitExitFullScreen();
        }
      }
    });
  }

  setupOrbitControl() {
    this.orbitControl = new OrbitControls(this.canvas, this.camera);
    this.orbitControl.enableDamping = true;
  }
}
