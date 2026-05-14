/* 
     --- SELEÇÃO DE ELEMENTOS (DOM) ---
     Aqui estamos criando "pontes" entre o HTML e o JavaScript.
     document.getElementById: Busca um elemento no HTML através do ID único dele.
  */
let btnManeiro = document.getElementById("btn-me-clique-me");
let entradaTexto = document.getElementById("entrada-texto");

/* 
     --- EVENTO DE CLIQUE ---
     .onclick: É um "ouvinte". Ele fica esperando o usuário clicar no botão.
     function () { ... }: É o bloco de código que será executado APENAS quando o clique ocorrer.
  */
btnManeiro.onclick = function () {
  /* 
       --- CAPTURA DE VALOR ---
       .value: Diferente de elementos como <div> ou <h1>, nos campos de entrada (input),
       nós não pegamos o texto com 'innerText', mas sim com '.value', que é o que foi digitado.
    */
  alert(entradaTexto.value); // Mostra o que foi digitado em um alerta
  console.log(entradaTexto.value); // Registra o que foi digitado no console (F12)

  /* 
       --- LIMPEZA DE CAMPO ---
       Ao atribuir "" (aspas vazias) ao .value, nós "limpamos" o campo de texto
       para que o usuário possa digitar algo novo sem precisar apagar o anterior.
    */
  entradaTexto.value = "";
};
