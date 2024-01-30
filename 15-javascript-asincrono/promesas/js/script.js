function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", endpoint);
    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Algo ha ido mal!!!");
        }
      }
    };
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

getData("./movies.json")
  .then((movies) => {
    console.log("Movies", movies);
    return getData("./directores.json");
  })
  .then((directores) => {
    console.log("Directores", directores);
    return getData("./actores.json");
  })
  .then((actores) => {
    console.log("Actores", actores);
  })
  .catch((err) => console.log(err));

console.log("Ámbito global");

//TODO promise.ALL
