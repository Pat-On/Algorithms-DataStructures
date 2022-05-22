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
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    // when number is out of the index scope
    if (index < 0 || index > this.length) return false;
    // addding at the end - push
    if (index === this.length) return !!this.push(val);
    // adding at the beggining
    if (index === 0) return !!this.unshift(val);

    // somewhere inside
    var newNode = new Node(val);
    // getting previous node from list
    var prev = this.get(index - 1);
    // temp variable
    var temp = prev.next;
    // prev.next is refering not to new node
    prev.next = newNode;

    // new node is refering to the previous node from its current index
    newNode.next = temp;

    // lenght up-up!
    this.length++;
    return true;
  }
}

var list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);

console.log("*".repeat(20));

list.traverse();
console.log("*".repeat(20));

list.insert(2, 100000000);

list.traverse();
console.log("*".repeat(20));
