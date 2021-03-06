const breaker = require("../breaker_line")();

breaker();

function maxChar(str) {
  const counterObject = {};
  let maxCharacter = "";

  for (let i = 0; i < str.length; i++) {
    // short solutions
    // counterObject[str[i]] = counterObject[str[i]] + 1 || 1;
    if (counterObject[str[i]]) {
      counterObject[str[i]] = counterObject[str[i]] + 1;
    } else {
      counterObject[str[i]] = 1;
    }
  }

  //   console.log(counterObject);
  //   for (const item in counterObject) {
  //     if (!counterObject[maxCharacter]) {
  //       maxCharacter = item;
  //     }
  //     // console.log(counterObject[maxCharacter], counterObject[item], item);

  //     if (counterObject[maxCharacter] < counterObject[item]) {
  //       maxCharacter = item;
  //     }
  //   }
  //   console.log(maxCharacter)

  Object.entries(counterObject).forEach(([key, value]) => {
    if (!counterObject[maxCharacter]) {
      maxCharacter = key;
    }
    if (counterObject[maxCharacter] < counterObject[key]) {
      maxCharacter = key;
    }
  });
  return maxCharacter;
}
console.log(maxChar("a"));
console.log(maxChar("abccccccccccd"));
console.log(maxChar("apple 1234522222222"));

breaker();

function maxChar2(str) {
  let chars = {};
  let big = 0;
  let bigChar = "";

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  Object.entries(chars).forEach(([key, value]) => {
    if (big < value) {
      big = value;
      bigChar = key;
    }
  });

  return bigChar;
}

console.log(maxChar2("abccccccccccd"));
console.log(maxChar2("apple 1234522222222"));

breaker();

function maxChar3(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxChar3("abccccccccccd"));
console.log(maxChar3("apple 1234522222222"));
