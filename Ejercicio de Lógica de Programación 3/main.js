const btn = document.getElementById('btn');

const outputCont = document.getElementById('outCont');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const pattern = /^\d+$/;

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementById('input');

    if (!pattern.test(input.value)) {
      alert("El valor ingresado debe ser un número!");
      input.value = "";
    } else {
      let factorial = 1;
      outputCont.classList.remove("hidden");
      
      for (let i = 1; i <= input.value; i++) {
        factorial *= i;
      }
      output1.textContent = `Factorial de ${input.value}: ${factorial}`;
      input.value = "";
    }
    
})