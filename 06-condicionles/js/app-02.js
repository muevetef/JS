//Revisar si se cumple más de una condición
//roles: ADMIN, EDITOR, AUTOR, LECTOR
let rol = "VISITANTE";

if (rol === "ADMIN") {
  console.log("Tienes control total");
} else if (rol === "EDITOR") {
  console.log("Solo puede editar");
} else if (rol === "AUTOR") {
  console.log("Solo puede editar sus blogs");
} else if (rol === "LECTOR") {
  console.log("Solo puede leer");
} else {
  console.log("No tienes cuenta");
}

/*
Se evalua nombre como false: (Falsy values) 
    - String vacio
    - 0
    - null
    - undefined
    - false
    - NaN
Se evalua verdadero todos los demás
*/
let nombre = "";
if (nombre) {
  console.log("Hola " + nombre);
}

//Switch case...
