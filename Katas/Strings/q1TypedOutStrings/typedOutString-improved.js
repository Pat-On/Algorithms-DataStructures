/*
    1st hint: utilize the original string - mutate it
    2nd hint: use the 2 pointer technique
    3rd Hint: start from the end of the string
*/
const string1 = "ab#z";
const string2 = "az#z";

// time complexity is O(n + m)
// space complexity is O(1)
const backspaceCompare = function (S, T) {
  let p1 = S.length - 1;
  let p2 = T.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    // hashes
    if (S[p1] === "#" || T[p2] === "#") {
      // hash for S and p1 pointer
      if (S[p1] === "#") {
        let backCount = 2;

        while (backCount > 0) {
          p1--;
          backCount--;

          // if there is more hashes! increase backCount
          if (S[p1] === "#") {
            backCount += 2;
          }
        }
      }

      // hash for T and p2 pointer
      if (T[p2] === "#") {
        let backCount = 2;

        while (backCount > 0) {
          p2--;
          backCount--;

          // if there is more hashes! increase backCount
          if (T[p2] === "#") {
            backCount += 2;
          }
        }
      }

      // if characters are not equal and are not hashes, because of the condition above(#)
    } else {
      if (S[p1] !== T[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }

  return true;
};

console.log(backspaceCompare(string1, string2));
