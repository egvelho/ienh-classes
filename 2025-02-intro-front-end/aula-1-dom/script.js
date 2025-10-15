const entrada = document.getElementById("entrada");
const btnResponder = document.getElementById("btn-responder");
const resposta = document.getElementById("resposta");

btnResponder.onclick = () => {
  resposta.textContent = entrada.value;
  entrada.value = "";
};
