const nums = require("./nums.json");

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

const valor = linearSearch(nums, 12355);
console.log(valor);
