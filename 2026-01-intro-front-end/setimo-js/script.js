// --- PADRÕES DE ESCRITA (Naming Conventions) ---
// Antes de programar, o time decide como nomear as coisas:
// camelCase    -> Usado no JavaScript para variáveis e funções (ex: minhaVariavel).
// snake_case   -> Comum em bancos de dados ou Python (ex: minha_variavel).
// kebab-case   -> O padrão do CSS (ex: minha-classe-css).
// PascalCase   -> Usado para Classes e Componentes (ex: MinhaClasse).

// --- BLOCOS DE CONSTRUÇÃO (Funções) ---
// Uma função é como uma "receita": ela fica guardada até que alguém a chame.

function somaDivide(numA, numB, numC) {
  const resultadoSoma = numA + numB;
  const resultadoDivide = resultadoSoma / numC; // Ordem de precedência: primeiro soma, depois divide.
  return resultadoDivide; // O 'return' envia o resultado de volta para quem chamou.
}

// Funções Simples: Cada uma faz apenas UMA coisa (Princípio da Responsabilidade Única).
function soma(numA, numB) {
  return numA + numB;
}
function subtrai(numA, numB) {
  return numA - numB;
}
function multiplica(numA, numB) {
  return numA * numB;
}
function divide(numA, numB) {
  return numA / numB;
}

// --- INTERAÇÃO COM O USUÁRIO ---

// O prompt sempre retorna TEXTO (String).
// Usamos 'Number()' para converter esse texto em número, senão "1" + "1" viraria "11"!
const numA = Number(prompt("Digite o número A"));
const numB = Number(prompt("Digite o número B"));
const op = prompt(
  "Digite a operação matemática: soma, subtrai, multiplica ou divide",
);

// --- LÓGICA DE CURTO-CIRCUITO (The "Short-Circuit") ---

// Aqui não usamos 'if'. Usamos o operador '&&' (E).
// Se a condição (op === "soma") for falsa, o JS nem olha para o lado direito.
// Se for verdadeira, ele executa a função e guarda o valor na constante.
const resultadoSoma = op === "soma" && soma(numA, numB);

// Se 'resultadoSoma' não for falso (ou seja, se a operação ocorreu), mostra o alerta.
resultadoSoma !== false && alert(resultadoSoma);

// O código repete essa lógica para cada operação...
const resultadoSub = op === "subtrai" && subtrai(numA, numB);
resultadoSub !== false && alert(resultadoSub);

const resultadoMult = op === "multiplica" && multiplica(numA, numB);
resultadoMult !== false && alert(resultadoMult);

const resultadoDiv = op === "divide" && divide(numA, numB);
resultadoDiv !== false && alert(resultadoDiv);

// --- TRATAMENTO DE ERRO ---
// Se TODAS as constantes acima forem 'false', significa que o usuário digitou algo errado.
!resultadoSoma &&
  !resultadoSub &&
  !resultadoMult &&
  !resultadoDiv &&
  alert("Operação digitada é inválida!");
