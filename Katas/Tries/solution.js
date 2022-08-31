class TrieNode {
  constructor() {
    this.end = false;
    // we do not need a value because we utilize hash table
    this.keys = {};
  }
}

// t O(l) <-- length of the word
// s O(n)
// stack base recursion - O(l)

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word, node = this.root) {
    // base case
    if (word.length === 0) {
      node.end = true;
      return;

      // recursion
    } else if (!node.keys[word[0]]) {
      node.keys[word[0]] = new TrieNode();
      // substring so abcde -> bcde -> cde -> de -> e ->
      this.insert(word.substring(1), node.keys[word[0]]);
    } else {
      this.insert(word.substring(1), node.keys[word[0]]);
    }
  }

  search(word, node = this.root) {
    if (word.length === 0 && node.end) {
      return true;
    } else if (word.length === 0) {
      return false;
    } else if (!node.keys[word[0]]) {
      return false;
    } else {
      // recursion          substring works almost like i-- in loop
      return this.search(word.substring(1), node.keys[word[0]]);
    }
  }

  startsWith(prefix, node = this.root) {
    if (prefix.length === 0) {
      return true;
    } else if (!node.keys.hasOwnProperty(prefix[0])) {
      return false;
    } else {
      // recursion
      return this.startsWith(prefix.substring(1), node.keys[prefix[0]]);
    }
  }
}

const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple")); // returns true
console.log(trie.search("app")); // returns false
console.log(trie.startsWith("app")); // returns true
trie.insert("dog");
trie.insert("app");
console.log(trie.search("app")); // returns true

console.log(trie);
