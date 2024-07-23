function comprobarSensor() {
  if (comprobarSensor1() & comprobarSensor2()) {
    alert("esta Ok");
  } else {
    alert("Es menor que 10");
  }
}

function comprobarSensor1() {
  let valorSensor1 = document.getElementById("sensor1").value;
  let sensorOk;
  if (valorSensor1 < 10) {
    sensorOk = false;
    document.querySelector("#marcador1").classList.remove("verde");
    document.querySelector("#marcador1").classList.remove("rojo");
    document.querySelector("#marcador1").classList.add("rojo");
  } else {
    sensorOk = true;
    
    document.querySelector("#marcador1").classList.remove("verde");
    document.querySelector("#marcador1").classList.remove("rojo");
    document.querySelector("#marcador1").classList.add("verde");
    
  }
  return sensorOk
}
function comprobarSensor2() {
  let valorSensor2 = document.getElementById("sensor2").value;
  let sensorOk;
  if (valorSensor2 < 10) {
    sensorOk = false;
    document.querySelector("#marcador2").classList.remove("verde");
    document.querySelector("#marcador2").classList.remove("rojo");
    document.querySelector("#marcador2").classList.add("rojo");
  } else {
    sensorOk = true;
    document.querySelector("#marcador2").classList.remove("verde");
    document.querySelector("#marcador2").classList.remove("rojo");
    document.querySelector("#marcador2").classList.add("verde");
  }
  return sensorOk
}
