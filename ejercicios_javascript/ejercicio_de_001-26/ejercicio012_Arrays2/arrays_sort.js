class Vehiculo{
    constructor(nombre,precio,consumo){
        this.nombre=nombre;
        this.precio=precio;
        this.consumo=consumo;

    }

}

let jCar= new Vehiculo("Seat ibiza", 15_000, 5,6);
let fpCar= new Vehiculo("Renaul", 35_000, 12,6);
let laraCar= new Vehiculo("Mercedes", 150_000, 8,6);

let vehiculos=[];

vehiculos.push(jCar);

vehiculos.push(laraCar);
vehiculos.push(fpCar);

vehiculos.sort((v1, v2) => v1.consumo-v2.consumo);
console.log(vehiculos);

