const xhr = new XMLHttpRequest();

xhr.open("GET", "./pelis.json");

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200)
    console.log(JSON.parse(this.responseText));
};

xhr.send();
console.log("Pagina cargada");
