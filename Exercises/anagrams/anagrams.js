const breaker = require("../breaker_line")();

breaker();

/*
Examples:

anagrams("rail safety", "fairy tales") --> true
anagrams("RAIL! SAFETY", "fairy tales") --> true
anagrams("Hi there", "Bye there") --> false
*/

// Helper function
function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  // guard statement
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  // map checking process
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

console.log(anagrams("rail safety", "fairy tales")); // --> true
console.log(anagrams("RAIL! SAFETY", "fairy tales")); // --> true
console.log(anagrams("Hi there", "Bye there")); // --> false

breaker();

function cleanString(str) {
  // blah sort is slow.
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// slow solution but quite funny and short xD
function anagrams2(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

console.log(anagrams2("rail safety", "fairy tales")); // --> true
console.log(anagrams2("RAIL! SAFETY", "fairy tales")); // --> true
console.log(anagrams2("Hi there", "Bye there")); // --> false
