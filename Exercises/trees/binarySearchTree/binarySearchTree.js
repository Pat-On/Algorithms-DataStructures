// when You are working on the tree You need to pay attention
// on what type of tree you are working on - binary or binary search tree

// think over how to validate the tree if the binary search tree is valid

/* 
--- Directions 
1) Implement the node class to  create a binary search tree.
the constructor should initialize values data, left and right

2) Implement the insert method for the node class.
insert should accept an argument data, then create an insert a new node 
at the appropriate location in the tree
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  // lets do iteration via recursion! <3
  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    // recursing to right hand side
    if (this.data < data && this.right) {
      return this.right.contains(data);
    }
    // recursing to right hand side
    else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    // nothing found
    return null;
  }
}
