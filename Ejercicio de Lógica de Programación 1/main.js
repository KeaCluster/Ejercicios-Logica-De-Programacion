
const btn = document.getElementById('btn');

const outputCont = document.getElementById('outCont');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
let minValue, middleValue, maxValue;

btn.addEventListener('click', (e) => {
    e.preventDefault();
    outputCont.classList.remove('hidden');
    [ minValue, middleValue, maxValue ] = document.getElementById('input').value.split(',');
    alert(middleValue);

    input.value = '';
})