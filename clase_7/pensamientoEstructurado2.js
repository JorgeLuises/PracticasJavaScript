/*2.- Necesitamos una ruleta de nombres, es decir, de una lista de nombres, debemos poder obtener algún nombre al azar. El nombre seleccionado debe ser eliminado de la lista original para poder volver a usar la ruleta. Cuando ya no haya nombres, debe avisar que ya no hay nombres en la lista.*/

const listaNombres = ['Pedro', 'Maria', 'German', 'Monica', 'Armando'];
const ruleta = (arreglo) => {
    for (let i= arreglo.length; i>0; i--){
        let valorRandom = Math.floor(Math.random()*arreglo.length);
        arreglo.splice(valorRandom, 1);
        console.log (arreglo);
    }
    console.log ("Ya no hay mas nombres en la ruleta");
}
ruleta(listaNombres);
