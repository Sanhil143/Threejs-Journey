import Scene from './scene/texture';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas.webgl');
  new Scene({canvas});
})


