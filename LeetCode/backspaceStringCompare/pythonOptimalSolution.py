# https://leetcode.com/problems/backspace-string-compare/

from pickle import FALSE
from sndhdr import whathdr


def backspaceCompare(s: str, t: str) -> bool:
    pointerS = len(s) - 1
    pointerT = len(t) - 1

    while pointerS >= 0 or pointerT >= 0:

        # backspacing s string
        if s[pointerS] == "#":
            backspaceCounter = 2
            while (backspaceCounter > 0 and pointerS >= 0):
                backspaceCounter -= 1
                pointerS -= 1
                if s[pointerS] == "#":
                    backspaceCounter += 2

        # backspacing b string
        if t[pointerT] == "#":
            backspaceCounter = 2
            while (backspaceCounter > 0 and pointerT >= 0):
                backspaceCounter -= 1
                pointerT -= 1
                if t[pointerT] == "#":
                    backspaceCounter += 2

        # check if the same or move pointers
        # TODO: Think over the if/elif logic
        if (t[pointerT] == s[pointerS] and pointerT >= 0 and pointerS >= 0) or (pointerT < 0 and pointerS < 0):
            pointerT -= 1
            pointerS -= 1
        elif t[pointerT] != s[pointerS] or pointerT < 0 or pointerS < 0:
            return False

    return True


print(backspaceCompare("ab#c", "ad#c"))  # True

print(backspaceCompare("ab##", "c#d#"))  # True

print(backspaceCompare("a#c", "b"))  # False

print(backspaceCompare("a##c", "#a#c"))  # True

print(backspaceCompare("xywrrmp", "xywrrmu#p"))  # True

print(backspaceCompare("aaa###a", "aaaa###a"))  # False
