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
    // findind second to end item
    // traversing
    while (current.next) {
      newTail = current;
      // follows the linked list elements current.next -> current.next -> current.next
      current = current.next;
    }
    // setting up new tail
    this.tail = newTail;
    // removing reference to previous tail
    this.tail.next = null;
    // decreasing length
    this.length--;
    // when we removed the only item from array
    if (this.length === 0) {
      // tutor mentioned that it is not best solution <- at the end of the section he is going to show refactored version
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");

list.traverse();

list.pop();
list.traverse();
list.pop();
list.pop();
console.log(list.pop());
list.traverse();
