let juegos = [];





//Recuopera ELJSON guardado
let juegosGuardados= localStorage.getItem("juegos");
if(juegosGuardados!=null){
    juegos= JSON.parse(juegosGuardados);
    generarListaJuegos();
}
//agregamos un listener al boton
document.querySelector("#bAgregar").addEventListener("click", (event) => {
  let nombre = document.querySelector("#iNombre").value;
  let genero = document.querySelector("#iGenero").value;
  let clasificacion = document.querySelector("#iClasificacion").value;
  let imagen = document.querySelector("#iIMG").value;

  //creamos el objeto
  let juego = {
    nombre: nombre,
    genero: genero,
    clasificacion: clasificacion,
    imagen: imagen,
  };

  juegos.push(juego);
  generarListaJuegos();
});

function generarListaJuegos() {
  let cardJuego = "";

  juegos.map((juego) => {
    cardJuego += ` <div class="card">
            <div class="datos">
            <div class="nombre">${juego.nombre}</div>
            <div class="genero">${juego.genero}</div>
            <div class="clasificacion">${juego.clasificacion}</div>
            </div>
            <div class="imagen">
            <img src="${juego.imagen}">
            </div>
        </div>`;
  });

  document.querySelector("#contenido").innerHTML = cardJuego;

  document.querySelector("#iNombre").value ="";
  document.querySelector("#iGenero").value ="";
  document.querySelector("#iClasificacion").value ="";
  document.querySelector("#iIMG").value ="";
}

document.querySelector("#guardar").addEventListener("click",guardar);

function guardar(){
    let strJuegos = JSON.stringify(juegos);
    localStorage.setItem("juegos", strJuegos);

}
