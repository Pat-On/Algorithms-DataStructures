const backspaceCompare = function (s, t) {
  let backspaceCount = 0;
  let newS = [];
  let newT = [];

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "#") {
      backspaceCount++;
    } else if (backspaceCount === 0) {
      newS.unshift(s[i]);
    } else {
      backspaceCount--;
    }
  }

  backspaceCount = 0;

  for (let i = t.length - 1; i >= 0; i--) {
    if (t[i] === "#") {
      backspaceCount++;
    } else if (backspaceCount === 0) {
      newT.unshift(t[i]);
    } else {
      backspaceCount--;
    }
  }

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
