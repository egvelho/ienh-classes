export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.size++;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    this.size++;
  }

  pop() {}

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

  peek() {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return currentNode.value;
  }

  removeAt() {}

  at(index) {
    if (index < 0 || index > this.size - 1) {
      return null;
    }

    if (this.head === null) {
      return null;
    }

    let currentIndex = 0;
    let currentNode = this.head;

    while (currentIndex !== index) {
      currentIndex++;
      currentNode = currentNode.next;
    }

    return currentNode.value;
  }

  // converte pra lista (sinônimo de vetor e array) - para a Brenda <3
  toArray() {
    let array = [];

    if (this.head === null) {
      return array;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  reverse() {}
}

/*const lista = new LinkedList();

lista.push(10);
lista.push(15);
lista.push(20);
lista.push(17);
lista.push(5);
lista.push(3);
lista.push(7);

//lista.print();
//const valorFinal = lista.peek();
//console.log(valorFinal);

const valorPeloIndice = lista.at(2);
console.log(valorPeloIndice);
*/
