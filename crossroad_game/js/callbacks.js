function calculadorX(num1, num2, operacion) {
  const resultado = operacion(num1, num2);
  return resultado;
}

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

let x;
x = calculadorX(2, 3, suma);
x = calculadorX(2, 3, resta);
x = calculadorX(2, 3, function (a, b) {
  return a * b;
});
console.log(x);

function algo(callback) {
  callback("Hola");
}

algo(function (texto) {
  console.log(texto);
});

const lista = [2, 3, 4, 5, 6];
lista.forEach(function (val, key, e) {
  console.log("num: " + val);
});

function crearCita(cita, callback) {
  const miCita = "Como yo siempre digo..." + cita;
  callback(miCita);
}

function logCita(cita) {
  console.log(cita);
}

crearCita("no hay mal que por bién no venga", logCita);
crearCita("no hay mal que por bién no venga", (cita) => {
  document.write(cita);
});

function solicitudServidor(consulta, callback) {
  setTimeout(function () {
    let respuesta = consulta + " lleno!";
    callback(respuesta);
  }, 5000);
}

function obtenerResultados(resultados) {
  console.log("Respuesta de servidor " + resultados);
}
solicitudServidor("El vaso està medio ", obtenerResultados);
console.log("El codigo sigue!!");
