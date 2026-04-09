class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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

  removeAt() {}

  getAt() {}

  reverse() {}
}

const lista = new LinkedList();

lista.push(10);
lista.push(15);
lista.push(20);
lista.push(17);
lista.push(5);
lista.push(3);
lista.push(7);

lista.print();
