//Obtener hijos de un elemento
let out;

const padre = document.querySelector(".padre");
out = padre.childNodes;
out = padre.children;
out = padre.children[1].innerText;

out = padre.firstElementChild.innerText = "primer hijo";
out = padre.lastElementChild.innerText = "ultimo hijo";

//Obtener el padre
const hijo = document.querySelector(".hijo");
out = hijo.parentElement;

//Obtener hermanos
const hijo2 = document.querySelector(".hijo:nth-child(2)");
out = hijo2.nextElementSibling.style.color = "green";
out = hijo2.previousElementSibling.style.color = "red";
console.log(out);
