//traer una referéncia al canvas
const canvas = document.getElementById("myCanvas");

/**
 * @type {CanvasRenderingContext2D}
 *
 * */
const ctx = canvas.getContext("2d");

const GAME_W = 640;
const GAME_H = 360;

let isPlaying = true;
const player = {
  x: 10,
  y: GAME_H / 2 - 20,
  w: 40,
  h: 40,
  color: "#0000ff",
  vel: 2,
  currSpeed: {
    x: 0,
    y: 0,
  },
};
const enemies = [
  {
    x: 100,
    y: 100,
    w: 40,
    h: 40,
    color: "#ff0000",
    speedY: 1,
  },
  {
    x: 260,
    y: 100,
    w: 40,
    h: 40,
    color: "#ff0000",
    speedY: 2,
  },
  {
    x: 380,
    y: 100,
    w: 40,
    h: 40,
    color: "#ff0000",
    speedY: 0.5,
  },
  {
    x: 450,
    y: 100,
    w: 40,
    h: 40,
    color: "#ff0000",
    speedY: 1.8,
  },
];

function movePlayer() {
  console.log("Move start!!!");
  player.speedX = 2;
}
function stopPlayer() {
  console.log("Stop!!!");
  player.speedX = 0;
  player.speedY = 0;
}

canvas.addEventListener("mousedown", movePlayer);
canvas.addEventListener("mouseup", stopPlayer);

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    player.currSpeed.y = -player.vel;
  } else if (e.key === "ArrowDown") {
    player.currSpeed.y = player.vel;
  } else if (e.key === "ArrowLeft") {
    player.currSpeed.x = -player.vel;
  } else if (e.key === "ArrowRight") {
    player.currSpeed.x = player.vel;
  }
});
window.addEventListener("keyup", function (e) {
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    player.currSpeed.y = 0;
  }
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    player.currSpeed.x = 0;
  }
});
function update() {
  player.x += player.currSpeed.x;
  player.y += player.currSpeed.y;

  enemies.forEach(function (enemy) {
    //Mirar si hay colision con el player
    if (checkCollision(player, enemy)) {
      isPlaying = false;
      alert("GameOver!!!");
      window.location = "";
    }

    //Movemos el enemigo
    enemy.y += enemy.speedY;
    //Chequear la colisión con el borde inferior
    if (enemy.y + enemy.h >= GAME_H) {
      enemy.y = GAME_H - enemy.h;
      enemy.speedY = enemy.speedY * -1;
    } else if (enemy.y <= 0) {
      enemy.y = 0;
      enemy.speedY = enemy.speedY * -1;
    }
  });
}

function draw() {
  //Limpiar el canvas
  ctx.clearRect(0, 0, GAME_W, GAME_H);
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  // for (let i = 0; i < enemies.length; i++) {
  //   const enemy = enemies[i];
  //   ctx.fillStyle = enemy.color;
  //   ctx.fillRect(enemy.x, enemy.y, enemy.w, enemy.h);
  // }
  enemies.forEach(function (enemy) {
    ctx.fillStyle = enemy.color;
    ctx.fillRect(enemy.x, enemy.y, enemy.w, enemy.h);
  });
}

function step() {
  update();
  draw();
  if (isPlaying) {
    window.requestAnimationFrame(step);
  }
}

function checkCollision(rect1, rect2) {
  const colX = rect1.x + rect1.w > rect2.x && rect1.x < rect2.x + rect2.w;
  const colY = rect1.y + rect1.h > rect2.y && rect1.y < rect2.y + rect2.h;
  return colX && colY;
}
//paso inicial
step();
