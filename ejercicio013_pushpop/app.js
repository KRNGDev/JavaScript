
const DELAY=3000;
const DELAY_BORRADO=5000;

let cola=[];
 let contador=0;

function crearTarea(){
    
    contador++
    console.log("holaaa");
    cola.unshift("Tarea "+contador);
    mostrarCola();
    
}

function mostrarCola(){
   
    let textoHTML="";
    cola.map(tarea=>{
       
        textoHTML+=`<div class='tarea'>${tarea}</div>`;
        

    });
    document.querySelector("body").innerHTML=textoHTML;
}
function consumirTarea(){
    cola.pop();
    mostrarCola();
}
console.log(Array.isArray(cola));
console.log(Array.isArray(contador));

setInterval(crearTarea,DELAY);
setInterval(consumirTarea,DELAY_BORRADO);