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
};

export {
    getPets,
    postPet,
    deleteItem,
    editItem,
};

import { prinPet } from "../DOM/domElements.js";
