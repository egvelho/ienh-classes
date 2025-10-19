function memoize(fn) {
  let memo = {};
  return (...args) => {
    const key = args.join("-");

    if (memo[key]) {
      return memo[key];
    }

    const returnFn = fn(...args);
    memo[key] = returnFn;
    return returnFn;
  };
}

function gerarNumerosDe1Ate(limite) {
  let nums = new Array(limite);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = i + 1;
  }

  return nums;
}

function fazerSomatorio(nums) {
  let somatorio = 0;
  for (let i = 0; i < nums.length; i++) {
    somatorio += nums[i];
  }

  return somatorio;
}

const memoGerarNumerosDe1Ate = memoize(gerarNumerosDe1Ate);
const memoFazerSomatorio = memoize(fazerSomatorio);

console.time("Criar um vetor com números de 1 até 10 milhões");
const nums = memoGerarNumerosDe1Ate(100);
console.timeEnd("Criar um vetor com números de 1 até 10 milhões");

console.time("Somatório dos número");
const somatorio = memoFazerSomatorio(nums);
console.timeEnd("Somatório dos número");

console.time("Criar um vetor com números de 1 até 10 milhões");
const nums2 = memoGerarNumerosDe1Ate(100);
console.timeEnd("Criar um vetor com números de 1 até 10 milhões");

console.time("Somatório dos número");
const somatorio2 = memoFazerSomatorio(nums2);
console.timeEnd("Somatório dos número");

console.time("Criar um vetor com números de 1 até 10 milhões");
const nums3 = memoGerarNumerosDe1Ate(100);
console.timeEnd("Criar um vetor com números de 1 até 10 milhões");

console.time("Somatório dos número");
const somatorio3 = memoFazerSomatorio(nums3);
console.timeEnd("Somatório dos número");
