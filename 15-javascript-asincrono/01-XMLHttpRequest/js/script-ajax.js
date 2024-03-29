const xhr = new XMLHttpRequest();

// xhr.open("GET", "./pelis.json");
xhr.open("GET", "https://api.github.com/users/muevetef/repos");

xhr.onreadystatechange = function () {
  //Estados posibles de la peticion
  /*
  0: peticion no inicializada
  1: conexión con el server establecida
  2:petición recibida
  3: procesando la peticion
  4; peticion acabada y lista para usar
  */
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    data.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${repo.name}</strong> -  
                      <a href=${repo.html_url}> Ir al repositorio</a>`;
      document.querySelector("#repos").appendChild(li);
    });
    console.log(data);
  }
};

xhr.send();
console.log("Pagina cargada");
