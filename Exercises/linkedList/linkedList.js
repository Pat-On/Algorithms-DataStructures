class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/* 

        You can implement by reusing code! 

                Think ahead! 

insertFirst() insertLast() -> insertAt(data, 0) insertAt(data, this.size() - 1)
removeFirst() removeLast() -> removeAt(0)       removeAt(this.size() - 1)
getFirst()    getLast()    -> getAt(0)          getAt(this.size() - 1)

So we can write just three function on right and reuse the code

so we are writing 3 function which are going to be much more generic.
*/

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

    const oldSecondNode = this.head.next;
    this.head = oldSecondNode;
    removed.next = null;

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

  insertLast(data) {
    const node = new Node(data);
    const lastNode = this.getLast();
    if (!lastNode) {
      return this.insertFirst(node);
    }

    lastNode.next = node;
    return lastNode.next;

    // solution written in different way:
    // const last = this.getLast();

    // if (last) {
    //   // there are some existing node in our chain
    //   last.next = new Node(data);
    //   return last.next;
    // } else {
    //   // empty chain
    //   this.head = new Node(data);
    //   return this.head;
    // }
  }

  getAt(index) {
    //   let node = this.head;
    //   let counter = 0;
    //   let nodeToReturn = null;

    //   while (node) {
    //     if (counter === index) {
    //       nodeToReturn = node;
    //       break;
    //     }
    //     node = node.next;
    //     counter++;
    //   }

    //   return nodeToReturn ? nodeToReturn : -1;

    // tutor solution
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    // edge cases:
    // - empty list
    // - index out of bound
    // - last node
    // if (!this.head) {
    //   return null;
    // }
    // if (!this.head.next || index === 0) {
    //   return this.removeFirst();
    // }

    // let counter = 0;
    // let node = this.head;
    // let previous = null;
    // let temp = null;

    // while (node) {
    //   if (counter === index) {
    //     temp = previous.next;
    //     previous.next = null;
    //     temp.next = null;
    //     return temp;
    //   }
    //   previous = node;
    //   node = node.next;
    //   counter++;
    // }
    // return null;

    // tutor solution: reusing methods - more clean solution
    if (!this.head) {
      console.log("!this.head");
      return null;
    }

    if (index === 0) {
      console.log("index === 0");
      this.head = this.head.next;
      return null;
    }

    const previous = this.getAt(index - 1);
    console.log("previous", previous);
    if (!previous || !previous.next) {
      console.log("!previous || !previous.next");
      return null;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    // if (!this.head || index === 0) {
    //   return this.insertFirst(data);
    // }

    // const nodeToInsert = new Node(data);

    // let counter = 0;
    // let previous = null;
    // let node = this.head;
    // while (node) {
    //   if (counter === index) {
    //     previous.next = nodeToInsert;
    //     nodeToInsert.next = node;
    //     return nodeToInsert;
    //   }
    //   previous = node;
    //   node = node.next;
    //   counter++;
    // }

    // this.insertLast(nodeToInsert);

    // other solution
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    // just the short cut
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

const list = new LinkedList();

list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
// list.insertFirst(4);
// list.insertAt(222, 0);

// console.log(list.head);
for (let item of list) {
  console.log(item);
}
// console.log(list);
// console.log(list.head.next);

module.exports = { Node, LinkedList };
