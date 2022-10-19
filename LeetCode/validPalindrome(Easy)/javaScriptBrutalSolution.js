// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // filer everything what is not a-b/A-B
  const sAlphanumeric = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // empty string return true
  if (sAlphanumeric.length === 0) return true;

  let pointerL = 0;
  let pointerR = sAlphanumeric.length - 1;
  // check string if it is the same
  while (pointerL <= pointerR) {
    if (sAlphanumeric[pointerL] !== sAlphanumeric[pointerR]) return false;

    pointerL++;
    pointerR--;
  }

  // return true if string passed check
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
console.log(isPalindrome("aa"));
