//El Objeto global window
console.log(window);

console.dir(window.document);

//Podemos acceder a los elementos del DOM directamente como propiedades
console.dir(window.document.body);
//Al ser window el objeto global, podemos usar directamente document
console.log(document);
//Obtener una lista de elementos
console.dir(document.links[0]);

//Obetener una lista con las imagenes
console.log(document.images);

//Podemos reasignar valores a propiedades
// document.body.innerHTML = "<h1> Hello desde el innerHTML de Body</h1>";
document.write("Hola documetWrite");

//Vamos a usar selectores mejor que el acceso directo
document.getElementById("item-form").innerHTML = "<h2>Estoy en el form</h2>";
document.querySelector("#item-form");
