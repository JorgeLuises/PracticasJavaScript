const users = [
    {
      name: "Alice",
      lastname: "Johnson",
      age: 28,
      gender: "Female",
      country: "USA",
    },
    {
      name: "Bob",
      lastname: "Smith",
      age: 32,
      gender: "Male",
      country: "Canada",
    },
    {
      name: "Carlos",
      lastname: "Gomez",
      age: 24,
      gender: "Male",
      country: "Mexico",
    },
    {
      name: "Daniela",
      lastname: "Martinez",
      age: 30,
      gender: "Female",
      country: "Colombia",
    },
    {
      name: "Erik",
      lastname: "Svensson",
      age: 29,
      gender: "Male",
      country: "Sweden",
    },
    {
      name: "Fiona",
      lastname: "O'Donnell",
      age: 35,
      gender: "Female",
      country: "Ireland",
    },
    {
      name: "Gautam",
      lastname: "Patel",
      age: 27,
      gender: "Male",
      country: "India",
    },
    {
      name: "Hana",
      lastname: "Kim",
      age: 22,
      gender: "Female",
      country: "South Korea",
    },
    {
      name: "Ivan",
      lastname: "Petrov",
      age: 34,
      gender: "Male",
      country: "Russia",
    },
    {
      name: "Julia",
      lastname: "Santos",
      age: 25,
      gender: "Female",
      country: "Brazil",
    },
  ];
  
  /*
      1.- Necesitamos una lista con únicamente los nombres completos de cada usuario
      2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"
      3.- Necesitamos una lista con únicamente aquellos usuarios con género "Female"
      4.- Necesitamos saber la edad promedio de los usuarios
      5.- Necesitamos saber la mayor edad
      6.- Necesitamos saber la menor edad
  */

//Ejercicio 1:
let userNames = [];
const listaDeNombres = (arreglo) => {
    for (i= 0; i<arreglo.length; i++){
        let FullName = arreglo[i]["name"] + " " + arreglo[i]["lastname"];
        userNames.push(FullName);
    }
    console.log(userNames);
}
listaDeNombres(users);

//Ejercicio 2:
let maleUsers = [];
const usuariosMasculinos = (arreglo) => {
    for (i= 0; i<arreglo.length; i++){
        if (arreglo[i]["gender"] === "Male") {
            maleUsers.push(arreglo[i]);
        }
    }
    console.log (maleUsers);
}
usuariosMasculinos(users);

//Ejercicio 3:
let femaleUsers = [];
const usuariosFemeninos = (arreglo) => {
    for (i= 0; i<arreglo.length; i++){
        if (arreglo[i]["gender"] === "Female") {
            femaleUsers.push(arreglo[i]);
        }
    }
    console.log (femaleUsers);
}
usuariosFemeninos(users);

//Ejercicio 4:
let promedio = 0;
let promedioSindecimales = 0;
const edadPromedio = (arreglo) =>{
    for (i= 0; i<arreglo.length; i++){
        promedio += (arreglo[i]["age"] / arreglo.length);
    }
    promedioSindecimales = Math.trunc(promedio);
    console.log ("La edad promedio entre usuarios es:", promedioSindecimales);
}
edadPromedio(users);

//Ejercicio 5:
let edadMayorActual = 0;
let edadMayor = 0;
const mayorDeEdad = (arreglo) => {
    for (i= 0; i<arreglo.length; i++){
        edadMayorActual = arreglo[i]["age"];
        if (edadMayorActual>edadMayor){
            edadMayor = edadMayorActual;
        }
    }
    console.log ("La edad mayor es:", edadMayor);
}
mayorDeEdad(users);

//Ejercicio 6:
let edadMenorActual = 0;
let edadMenor = users[0]["age"];
const menorDeEdad = (arreglo) => {
    for (i= 0; i<arreglo.length; i++){
        edadMenorActual = arreglo[i]["age"];
        if (edadMenorActual< edadMenor){
            edadMenor = edadMenorActual;
        }
    }
    console.log ("La edad menor es:", edadMenor);
}
menorDeEdad(users);