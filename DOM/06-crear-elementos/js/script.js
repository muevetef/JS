//Crear elementos del DOM
const miDiv = document.createElement("div");
miDiv.className = "mi-clase red";
miDiv.id = "mi-id";
miDiv.setAttribute("title", "Mi elemento");
miDiv.classList.add("green");
miDiv.classList.remove("red");
miDiv.classList.replace("green", "nueva-clase");

document.querySelector("#clear").addEventListener("click", () => {
  miDiv.classList.toggle("nueva-clase");
});

console.log(miDiv.classList);
//miDiv.innerHTML = "Hello DOM";
const text = document.createTextNode("Hello DOM");
miDiv.appendChild(text);

const filterDiv = document.querySelector(".filter");
filterDiv.appendChild(miDiv);

console.log(miDiv);
