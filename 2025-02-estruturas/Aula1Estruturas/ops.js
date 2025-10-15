function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

const multiplicacao = (a, b) => a * b;

const divisao = (a, b) => {
  return a / b;
};

function executaOperacaoMatematica(a, b, operacao) {
  return operacao(a, b);
}

const resultado = executaOperacaoMatematica(4, 2, (a, b) => a ** b);
console.log(resultado);
