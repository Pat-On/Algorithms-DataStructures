const string1 = "ab#z";
const string2 = "az#z";

// time complexity -
// space complexity

// helper function On
const buildString = function (string) {
  const builtString = [];
  for (let p = 0; p < string.length; p++) {
    if (string[p] !== "#") {
      builtString.push(string[p]);
    } else {
      builtString.pop();
    }
  }

  return builtString;
};
// time complexity is n + m
const backspaceCompare = function (S, T) {
  const finalS = buildString(S); // O (n)
  const finalT = buildString(T); // O (m)

  if (finalS.length !== finalT.length) {
    return false;
  } else {
    for (let p = 0; p < finalS.length; p++) {
      if (finalS[p] !== finalT[p]) {
        return false;
      }
    }
  }

  return true;
};

// summarize
// O(2n + b) or O(a+2b)
// O(a+b)

// Space is also: O(a+b)

console.log(backspaceCompare(string1, string2));
