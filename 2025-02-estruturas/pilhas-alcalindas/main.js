import { Stack } from "./stack/stack.js";

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
const c = stack.pop();
console.log("removido", c);
stack.print();
