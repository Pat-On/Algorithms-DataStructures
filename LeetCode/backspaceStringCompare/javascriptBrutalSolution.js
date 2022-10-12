// https://leetcode.com/problems/backspace-string-compare/

const stringToArray = function (str) {
  let backspaceCount = 0;
  let arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "#") {
      backspaceCount++;
    } else if (backspaceCount === 0) {
      //   newS.unshift(s[i]);// no need for re-indexing
      arr.push(str[i]);
    } else {
      backspaceCount--;
    }
  }

  return arr;
};

const backspaceCompare = function (s, t) {
  let newS = stringToArray(s);
  let newT = stringToArray(t);

  if (newS.length !== newT.length) {
    return false;
  }

  for (let i = 0; i < newS.length; i++) {
    if (newS[i] !== newT[i]) {
      return false;
    }
  }
  return true;
  //   return newT.join("") === newS.join("");
};

console.log(backspaceCompare("ab#c", "ad#c")); // True

console.log(backspaceCompare("ab##", "c#d#")); // True

console.log(backspaceCompare("a#c", "b")); // False

console.log(backspaceCompare("a##c", "#a#c")); // True

console.log(backspaceCompare("xywrrmp", "xywrrmu#p")); // True
