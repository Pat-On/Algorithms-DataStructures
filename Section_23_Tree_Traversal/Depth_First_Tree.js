class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // RECURSION <3
  DFSPreOrder() {
    // hight level overview is that:
    // root is a starter
    // left is first to go
    // then right is process
    var data = []; // entire recursive call have access to it
    function traverse(node) {
      data.push(node.value); // push to the only one data array! <- important place of it define type of DFS
      // recursion
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    // You can modify that in the way that user can specify starting point
    // of the tree by passing reference to node to function
    traverse(this.root);
    return data;
  }

  // RECURSION <3
  // We explore all children before we visite actual node
  DFSPostOrder() {
    var data = [];
    function traverse(node) {
      // recursion
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value); // post
    }
    traverse(this.root);
    return data;
  }

  // RECURSION <3
  DFSInOrder() {
    var data = [];

    function traverse(node) {
      // recursion
      if (node.left) traverse(node.left);
      data.push(node.value); // IN
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
