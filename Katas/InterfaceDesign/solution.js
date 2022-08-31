class Person {
  constructor(name) {
    this.name = name;
    this.isAlive = true;
    this.children = [];
  }
}

// T: O(n)
// S: O(n)

// Another problem where 1st thing deeply and understand problem
// and then only then go to code!
// complexity very often is contained in the question and how you can analyses it
class Monarchy {
  constructor(king) {
    this.king = new Person(king);
    // internal hash map  <-- interesting
    this._persons = {
      [this.king.name]: this.king,
    };
  }

  birth(childName, parentName) {
    const parent = this._persons[parentName];
    const newChild = new Person(childName);

    parent.children.push(newChild);
    this._persons[childName] = newChild;
  }

  death(name) {
    const person = this._persons[name];

    if (person === undefined) {
      return null;
    }

    person.isAlive = false;
  }

  _dfs(currentPerson, order) {
    // base case - there is no more items to process

    if (currentPerson.isAlive) {
      order.push(currentPerson.name);
    }

    // iterate through currentPerson children array and cal recursion
    for (let i = 0; i < currentPerson.children.length; i++) {
      this._dfs(currentPerson.children[i], order);
    }
  }

  getOrderOfSuccession() {
    const order = [];
    this._dfs(this.king, order);
    return order;
  }
}

const mon = new Monarchy("Jake");
mon.birth("Catherine", "Jake");
mon.birth("Tom", "Jake");
mon.birth("Celine", "Jake");
mon.birth("Peter", "Celine");
mon.birth("Jane", "Catherine");
mon.birth("Farah", "Jane");
mon.birth("Mark", "Catherine");
console.log(mon.getOrderOfSuccession());

mon.death("Jake");
mon.death("Jane");

console.log(mon.getOrderOfSuccession());
