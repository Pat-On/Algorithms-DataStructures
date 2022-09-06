function pyramid(n) {
  for (let i = 0; i < n; i++) {
    // additional minus one because of the core
    const left = " ".repeat(n - i - 1) + "#".repeat(i);
    const core = "#";
    const right = "#".repeat(i) + " ".repeat(n - i - 1);
    console.log(left + core + right);
  }
}

pyramid(1);
//      '#'

pyramid(2);
//      ' # '
//      '###'

pyramid(3);
//      '  #  '  1 0 2
//      ' ### '  1 1 1
//      '#####'  1 0 2

pyramid(5);

function pyramidRecursive(n, row = 0, level = "") {
  // base case
  if (n === row) {
    return;
  }

  // mid point
  const midPoint = Math.floor((2 * n - 1) / 2);

  // next step
  if (level.length === n * 2 + 1) {
    console.log(level);
    return pyramidRecursive(n, row + 1);
  }

  // building level
  if (level.length >= midPoint - row && level.length <= midPoint + row) {
    level += "#";
  } else {
    level += " ";
  }
  // rec
  pyramidRecursive(n, row, level);
}

pyramidRecursive(3);
pyramidRecursive(4);
pyramidRecursive(5);
