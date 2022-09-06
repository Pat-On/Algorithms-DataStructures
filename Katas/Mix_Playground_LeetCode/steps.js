function steps(n) {
  for (let i = 0; i < n; i++) {
    let string = "";
    string = "#".repeat(i + 1) + " ".repeat(n - (i + 1));
    console.log(string);
  }
}
steps(1);
console.log("-".repeat(10));
steps(2);
//    '# '
//    '##'

console.log("-".repeat(10));
steps(3);
//    '#  '
//    '## '
//    '###'

console.log("-".repeat(10));
steps(4);
//    '#   '
//    '##  '
//    '### '
//    '####'

// recursive solution
function stepsRec(n, row = 0, stair = "") {
  // base case
  if (n === row) {
    return;
  }

  // next level
  if (stair.length === n) {
    console.log(stair);
    return stepsRec(n, row + 1);
  }

  // current level building process
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  stepsRec(n, row, stair);
}
console.log("Recursion");
stepsRec(3);
stepsRec(10);
stepsRec(20);
