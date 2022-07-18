const string = "A man, a plan, a canal: Panama";

const isValidPalindrome = function (s) {
  // note about regex:
  // /[^A-Za-z0-9]/g
  // ^ everything what is not
  // /g global

  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // initialize left/right pointers to point at the middle index of the string. Remember, indexes start at 0 meaning that we have to floor() the value from dividing length by 2 in order to get the index of the center.
  let left = Math.floor(s.length / 2),
    right = left;

  // if the string is even, move left pointer back by 1 so left/right are pointing at the 2 middle values respectively.
  if (s.length % 2 === 0) {
    left--;
  }

  // loop through the string while expanding pointers outwards comparing the characters.
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      return false;
    }

    left--;
    right++;
  }

  return true;
};

console.log(isValidPalindrome(string));

console.log(isValidPalindrome("aabaa"));
console.log(isValidPalindrome("aabbaa"));
console.log(isValidPalindrome("aba"));
console.log(isValidPalindrome("a"));
console.log(isValidPalindrome(""));
