# https://leetcode.com/problems/backspace-string-compare/
import array


def stringToArray(s: str) -> array:
    arr = []
    for item in s:
        if item == "#":
            len(arr) and arr.pop()
        else:
            arr.append(item)
    print(arr)
    return arr


def backspaceCompare(s: str, t: str) -> bool:
    newS = stringToArray(s)
    newT = stringToArray(t)

    if len(newS) != len(newT):
        return False

    for i in range(len(newS)):
        if (newS[i] != newT[i]):
            return False

    return True


print(backspaceCompare("ab#c", "ad#c"))  # True

print(backspaceCompare("ab##", "c#d#"))  # True

print(backspaceCompare("a#c", "b"))  # False

print(backspaceCompare("a##c", "#a#c"))  # True

print(backspaceCompare("xywrrmp", "xywrrmu#p"))  # True
