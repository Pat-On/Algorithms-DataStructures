# https://leetcode.com/problems/longest-substring-without-repeating-characters/


def lengthOfLongestSubstring(s: str) -> int:
    if len(s) <= 1:
        return 1

    maxLength = 0

    charRegistry = {}
    leftP = 0
    rightP = 0
    tempLength = 0

    while rightP < len(s):
        if not charRegistry.get(s[rightP]):
            charRegistry[s[rightP]] = True

            tempLength = rightP - leftP + 1

            rightP += 1
        else:
            charRegistry[s[leftP]] = False

            leftP += 1

        maxLength = max(tempLength, maxLength)

    return maxLength


print(lengthOfLongestSubstring("abcabcbb"))  # 3

print(lengthOfLongestSubstring("bbbbb"))  # 1

print(lengthOfLongestSubstring("pwwkew"))  # 3

print(lengthOfLongestSubstring("aab"))  # 2

print(lengthOfLongestSubstring(" "))  # 1

print(lengthOfLongestSubstring("biidygcc"))  # 5

print(lengthOfLongestSubstring("au"))  # 2

print(lengthOfLongestSubstring("jbpnbwwd"))  # 4

print(lengthOfLongestSubstring("dvdf"))  # 3
