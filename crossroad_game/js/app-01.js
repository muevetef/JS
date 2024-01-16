//traer una referncia al canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
console.log(ctx);

ctx.fillStyle = "rgb(200, 0, 200)";
ctx.fillRect(60, 40, 30, 30);

ctx.fillStyle = "rgb(100, 100, 200)";
ctx.fillRect(60, 100, 100, 30);

//Dibujar circulos
ctx.fillStyle = "#ff0000";
ctx.beginPath();
ctx.arc(30, 30, 10, 0, 2 * Math.PI);
ctx.fill();
