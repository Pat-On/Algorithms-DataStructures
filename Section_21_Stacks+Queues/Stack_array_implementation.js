// There is more than one way of implementing a stack
// LIFO - Last In, First out

class Stack {
  constructor() {
    this.stack = [];
  }
  //  ------>
  // [1, 2, 3, 4, 5]
  stackPush(val) {
    return this.stack.push(val);
  }

  stackPop() {
    return this.stack.pop();
  }
  display() {
    console.log(this.stack);
  }

  // other way around
  //     <-----
  //  [1, 2, 3, 4, 5]
  // because of adding on the beggining of array it is horrible solution Big O (n)
  stackUnshift(val) {
    return this.stack.unshift(val);
  }

  stackShift() {
    return this.stack.shift();
  }

  clearStack() {
    this.stack = [];
  }
}

const newArrayStack = new Stack();

newArrayStack.stackPush("one");
newArrayStack.stackPush("two");
newArrayStack.stackPush("three");
newArrayStack.stackPush("four");

newArrayStack.display();
console.log(newArrayStack.stackPop());
newArrayStack.display();

newArrayStack.clearStack();

// other way around - horrible performance :<

newArrayStack.stackUnshift("one");
newArrayStack.stackUnshift("two");
newArrayStack.stackUnshift("three");
newArrayStack.stackUnshift("four");

newArrayStack.display();
console.log(newArrayStack.stackShift());
newArrayStack.display();
