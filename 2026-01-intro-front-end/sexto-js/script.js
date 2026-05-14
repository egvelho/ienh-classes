// 1. Definição do estado inicial
// Aqui acessamos o 'body' do HTML através do DOM e pintamos o fundo de vermelho.
document.body.style.backgroundColor = "red";

// 2. Escutando uma ação do usuário (Evento)
// Atribuímos uma função ao evento 'onclick'.
// Ou seja: "Ei, navegador, toda vez que o usuário clicar no corpo da página, execute isso aqui:"
document.body.onclick = function () {
  // 3. Captura de informação
  // Criamos uma constante 'bg' para guardar qual é a cor atual do fundo naquele exato momento.
  const bg = document.body.style.backgroundColor;

  // 4. Lógica de Alternância (Toggle)
  // Estas linhas usam um "curto-circuito" (&&).
  // Traduzindo: "Se a cor atual for vermelho, então mude para azul".
  bg === "red" && (document.body.style.backgroundColor = "blue");

  // Traduzindo: "Se a cor capturada no início do clique era azul, mude para vermelho".
  bg === "blue" && (document.body.style.backgroundColor = "red");
};
