const input = document.getElementById('input');
const btn = document.getElementById('btn');

const outputCont = document.getElementById('outCont');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    outputCont.classList.remove('hidden');



    input.value = '';
})