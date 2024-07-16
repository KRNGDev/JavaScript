let edad=50;
let estadoCivi= "Soltero";
let idiomas =["Ingles","Español","Frances","Chino"];
let permisoConducir=true;
let movillidadGeografica=true;


if (edad>18&estadoCivi=="Soltero"&idiomas.includes("Ingles")==true&permisoConducir&movillidadGeografica){
    console.log("ta to bien");

}
else{
    console.log("no ta bien");

}

//Variante mas molona
let mayorEdad= edad>18;
let esSoltero=estadoCivi=="Soltero";
let sabeIngles=idiomas.includes("Ingles");
if( mayorEdad && esSoltero && sabeIngles && permisoConducir && movillidadGeografica){
    console.log("asi tmb ta to bien");
}else{
    console.log("asi tmp ta to bien");
}

