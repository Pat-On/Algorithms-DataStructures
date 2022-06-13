const breaker = require("../breaker_line")();

breaker();

/*

pseudocode 

n = 3
                something like "matrix"

    |     column -->
    v    # _ _
    r    # # _
    o    # # #
    w

    From 0 to n
        Create an empty string, 'stair'
        from 0 to n
            if the current column is equal to or less the current row
                add a '#' to 'stair'
            else
                add a space to 'stair'
        console log 'stair'

*/

// iterative solution - slow O(n^2)
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }

    console.log(stair);
  }
}

steps(10);
steps(20);

breaker();

// recursive solution
function stepsRec(n, row = 0, stair = "") {
  // base case
  if (n === row) {
    return;
  }

  // new row
  if (n === stair.length) {
    console.log(stair);
    return stepsRec(n, row + 1);
    // return // can be here too
  }

  // constructing stair
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  // recursive call when stair under construction
  stepsRec(n, row, stair);
}

stepsRec(10);
stepsRec(20);
