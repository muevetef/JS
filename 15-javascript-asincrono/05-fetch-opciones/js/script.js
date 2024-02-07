const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(apiUrl + "?_limit=1")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => {
        console.log(todo);
      });
    });
};

const createTodo = () => {
  const todo = {
    title: "Llamar a Mario Bross",
    completed: false,
  };

  fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(todo),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};

const updateTodo = (id) => {
  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify({ id: 1, title: "hola", userId: 1, completed: true }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};

const getTodo = (id) => {
  fetch(`${apiUrl}/${id}`)
    .then((res) => res.json())
    .then((todo) => {
      console.log(todo);
    });
};
