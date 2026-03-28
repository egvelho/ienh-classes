function contaAte(numeroContar) {
  for (let numeroAtual = 1; numeroAtual <= numeroContar; numeroAtual++) {
    console.log(numeroAtual);
  }
}

function contaAteRecursiva(numeroContar, numeroAtual = 1) {
  if (numeroAtual > numeroContar) {
    return;
  }

  console.log(numeroAtual);
  contaAteRecursiva(numeroContar, numeroAtual + 1);
}

function contagemRegressiva(numeroInicial) {
  for (let numeroAtual = numeroInicial; numeroAtual >= 0; numeroAtual--) {
    console.log(numeroAtual);
  }
}

function contagemRecursiva(numeroAtual) {
  if (numeroAtual < 0) {
    return;
  }

  console.log(numeroAtual);
  contagemRecursiva(numeroAtual - 1);
}

contagemRecursiva(15000);
