function calcularIMC(kg, cm){
    let imc=kg/((cm/100)**2);
    return imc.toFixed(2);
}