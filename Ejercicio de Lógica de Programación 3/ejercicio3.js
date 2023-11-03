let numero;

// Se utiliza un bucle "do-while" para asegurarse de que el usuario ingrese un número válido.
do {
    numero = parseInt(prompt("Ingrese un numero:"));
    // Se verifica si el valor ingresado no es un número.
    if(isNaN(numero)){
        alert("Valor invalido");
    }else{
        break; // Si es un número válido, se sale del bucle.
    }
} while (isNaN(numero)); // El bucle se repite mientras el valor no sea un número válido.

let factorial = 1;
// Se utiliza un bucle "for" para calcular el factorial del número ingresado.
for(let i = 2; i<=numero; i++){
    factorial = i * factorial; // Se calcula el factorial multiplicando "factorial" por "i".
}
// Se muestra el resultado del factorial en la consola.
console.log(`El factorial de ${numero} es: ${factorial}`);
