//Se piden numeros, se evaluan que sea tipo number y se guardan en una variable
let numberInput1 = prompt("Ingresa el primer numero: ");
let number1 = parseInt(numberInput1);
let numberInput2 = prompt("Ingresa el segundo numero: ");
let number2 = parseInt(numberInput2);
let numberInput3 = prompt("Ingresa el tercer numero: ");
let number3 = parseInt(numberInput3);

//Se hace la condicion si todos los numeros son iguales
if(number1 == number2 && number1 == number3){
    console.log("Los numeros son iguales");
}else if(number1 >= number2 && number1 >= number3){ //Condicion si numero1 es mayor que numero 2 y 3
    if(number2 >= number3){ //Si entra verifica si numero2 es mayor que numero 3
        //Se imprimen por consola numeros, primero de mayor a menor y despues de menor a mayor
        console.log("Mayor a menor: " + number1 + "," + number2 + "," + number3);
        console.log("Menor a mayor: " + number3 + "," +  number2 + "," + number1);
    }else{
        console.log("Mayor a menor: " + number1 + "," + number3 + "," + number2);
        console.log("Menor a mayor: " + number3 + "," + number3 + "," + number1);
    }
}else if(number2 >= number1 && number2 >= number3){ //Condicion si numero 2 es mayor que numero 3 y 1
    if(number1 >= number3){ //Si entra verifica si numero1 es mayor que numero 3
        //Se imprimen por consola numeros, primero de mayor a menor y despues de menor a mayor
        console.log("Mayor a menor: " + number2 + "," + number1 + "," + number3);
        console.log("Menor a mayor: " + number3 + "," + number1 + "," + number2);
    }else{
        console.log("Mayor a menor: " + number2 + "," + number3 + "," + number1);
        console.log("Menor a mayor: " + number1 + "," + number3 + "," + number2);
    }
}else {
    if(number1 >= number2){ //Si no se cumple entra a la condicion si numero 1 es mayor que numero 2
        //Se imprimen por consola numeros, primero de mayor a menor y despues de menor a mayor
        console.log("Mayor a menor: " + number3 + "," + number1 + "," + number2);
        console.log("Menor a mayor: " + number2 + "," + number1 + "," + number3);
    }else{
        console.log("Mayor a menor: " + number3 + "," + number2 + "," + number1);
        console.log("Menor a mayor: " + number1 + "," + number2 + "," + number3);
    }
}