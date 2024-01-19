let output;
//Selectores de elementos simples
output = document.getElementById("app-title");
//obtener sus attributos
output = document.getElementById("app-title").id;
output = document.getElementById("app-title").className;
output = document.getElementById("app-title").getAttribute("id");
//asignar atributos
output = document.getElementById("app-title").title = "Lista de la compra";
output = document.getElementById("app-title").setAttribute("class", "text-red");

//Obtener/cambiar el contenido
const title = document.getElementById("app-title");
title.textContent = "Hello world";
title.innerText = "Hello world otra vez";
title.innerHTML = "<i>Lista de la compra 2</i>";

//Cambiar estilos
title.style.color = "#0000ff";
title.style.backgroundColor = "red";
title.style.paddingLeft = "10px";

//query selectors
output = document.querySelector("h1");
output = document.querySelector("#app-title");
output = document.querySelector(".container");
output = document.querySelector('input[type="text"]');
output = document.querySelector("li:nth-child(2)").innerText;

const segundoElemento = document.querySelector("li:nth-child(2)");
segundoElemento.innerText = "Zumo de piña";
segundoElemento.style.color = "red";
output = console.log(output);

const list = document.querySelector("ul");
console.log(list);
const primerElemento = list.querySelector("li");
primerElemento.style.color = "green";

const textNewItem = document.querySelector("#item-input");

textNewItem.addEventListener("keyup", () => {
  title.innerText = textNewItem.value;
});
