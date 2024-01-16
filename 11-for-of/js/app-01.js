const users = [
  { id: 1, name: "Pablo" },
  { id: 2, name: "María" },
  {
    id: 3,
    name: "Inés",
    hobbies: ["Pintar", "Deporte", "Viajar", "Jugar a cosas"],
  },
];
// for (let i = 0; i < users.length; i++) {
//   const user = users[i];
//   console.log(user);
// }

for (const user of users) {
  console.log(user);
}

const str = "Hello world!";
for (const letra of str) {
  console.log(letra);
}

const map = new Map();
map.set("name", "Jorge");
map.set("age", 30);

console.log(map.get("name"));
for (const elemento of map) {
  console.log(elemento);
}

//For in recorre objetos
const color = {
  c1: "rojo",
  c2: "blue",
  c3: "red",
};

for (const clave in color) {
  console.log(clave, color[clave]);
}
const items = ["libro", "boli", "lapiz", "goma"];
for (const key in items) {
  console.log(items[key]);
}

users.forEach((user) => {
  if (Object.keys(user).includes("hobbies")) {
    console.log(`${user.name} tiene los siguientes hobbies:`);
    user.hobbies.forEach((hobbie) => {
      console.log(hobbie);
    });
  } else {
    console.log(user.name + " no tiene hobbies");
  }
});

class Ruleta {
  constructor(num) {
    this.num = num;
    this.numsArray = [];
    this.fillNums();
  }
  fillNums() {
    for (let i = 0; i < this.num; i++) {
      this.numsArray[i] = i + 1;
    }
  }
  getNumsArray() {
    return this.numsArray;
  }
  getOneNum() {
    const index = Math.floor(Math.random() * this.numsArray.length);
    return this.numsArray.splice(index, 1)[0] ?? -1;
  }
}

const ruleta = new Ruleta(20);
for (let i = 0; i < 20; i++) {
  console.log(ruleta.getNumsArray());
  console.log(ruleta.getOneNum());
}
