//Obtener un json
fetch("./movies.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

//Obtener un texto
fetch("./text.txt")
  .then((res) => res.text())
  .then((data) => {
    console.log(data);
  });

fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.value);
  });
