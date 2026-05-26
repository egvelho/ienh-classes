const pessoas = [
  {
    nome: "Eduarda",
    sobrenome: "Velho",
    idade: 30,
  },
  {
    nome: "Vinícius",
    sobrenome: "Ferreira",
    idade: 18 + 2,
    mostraIdade() {
      alert(this.nome + " " + this.sobrenome);
    },
  },
  {
    nome: "Nikolas",
    sobrenome: "Lopes",
    idade: 19,
  },
];

const duda = {
  nome: "Eduarda",
  sobrenome: "Velho",
  idade: 30,
};

const { nome, sobrenome } = duda;
//const nome = duda.nome;
//const sobrenome = duda.sobrenome;

const cores = ["vermelho", "verde", "azul", "amarelo", "roxo"];
const [primeiraCor, segundaCor, ...coresRestantes] = cores;
//const { 2: primeiraCor } = cores;
//alert(coresRestantes);

const pessoaSecreta = {
  nome: "Rodolfo",
  sobrenome: "Josefino",
  idade: 67,
  profissao: "Esmirilhador (com ênfase em farmar aura)",
  genero: "Helicóptero de Ataque",
  signo: "Sigma",
  idolo: "Super Choque",
  artistaFavorita: "Caneta Azul",
  filmeFavorito: "Internet - O Filme",
};

const { artistaFavorita, filmeFavorito, ...informacoesRestantes } =
  pessoaSecreta;

//console.log(informacoesRestantes);

const numerosA = [6, 7, 8];
const numerosB = [4, 2, 1];

const todosOsNumeros = [...numerosA, ...numerosB];

const pessoaBase = {
  nome: "Goku",
  sobrenome: "Vegeta",
};

const pessoaExtra = {
  signo: "Serpentário",
  idade: null,
};

const pessoaCompleta = {
  ...pessoaBase,
  ...pessoaExtra,
};

//console.log(pessoaCompleta);

//mostraNomeCompleto(nome, sobrenome);

function mostraNomeCompleto(nome, sobrenome) {
  alert(nome + " " + sobrenome);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const nomesCompletos = pessoas.map(
  ({ nome, sobrenome }) => `${nome} ${sobrenome}`,
);

const ul = document.querySelector("#nomes");

const nomesCompletosLi = nomesCompletos.map((nomeCompleto) => {
  return `<li>${nomeCompleto}</li>`;
});

//ul.innerHTML = nomesCompletosLi.join("");

const pessoasLi = pessoas.map(({ nome, sobrenome, idade }) => {
  const pessoa = document.createElement("li");
  pessoa.innerHTML = `${nome} ${sobrenome}`;
  pessoa.className = "pessoa";
  pessoa.onclick = () => {
    alert(`A idade da pessoa é: ${idade}`);
  };
  return pessoa;
});

ul.append(...pessoasLi);
