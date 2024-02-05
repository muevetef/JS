//https://randomuser.me/api
//https://thronesapi.com/
//https://pokeapi.co/

//Crear una ficha con la imagen i la informacion de algun personaje
//Elige una de las apis anteriores o una parecida
//Tiene que haber una carga de datos inicial
//Crea un boton para generar una nueva ficha con datos aleatorios
//Pon algo de CSS

/*const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

fetch(
  "http://api.weatherapi.com/v1/current.json?key=c8d4496f232d401eab490537243101&q=spain&aqi=no"
)
  .then((res) => res.json())
  .then((data) => console.log(data));*/

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve(pos.coords);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

// getCurrentPosition()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
async function showCurrentPosition() {
  console.log("esperando coords");
  const pos = await getCurrentPosition();
  console.log(pos);
}
