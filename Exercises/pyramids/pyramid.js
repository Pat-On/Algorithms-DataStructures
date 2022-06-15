const breaker = require("../breaker_line")();

breaker();

/*
n = 3
        _   _   #   _   _
        _   #   #   #   _
        #   #   #   #   #

*/

function pyramid(n) {
  const mindpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let steps = "";

    for (let column = 0; column < 2 * n - 1; column++) {
      if (mindpoint - row <= column && mindpoint + row >= column) {
        steps += "#";
      } else {
        steps += " ";
      }
    }
    console.log(steps);
  }
}

pyramid(3);
pyramid(5);

breaker();

function pyramidRecursive(n, row = 0, level = "") {
  // base case
  if (row === n) {
    return;
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length) {
    add = "#";
  } else {
    add = " ";
  }

  pyramid(n, row, level + add);
}

pyramidRecursive(3);
pyramidRecursive(5);
