const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Mortadelo", age: 80 });
  }, 1000);
});

//promise.then((data) => console.log(data));

async function getPromise() {
  console.log("En la funcion async!!");
  const data = await promise;
  console.log(data);
  console.log("Despues del await");
}

// getPromise();
// console.log("Flujo normal!!");

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  //forzamos un error
  throw new Error("Hello!!!!");
  console.log(data);
};

//getPosts().catch((error) => console.log(error));

//Try catch

// try {
//   console.log(x);
// } catch (error) {
//   console.log(error);
// }

function double(num) {
  if (isNaN(num)) {
    throw new Error(num + " no és un numero");
  }
  return num * 2;
}

try {
  const y = double("hola");
  console.log(y);
} catch (err) {
  console.log(err);
} finally {
  console.log("Finalmente...");
}

//async-await con captura de errores
const getUsers = async () => {
  try {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await fetch("https://httpstat.us/500");
    if (!response.ok) {
      throw new Error("Petición fallida");
    }

    const datos = await response.json();
    console.log(datos);
  } catch (err) {
    console.log(err);
  }
};

getUsers();

//Pasar el 03-promesas a async-await
