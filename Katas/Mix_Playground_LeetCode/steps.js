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
