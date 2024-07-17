const API_KEY = "f2a5c6418f9c4d67b53f6707a745f97a";
const URL = "https://api.rawg.io/api/games";
const PORT = 443;

document.querySelector("#buscar").addEventListener("click", (e) => {
  let nombre = document.querySelector("#nombre").value;
  document.querySelector("#juegos").innerHTML = "";
  getVideojuegos(nombre);
});

function processData(data) {
  const juegos = JSON.parse(data);
  juegos.results.forEach((juego) => {
    generarCardJuego(juego);
  });
}

function generarCardJuego(juego) {
  document.querySelector("#juegos").innerHTML += ` <div class="juego">
            <img src="${juego.background_image}"">
            <div class="titulo">${juego.name}</div>
            <div class="genero">${juego.genres[0]?.name}</div>
            <div class="plataforma">${generarPlataformas(juego)}</div>
            <div class="desarrollador">${juego.desarrollador}</div>
            <div class="anno">${juego.esrb_rating?.name}</div>
        </div>`;
}

function generarPlataformas(juego) {
  return juego.map((objeto) => objeto.name).join(", ");
}

function processError(error) {
  console.log(error);
}
