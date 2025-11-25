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
