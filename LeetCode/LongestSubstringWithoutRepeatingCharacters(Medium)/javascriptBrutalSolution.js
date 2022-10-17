// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) return 1;
  // counters
  let presentChar = {};
  let counterFinal = 0;
  let counter = 0;

  // looping
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (presentChar[s[j]]) {
        // if present - reset
        presentChar = {};
        counter = 0;
        // we need to break from loop not to continue!
        break;
      } else {
        // if not present
        presentChar[s[j]] = true;
        counter++;
        if (counter > counterFinal) counterFinal = counter;
      }
    }
  }

  // return
  return counterFinal;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3

console.log(lengthOfLongestSubstring("bbbbb")); // 1

console.log(lengthOfLongestSubstring("pwwkew")); // 3

console.log(lengthOfLongestSubstring("aab")); // 2

console.log(lengthOfLongestSubstring(" ")); // 1

console.log(lengthOfLongestSubstring("biidygcc")); // 5

console.log(lengthOfLongestSubstring("au")); // 2

console.log(lengthOfLongestSubstring("jbpnbwwd")); // 4
