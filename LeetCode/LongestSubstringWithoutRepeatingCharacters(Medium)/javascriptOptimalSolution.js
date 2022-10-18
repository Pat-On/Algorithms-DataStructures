// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 0) return s.length;

  let maxCount = 0;
  const charPresents = {};

  let leftP = 0;
  let rightP = 0;
  let tempCount = 0;
  while (rightP < s.length) {
    // if char not in the object
    if (!charPresents[s[rightP]]) {
      charPresents[s[rightP]] = true;

      tempCount = rightP - leftP + 1;

      rightP++;
      // if char in the object
    } else {
      charPresents[s[leftP]] = false;

      leftP++;
    }

    maxCount = Math.max(tempCount, maxCount);
    // if char not in object
  }

  return maxCount;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3

console.log(lengthOfLongestSubstring("bbbbb")); // 1

console.log(lengthOfLongestSubstring("pwwkew")); // 3

console.log(lengthOfLongestSubstring("aab")); // 2

console.log(lengthOfLongestSubstring(" ")); // 1

console.log(lengthOfLongestSubstring("biidygcc")); // 5

console.log(lengthOfLongestSubstring("au")); // 2

console.log(lengthOfLongestSubstring("jbpnbwwd")); // 4

console.log(lengthOfLongestSubstring("dvdf")); //  3
