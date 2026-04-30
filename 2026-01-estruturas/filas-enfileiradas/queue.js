class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // adiciona um elemento do fim da fila
  queue(value) {
    if (this.head === null) {
      const nextNode = new Node(value);
      this.head = nextNode;
      this.tail = nextNode;
      this.size++;
      return;
    }

    const nextNode = new Node(value);
    this.tail.next = nextNode;
    this.tail = nextNode;
    this.size++;
  }

  // remove um elemento do início da fila, retornando-o
  dequeue() {
    if (this.head === null) {
      return;
    }

    if (this.head === this.tail) {
      const removedNode = this.head.value;
      this.head = null;
      this.tail = null;
      this.size--;
      return removedNode;
    }

    const removedNode = this.head.value;
    this.head = this.head.next;
    this.size--;
    return removedNode;
  }

  print() {
    if (this.head === null) {
      return;
    }

    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  // retorna o primeiro da fila (sem remover)
  peek() {}

  // booleano indicando se a fila está vazia.
  isEmpty() {}

  // retorna o número de elementos na fila.
  size() {}

  // remove todos os elementos.
  clear() {}

  // verifica se um item está presente.
  includes(item) {}

  // retorna uma cópia dos elementos em ordem.
  toArray() {}

  map() {}

  filter() {}

  reduce() {}
}
