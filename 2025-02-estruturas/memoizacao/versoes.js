versaoA();
versaoB();
versaoC();

function versaoA() {
  console.time("Versão A");
  let nums = [];
  for (let i = 0; i < 10000000; i++) {
    nums.push(i);
  }
  console.timeEnd("Versão A");
}

function versaoB() {
  console.time("Versão B");
  let nums = new Array(10000000);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = i + 1;
  }
  console.timeEnd("Versão B");
}

function versaoC() {
  console.time("Versão C");
  const nums = new Array(10000000).fill(null).map((_, index) => index + 1);
  console.timeEnd("Versão C");
}
