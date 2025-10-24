const { quicksort, mergeSort } = require("algorithms/sorting");

let numeros = new Array(100000)
  .fill(null)
  .map((_) => Math.floor(Math.random() * 11));

function bubbleSort(arrayArg) {
  const arr = structuredClone(arrayArg);
  let foiModificado;

  do {
    foiModificado = false;
    for (let i = 0; i < arr.length - 1; i++) {
      const numeroAtual = arr[i];
      const proximoNumero = arr[i + 1];

      if (numeroAtual > proximoNumero) {
        foiModificado = true;
        arr[i] = proximoNumero;
        arr[i + 1] = numeroAtual;
      }
    }
  } while (foiModificado);

  return arr;
}

function insertionSort(arrArg) {
  const array = structuredClone(arrArg);

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    let j = i - 1;
    while (j >= 0 && value < array[j]) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = value;
  }

  return array;
}

console.time("insertion sort");
const ordenados = insertionSort(numeros);
console.timeEnd("insertion sort");

console.time("merge sort");
const ordenados2 = mergeSort(structuredClone(numeros));
console.timeEnd("merge sort");

console.time("quick sort");
const ordenados3 = quicksort(structuredClone(numeros));
console.timeEnd("quick sort");

console.time("bubble sort");
const ordenados4 = bubbleSort(numeros);
console.timeEnd("bubble sort");
