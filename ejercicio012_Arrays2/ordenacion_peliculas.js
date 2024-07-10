class Pelicula
{
    constructor(titulo,duracion, genero,clasificacion){
        this.titulo=titulo;
        this.genero=genero;
        this.duracion=duracion;
        this.clasificacion=clasificacion;

    }
}

let pelicula1=new Pelicula("Regreso al fuuro",90, "aventuras",10);
let pelicula2=new Pelicula("BRAINDEAD, TU MADRE SE HA COMIDO A MI PERRO",60, "Terror",8);
let pelicula3=new Pelicula("Evil Dead",66, "Terror",7);
let pelicula4=new Pelicula("Seven",90, "Thriller",9);

let peliculas=[];

peliculas.push(pelicula1);
peliculas.push(pelicula2);
peliculas.push(pelicula3);
peliculas.push(pelicula4);

let terror=peliculas.filter(n=>n.genero=="Terror").sort((a,b)=>a.clasificacion-b.clasificacion);
console.log(terror);
