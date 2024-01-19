let output;

//document.all
output = document.all;
output = document.all[11];
output = document.all.length;

//Todo en el elemeneto html
output = document.documentElement.lang = "es";

output = document.head;
output = document.body;

//HTMLCollection de body o head
output = document.head.children;
output = document.body.children;

//Algunas propiedades random
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

//Obtener todos los formularios
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

//mostar en consola los href de todos los enlaces
output = document.links[0].href;

const a = document.links;
for (let i = 0; i < a.length; i++) {
  console.log(a[i].href);
}
//Convetir HTMLCOllection a Array
const links = Array.from(a);
links.forEach((a) => console.log(a.href));

//crea una funcion que al ejecutarla en el interprete
//cambie todas las imágenes de la página por una imagen random
// const imgs = Array.from(document.images);
// imgs.forEach((img) => (img.src = "https://cataas.com/cat/gif"));
// console.log(output);

//Obtener clases
output = document.links[0].className;
output = document.links[0].classList;
console.log(output);
