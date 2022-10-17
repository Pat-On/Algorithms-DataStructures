# https://leetcode.com/problems/longest-substring-without-repeating-characters/

def lengthOfLongestSubstring(s: str) -> int:
    stringLength = len(s)

    if stringLength <= 1:
        return stringLength

    longest = 0

    for i in range(stringLength):
        encounter = {}
        currentLongest = 0
        for j in range(i, stringLength):
            if not encounter.get(s[j]):
                encounter[s[j]] = True
                currentLongest += 1
                longest = max(longest, currentLongest)
            else:
                break

    return longest


print(lengthOfLongestSubstring("abcabcbb"))  # 3

print(lengthOfLongestSubstring("bbbbb"))  # 1

print(lengthOfLongestSubstring("pwwkew"))  # 3

print(lengthOfLongestSubstring("aab"))  # 2

print(lengthOfLongestSubstring(" "))  # 1

print(lengthOfLongestSubstring("biidygcc"))  # 5

print(lengthOfLongestSubstring("au"))  # 2

print(lengthOfLongestSubstring("jbpnbwwd"))  # 4
