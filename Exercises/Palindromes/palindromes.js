const breaker = require("../breaker_line")();

breaker();

function palindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  console.log(reversed);

  // we do not have to compare everysingle character in js :>
  // just fun! <3
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== reversed[i]) {
      return false;
    }
  }

  return true;
}
console.log(palindrome("abba"));
console.log(palindrome("abcdef"));

breaker();

function palindrome2(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(palindrome2("abba"));
console.log(palindrome2("abcdef"));

breaker();

// two pointer solution
function palindrome3(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (i !== j) {
      if (str[i] !== str[j]) {
        return false;
      }
    }
    j--;
  }
  return true;
}

console.log(palindrome3("abba"));
console.log(palindrome3("abcdef"));

breaker();

// two pinters while solution with while loop
function palindrome4(str) {
  let j = str.length - 1;
  let i = 0;
  while (i !== j && j > i && i < j) {
    // console.log(`i: ${i} j: ${j}`);
    // if (i > str.length) {
    //   break;
    // }
    if (str[i] !== str[j]) {
      return false;
    }
    j--;
    i++;
  }

  return true;
}
console.log(palindrome4("abba"));
console.log(palindrome4("abbba"));
console.log(palindrome4("acbba"));
console.log(palindrome4("abcdef"));

breaker();

// using build in methods
function palindrome5(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - 1 - i];
  });
}

console.log(palindrome5("abba"));
console.log(palindrome5("abcdef"));
