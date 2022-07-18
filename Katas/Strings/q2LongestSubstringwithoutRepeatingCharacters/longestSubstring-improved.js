const string = "autgdfh";

const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  // setting variables
  // const seen = {};
  const seen = new Map();

  // optimized version - map in javascript
  let left = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    // const previouslySeenChar = seen[currentChar];

    // map syntax
    const previouslySeenChar = seen.get(currentChar);
    // comparing if it is more than left boundary
    if (previouslySeenChar >= left) {
      //we are moving left pointer if the letter repeated
      left = previouslySeenChar + 1;
    }

    // resetting current value inside object
    // seen[currentChar] = right;

    //map syntax
    seen.set(currentChar, right);

    // choosing the longest substring  (+1 because we want to know how many element
    // is from - to including elements from and to
    // we want to count elements not a spaces between :>
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};

console.log(lengthOfLongestSubstring(string));
