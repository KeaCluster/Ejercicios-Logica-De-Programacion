let number;

// Se utiliza un bucle "do-while" para asegurarse de que el usuario ingrese un número válido.
do {
    // Se muestra un cuadro de diálogo para que el usuario ingrese un número y se convierte a entero usando parseInt.
    number = parseInt(prompt("Ingrese un numero: "));
    // Se verifica si el valor ingresado no es un número.
    if(isNaN(number)){
        alert("Valor invalido");
    }else{
        break;// Si es un número válido, se sale del bucle.
    }
} while (isNaN(number)); // El bucle se repite mientras el valor no sea un número válido.

// Declara Array y se inicializa con los dos primeros números de la serie Fibonacci.
let Array = [0,1];
let fibonacci;

// Se utiliza un bucle "for" para calcular la serie de Fibonacci hasta el número ingresado.
for(let i = 2; i <number; i++){
    // Se calcula el siguiente número de la serie sumando los dos números anteriores.
    fibonacci = Array[i-2] + Array[i-1];
    Array.push(fibonacci); // Se agrega el número calculado al array.
}
// Se muestra el array que contiene la serie de Fibonacci en la consola.
console.log(`La serie fibonacci de ${number} es: ${Array}`);
