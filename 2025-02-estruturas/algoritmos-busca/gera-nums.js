const fs = require("fs");

const nums = [
  ...new Set(
    new Array(10000000)
      .fill(null)
      .map(() => Math.floor(Math.random() * 100000000001))
      .toSorted((a, b) => a - b)
  ),
];

fs.writeFileSync("nums.json", JSON.stringify(nums));
