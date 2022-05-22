// piece of data - val
//reference to next node - next

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
    // when empty
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      //   all other cases
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    // return entire list
    return this;
  }
}

// naive solution:
// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("Morning");
list.push("Morning2");
list.push("Morning3");
list.push("Morning4");

console.log(list.head.next.next); //morning
console.log("*".repeat(40));
console.log(list.head.next.next.next); //morning 2
console.log("*".repeat(40));
console.log(list);
