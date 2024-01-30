function getData(endpoint, callback, error) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", endpoint);
  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      callback(JSON.parse(this.responseText));
    } else {
      error();
    }
  };
  xhr.send();
}

getData(
  "./movies.json",
  (data) => {
    console.log("movies", data);
    getData(
      "./directores.json",
      (data) => {
        console.log("directores", data);
        getData(
          "./actores.json",
          (data) => {
            console.log("actores", data);
          },
          (error) => {}
        );
      },
      (error) => {}
    );
  },
  (error) => {}
);
// getData("./movies.json", (data) => {
//   console.log("movies", data);
// });
// getData("./directores.json", (data) => {
//   console.log("directores", data);
// });
// getData("./actores.json", (data) => {
//   console.log("actores", data);
// });
