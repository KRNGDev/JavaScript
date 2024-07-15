const b = new Map([
  [1, "uno"],
  [2, "dos"],
  [3, "tres"],
]);

console.log(b.get(3));

//Definir un map aque tenga por claver el titulo de la pelicila
//y por valor un objeto con los atributos : director, genero año du dracio
//eñ maap tendra tres peliculas

let peliculas = new Map([
  [
    "Candiman",
    {
      director: "Director nuse",
      genero: "Terror",
      fecha: 1999,
      Duracion: "90 minutos",
    },
  ],
  [
    "Batman",
    {
      director: "Tim burton",
      genero: "Aventuras",
      fecha:1990,
      duracion: "90 minut",
    },
  ],
  [
    "Spiderman",
    {
      director: "Salaman",
      genero: "Aventuras",
      fecha: 2001,
      duracion: "90 minutos",
    },
  ],
]);

console.log(peliculas.get("Spiderman"));
