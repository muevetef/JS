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

/* 
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
*/

async function getAllData() {
  const movies = await getData("./movies.json");
  const directors = await getData("./directores.json");
  const actors = await getData("./actores.json");
  console.log(movies, directors, actors);
}

getAllData();

async function getAllDataFetch() {
  const moviesRes = await fetch("./movies.json");
  const movies = await moviesRes.json();

  const directorsRes = await fetch("./directores.json");
  const directors = await directorsRes.json();

  const actorsRes = await fetch("./directores.json");
  const actors = await actorsRes.json();

  console.log(movies, directors, actors);
}

//promise all

async function getAllDataPromiseAll() {
  const [movies, directors, actors] = await Promise.all([
    fetch("./movies.json").then((res) => res.json()),
    fetch("./directores.json").then((res) => res.json()),
    fetch("./actores.json").then((res) => res.json()),
  ]);
  console.log(movies, directors, actors);
}
