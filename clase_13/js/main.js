let koders = [
    {
        name: "Carlos",
        lastname: "Santana"
    },
    {
        name: "Jim",
        lastname: "Torres"
    },
    {
        name: "Maria",
        lastname: "De los Angeles"
    },
    {
        name: "Patricia",
        lastname: "Diaz"
    }
];

let listado = document.createElement("ol");
listado.classList.add(".aperturaDeLista");

const creatNewElementeList = (alumno) => {
    let elemento = document.createElement("li");
    elemento.classList.add("elementoDeLista");
    let textoDelElemento = document.createTextNode(`${alumno.name} ${alumno.lastname}`);
    elemento.append(textoDelElemento);

    return elemento;
}

koders.forEach((koder) => {
    let alumno = creatNewElementeList(koder);
    listado.append(alumno);
});

let divDeListado = document.getElementById("cardWrapper");
cardWrapper.append(listado);