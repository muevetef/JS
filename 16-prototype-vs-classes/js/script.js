// function Rectangulo(_name, _width, _height) {
//   this.name = _name;
//   this.width = _width;
//   this.height = _height;
//   //   this.area = function () {
//   //     return this.width * this.height;
//   //   };
// }

// Rectangulo.prototype.area = function () {
//   return this.width * this.height;
// };

// const rectA = new Rectangulo("rectA", 10, 10);

// const rectB = new Rectangulo("rectB", 20, 30);

// console.dir(rect);

//Con CLasses

class Shape {
  constructor(_name) {
    this.name = _name;
  }

  logName() {
    console.log("Nombre de la figura " + this.name);
  }
}

class Rectangulo extends Shape {
  constructor(_name, _width, _height) {
    super(_name);
    this.width = _width;
    this.height = _height;
  }

  area = function () {
    return this.width * this.height;
  };
}

const rectA = new Rectangulo("rectA", 10, 10);

const rectB = new Rectangulo("rectB", 20, 30);
