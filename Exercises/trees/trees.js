const breaker = require("../breaker_line")();

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root]; // linked list would be faster

    while (arr.length) {
      const node = arr.shift(); // shift - always first element

      arr.push(...node.children); // "looping"
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root]; // linked list would be faster

    while (arr.length) {
      const node = arr.shift(); // shift - always first element

      arr.unshift(...node.children); // <-- difference - unshift has horrible performance
      fn(node);
    }
  }
  /*
 Implement traverseBF and traverseDF on the tree class.
 each method should accept a function that gets called with each element in the tree

    BF - Breadth-First Traversal - level by level 
    DF - Deep-First Traversal - from very root to the bottom! 

 */
}

breaker();
