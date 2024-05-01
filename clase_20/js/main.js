let loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", (event)=> {
    event.preventDefault();
    const username = document.getElementById("ingresoUsuario").value;
    const password = document.getElementById("ingresoContraseña").value;

    const user = {
        username,
        password,
    };
    localStorage.setItem("usuario", JSON.stringify({user}));
    userSaved();
});

const showAlert = (user) => {
    const loginForm = document.getElementById("login-form");
    const welcome = document.getElementById("bienvenida");
    if (user){
        loginForm.classList.add("d-none");
    }
};

const userSaved = () => {
    let saved = JSON.parse(localStorage.getItem("usuario"));
    showAlert(saved);
};

userSaved();

