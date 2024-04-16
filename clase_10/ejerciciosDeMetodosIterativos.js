const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      pais: "México",
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
      pais: "México",
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
      pais: "Colombia",
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
      pais: "Ecuador",
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];
  
  /*
      1.- Necesito conocer la edad promedio de todos los perros
      2.- Necesito obtener una lista de perros basados en el país al que pertenecen
      3.- Necesito una lista de los códigos postales de los perros
      4.- Necesito una lista que contenga la lista de países a los que pertenecen los perros, pero sin repetidos
      */
//Ejercicio 1:
const edadPromedioPerros = (canesArray) => {
    let sumatoria = 0;
    canesArray.forEach((perro) => sumatoria += perro.edad)
    return sumatoria / canesArray.length;
}
let resultado = edadPromedioPerros(canes);
console.log ("El promedio de edad es: ", resultado);

//Ejercicio 2:
const paisDelPerro = (canesArray) => {
    let paisOrigen = canesArray.reduce((accum, perro) => {
        if (perro.pais === "México") {
            return {...accum, México: [...accum.México, perro]};
        }
        else if (perro.pais === "Colombia") {
            return {...accum, Colombia: [...accum.Colombia, perro]};
        }
        else if (perro.pais === "Ecuador") {
            return {...accum, Ecuador: [...accum.Ecuador, perro]};
        }
        else {
            console.log("Ese nacionalidad del perro, no corresponde a ninguno de los tres arreglos");
        }
        
    }, {
        México : [],
        Colombia : [],
        Ecuador : [],
    });
    return paisOrigen;
};
console.log(paisDelPerro(canes));

//Ejercicio 3:
const codigosPostales = (canesArray) => {
    let codigoPostalPerro = canesArray.map((perro) => perro.direccion.codigoPostal);
    console.log(codigoPostalPerro);
}
codigosPostales(canes);

//Ejercicio 4:
const paisesDePerros = (canesArray) => {
    let paises = [];
    canesArray.forEach((perro) => {
        if (perro.pais != paises) {
            paises.push(perro.pais)
        }
    });
    console.log(paises);
}
paisesDePerros(canes);