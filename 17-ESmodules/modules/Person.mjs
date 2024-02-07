const privatetxt = "Texto privado";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, me llamo ${this.name}
        y tengo ${this.age} años.`);
  }

  mostrarTextoPrivado() {
    console.log(privatetxt);
  }
}

export default Person;
