let btnManeiro = document.getElementById("btn-me-clique-me");
//btnManeiro.style.backgroundColor = "red";

let entradaTexto = document.getElementById("entrada-texto");

btnManeiro.onclick = function () {
  alert(entradaTexto.value);
  console.log(entradaTexto.value);

  entradaTexto.value = "";
};
