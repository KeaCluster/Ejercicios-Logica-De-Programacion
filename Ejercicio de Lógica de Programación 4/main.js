const btn = document.getElementById("btn");

const outputCont = document.getElementById("outCont");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
let fibSerie = [0, 1];
const pattern = /^\d+$/;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.getElementById("input");
  if (!pattern.test(input.value)) {
    alert("Debe ingresar un número!");
    input.value = "";
  } else {
    const n = Number(input.value) - 2;
    for (let i = 0; i < n; i++) {
      fibSerie.push(
        fibSerie[fibSerie.length - 1] + fibSerie[fibSerie.length - 2]
      );
    }
    outputCont.classList.remove("hidden");
    output1.textContent = `Primeros ${n + 2} términos de la serie de Fibonacci`;
    output2.textContent = fibSerie;
    input.value = "";
  }
});
