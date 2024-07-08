let ancho=200;
function aumentar(){
    let caratulas = document.getElementsByClassName("cover");
    console.log(caratulas.length);
       
       
        ancho++;
    Array.from(caratulas).forEach(caratula => {
       
        caratula.style.width=`${ancho}px`;
    });

console.log(ancho);
}


document.querySelector("#botonMenos").addEventListener("click", function(){

    let caratulas = document.getElementsByClassName("cover");
    console.log(caratulas.length);
       
       
        ancho--;
    Array.from(caratulas).forEach(caratula => {
       
        caratula.style.width=`${ancho}px`;
    });

console.log(ancho);


});