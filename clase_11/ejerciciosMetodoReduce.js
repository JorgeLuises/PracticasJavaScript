let data = [
    ["Israel", "Salinas", 34],
    ["Charles", "Silva", 27],
    ["Naomi", "Lopez", 27],
    ["David", "Moranchel", 28],
  ];
  
  /*
      1. Necesitamos una lista con los nombres completos de las personas que se encuentran en la data
      2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista
      3.- Necesitamos reestructurar la data para que quede de la siguiente forma:
  
      let restructuredData = [
          {
              name:
              lastname:
              age
          }
      ]
  */
//Ejercicio 1:
const getFullName = (array) => array.reduce((accum, person) => [...accum, `${person[0]} ${person[1]}`], []);
console.log(getFullName(data));

//Ejercicio 2:
const conseguirEdadMayorYMenor = (array) => {
    let edadMayor = array.reduce((accum, persona) => persona[2] > accum ? persona[2] : accum, 0);
    let edadMenor = array.reduce((accum, persona) => persona[2] < accum ? persona[2] : accum, 100);
    console.log (`La edad mayor es: ${edadMayor}`);
    console.log (`La edad menor es: ${edadMenor}`);
};
conseguirEdadMayorYMenor(data);

//Ejercicio 3:
const reestructuracionDeArreglo = (array) => array.reduce((accum, persona) => 
[...accum, {name : persona[0], lastname: persona[1], age: persona[2]}], []);
console.log(reestructuracionDeArreglo(data));