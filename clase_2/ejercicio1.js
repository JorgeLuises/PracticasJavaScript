//monto previsto
const ordenesPrevistas = 10;
//numero de ordenes
const ordenes = 17;
//Día del mes
const diaDelMes = 15;
//Función de ordenes
function proyectarCapacidad (){
    if (ordenes > ordenesPrevistas) {
        console.log ("Debes de incrementar las ordenes para el día siguiente");
    }
    else if (ordenes < ordenesPrevistas) {
        console.log ("Debes disminuir la capacidad de ordenes para el día siguiente");
    }
    else {
        console.log ("No es necesario aumentar o disminuir tus ordenes");
    }
}
//funcion de día
function diaParoImpar () {
    if ((diaDelMes % 2) === 0) {
        console.log ("El día del mes es par");
    }
    else {
        console.log ("El día del mes es impar");
    }
}
//prediccion de ordenes
function prediccion () {
    if (ordenes > ordenesPrevistas && (diaDelMes % 2) === 0) {
        console.log ("El día de hoy es par y tus ordenes son mayores a las previstas, deberías de considerar aumentar las ordenes hoy");
    }
    else if (ordenes > ordenesPrevistas && (diaDelMes % 2) === 1) {
        console.log ("El día del mes fue impar, pero la demanda fue mayor, el día de mañana debes de aumentar tus ordenes");
    }
}
//calculo del rendimiento del día
function rendimientoVentas () {
    const rendimiento = ordenesPrevistas - ordenes 
    if (rendimiento === 0) {
        console.log ("Cubriste todas las ordenes del día");
    }
    else if (rendimiento < 0) {
       console.log ("Te faltaron ordenes por realizar hoy");
    }
    else {
        console.log ("Hiciste ordenes de mas este día");
    }
}

//Llamar las funciones
proyectarCapacidad ();
diaParoImpar ();
prediccion ();
rendimientoVentas ();
