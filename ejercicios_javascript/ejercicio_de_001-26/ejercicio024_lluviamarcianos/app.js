const RATIO = 0.016;
const VELOCIDAD = 0.15;
let signo = " ";

// Inicializamos las posiciones de los marcianos
var positions = {
  marciano1: { x: 1, y: 0, velocidad: VELOCIDAD },
  marciano2: { x: 1, y: 0, velocidad: 0.1 },
  marciano3: { x: 1, y: 0, velocidad: 0.18 },
};

// Función para mover un marciano
function moveMarciano(id) {
  let marciano = positions[id];
  marciano.x += marciano.velocidad;

  if ((marciano.x < 100) & (marciano.y < 100) & (marciano.y > 0)) {
    marciano.y += marciano.velocidad;
    document.querySelector(`#${id}`).style.top = `${marciano.x}vh`;
    document.querySelector(`#${id}`).style.left = `${marciano.y}vw`;
    if (marciano.y > 90) {
      signo = "-";
    }
  } else {
    marciano.x = 1;
    marciano.y = Math.random() * 90;
  }
}

// Configurar intervalos para cada marciano
setInterval(() => moveMarciano("marciano1"), RATIO);
setInterval(() => moveMarciano("marciano2"), RATIO);
setInterval(() => moveMarciano("marciano3"), RATIO);
