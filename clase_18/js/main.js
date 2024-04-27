let arregloInputs = document.querySelectorAll("#user-form input");
let guardarUsuario = document.getElementById("safe-user");
const db = "https://clase-de-javascript-kodemia-default-rtdb.firebaseio.com/Koders/.json";
let usuarios = [];

guardarUsuario.addEventListener("click", (event) => {
    event.preventDefault();
    let usuario = {};
    arregloInputs.forEach((input) => {
        usuario[input.name] = input.value;
        input.value = "";
    });
    usuarios = [...usuarios, usuario];
    console.log(usuarios);

    showUser(usuarios, "usersSpace");
    postKoder(usuario);
});

const createUser = (userObject) => {
    let {nombre, apellido, correo} = userObject;
    
    let userContainer = document.createElement("div");
    userContainer.classList.add("koder-item", "border", "border-1", "shadow", "p-3",  "mb-5",  "mt-4", "bg-body");

    let userName = document.createElement("p");
    userName.classList.add("usuario");
    let textName = document.createTextNode(`Nombre: ${nombre}`);
    userName.append(textName);

    let userLastname = document.createElement("p");
    userLastname.classList.add("apellidos");
    let textLastname = document.createTextNode(`Apellidos: ${apellido}`);
    userLastname.append(textLastname);

    let userMail = document.createElement("p");
    userMail.classList.add("mail");
    let textMail = document.createTextNode(`Correo: ${correo}`);
    userMail.append(textMail);

    userContainer.append(userName, userLastname, userMail);
    
    return userContainer;
};

const showUser = (array, containerId) => {
    let filter = document.getElementById(containerId);

    while (filter.firstChild) {
        filter.removeChild(filter.firstChild);
    }

    array.forEach((userObject) => filter.append(createUser(userObject)));
};

const getKoders = async() => {
    let respuesta = await fetch(db);
    let koders = await respuesta .json(); 
}

const postKoder = async (userObject) => {
    let response = await fetch(db , {
        method: "POST",
        body: JSON.stringify(userObject)
    });
    let data = await response.json();
};