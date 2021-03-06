class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    console.log(hash);
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    console.log(this.data.length);
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }

  keysNoCollision() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    // blah 2n
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        for (let j = 0; j < this.data[i].length; j++) {
          result.push(this.data[i][j][0]);
        }
      }
    }
    return result;
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.get("grapes"));
console.log(myHashTable.set("apples", 9));
console.log(myHashTable.set("banana", 9));
console.log(myHashTable.set("apples", 9));
console.log(myHashTable.get("apples"));
// console.log(myHashTable.keys());
console.log(myHashTable.keysNoCollision());
