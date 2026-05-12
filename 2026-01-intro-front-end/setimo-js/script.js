// camelCase
// snake_case
// kebab-case
// PascalCase

function somaDivide(numA, numB, numC) {
  const resultadoSoma = numA + numB;
  const resultadoDivide = resultadoSoma / numC;
  return resultadoDivide;
}

function soma(numA, numB) {
  return numA + numB;
}

function subtrai(numA, numB) {
  return numA - numB;
}

function multiplica(numA, numB) {
  return numA * numB;
}

function divide(numA, numB) {
  return numA / numB;
}

const numA = Number(prompt("Digite o número A"));
const numB = Number(prompt("Digite o número B"));
const op = prompt(
  "Digite a operação matemática. Escreva soma, subtrai, multiplica ou divide",
);

const resultadoSoma = op === "soma" && soma(numA, numB);
resultadoSoma !== false && alert(resultadoSoma);

const resultadoSub = op === "subtrai" && subtrai(numA, numB);
resultadoSub !== false && alert(resultadoSub);

const resultadoMult = op === "multiplica" && multiplica(numA, numB);
resultadoMult !== false && alert(resultadoMult);

const resultadoDiv = op === "divide" && divide(numA, numB);
resultadoDiv !== false && alert(resultadoDiv);

!resultadoSoma &&
  !resultadoSub &&
  !resultadoMult &&
  !resultadoDiv &&
  alert("67 a operação digitada é inválida 67");

//const resultado = somaDivide(7, 3, 2);
//alert(resultado);
