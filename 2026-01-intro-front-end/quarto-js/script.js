/* 
   --- MAPEAMENTO DE ELEMENTOS ---
   Usamos 'const' em vez de 'let' porque a referência ao elemento do HTML 
   não vai mudar durante a execução do script. É uma boa prática de segurança.
*/
const inputName = document.getElementById("input-name");
const inputAge = document.getElementById("input-age");
const buttonSubmit = document.getElementById("button-submit");

/* 
   --- EVENTO DE CLIQUE ---
   Tudo aqui dentro só acontece quando o usuário clica no botão Enviar.
*/
buttonSubmit.onclick = function () {
  // Captura os valores atuais dos campos no momento do clique.
  const name = inputName.value;
  const age = Number(inputAge.value);

  /* 
     --- TÉCNICA DE SHORT-CIRCUIT (CURTO-CIRCUITO) ---
     Em JavaScript, o operador '&&' (E) para de ler a linha se encontrar um valor falso.
     É uma forma "limpa" de escrever um IF simples em uma única linha.
  */

  // 1. VALIDAÇÃO: Se o nome estiver vazio (true), ele executa o alert.
  // Se o nome NÃO estiver vazio (false), o JS nem olha para o alert e pula para a próxima linha.
  name === "" && alert("Você precisa preencher o nome");

  // 2. REGRA DE NEGÓCIO (MAIORIDADE):
  // Se o nome não estiver vazio E a idade for maior ou igual a 18...
  // O comando 'location.replace' redireciona o usuário, sem deixar ele voltar pelo botão "voltar" do navegador.
  name !== "" && age >= 18 && location.replace("https://betano.bet.br");

  // 3. REGRA DE NEGÓCIO (MENORIDADE):
  // Se o nome não estiver vazio E a idade for menor que 18...
  // Manda o usuário para um site apropriado (Roblox).
  name !== "" && age < 18 && location.replace("https://roblox.com");
};

/*
const nome = "Eduarda Velho";
const idade = 30;
const avaliacaoUber = 4.93;
const gostaDeGatos = true;
const gostaDoElonMusk = false;
// operadores de comparação
// === !== > < >= <=
// == != NO JS NUNCA UTILIZE A NÃO SER QUE VOCÊ QUEIRA PERDER 4 PONTOS NA AVALIAÇÃO

// operadores lógicos
// && || !

const modeloDeCarro = null;
const jogosCompradosNaSteam = undefined;
*/
