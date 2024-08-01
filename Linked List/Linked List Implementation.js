class LinkedList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class NodeList {
  constructor(data = 0) {
    this.head = new LinkedList(data);
  }

  addToTail(data) {
    let newNode = new LinkedList(data);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  addToHead(data) {
    let newNode = new LinkedList(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  removeFromHead() {
    this.head = this.head.next;
  }

  removeFromTail() {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  removeFromPosition(position) {
    let current = this.head;
    for (let i = 0; i < position - 1; i++) {
      current = current.next;
    }
    let val = current.next;
    current.next = current.next.next;
    val.next = null;
    return val.data;
  }

  Print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  getSize() {
    let current = this.head;
    let size = 0;
    while (current) {
      size++;
      current = current.next;
    }
    return size;
  }
}

let list = new NodeList(10);

list.addToTail(20);
list.addToTail(30);
list.addToTail(40);
list.addToHead(50);
list.addToHead(60);
list.addToHead(70);

console.log("Linked list");
list.Print();
console.log("lisk size : ", list.getSize());

list.removeFromHead();
list.removeFromHead();
list.removeFromTail();
list.removeFromTail();

console.log("Linked list");
list.Print();
