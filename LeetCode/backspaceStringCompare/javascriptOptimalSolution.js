// https://leetcode.com/problems/backspace-string-compare/

// 1st hint: utilize the original strings
// 2nd hint use the 2 pointer technique
// 3rd start from the end of the string
const backspaceCompare = function (s, t) {
  let pointerS = s.length - 1;
  let pointerT = t.length - 1;

  while (pointerS >= 0 || pointerT >= 0) {
    if (s[pointerS] === "#") {
      let backSpace = 2;
      while (backSpace > 0) {
        pointerS--;
        backSpace--;
        if (s[pointerS] === "#") {
          backSpace += 2;
        }
      }
    }
    if (t[pointerT] === "#") {
      let backSpace = 2;
      while (backSpace > 0) {
        pointerT--;
        backSpace--;
        if (t[pointerT] === "#") {
          backSpace += 2;
        }
      }
    }

    if (t[pointerT] === s[pointerS]) {
      pointerT--;
      pointerS--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(backspaceCompare("ab#c", "ad#c")); // True

console.log(backspaceCompare("ab##", "c#d#")); // True

console.log(backspaceCompare("a#c", "b")); // False

console.log(backspaceCompare("a##c", "#a#c")); // True

console.log(backspaceCompare("xywrrmp", "xywrrmu#p")); // True
