console.log("Soy un Jakerrr")

let dias =["lune", "martes", "miercoles","jueves","vienes","sabado","domingo"];
console.log(dias[0]);
console.log(dias[dias.length- 1]);

dias.forEach(element => {
    console.log(element);
});

let nombresMasCuatro= dias.filter(n=>n.length>4&n.includes("a"));
console.log(nombresMasCuatro);

let contengaLetraA= nombresMasCuatro.filter(n=>n.includes("a"))
console.log(contengaLetraA);

//Obtebner una copia del array sustituyendo las a por @

let arrayCambiado= dias.map(a=>a.replaceAll("a","@"));
console.log(arrayCambiado);


//DAdo el arrat de nimbres en una unica linea cvamos a cambiar las 'n' por 'N'

let resultado= dias.map(n=>n.replaceAll("n","N")).filter(n=>n.length<=6)
console.log(resultado);

dias.concat()
dias.sort();
console.log(dias)
