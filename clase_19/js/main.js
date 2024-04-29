//Funcion para traer la base de datos
const getPets = async () => {
    let answer = await fetch ("https://creacion-de-crud-f95e6-default-rtdb.firebaseio.com/Mascotas/.json");
    let mascotas = await answer.json();

    let keys = Object.keys(mascotas);

    let mascotasArray = keys.map((key) => {
        return {...mascotas[key], key};
    });
    console.log(mascotasArray);
    prinPet(mascotasArray, "pet-list");
};

//Funcion para subir un nuevo dato
const postPet = async (petObject) => {
    let answer = await fetch("https://creacion-de-crud-f95e6-default-rtdb.firebaseio.com/Mascotas/.json", 
    {
        method: "POST",
        body: JSON.stringify(petObject)
    });

    await answer.json();
    getPets()
};

//Función para eliminar un dato de la DB
const deleteItem = async(petKey) => {
    let answer = await fetch(`https://creacion-de-crud-f95e6-default-rtdb.firebaseio.com/Mascotas/${petKey}/.json`, 
    {
        method: "DELETE"
    });
    await answer.json();
};

//Función para editar un campo en la BD
const editItem = async (petKey, newData) => {
    let answer = await fetch(`https://creacion-de-crud-f95e6-default-rtdb.firebaseio.com/Mascotas/${petKey}/.json` , 
    {
        method: "PATCH",
        body: JSON.stringify(newData)
    });
    await answer.json();
}

//Evento para subir un nuevo elemento a la base de datos
let petBtn = document.getElementById("create-pet");

petBtn.addEventListener("click", async(event) => {
    event.preventDefault();
    let mascotaObject = {};
    let fields = document.querySelectorAll("#pet-form input");
    fields.forEach(({name, value}) => {
        mascotaObject[name] = value;
    });
    await postPet(mascotaObject);
    await getPets();
    fields.forEach((field) => (field.value = ""));
});

//Evento para guardar cambios editados de un objeto de la BD
let editBtn = document.getElementById("save-changes-btn");

editBtn.addEventListener("click" , async(event) =>{
    event.preventDefault();
    let key = event.target.dataset.petKey;
    let editmascotaObject = {};
    let editFields = document.querySelectorAll("#edit-pet-form input");
    editFields.forEach(({name, value}) => {
        editmascotaObject[name] = value;
    });
    await editItem(key, editmascotaObject);
    await getPets();
    editModal.hide();

})

//Creacion de un "li" para el DOM
const createPet = (petObject) => {
    let {petname, petOwner, petType, key, petage} = petObject;
    let petItem = document.createElement("li");
    petItem.classList.add("list-group-item", "d-flex", "justify-content-between", "text-start", "align-items-center", "gap-3");
    
    let petSpan = document.createElement("span");
    petSpan.classList.add("flex-grow-1");
    let petInfo = document.createTextNode(`Mascota: ${petname}, Dueño: ${petOwner}, Tipo de mascota: ${petType}`);
    petSpan.append(petInfo);

    //Creacion y asignando funcion de borrado
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger", "text-center");
    let deleteText = document.createTextNode("X");
    deleteBtn.append(deleteText);

    deleteBtn.addEventListener("click", async() =>{
        await deleteItem(key);
        await getPets();
    });

    //Creación y asignación de obtencion de datos para editar
    let editBtn = document.createElement("button");
    editBtn.classList.add("btn", "btn-primary", "text-center");
    editBtn.innerHTML = "&#x270E;";

    editBtn.addEventListener("click", () => {
        document.getElementById("edit-petname").value = petname;
        document.getElementById("edit-petage").value = petage;
        document.getElementById("edit-pettype").value = petType;
        document.getElementById("edit-petowner").value = petOwner;
        document.getElementById("save-changes-btn").dataset.petKey = key;
        editModal.show();
    })

    petItem.append(petSpan, deleteBtn, editBtn);
    return petItem;
};

//Impresion del elemento al DOM
const prinPet = (array, container) => {
    let contenedor = document.getElementById(container);

    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }

    array.forEach((mascota) => {
        contenedor.append(createPet(mascota));
    });
};

//Codigo para mandar a llamar una modal en JS
const editModal = new bootstrap.Modal(
    document.getElementById("edit-pet-modal")
  );

getPets();