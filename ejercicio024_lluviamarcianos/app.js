const RATIO = 0.016;
const VELOCIDAD = 0.09;
var x = 1;
var y = 0;

setInterval(() => {
  x += VELOCIDAD;
  if (x < 100) {
    document.querySelector("#marciano1").style.top = `${x}vh`;
    document.querySelector("#marciano1").style.left = `${y}vw`;
  } else {
    x = 1;
    y = Math.random() * 90;
  }
}, RATIO);
