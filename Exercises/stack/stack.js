const breaker = require("../breaker_line")();

breaker();

class Stack {
  constructor() {
    this.data = [];
  }

  push(item) {
    return this.data.push(item);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
