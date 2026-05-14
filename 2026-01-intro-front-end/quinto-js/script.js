/* 
   --- PREPARAÇÃO DOS ELEMENTOS ---
   Buscamos a caixa de idade e o botão no HTML.
*/
const inputAge = document.getElementById("input-age");
const buttonSubmit = document.getElementById("button-submit");

// O código abaixo só "acorda" quando o botão é clicado.
buttonSubmit.onclick = function () {
  // Pegamos o que foi digitado e garantimos que o JS trate como número.
  const age = Number(inputAge.value);

  /* 
     --- DEFINIÇÃO DE REGRAS (BOOLEANOS) ---
     Aqui não estamos fazendo uma ação ainda, estamos apenas criando "perguntas".
     Cada variável abaixo guardará o resultado de uma comparação: true (verdadeiro) ou false (falso).
  */

  // Regra: Tem que ser maior que 0 E (&&) menor que 12.
  const isCrianca = age > 0 && age < 12;

  // Regra: Tem que estar entre 12 e 17 (menor que 18).
  const isAdolescente = age >= 12 && age < 18;

  // Regra: De 18 até 59 (menor que 60).
  const isAdulto = age >= 18 && age < 60;

  // Regra: De 60 até o limite humano de 130.
  const isIdoso = age >= 60 && age <= 130;

  // Regra de Erro: Se a idade for menor/igual a 0 OU (||) maior que 130.
  // O símbolo || significa "OU" -> Se qualquer uma das duas condições for real, é inválido.
  const isInvalido = age <= 0 || age > 130;

  /* 
     --- EXECUÇÃO COM CURTO-CIRCUITO (SHORT-CIRCUIT) ---
     O JS lê a linha: se a variável da esquerda for 'true', ele executa o alert da direita.
     Se for 'false', ele ignora a linha e vai para a próxima.
  */

  isCrianca && alert("É criança");
  isAdolescente && alert("É adolescente");
  isAdulto && alert("É adulto");
  isIdoso && alert("É idoso");

  // Mensagem de erro para valores que fogem da realidade.
  isInvalido && alert("Você ainda não nasceu ou é parente da Rainha Elizabeth");
};
