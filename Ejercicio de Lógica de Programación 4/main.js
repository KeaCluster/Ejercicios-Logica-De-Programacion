const btn = document.getElementById('btn');

const outputCont = document.getElementById('outCont');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    outputCont.classList.remove('hidden');
    const input = document.getElementById('input');
    const n = Number(input.value)-2;
    let fibSerie = [0, 1];
    for(let i=0; i < n; i++){
        fibSerie.push( fibSerie[fibSerie.length -1] + fibSerie[fibSerie.length-2]);
    };
    output1.textContent = `Primeros ${n + 2} términos de la serie de Fibonacci`;
    output2.textContent = fibSerie;
    input.value = '';
})