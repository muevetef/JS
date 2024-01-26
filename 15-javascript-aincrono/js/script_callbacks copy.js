//CallStack..mirar debugger
// function firstFunction(){
//     console.log("On First function");
//     secondFunction();
// }

// function secondFunction(){
//     console.log("On Second function");
//     thirdFunction();
// }

// function thirdFunction(){
//     console.log("On third function")
// }

// firstFunction();

// let data;
// const timer1 = setTimeout(function () {
//   console.log("hola desde el callback");
//   data = "Ya estoy"
// }, 10000);

// function stopTimer1(){
//     console.log("Stop timer1");
//     clearTimeout(timer1);
// }

// const reloj = setInterval(() => {
//     console.log(Date.now());
// }, 1000);

// function stopReloj() {
//   console.log("Stop Reloj");
//   clearInterval(reloj);
// }

//CALLBACKS

const posts = [
  { title: "Pimer post", body: "Esto es el mi primer post" },
  { title: "Segundo post", body: "Esto es el mi segundo post" },
];
function addPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}

document.querySelector("button").addEventListener("click", () => {
  addPost(
    { title: "Tercer post", body: "Esto es el mi tercer post" },
    getPosts
  );
});

console.log("Hellooooo!");
