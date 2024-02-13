import Scene from './scene/transformObject';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas.webgl');
  new Scene({canvas});
})


