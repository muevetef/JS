const global = {
  currentPage: window.location.pathname,
  api: {
    apiURL: "http://10.10.1.10",
  },
};

const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);
const errors = [];

const form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

function displayRegister() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateRegisterForm()) {
      const user = {
        name: username.value,
        email: email.value,
        password: password.value,
      };
      console.log(register(user));
      window.location = "/login.html";
      console.log("Enviamos los datos con fetch...");
    } else {
      console.log("El form no es valido");
    }
  });
}

function register(user) {
  fetch("http://10.10.1.10:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      //si estado 201 registro ok, si estado 400 ya existe
      if (response.status === 200) {
        console.log("El usuario ya existe!");
      } else if (response.status === 201) {
        console.log("User registered successfully");
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

function validateRegisterForm() {
  const username = id("username"),
    email = id("email"),
    password = id("password");
  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
  return errors.every((error) => error === true);
}

function displayLogin() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateLoginForm()) {
      const user = {
        email: email.value,
        password: password.value,
      };
      const u = login(user.email, user.password);
      console.log(u);
      console.log("Enviamos los datos con fetch...");
    } else {
      console.log("El form no es valido");
    }
  });
}

function login(email, password) {
  fetch("http://10.10.1.10:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to login");
      }
    })
    .then((data) => {
      const token = data.token;
      console.log(data);

      //TODO guardar rl tokern el local storage
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
      //Redireccionar a index.html
      window.location = "index.html";
    })
    .catch((error) => console.error("Error:", error));
}

function validateLoginForm() {
  const email = id("email"),
    password = id("password");
  engine(email, 0, "Email cannot be blank");
  engine(password, 1, "Password cannot be blank");
  return errors.every((error) => error === true);
}

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";

    errors[serial] = false;
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";

    errors[serial] = true;
  }

  console.log(errors);
};

function displayIndex() {
  const logout = document.querySelector("#logout");
  const tabla = document.querySelector("#users tbody");

  logout.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location = "login.html";
  });

  let _token = null;
  if (localStorage.getItem("token")) {
    _token = localStorage.getItem("token");
  }
  if (_token) {
    getAllUsers(_token)
      .then((data) => {
        let tablaHTML = "";
        data.users.forEach((user) => {
          tablaHTML += `
                      <tr>
                        <td>${user._id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                      </tr>
                      `;
        });
        return tablaHTML;
      })
      .then((text) => {
        tabla.innerHTML = text;
      });
  } else {
    window.location = "login.html";
  }
}

function getAllUsers(token) {
  return new Promise((resolve, reject) => {
    fetch("http://10.10.1.10:3000/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch users");
        }
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        reject(error);
      });
  });
}

function init() {
  console.log(global.currentPage);
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      displayIndex();
      break;
    case "/register.html":
      displayRegister();
      break;
    case "/login.html":
      displayLogin();
      break;
  }
}

document.addEventListener("DOMContentLoaded", init);
