/*1.- Necesitamos poder entregar las iniciales del nombre de una persona, considerando únicamente primer nombre, apellido paterno y apellido materno
input => Israel Salinas Martínez
output => I. S. M.*/

const nombre = "Jorge";
const apellidoParterno = "Escobedo";
const apellidoMaterno = "Solana";

const impresionDeIniciales = (nombre, apellidoPaterno, apellidoMaterno) =>{
    const arregloNombre = nombre.split("").slice(0, 1);
    const arregloApellidoPaterno = apellidoPaterno.split("").slice(0, 1);
    const arregloApellidoMaterno = apellidoMaterno.split("").slice(0, 1);
    console.log (arregloNombre + ". "+ arregloApellidoPaterno+ ". "+ arregloApellidoMaterno+ "."); 
}
impresionDeIniciales(nombre, apellidoParterno, apellidoMaterno);
