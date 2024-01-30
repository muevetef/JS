const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Tarea asíncrona completada!!");
    resolve();
  }, 1000);
});

promise.then(() => {
  console.log("Promesa consumida!");
});

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (error) {
      reject("Algo ha ido mal...");
    } else {
      resolve({ name: "Pepe", age: 30 });
    }
  }, 2000);
});

getUser
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("La promesa se ha resuelto o rechazado!!"));
