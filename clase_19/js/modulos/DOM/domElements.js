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

export {
    createPet,
    prinPet,
    editModal,
};

import { deleteItem, getPets, } from "../moduloApi/apis.js";
