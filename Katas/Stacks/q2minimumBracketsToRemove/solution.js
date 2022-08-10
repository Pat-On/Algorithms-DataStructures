const string1 = "(ab(cd)";

//space complexity O(n)
// time complexity O(n)
const minRemoveToMakeValid = function (str) {
  const res = str.split(""); // space O(n)  time O(n)
  const stack = []; // O(n)

  for (let i = 0; i < res.length; i++) {
    // O(n)
    if (res[i] === "(") {
      stack.push(i);
    } else if (res[i] === ")" && stack.length) {
      stack.pop();
      // it will reach it only when stack === 0
      // remove the left directed brackets
    } else if (res[i] === ")") {
      res[i] = "";
    }
  }

  // cleaning string base on the stack and indexes within it
  //O(n)
  while (stack.length) {
    const curIdx = stack.pop();
    res[curIdx] = "";
  }

  return res.join("");
};

console.log(minRemoveToMakeValid(string1));
