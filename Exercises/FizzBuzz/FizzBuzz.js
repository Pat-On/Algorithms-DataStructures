const breaker = require("../breaker_line")();

breaker();

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
      // by 3
    } else if (i % 3 === 0) {
      console.log("fizz");
      // by 5
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(5);
// fizzBuzz(3);
fizzBuzz(15);

breaker();

function fizzBuzz2(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    if (i % 3 === 0) str += "fizz";
    if (i % 5 === 0) str += "buzz";
    console.log(str || i);
  }
}

fizzBuzz2(15);
