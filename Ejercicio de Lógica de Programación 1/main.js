const btn = document.getElementById("btn");

const outputCont = document.getElementById("outCont");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
let minValue, middleValue, maxValue;
const pattern = /^\d+$/;

//Validacion de la entrada
const isInputvalid = (arr) => {
  let isValid = true;
  arr.forEach((number) => {
    if (!pattern.test(number)) {
      isValid = false;
    }
  });
  return isValid;
};

//Funcion para ordenar los números de menor a menor
function sortNumbers(inputArr) {
  [minValue, middleValue, maxValue] = inputArr;

  if (minValue > middleValue) {
    [middleValue, minValue] = [minValue, middleValue];
  }

  if (middleValue > maxValue) {
    [maxValue, middleValue] = [middleValue, maxValue];
  }

  if (minValue > middleValue) {
    [middleValue, minValue] = [minValue, middleValue];
  }
  let sortedArray = [minValue, middleValue, maxValue];

  return sortedArray;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputArray = document.getElementById("input").value.split(",");
  
  if (!isInputvalid(inputArray)) {
    alert("El programa solo acepta números");
    input.value = "";
  } else {
    if (inputArray[0] == inputArray[1] && inputArray[1] == inputArray[2]) {
      output1.textContent = "Todos los números son iguales!";
      input.value = "";
    } else {
      outputCont.classList.remove("hidden");
      const sortedNumbers = sortNumbers(inputArray);
      output1.textContent = `Menor a mayor: ${sortedNumbers}`;
      output2.textContent = `Mayor a menor: ${sortedNumbers.reverse()}`;
      input.value = "";
    }
  }
});
