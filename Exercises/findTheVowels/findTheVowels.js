const breaker = require("../breaker_line")();

breaker();

/*
Examples

vowels("hi there!") ---> 3
vowels("why do you ask?") --> 4
vowels("Why?") --> 0

*/

function vowels(str) {
  if (str.length === 0) {
    return false;
  }

  let counter = 0;
  const strToLow = str.toLowerCase();
  for (let i = 0; i < strToLow.length; i++) {
    if (
      strToLow[i] === "a" ||
      strToLow[i] === "e" ||
      strToLow[i] === "i" ||
      strToLow[i] === "o" ||
      strToLow[i] === "u"
    ) {
      counter++;
    }
  }

  return counter;
}

console.log(vowels("hi there!")); // ---> 3
console.log(vowels("why do you ask?")); // --> 4
console.log(vowels("Why?")); // --> 0

breaker();

function vowelsRecursion(str, counter = 0) {
  // base case
  if (str === "") {
    return counter;
  }
  //   console.log(str[0]);
  const char = str[0].toLowerCase();

  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    counter++;
  }
  return vowelsRecursion(str.slice(1), counter);
}

console.log(vowelsRecursion("hi there!")); // ---> 3
console.log(vowelsRecursion("why do you ask?")); // --> 4
console.log(vowelsRecursion("Why?")); // --> 0

breaker();

function vowels2(str) {
  let count = 0;
  const checker = ["a", "i", "u", "e", "o"];
  //   const checker = "aiueo" // array solution is better, because is more readable

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(vowels2("hi there!")); // ---> 3
console.log(vowels2("why do you ask?")); // --> 4
console.log(vowels2("Why?")); // --> 0

breaker();

function vowels3(str) {
  const matches = str.match(/[aeiuo]/gi); // array or null

  return matches ? matches.length : 0;
}

console.log(vowels3("hi there!")); // ---> 3
console.log(vowels3("why do you ask?")); // --> 4
console.log(vowels3("Why?")); // --> 0
