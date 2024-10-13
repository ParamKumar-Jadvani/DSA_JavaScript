class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  loop(position = null, last = false) {
    let temp = this.head;

    if (position && position >= 0) {
      for (let i = 0; i < position - 1 && temp; i++) temp = temp.next;
      return !temp ? false : temp;
    }

    if (last) {
      while (temp && temp.next && temp.next.next) temp = temp.next;
      return !temp ? false : temp;
    }

    while (temp && temp.next) temp = temp.next;
    return temp;
  }

  InsertAtHead(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  InsertAtTail(value) {
    if (!this.head) {
      this.InsertAtHead(value);
      return;
    }
    let newNode = new Node(value);
    let ele = this.loop();
    ele.next = newNode;
  }

  InsertAtPosition(value, position) {
    if (!this.head || position <= 0) {
      this.InsertAtHead(value);
      return;
    }
    let newNode = new Node(value);
    let ele = this.loop(position - 1);
    if (!ele) {
      console.log("Invalid position");
      return;
    }
    newNode.next = ele.next;
    ele.next = newNode;
  }

  RemoveAtHead() {
    if (!this.head) return "Empty Linked List";
    this.head = this.head.next;
  }

  RemoveAtTail() {
    if (!this.head) return "Empty Linked List";
    let ele = this.loop(null, true);
    if (!ele) return;
    ele.next = null;
  }

  RemoveAtPosition(position) {
    if (!this.head) return "Empty Linked List";
    if (position <= 0) return "Invalid position";
    if (position === 1) {
      this.RemoveAtHead();
      return;
    }
    let ele = this.loop(position - 1);
    if (!ele || !ele.next) return "Invalid position";
    ele.next = ele.next.next;
  }

  RemoveByValue(value) {
    if (!this.head) return "Empty Linked List";

    if (this.head.data === value) {
      this.RemoveAtHead();
      return;
    }

    let temp = this.head;
    let prev = null;
    while (temp && temp.data !== value) {
      prev = temp;
      temp = temp.next;
    }

    if (!temp) return "Value not found";

    prev.next = temp.next;
  }

  updateAtHead(value) {
    if (!this.head) {
      this.InsertAtHead(value);
      return;
    }
    this.head.data = value;
  }

  updateAtTail(value) {
    if (!this.head) return "Empty Linked List";
    let ele = this.loop();
    if (!ele) return "Invalid position";
    ele.data = value;
  }

  updateAtPosition(value, position) {
    if (!this.head) return "Empty Linked List";
    if (position <= 0) return "Invalid position";
    let ele = this.loop(position);
    if (!ele) return "Invalid position";
    ele.data = value;
  }

  updateByValue(oldValue, newValue) {
    let temp = this.head;
    while (temp && temp.data !== oldValue) {
      temp = temp.next;
    }
    if (temp) {
      temp.data = newValue;
    } else {
      console.log("Value not found");
    }
  }

  ReverseList() {
    let prev = null;
    let temp = this.head;
    let next;
    while (temp) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    this.head = prev;
  }

  MergeList(list) {
    if (!this.head) {
      this.head = list.head;
      return;
    }
    let temp = this.loop();
    temp.next = list.head;
  }

  // Display list
  DisplayList() {
    let temp = this.head;
    let result = "";
    while (temp) {
      result += temp.data + " -> ";
      temp = temp.next;
    }
    console.log(result + "null");
  }

  getLength() {
    let temp = this.head;
    let count = 0;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  findMiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.data;
  }

  RemoveDuplicate() {
    let temp = this.head;
    let prev = null;
    let valuesSet = new Set();
    while (temp) {
      if (valuesSet.has(temp.data)) prev.next = temp.next;
      else {
        valuesSet.add(temp.data);
        prev = temp;
      }
      temp = temp.next;
    }
  }

  findMax() {
    let temp = this.head;
    if (!temp) return null;
    let max = temp.data;
    while (temp) {
      if (temp.data > max) max = temp.data;
      temp = temp.next;
    }
    return max;
  }

  findMin() {
    let temp = this.head;
    if (!temp) return null;
    let min = temp.data;
    while (temp) {
      if (temp.data < min) min = temp.data;
      temp = temp.next;
    }
    return min;
  }
}

const MergeSortedList = (list1, list2) => {
  let mergedList = new LinkedList();
  let temp1 = list1.head;
  let temp2 = list2.head;

  while (temp1 && temp2) {
    if (temp1.data < temp2.data) {
      mergedList.InsertAtTail(temp1.data);
      temp1 = temp1.next;
    } else {
      mergedList.InsertAtTail(temp2.data);
      temp2 = temp2.next;
    }
  }

  while (temp1) {
    mergedList.InsertAtTail(temp1.data);
    temp1 = temp1.next;
  }

  while (temp2) {
    mergedList.InsertAtTail(temp2.data);
    temp2 = temp2.next;
  }

  return mergedList;
};

let list1 = new LinkedList();
list1.InsertAtTail(1);
list1.InsertAtTail(3);
list1.InsertAtTail(5);
list1.InsertAtTail(7);

let list2 = new LinkedList();
list2.InsertAtTail(2);
list2.InsertAtTail(4);
list2.InsertAtTail(6);
list2.InsertAtTail(8);

console.log("List 1:");
list1.DisplayList();
console.log("List 2:");
list2.DisplayList();

let mergedList = MergeSortedList(list1, list2);
console.log("Merged List:");
mergedList.DisplayList();
