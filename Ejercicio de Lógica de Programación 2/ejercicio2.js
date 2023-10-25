let Celcius;
do { //Se realiza un doWhile para volver a solicitar el numero en caso de un valor no valido
    let verificacion1 = prompt("Ingresa la temperatura en grados Celcius");
    Celcius = parseInt(verificacion1); // Se verifica si es numero entero
    if (isNaN(Celcius)) {
        //Si no es un numero saldra alert
        alert("Valor no valido");
    }else{
        break;
    }
} while (isNaN(Celcius)); //Se realizara todo lo de "do" mientras que Celcius no sea un numero

let Farenheit = ((Celcius * 9/5) + 32); // De Celcius a Farenheit
let Kelvin = (Celcius + 273.15); // De Celcius a Kelvin

//imprime valor ingresado y cambiado a Farenheit y Kelvin
console.log(`Grados Celcius ingresados: ${Celcius}°C`);
console.log(`Grados Fahrenheit: ${Farenheit}°F`);
console.log(`Grados Kelvin: ${Kelvin}°K`);