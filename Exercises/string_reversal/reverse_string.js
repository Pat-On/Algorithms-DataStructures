const breaker = require("../breaker_line");

const breakerUnpack = breaker();

breakerUnpack();

function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverse("apple"));

breakerUnpack();

// by using reverse method which is part of Array.prototype.reverse
function reverse2(str) {
  const arr = str.split("");
  arr.reverse();
  return arr.join("");

  //   return str.split("").reverse().join("");
}

console.log(reverse2("apple"));

breakerUnpack();

// ES 2015
function reverse3(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

console.log(reverse3("apple"));

breakerUnpack();

function reverse4(str) {
  //   return str.split("").reduce((rev, char) => {
  //     return char + rev;
  //   }, "");

  return str.split("").reduce((rev, char) => char + rev, "");
}

console.log(reverse4("apple"));
