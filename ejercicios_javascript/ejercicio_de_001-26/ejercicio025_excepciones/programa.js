const fs = require("node:fs");
function escribirLog(logLine) {
  let date = new Date();
  fs.appendFile("./log.tx", `${logLine} ${date}\n`, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Copiado satisfactoriamente");
    }
  });
}

function sumar(sum1, sum2) {
  //que recivamos dos argumentos
  if (sum1 === undefined || sum2 === undefined) {
    throw new Error("Los dos sumandos son obligatorios");
  }
  //mirar que los dos argumentos sean numerors
  if (!(typeof sum1 === "number") || !(typeof sum2 === "number")) {
    throw new Error("Los dos sumandos deben ser numeros");
  }
  return sum1 + sum2;
}
try {
  console.log("Paso1");
  let resultado = sumar("sdf", 9);
  console.log("Paso2");
  console.log(resultado);
  console.log("Paso 3");
} catch (e) {
  console.error(e.message);
  escribirLog(e.message);
} finally {
  console.log("Hemos terminado el proceso");
}
