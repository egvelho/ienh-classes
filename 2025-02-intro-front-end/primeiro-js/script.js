const botao = document.getElementById("me-clique-btn");

let isVermelho = false;
document.body.style.backgroundColor = "blue";

botao.onclick = () => {
  if (isVermelho) {
    document.body.style.backgroundColor = "blue";
    isVermelho = false;
  } else {
    document.body.style.backgroundColor = "red";
    isVermelho = true;
  }
};

const campoNome = document.getElementById("campo-nome");
const boasVindasBotao = document.getElementById("boas-vindas-botao");

boasVindasBotao.onclick = () => {
  const nome = campoNome.value;
  alert("Seja bem-vinde, " + nome + "!");
};

const campoUsername = document.getElementById("campo-username");
const campoPassword = document.getElementById("campo-password");
const loginBotao = document.getElementById("login-botao");

loginBotao.onclick = () => {
  const username = campoUsername.value;
  const password = campoPassword.value;

  if (username === "admin" && password === "12345") {
    alert("Login realizado com sucesso!");
  } else {
    alert("Usuário ou senha inválidos!");
  }
};
