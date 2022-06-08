const breaker = require("../breaker_line")();

breaker();

function reverseInt(n) {
  let minusOrPlus = 1;
  let stringifiedN = n.toString();
  let reversedStringN = "";

  if (n < 0) {
    minusOrPlus = -1;
    stringifiedN = stringifiedN.slice(1);
  }
  for (let i = stringifiedN.length - 1; i >= 0; i--) {
    reversedStringN += stringifiedN[i];
  }

  return parseInt(reversedStringN) * minusOrPlus;
}

console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-900));

breaker();

function reverseIn2(n) {
  const reversed = n.toString().split("").reverse().join("");
  if (n < 0) {
    return parseInt(reversed) * -1;
  }

  return parseInt(reversed);
}

console.log(reverseIn2(15));
console.log(reverseIn2(981));
console.log(reverseIn2(500));
console.log(reverseIn2(-15));
console.log(reverseIn2(-900));

breaker();

function reverseIn3(n) {
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseIn3(15));
console.log(reverseIn3(981));
console.log(reverseIn3(500));
console.log(reverseIn3(-15));
console.log(reverseIn3(-900));
