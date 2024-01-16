/*let x;

const arr = [28, 45, 67, 23, 109, 55];
arr.push(100); //Añade un elemento al final
arr.pop(); //Quita el último elemento
arr.unshift(200); //Añade un elemento al principio
arr.shift(); //Quita el primer elemento

// arr.reverse();

x = arr.includes(553);
x = arr.indexOf(45);
x = arr.toString();
x = arr.join("");

x = arr.slice(1, 4);
// x = arr.splice(1, 4);

//eliminar un elemento del array
x = arr.splice(2, 1);
//Podemos encadenar métodos dependiendo del valor devuelto
x = arr.slice(1, 4).reverse().toString().charAt(0);

const letras = ["a", "c", "d"];
letras.splice(1, 0, "b", "z");
console.log(letras);*/
//Declarar la función
// const duplicador = function (texto) {
//   let str = texto + texto;
//   return str;
// };

// //Llamar a la función y le pasamos un argumento
// let out = duplicador("Hola"); //HolaHola
// console.log(out);

// duplicador("Adiós"); //AdiósAdion

// const palabra = "Hello";
// duplicador(palabra); //"HelloHello"
function rotate(array) {
  let arrayShift = array.shift();
  array.push(arrayShift);
  return array;
}

rotate(["a", "b", "c"]);

const str = `{
  "success": false,
  "error": {
    "code": 101,
    "type": "missing_access_key",
    "info": "You have not supplied an API Access Key. [Required format: access_key=YOUR_ACCESS_KEY]"
  }
}`;
console.log(str);

const strObj = JSON.parse(str);
console.log(strObj.error.info);
