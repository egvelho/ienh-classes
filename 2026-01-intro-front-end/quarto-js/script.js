const inputName = document.getElementById("input-name");
const inputAge = document.getElementById("input-age");
const buttonSubmit = document.getElementById("button-submit");

buttonSubmit.onclick = function () {
  const name = inputName.value;
  const age = Number(inputAge.value);

  // short circuit
  name === "" && alert("Você precisa preencher o nome");
  name !== "" && age >= 18 && location.replace("https://betano.bet.br");
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
