// dobra number[] -> number[]
// for in, for of

function dobra(nums) {
  let dobros = [];
  for (const num of nums) {
    dobros.push(num * 2);
  }

  return dobros;
}

function dobra2(nums) {
  let dobros = [];
  for (const indice in nums) {
    dobros.push(nums[indice] * 2);
  }

  return dobros;
}

function dobra3(nums) {
  let dobros = structuredClone(nums);
  for (let indice in dobros) {
    dobros[indice] = dobros[indice] * 2;
  }

  return dobros;
}

const numerooooos = [1, 2, 3, 4, 5];

const dobros = dobra3(numerooooos);
console.log(numerooooos);
console.log(dobros);

function append(array, val) {
  const proximoIndice = array.length;
  array[proximoIndice] = val;
}

const letras = ["a", "b", "c"];
append(letras, "d");

console.log(letras);

const pessoa = {
  nome: "Eduarda",
  sobrenome: "Velho",
};

add(pessoa, "idade", 30);
console.log(pessoa);
/*
{
    nome: "Eduarda",
    sobrenome: "Velho",
    idade: 30
}
*/
