//input events
// const input = document.querySelector("#item-input");

// input.addEventListener("blur", (e) => {
//   console.log(e);
// });
//change, focus, blur

// const form = document.querySelector("#item-form");
// form.addEventListener("submit", (e) => {
//   console.log(e);
//   e.preventDefault();
// });

// document.querySelector("a").addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("No se va ha google");
// });

//propagacoin de eventos
// const button = document.querySelector("form button");
// const div = document.querySelector(".form-control");
// const form = document.querySelector("form");

// button.addEventListener("click", (e) => {
//   alert("Has clicado el Botón!!");
//   e.stopPropagation();
// });

// div.addEventListener("click", (e) => {
//   alert("Has clicado el DIV.formControl");
// });

// form.addEventListener("click", (e) => {
//   alert("Has clicado en el FORM!!");
// });

// document.body.addEventListener("click", (e) => {
//   alert("Has clicado en el Body");
// });

//Delegacion de eventos
// const listItems = document.querySelectorAll("li");

// listItems.forEach((item) => {
//   item.addEventListener(`click`, (e) => {
//     // console.log(e.target);
//     console.log(e.currentTarget);
//     // e.target.remove();
//     e.currentTarget.remove();
//   });
// });

// const list = document.querySelector("ul");
// list.addEventListener(`click`, (e) => {
//   if (e.target.tagName === "LI") {
//     e.target.remove();
//   }
// });

// list.addEventListener(`mouseover`, (e) => {
//   if (e.target.tagName === "LI") {
//     e.target.style.color = "red";
//   }
// });

/********** Window events  **********/
// window.onload = function () {
//   document.querySelector("h1").textContent = "Es hora de comer, casi!";
// };
window.addEventListener("load", () => {
  console.log("Pagina cargada!");
});

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded!");
});

console.log("Runnnnnn!");

window.addEventListener("resize", () => {
  document.querySelector(
    "h1"
  ).textContent = `${window.innerWidth} x ${window.innerHeight}`;
});

window.addEventListener("scroll", () => {
  console.log(`Scroled: ${window.scrollX} x ${window.scrollY}`);
});
//Esto mejor con interSection Observer API
