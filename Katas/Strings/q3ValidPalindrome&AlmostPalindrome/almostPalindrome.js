/*
    "race a car"
    "raceeacar":
        race[a]car
        rac[e]acar
    We can remove one of the elements and in both case we would get palindrome

                "abccdba"
    "abccba"               "abcdba"
        True                    False
        
                "abcdefdba"
    abcdefba                "abdefdba"  
        False                   False
(it is not almost palindrome because removing one letter changing nothing)

    Almost Palindrome edge cases - six case tests
    "race a car"  - True
    "abccdba" - True
    "abcdefdba" - False
    ""  - True
    "a" - True
    "ab" - True

*/

// space complexity Big O (n)
// space complexity - no scaling data structures =- so O(n)
const validPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return (
        validSubPalindrome(s, start + 1, end) ||
        validSubPalindrome(s, start, end - 1)
      );
    }
    start++;
    end--;
  }
  return true;
};

// subproblem
const validSubPalindrome = function (s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(validPalindrome("race a car")); // - True
console.log(validPalindrome("abccdba")); // - True
console.log(validPalindrome("abcdefdba")); // - False
console.log(validPalindrome("")); // - True
console.log(validPalindrome("a")); // - True
console.log(validPalindrome("ab")); // - True
