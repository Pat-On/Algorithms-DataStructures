const breaker = require("../breaker_line")();
const Stack = require("../stack/stack");

breaker();

/*
        Exercise
    Implement a Queue datastructure using two stacks.
    Do not create an array inside of the "Queue" class
    Queue should implement the methods: 'add'. 'remove', and 'peek'
    
        Examples
        const q = new Queue()
        q.add(1)
        q.add(2)
        q.peek()
        q.remove()
        q.remove()

*/

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.lastAction = "";
  }

  _traverseStacks() {
    if (this.stack1.peek()) {
      while (this.stack1.peek()) {
        this.stack2.push(this.stack1.pop());
      }
    } else if (this.stack2.peek()) {
      while (this.stack2.peek()) {
        this.stack1.push(this.stack2.pop());
      }
    }
  }

  add(item) {
    if (this.lastAction === "peek" || this.lastAction === "remove") {
      this._traverseStacks();
    }
    this.lastAction = "add";

    // add if something in stack1
    if (this.stack1.peek()) {
      return this.stack1.push(item);
      // add if something in stack2
    } else if (this.stack2.peek()) {
      return this.stack2.push(item);
      // add to stack1 if both stacks are empty
    } else if (!this.stack1.peek() && !this.stack2.peek()) {
      return this.stack1.push(item);
    }
  }

  peek() {
    if (this.lastAction === "add") {
      this._traverseStacks();
    }
    this.lastAction = "peek";

    // add if something in stack1
    if (this.stack1.peek()) {
      return this.stack1.peek();
      // add if something in stack2
    } else if (this.stack2.peek()) {
      return this.stack2.peek();
    }
  }

  remove() {
    if (this.lastAction === "add") {
      this._traverseStacks();
    }
    this.lastAction = "remove";

    // add if something in stack1
    if (this.stack1.peek()) {
      return this.stack1.pop();
      // add if something in stack2
    } else if (this.stack2.peek()) {
      return this.stack2.pop();
    }
  }
}

const crazySlowQueue = new Queue();

crazySlowQueue.add(1);
crazySlowQueue.add(2);
crazySlowQueue.add(3);
crazySlowQueue.add(4);
crazySlowQueue.add(5);

console.log(crazySlowQueue.peek());

crazySlowQueue.add(6);
crazySlowQueue.add(7);

console.log(crazySlowQueue.peek());
crazySlowQueue.add(7);
console.log(crazySlowQueue.remove());
crazySlowQueue.add(8);

console.log(crazySlowQueue.peek());

breaker();

class Queue2 {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

const crazySlowQueue2 = new Queue2();

crazySlowQueue2.add(1);
crazySlowQueue2.add(2);
crazySlowQueue2.add(3);
crazySlowQueue2.add(4);
crazySlowQueue2.add(5);

console.log(crazySlowQueue2.peek());

crazySlowQueue2.add(6);
crazySlowQueue2.add(7);

console.log(crazySlowQueue2.peek());
crazySlowQueue2.add(7);
console.log(crazySlowQueue2.remove());
crazySlowQueue2.add(8);

console.log(crazySlowQueue2.peek());

class Queue {
  constructor() {
    this.stackA = new Stack(); // Will always have the first-in item at the top of the stack
    this.stackB = new Stack(); // Temporary holding structure
  }

  add(data) {
    // Move all existing queue items from stack A to temporary holding stack B.
    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }
    // Put last-in data item at the bottom of stack A
    this.stackA.push(data);
    // Move all data items on the temporary holding stack B back onto stack A
    // such that stack A maintains an order of last data in is at the bottom of
    // stack A and the first data-in value is at the top of stack A.
    while (this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }
  }

  peek() {
    return this.stackA.peek();
  }

  remove() {
    return this.stackA.pop();
  }
}
