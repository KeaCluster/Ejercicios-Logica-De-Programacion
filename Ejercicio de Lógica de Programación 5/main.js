const btn = document.getElementById('btn');

const outputCont = document.getElementById('outCont');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const pattern = /^\d+$/;

let secretNumber = Math.round( Math.random() * 100 );
console.log(secretNumber);
let entries = [];

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementById('input');
    if(!pattern.test(input.value)){
        alert("Debe ingresar un número!");
        input.value = '';
    } else {
        entries.push(input.value);
        outputCont.classList.remove('hidden');
        input.value == secretNumber ? output1.textContent = "Felicidades adivinaste el número secreto" : alert(`Intentalo de nuevo, ${input.value} no era el número secreto`);
        output2.textContent = `Intentos: ${entries}`;
    }
    input.value = '';
})