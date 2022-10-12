# https://leetcode.com/problems/backspace-string-compare/

def backspaceCompare(s: str, t: str) -> bool:

    return True


print(backspaceCompare("ab#c", "ad#c"))  # True

print(backspaceCompare("ab##", "c#d#"))  # True

print(backspaceCompare("a#c", "b"))  # False

print(backspaceCompare("a##c", "#a#c"))  # True

print(backspaceCompare("xywrrmp", "xywrrmu#p"))  # True
