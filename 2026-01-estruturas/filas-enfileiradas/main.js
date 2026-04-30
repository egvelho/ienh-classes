import { Queue } from "./queue.js";

const queue = new Queue();
queue.queue("Patolino");
queue.queue("Mickey");
queue.queue("Pernalonga");
queue.queue("Gaguinho");
queue.queue("Walter White");

const removido = queue.dequeue();
console.log("Removido", removido);

queue.print();
console.log(queue.head.value, queue.tail.value);
