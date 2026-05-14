# Entregável 3.1

Tomando como base o vetor de objetos de personagens de Naruto, implemente as questões abaixo (siga os exemplos!)

```js
const personagensNaruto = [
  {
    nome: "Naruto",
    sobrenome: "Uzumaki",
    idade: 17,
    chakra: 100,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Genin",
  },
  {
    nome: "Sasuke",
    sobrenome: "Uchiha",
    idade: 17,
    chakra: 85,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Ninja Renegado",
  },
  {
    nome: "Sakura",
    sobrenome: "Haruno",
    idade: 17,
    chakra: 40,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Kakashi",
    sobrenome: "Hatake",
    idade: 31,
    chakra: 50,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Jonin",
  },
  {
    nome: "Gaara",
    sobrenome: null,
    idade: 17,
    chakra: 90,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Kazekage",
  },
  {
    nome: "Rock",
    sobrenome: "Lee",
    idade: 18,
    chakra: 20,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Hinata",
    sobrenome: "Hyuga",
    idade: 16,
    chakra: 45,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Chunin",
  },
  {
    nome: "Shikamaru",
    sobrenome: "Nara",
    idade: 17,
    chakra: 35,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Tsunade",
    sobrenome: null,
    idade: 55,
    chakra: 95,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Hokage",
  },
  {
    nome: "Jiraiya",
    sobrenome: null,
    idade: 54,
    chakra: 88,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Sannin",
  },
  {
    nome: "Orochimaru",
    sobrenome: null,
    idade: 54,
    chakra: 92,
    ehDaFolha: false,
    possuiKekkeiGenkai: false,
    nivel: "Sannin",
  },
  {
    nome: "Itachi",
    sobrenome: "Uchiha",
    idade: 21,
    chakra: 60,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Ninja Renegado",
  },
  {
    nome: "Neji",
    sobrenome: "Hyuga",
    idade: 18,
    chakra: 55,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Jonin",
  },
  {
    nome: "Tenten",
    sobrenome: null,
    idade: 18,
    chakra: 30,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Ino",
    sobrenome: "Yamanaka",
    idade: 17,
    chakra: 40,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Choji",
    sobrenome: "Akimichi",
    idade: 17,
    chakra: 75,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Kiba",
    sobrenome: "Inuzuka",
    idade: 17,
    chakra: 45,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Shino",
    sobrenome: "Aburame",
    idade: 17,
    chakra: 65,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Sai",
    sobrenome: null,
    idade: 17,
    chakra: 50,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Anbu",
  },
  {
    nome: "Temari",
    sobrenome: null,
    idade: 20,
    chakra: 70,
    ehDaFolha: false,
    possuiKekkeiGenkai: false,
    nivel: "Jonin",
  },
];
```

1. Selecione os personagens que possuem chakra estritamente maior que 80.

```js
const ninjasPoderosos = personagensNaruto.filter((p) => p.chakra > 80);
```

2. Liste o nome de todos os personagens que possuem Kekkei Genkai.

```js
const listaKekkei = personagensNaruto
  .filter((p) => p.possuiKekkeiGenkai)
  .map((p) => p.nome);
```

3. Obtenha o chakra de todos os personagens que são "Ninja Renegado".

```js
const chakraForaDaLei = personagensNaruto
  .filter((p) => p.nivel === "Ninja Renegado")
  .map((p) => p.chakra);
```

4. Qual a soma total das idades de todos os personagens do vetor?

```js
const somaIdades = personagensNaruto.reduce((acc, p) => acc + p.idade, 0);
```

5. Crie um vetor com o nome dos personagens que possuem mais de 50 de chakra E são da Folha.

```js
const eliteFolha = personagensNaruto
  .filter((p) => p.chakra > 50 && p.ehDaFolha)
  .map((p) => p.nome);
```

6. Nome do personagem com a maior e com a menor razão chakra-idade.

7. Crie um vetor com os personagens que possuem nível "Sannin".

8. Filtre todos os personagens que NÃO são da Vila da Folha.

9. Encontre todos os personagens que possuem sobrenome registrado.

10. Filtre os personagens que têm exatamente 17 anos.

11. Crie um vetor apenas com as idades dos personagens.

12. Gere um vetor de strings no formato: "Nome - Nível".

13. Crie um vetor de objetos contendo apenas nome e chakra de cada ninja.

14. Gere um vetor com o "poder total" (chakra multiplicado pela idade) de cada personagem.

15. Crie um vetor de nomes de personagens (cuidado com os sem sobrenome).

16. Crie um vetor somente com os personagens da Folha que são menores de idade ( < 18).

17. Quantos personagens possuem kekkei-genkai?

18. One-liner: selecionar os chakras dos personagens que são Jonin.

19. Chakra total, média, menor e maior chakra.

20. Razão chakra-idade média dos Chunin.
