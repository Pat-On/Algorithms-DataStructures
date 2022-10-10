# https://leetcode.com/problems/trapping-rain-water/

def trap(height: list[int]) -> int:
    total = 0
    maxL = 0
    maxR = 0

    for i in range(len(height)):
        # to the left
        for toLeft in range(i):
            if height[toLeft] > maxL:
                maxL = height[toLeft]
        # to the right
        for toRight in range(i+1, len(height)):
            if height[toRight] > maxR:
                maxR = height[toRight]

        # calculate current water
        currentWater = min(maxL, maxR) - height[i]
        # update total
        if currentWater > 0:
            total = total + currentWater

        # reset variables
        maxL = 0
        maxR = 0

    # return results
    return total


height = [4, 2, 0, 3, 2, 5]
print(trap(height))  # 9

height2 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
print(trap(height2))  # 6
