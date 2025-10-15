let numeros = [1, 2, 3, 4, 5];

// numeros = [], somatorio = 15;
function somatorioRecursivo(numeros, somatorio = 0) {
  if (numeros.length === 0) {
    return somatorio;
  }

  let numerosAtual = structuredClone(numeros);
  let somatorioAtual = somatorio + numerosAtual.at(-1);
  numerosAtual.pop();
  return somatorioRecursivo(numerosAtual, somatorioAtual);
}

const resultado = somatorioRecursivo(numeros);
console.log(resultado);
