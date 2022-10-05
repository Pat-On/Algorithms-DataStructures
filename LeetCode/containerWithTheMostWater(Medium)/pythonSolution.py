# https://leetcode.com/problems/container-with-most-water/

def maxArea(height: list[int]) -> int:
    left = 0
    right = len(height) - 1
    amount = 0
    while left < right:
        calcAmount = 0

        # calculate amount
        if height[left] <= height[right]:
            calcAmount = height[left] * (right - left)
        else:
            calcAmount = height[right] * (right - left)
        # change valuye of amount
        if amount < calcAmount:
            amount = calcAmount
        print(left, right)

        # move one of the pointers
        if height[left] <= height[right]:
            left += 1
        else:
            right -= 1

        # value to return

    return amount


print(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
