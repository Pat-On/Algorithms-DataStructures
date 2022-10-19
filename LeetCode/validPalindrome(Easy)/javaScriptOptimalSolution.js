// https://leetcode.com/problems/valid-palindrome/

// Removes all non-alphanumeric characters and converts to lowercase
const alphaNumOnly = (str) => {
  const alphaNum = str.replace(/[^a-z0-9]/gi, "");
  return alphaNum.toLowerCase();
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = alphaNumOnly(s);
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
