const breaker = require("../breaker_line")();

breaker();

/*
Examples

capitalize("a short sentence") // "A Short Sentence"
capitalize("a lazy fox") // "A Lazy Fox"
capitalize("look, it is working!") // "Look, It Is Working!"

*/

/*
    Pseudocode

    Make an empty array 'words'
    split the input string by spaces to get an array
    for each word in the array
        uppercase the first letter of the word
        join first letter with rest of the string
        puch result into words array
    Joind words into a string and return it

*/

function capitalize(str) {
  const words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}
console.log(capitalize("a short sentence")); // "A Short Sentence"
console.log(capitalize("a lazy fox")); // "A Lazy Fox"
console.log(capitalize("look, it is working!")); // "Look, It Is Working!"

breaker();

function capitalize2(str) {
  // hardcoded part - not so much cool
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}
console.log(capitalize2("a short sentence")); // "A Short Sentence"
console.log(capitalize2("a lazy fox")); // "A Lazy Fox"
console.log(capitalize2("look, it is working!")); // "Look, It Is Working!"
