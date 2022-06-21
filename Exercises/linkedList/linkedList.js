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
  clear() {
    // we remove reference from linked list, but information may still be in memory hmm ^^
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }

    // this.head = this.head.next

    const removed = this.head;
    removed.next = null;

    const oldSecondNode = this.head.next;
    this.head = oldSecondNode;

    this.length--;
    return removed;
  }

  removeLast() {
    if (!this.head) {
      return null;
    }
    // edge case when only one item, only head
    if (!this.head.next) {
      return this.removeFirst();
    }

    // I should use previous and node - following convention
    let secondFromEnd = null;
    let removedNode = null;
    let node = this.head;
    while (node.next) {
      secondFromEnd = node;
      node = node.next;
    }

    removedNode = secondFromEnd.next;
    secondFromEnd.next = null;

    this.length--;

    return removedNode;
  }
}

const list = new LinkedList();

// list.insertFirst(5);
list.insertFirst(10);
list.insertFirst(5);
// list.insertFirst(15);

console.log(list.removeLast());
console.log(list);

// console.log(list);
// console.log(list.size());
// console.log(list.getFirst());
// console.log(list.removeFirst());
// console.log(list.getFirst());
// console.log(list.getLast());
