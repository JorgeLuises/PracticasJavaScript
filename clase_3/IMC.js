//Programa que calcula el indice de masa corporal (IMC)
const pesoKilos = 73;
const alturaMetros = 1.89;

function calculaIMC (peso, altura) {
    let imc = peso / (altura**2);
    return imc;
}
function resultadoIMC (imc) {
    if (isNaN(imc)) {
        console.log ("Error: los valores iniciales no son válidos");
    }
    else if (imc < 18.85) {
        console.log ("!!Cuidado¡¡, te encuentras con bajo peso");
    }
    else if (imc >= 18.85 && imc < 24.9){
        console.log ("!!Felicidades¡¡, te encuentras con peso saludable");
    }
    else if (imc >= 25 && imc < 29.9) {
        console.log ("!!Cuidado¡¡, te encuentras con sobrepeso");
    }
    else {
        console.log ("!!Cuidado¡¡, cuentas con obesidad");
    }
}

//Llamado de funciones
resultadoIMC (calculaIMC(pesoKilos, alturaMetros));
