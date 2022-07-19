/*
    Given a linked list, return it in reverse

    Constraint questions:
        - What do we return if we get null or a single node?
            Just return null and the node back respectively.

    Step 2: Write out some test cases
    
        1 -> 2 -> 3 -> 4 -> null
        4 -> 3 -> 2 -> 1 -> null 

        3 -> null
        3 -> null

        null
        null

*/

class Node {
  constructor(val) {
    this.value = val;
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
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
  // to finish
  reverse() {
    let currentNode = this.head;

    this.head = this.tail;
    this.tail = currentNode;

    let prev = null;
    let next;

    // 1 -> 2 -> 3 -> 4 -> null
    while (currentNode) {
      next = currentNode.next; // 2
      currentNode.next = prev; // null
      prev = currentNode; // 1

      currentNode = next; // 2
    }
    return this;
  }
}

var list = new SinglyLinkedList();

list.push(100);
list.push(101);
list.push(200);
list.push(201);

console.log(list.print());
list.reverse();
console.log(list.print());
