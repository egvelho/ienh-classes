/* 
   ===========================================================
   1. MAPEAMENTO DE ELEMENTOS (A "PONTE" ENTRE JS E HTML)
   ===========================================================
   Aqui estamos criando referências. O JavaScript não sabe "sozinho" 
   o que existe no HTML, então usamos o ID para conectar as coisas.
*/

// Selecionamos as caixas de entrada (onde o usuário digita)
let inputNumberA = document.getElementById("input-number-a");
let inputNumberB = document.getElementById("input-number-b");

// Selecionamos os gatilhos (os botões que vão disparar as ações)
let buttonAdd = document.getElementById("button-add");
let buttonSub = document.getElementById("button-sub");
let buttonDiv = document.getElementById("button-div");
let buttonMult = document.getElementById("button-mult");

/* 
   ===========================================================
   2. PROGRAMANDO OS EVENTOS (O "QUANDO" ACONTECE)
   ===========================================================
   O .onclick funciona como um vigia. Ele fica parado esperando o 
   usuário clicar. Quando o clique acontece, ele executa a função.
*/

buttonAdd.onclick = function () {
  /* 
     IMPORTANTE: Pegamos o .value aqui DENTRO da função. 
     Se pegássemos lá fora, o valor estaria vazio (valor inicial da página).
     O Number() converte o texto da caixa em número real para o cálculo ser exato.
  */
  let numberA = Number(inputNumberA.value);
  let numberB = Number(inputNumberB.value);

  // Executa o cálculo e armazena o resultado em uma variável temporária
  let resultado = numberA + numberB;

  // Entrega o feedback visual para o usuário
  alert("O resultado da soma é: " + resultado);

  // LIMPEZA DE INTERFACE: Resetamos o valor das caixas para "" (vazio)
  // Isso melhora a experiência do usuário (UX), deixando pronto para a próxima conta.
  inputNumberA.value = "";
  inputNumberB.value = "";
};

/* 
   As funções abaixo seguem a mesma lógica, alterando apenas o 
   operador matemático principal (-, /, *).
*/

buttonSub.onclick = function () {
  let numberA = Number(inputNumberA.value);
  let numberB = Number(inputNumberB.value);

  let resultado = numberA - numberB;
  alert("O resultado da subtração é: " + resultado);

  inputNumberA.value = "";
  inputNumberB.value = "";
};

buttonDiv.onclick = function () {
  let numberA = Number(inputNumberA.value);
  let numberB = Number(inputNumberB.value);

  // Atenção: No JS, a barra (/) representa a divisão
  let resultado = numberA / numberB;
  alert("O resultado da divisão é: " + resultado);

  inputNumberA.value = "";
  inputNumberB.value = "";
};

buttonMult.onclick = function () {
  let numberA = Number(inputNumberA.value);
  let numberB = Number(inputNumberB.value);

  // Atenção: O asterisco (*) representa a multiplicação
  let resultado = numberA * numberB;
  alert("O resultado da multiplicação é: " + resultado);

  inputNumberA.value = "";
  inputNumberB.value = "";
};
