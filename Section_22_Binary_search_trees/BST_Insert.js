class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;

    // if we want to track duplication we can add frequency counter
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);

    // empty tree - easy win :>
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    var current = this.root;

    // Loop to find spot
    while (true) {
      // if the number is already there
      // !! if we are going to try insert duplicates value in that case we would have infinitve loop
      if (value === current.value) return undefined;
      // less than
      if (value < current.value) {
        // if left is empty - no node
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        // updating current
        current = current.left;

        //more than
      } else {
        // if right is empty - no node
        if (current.right === null) {
          current.right = newNode;
          return this;
        }

        // updating current
        current = current.right;
      }
    }
  }
}

//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
