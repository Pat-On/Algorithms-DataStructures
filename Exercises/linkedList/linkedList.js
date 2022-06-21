class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  // at the end Linked List know only about head and in case of doubly linked list - tail
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;

    // this.head = new Node(data, this.head);

    // I made it overcomplicated
    // const node = new Node(data);
    // if (!this.head) {
    //   this.head = node;
    // } else if (this.head) {
    //   let temp = this.head;
    //   this.head = node;
    //   node.next = temp;
    // }

    this.length++;
  }

  size() {
    //   return this.length
    let counter = 0;
    let next = this.head;
    // iterative solution
    while (next) {
      next = next.next;
      counter++;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // do we really need it for readability?
    if (!this.head) {
      return null;
    }

    // return is not so explicit! hmm

    // let node = this.head;
    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }

    let nodeToReturn = null;
    let next = this.head;

    while (next) {
      if (!next.next) {
        nodeToReturn = next;
      }
      next = next.next;
    }

    return nodeToReturn;
  }
}

const list = new LinkedList();

list.insertFirst(5);
list.insertFirst(10);
list.insertFirst(15);

console.log(list);
console.log(list.size());
console.log(list.getFirst());
console.log(list.getLast());
