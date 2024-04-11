const phrase = "La mejor forma de predecir el futuro es creándolo";

const ejercicio1 = (texto, posicion) => {
    const Array = texto.split(" ");
    if (posicion > Array.length){
        console.log ("Erros: El arreglo es mas pequeño que la posicion que indicaste");
    }
    else {
        const totalLetras = Array[posicion].length;
        console.log ("El total de lestras es:", totalLetras);
    }
}

const ejercicio2 = (texto, posicion) => {
    const Array = texto.split(" ");
    Array.splice(posicion,1, "'Nueva palabra'");
    const nuevaFrase = Array.join(" ");
    console.log ("La nueva frase es:", nuevaFrase);
}

const ejercicio3 = (texto) => {
    const fraseReverso = texto.split(" ").reverse().join(" ");
    console.log (fraseReverso);
}

const ejercicio4 = (text)=> {
    const arreglo = text.split(' ')
    const nuevoArreglo = []
    for (let i=0; i< arreglo.length;i++){
        if (arreglo[i].length<=3){
            arreglo.splice(arreglo[i],1)
        }
        nuevoArreglo.push(arreglo[i])
    }
    console.log (nuevoArreglo.join(' '));
}

//Llamada de funciones
ejercicio1(phrase, 1);
ejercicio2(phrase, 1);
ejercicio3(phrase);
ejercicio4(phrase);