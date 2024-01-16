//Estructuras condicionales
let haceSol = false;

if (haceSol === true) {
  //console.log("Voy a la playa!");
} else {
  //console.log("Me quedo en casa");
}

//Si hace sol y hace calor entonces voy a la playa
//sinó me quedo en casa

//No es necesario comparar con true o false
const haceCalor = false;

if (haceSol && haceCalor) {
  //console.log("Voy a la playa!");
} else {
  //console.log("Me quedo en casa");
}

haceSol = false;
const tengoHambre = true;
if (haceSol) {
  console.log("Me voy a la playa");
} else if (tengoHambre) {
  console.log("Hago palomitas");
} else {
  console.log("Miro una Peli");
}

//Operadores aritméticos + - * / %
//Operadores de comparación == != === !== > < >= <=
//Operadoles lógicos && || !

//operador ternario
const accion = haceSol ? "Me voy a la playa" : "Me quedo en casa";
console.log(accion);

// version con if else

let accion2 = "";
if (haceSol) {
  accion2 = "Me voy a la playa";
} else {
  accion2 = "Me quedo en casa";
}
console.log(accion2);
