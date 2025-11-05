console.log("hello");

const nums = [1, 2, 3, 4, 5];
const dobros = nums.map((num) => num * 2);
const dobros2 = nums.map(function (num) {
  return num * 2;
});
const dobros3 = nums.map((num) => {
  return num * 2;
});

function dobra(num) {
  return num * 2;
}
const dobros4 = nums.map(dobra);

const letras = ["a", "b", "c", "d", "e"];

//'a'.toUpperCase();
