import { linearSearch } from "./busca-linear.js";
import { sentinelSearch } from "./busca-sentinela.js";
import { binarySearch } from "./busca-binaria.js";

import nums from "./nums.json" assert { type: "json" };

console.time("linear search");
const linearSearchIndex = linearSearch(nums, -1);
console.timeEnd("linear search");

console.time("sentinel search");
const sentinelSearchIndex = sentinelSearch(nums, -1);
console.timeEnd("sentinel search");

console.time("binary search");
const binarySearchIndex = binarySearch(nums, -1);
console.timeEnd("binary search");
