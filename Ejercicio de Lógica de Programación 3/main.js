const btn = document.getElementById('btn');

const outputCont = document.getElementById('outCont');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    outputCont.classList.remove('hidden');
    const input = document.getElementById('input');
    let number = Number(input.value);
    let factorial = 1;
    for(let i=1; i<= number; i++){
        factorial *= i;
    }
    output1.textContent = `Factorial de ${input.value}: ${factorial}`
    input.value = '';
})