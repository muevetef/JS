//traer una referéncia al canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const rect = {
  x: 100 - 15,
  y: 100 - 15,
  w: 10,
  h: 10,
  color: "#ff0000",
  speed: 6,
};

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}

function getRandomColor() {
  const color = {
    red: getRandomNumber(),
    green: getRandomNumber(),
    blue: getRandomNumber(),
    toStringRGB: function () {
      return `rgb(${this.red},${this.green},${this.blue})`;
    },
  };

  return color.toStringRGB();
}
function getRandomDir() {
  return Math.random() * 2 - 1;
}
function update() {
  rect.color = getRandomColor();

  rect.x += rect.speed * getRandomDir();
  rect.y += rect.speed * getRandomDir();
}

function draw() {
  ctx.fillStyle = rect.color;
  ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
}

function step() {
  update();
  draw();
  window.requestAnimationFrame(step);
}
//paso inicial
step();
