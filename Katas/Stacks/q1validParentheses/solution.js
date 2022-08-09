const string = "{()[]}";

const parens = {
  "(": ")",
  "{": "}",
  "[": "]",
};

// space  O(n)
// time   O(n)
const isValid = function (s) {
  if (s.length === 0) return true;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (parens[s[i]]) {
      stack.push(s[i]);
    } else {
      const leftBracket = stack.pop();
      const correctBracket = parens[leftBracket];
      if (s[i] !== correctBracket) return false;
    }
  }

  // unclosed brackets "{([]""
  return stack.length === 0;
};

console.log(isValid(string));
