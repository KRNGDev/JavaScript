const PAISES = ["Spain", "Fancia", "Alemania", "Italia", "Polonia"];
const fs = require("node:fs");
const MAX_PERSONAS = 5;
const MIN_PERSONAS = 0;
const MAX_DIAS = 11;
const MIN_DIAS = 4;

function escribirLog(logLine) {
  fs.appendFile("./log.tx", `${logLine} \n`, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Copiado satisfactoriamente");
    }
  });
}

function organizarViaje(pais, personas, dias) {
  let errores = [];
  let date = new Date();
  if (pais === undefined || personas === undefined || dias === undefined) {
    errores.push(
      "Error,has puesto " +
        pais +
        " datos en blanco ,hay que escribir Pais, Personas y Dias"
    );
  }
  if (!(typeof personas === "number")) {
    errores.push("Error, hay que escribir un numero entre 1 y 4 inclusives");
  } else if (personas <= MIN_PERSONAS || personas >= MAX_PERSONAS) {
    errores.push(
      "Error,has puesto " +
        personas +
        " el numero de personan tinen que estar entre 1 y 4 inclusives"
    );
  }
  if (!(typeof dias === "number")) {
    errores.push(
      "Error,has puesto " +
        dias +
        " hay que escribir un numero entre  5 y 10 incluidos"
    );
  } else if (dias >= MAX_DIAS || dias <= MIN_DIAS) {
    errores.push(
      "Error,has puesto " +
        dias +
        " Los dias deben estar entre 5 y 10 incluidos"
    );
  }
  if (!(typeof pais === "string")) {
    errores.push(
      "Error,has puesto " +
        pais +
        " hay que escribir un String con los nombres de Spain, Francia, Alemania, Italia y Polonia "
    );
  } else if (
    !PAISES.map((pais) => pais.toUpperCase()).includes(pais.toUpperCase())
  ) {
    errores.push(
      "Error,has puesto " +
        pais +
        " Solo puedes elegir los paises de Spain, Francia, Alemania, Italia y Polonia"
    );
  }
  if (errores.length > 0) {
    throw new Error(errores.join(`${date}\n`));
  }
  console.log("Todo bien puesto");
  return `Se ha reservado un viaje a ${pais} de ${dias} dias para ${personas} personas`;
}
try {
  console.log(organizarViaje("paako", 10, 1));
} catch (error) {
  console.error(error.message);
  escribirLog(error.message);
} finally {
  console.log("Termino el preceso");
}
