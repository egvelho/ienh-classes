const gostaDeGato = true;
const resposta = gostaDeGato ? "Sim" : "Não";

const gostaDeGatosPesquisa = [
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
];

const nome = "Duda";
const inicial = nome[0];

const breakingBad = [
  "Walter White",
  "Skyler White",
  "Gus Fring",
  "Jesse Pinkman",
];

const idades = [19, 25, 19, 18, 19, 20, 21, 18];

//function dobra(n) {
//  return n * 2;
//}

//const dobra = function (n) {
//  return n * 2;
//};

//const dobra = (n) => {
//  return n * 2;
//};

const dobra = (n) => n * 2;

const dobrosIdades = idades.map((n) => n + 1);
//console.log(dobrosIdades);

const simOuNaoGostaDeGatos = gostaDeGatosPesquisa.map((resposta) =>
  resposta ? "Sim" : "Não",
);

const iniciaisBreaking = breakingBad.map((nome) => nome[0]);
const menoresDe20 = idades.filter((idade) => idade <= 20);
const idades_ = [3, 7, 6, 8, 2];
const somatorioNotas = idades_.reduce((acc, idade) => acc + idade, 0);

console.log(somatorioNotas);

//console.log(iniciaisBreaking);

//const resultado = dobra(19);
//console.log(resultado);
