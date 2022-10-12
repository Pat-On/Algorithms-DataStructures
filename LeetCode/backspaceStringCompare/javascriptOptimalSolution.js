// https://leetcode.com/problems/backspace-string-compare/
const backspaceCompare = function (s, t) {
  return True;
};

console.log(backspaceCompare("ab#c", "ad#c")); // True

console.log(backspaceCompare("ab##", "c#d#")); // True

console.log(backspaceCompare("a#c", "b")); // False

console.log(backspaceCompare("a##c", "#a#c")); // True

console.log(backspaceCompare("xywrrmp", "xywrrmu#p")); // True
