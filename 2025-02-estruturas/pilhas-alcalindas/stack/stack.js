import { Node } from "./node.js";

export class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // coloca um novo elemento no topo da pilha
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  // remove o elemento do topo da pilha, retornando-o
  pop() {
    if (this.top === null) {
      return null;
    }

    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedValue;
  }

  // retorna o elemento do topo da pilha, sem alterar nada
  peek() {
    return this.top;
  }

  // mostra a pilha do topo até o fundo
  print() {
    let currentNode = this.top;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}
