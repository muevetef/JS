//Dividir el código en funciones

initApp();

function initApp() {
  console.log("Iniciando app...");
  segundaFuncion();
}
function segundaFuncion() {
  console.log("Desde la segunda funcion...");
  usuarioAutenticado("Elisa");
}

function usuarioAutenticado(usuario) {
  console.log("Autenticando usuario...");
  console.log("Ususario " + usuario + "autenticado con éxito");
}
