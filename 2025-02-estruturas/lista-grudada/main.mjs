import { LinkedList } from "./linked-list/linked-list.mjs";

const listaGrudada = new LinkedList();
//listaGrudada.add("a");
//listaGrudada.add("b");
//listaGrudada.add("c");
const elementoRemovido = listaGrudada.pop();
console.log(elementoRemovido); // c
listaGrudada.print(); // a, b
