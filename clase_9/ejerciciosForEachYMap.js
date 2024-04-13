/*
    1.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos )
    2.- Necesitamos conocer la cantidad de canes que ya estan vacunados
    3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el siguiente formato:
        "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "
    4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista
    5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a "Si", si el valor viene en false, cambiarlo a "No")
    6.- Necesitamos una nueva lista con únicamente el nombre de cada can
*/
const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      direccion: {
        calle: "Calle del Parque",
        numero: 23,
        colonia: "San José",
        codigoPostal: 78900,
      },
    },
    {
      nombre: "Bella",
      tipo: "Perro",
      edad: 6,
      vacunado: true,
      direccion: {
        calle: "Avenida Libertad",
        numero: 56,
        colonia: "El Bosque",
        codigoPostal: 78500,
      },
    },
    {
      nombre: "Max",
      tipo: "Perro",
      edad: 3,
      vacunado: false,
      direccion: {
        calle: "Callejón del Puente",
        numero: 12,
        colonia: "Villa Hermosa",
        codigoPostal: 78850,
      },
    },
    {
      nombre: "Rocky",
      tipo: "Perro",
      edad: 2,
      vacunado: false,
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];

//Ejercicio 1:
const transformacionDeEdad = (canesArray) => {
  let newArray = canesArray.map((can) => {
    let infoCan =  {...can};
    infoCan.edad= infoCan.edad * 7;
    return infoCan;
  });
  console.log(newArray);
}
transformacionDeEdad(canes);

//Ejercicio 2:
const perrosVacunados = (canesArray) => {
  let vacunados = 0;
  canesArray.forEach((can) => {
    if (can.vacunado === true){
      vacunados+= 1;
    }
  });
  console.log(vacunados);
}
perrosVacunados(canes);

//Ejercicio 3:
const nombreYDireccionDePerros = (canesArray) => canesArray.map((cane) => {
    let datosDelPerro = `${cane.nombre}: ${cane.direccion.calle}, #${cane.direccion.numero}, ${cane.direccion.colonia}, ${cane.direccion.codigoPostal}`;
    return datosDelPerro;
  });
let datosDelPerro = nombreYDireccionDePerros(canes);
console.log (datosDelPerro);

//Ejercicio 4:
const edadPromedio = (canesArray) => {
  let sumatoriaEdad = 0;
  canesArray.forEach((can) => sumatoriaEdad += can.edad);
  return sumatoriaEdad / canesArray.length;
}
let promedioDeEdad = edadPromedio (canes);
console.log (promedioDeEdad);

//Ejercicio 5:
const cambioDeDatosDeVacuna = (canesArray) => {
  let nuevoArray = canesArray.map((cane) => {
    if (cane.vacunado === true) {
      let infoCan=  {...cane};
      infoCan.vacunado= "si";
      return infoCan;
    }
    else if (cane.vacunado === false) {
      let infoCan=  {...cane};
      infoCan.vacunado= "no";
      return infoCan;
    }
  });
  console.log (nuevoArray);
}
cambioDeDatosDeVacuna(canes);

//Ejercicio 6:
const nombresDePerros = (canesArray) => {
  let arrayDeNombres = canesArray.map((cane) => cane.nombre)
  console.log (arrayDeNombres);
}
nombresDePerros(canes);