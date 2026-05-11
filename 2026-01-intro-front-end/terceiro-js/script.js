let inputNumberA = document.getElementById("input-number-a");
let inputNumberB = document.getElementById("input-number-b");

let buttonAdd = document.getElementById("button-add");
let buttonSub = document.getElementById("button-sub");
let buttonDiv = document.getElementById("button-div");
let buttonMult = document.getElementById("button-mult");

buttonAdd.onclick = function () {
  let numberA = Number(inputNumberA.value);
  let numberB = Number(inputNumberB.value);

  let resultado = numberA + numberB;
  alert(resultado);

  inputNumberA.value = "";
  inputNumberB.value = "";
};

buttonSub.onclick = function () {
  let numberA = Number(inputNumberA.value);
  let numberB = Number(inputNumberB.value);

  let resultado = numberA - numberB;
  alert(resultado);

  inputNumberA.value = "";
  inputNumberB.value = "";
};

buttonDiv.onclick = function () {
  let numberA = Number(inputNumberA.value);
  let numberB = Number(inputNumberB.value);

  let resultado = numberA / numberB;
  alert(resultado);

  inputNumberA.value = "";
  inputNumberB.value = "";
};

buttonMult.onclick = function () {
  let numberA = Number(inputNumberA.value);
  let numberB = Number(inputNumberB.value);

  let resultado = numberA * numberB;
  alert(resultado);

  inputNumberA.value = "";
  inputNumberB.value = "";
};
