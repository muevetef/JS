//Requisitos funcionales:
//Al cargar la pagina mostrar una Respuesta de chuck
//Si algo va mal mostar que algo pasa
//Al clicar en un botton generar otra Respuesta de Chuck

//Tips:
//crear los elementos necesarios en el HTML y referenciarlos
const jokeDiv = document.querySelector("#joke");
const jokeBtn = document.querySelector("joke-btn");
//Crear una funcion que genere la respuesta y actualizae el DOM

function generateJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");
  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE) {
      if (this.status === 200) {
        jokeDiv.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeDiv.innerHTML = "Algo ha ido mal!!";
      }
    }
  };

  xhr.send();
}

//Crear el eventlistener al cargar el DOM inicialmente
document.addEventListener("DOMContentLoaded", generateJoke);
//Crear el event listener del Botón
jokeBtn.addEventListener("clik", generateJoke);
