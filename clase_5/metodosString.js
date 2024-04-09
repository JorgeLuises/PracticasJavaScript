const phrase = "La mejor forma de predecir el futuro es creándolo";
 
/*ejercicio 1: Saber cuántos carcateres tiene la frase
    Procedimiento:
    1.- Guardar la frase en una variable
    2.- Crear la función que permita introducir una variable
    3.- Utilizar el metodo lenght para contabilizar los caracteres alamcenados en la variable */
const longitudFrase= (phrase) => console.log (phrase.length);

/*ejercicio 2
1.- Reutilizar la variable "phrase" en una nueva función
2.- Realizar una función que permita contar la longitud de la variable, sin tomar en cuenta los espacios dentro de la frase
3.- Unir la frase en una sola, sin dejar espacios dentro del string
4.- Realizar el conteo de letras que hay en la frase*/
const sinEspacios = (phrase) => {
    const newPhrase = phrase.split(" ").join("");
    console.log (newPhrase.length);
}

/*ejercicio 3
1.- Reutilizar la variable "phrase" en una nueva función
2.- Crear una funcion para contar las palabras que hay dentro del string
3.- Separar la frase por palabra
4.- Contar cada palabra, se realiza la suma cuando la plabra encuentre un espacio*/
const conteoPorPalbra = (phrase) => {
    const newPhrase = phrase.split(" ");
    console.log (newPhrase.length);
}

/*ejercicio 4 
1.- Reutilizar la variable "phrase" en una nueva función
2.- Crear la función para convertir la frase en mayusculas*/
const fraseMayusculas = (phrase) => console.log (phrase.toUpperCase());

/*ejercicio 5
1.- Reutilizar la variable "phrase" en una nueva función
2.- Crear una funcion para remplazar un caracter en especifico en otro caracter especificio
3.- Reemplzar las letras "a" por "4"
4.- Identificar dentro de la frase las lestras "a"
5.- Indicar que esas letras van a ser reemplzadas por un "4"*/
const fraseConCuatros = (phrase) => console.log (phrase.replace(/a/g, "4"));

//Llamado de funciones
longitudFrase (phrase);
sinEspacios(phrase);
conteoPorPalbra(phrase);
fraseMayusculas(phrase);
fraseConCuatros(phrase);
