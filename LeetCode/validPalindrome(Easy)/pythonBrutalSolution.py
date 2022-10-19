# https://leetcode.com/problems/valid-palindrome/
import re


class Solution:
    def isPalindrome(self, s: str) -> bool:

        sAlphanumeric = re.sub(r'[^A-Za-z0-9]', "", s).lower()

        if len(sAlphanumeric) == 0:
            return True

        leftP = 0
        rightP = len(sAlphanumeric) - 1

        while leftP <= rightP:
            if sAlphanumeric[leftP] != sAlphanumeric[rightP]:
                return False

            leftP += 1
            rightP -= 1

        return True


solutionInstance = Solution()

print(solutionInstance.isPalindrome("A man, a plan, a canal: Panama"))  # true
print(solutionInstance.isPalindrome("race a car"))  # false
print(solutionInstance.isPalindrome(" "))  # true
