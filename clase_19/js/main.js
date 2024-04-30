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
});
getPets();

import { postPet, getPets, editItem} from "./modulos/moduloApi/apis.js";
import { editModal } from "./modulos/DOM/domElements.js";