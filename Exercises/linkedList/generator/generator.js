const breaker = require("../../breaker_line")();

breaker();

function* numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}

const generator = numbers();

console.log(generator.next());
console.log(generator.next(10));

breaker();

function* list() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const generatorList = list();
console.log(generatorList.next());
console.log(generatorList.next());
console.log(generatorList.next());
console.log(generatorList.next());
console.log(generatorList.next());

breaker();

const generatorList2 = list();

const numbersArray = [];
for (let value of generatorList2) {
  numbersArray.push(value);
}
console.log(numbersArray);

breaker();

function* numbersWithFunction() {
  yield 1;
  yield 2;
  yield* moreNumbers(); // star in "unpacking" object generator - iterator (DELEGATING BEHAVIOR )
  //   yield moreNumbers() // WITHOUT * DOES NOT WORK!
  yield 6;
  yield 7;
}

function* moreNumbers() {
  yield 3;
  yield 4;
  yield 5;
}

const twoGeneratorsInOne = numbersWithFunction();

const numbersArray2 = [];
for (let value of twoGeneratorsInOne) {
  numbersArray2.push(value);
}
console.log(numbersArray2);

breaker();

// MORE REAL EXAMPLE

class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }

  // generator as a property on the tree class
  *printValues() {
    // RECURSION
    yield this.value;
    for (let child of this.children) {
      yield* child.printValues();
    }
  }
}

const tree = new Tree(1, [new Tree(2, [new Tree(4)]), new Tree(3)]);

const values = [];
for (let value of tree.printValues()) {
  values.push(value);
}

console.log(values);
