class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // method made just for the sake of practice
  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      // in the tail current.next is going to be null - return from loop
      current = current.next;
    }
  }
  // ************************************************************

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    // if there is no element in the list
    if (!this.head) return undefined;

    var currentHead = this.head;
    // we are taking next item and assign it as a head
    this.head = currentHead.next;
    // length --
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
console.log("*".repeat(40));
list.traverse();
console.log("*".repeat(40));
list.shift();

list.traverse();
console.log("*".repeat(40));
list.shift();
list.traverse();
