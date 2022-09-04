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
