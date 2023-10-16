
const btn = document.getElementById('btn');

const outputCont = document.getElementById('outCont');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');

let secretNumber = Math.round( Math.random() * 100 );

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementById('input');

    if(input.value == secretNumber){
        outputCont.classList.remove('hidden');
        output1.textContent = `Felicidades adivinaste el número secreto!`
    } else {
        alert(`Intentalo de nuevo, ${input.value} no era el número secreto`)
    }


    input.value = '';
})