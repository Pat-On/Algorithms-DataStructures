class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;

      // removing connection from the popped node <- important if not buuug!
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
}
const list = new DoublyLinkedList();

list.push("start");
list.push("middle");
list.push("end");
list.print();
console.log("*".repeat(20));

console.log(list.pop());
console.log("*".repeat(20));
list.print();
console.log("*".repeat(20));
console.log(list.tail.prev);
