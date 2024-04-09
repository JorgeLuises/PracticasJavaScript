//Ejercicio 1
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filtrados = numeros.filter (numero => numero % 2 === 0);
console.log (filtrados);

//Ejercicio 2
let calculaAreaCirculo = (radio) => 3.1415 * (radio**2);
const radio = 5;
console.log ("El radio del circulo es:", calculaAreaCirculo(radio));

//Ejercicio 3
const nombres = ['Juan', 'María', 'Carlos', 'Ana'];
console.log (nombres.join(", "));