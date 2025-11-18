// letras, números, _, $
// string
let meuNome = prompt("Qual é o seu nome?");
let meuSobrenome = prompt("Qual é o seu sobrenome?");

let anoNasc = Number(prompt("Digite o seu ano de nascimento"));
let idade = Number(prompt("Digite a sua idade"));

let anoAtual = anoNasc + idade;

let nomeCompleto = meuNome + " " + meuSobrenome;

alert("O nome completo digitado é: " + nomeCompleto);
alert("O ano atual é: " + anoAtual);
