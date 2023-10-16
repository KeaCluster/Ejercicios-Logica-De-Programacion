
const btn = document.getElementById('btn');

const outputCont = document.getElementById('outCont');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementById('input');
    const temp = Number(input.value);
    outputCont.classList.remove('hidden');
    output1.textContent = `Farenheit: ${(temp * 1.8) + 32}`
    output2.textContent = `Celcius: ${temp + 273.15}`;
    input.value = '';
})