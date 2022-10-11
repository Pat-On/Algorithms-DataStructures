# https://leetcode.com/problems/trapping-rain-water/

def trap(height: list[int]) -> int:
    totalResults = 0
    maxLeft = 0
    maxRight = 0

    leftPointer = 0
    rightPointer = len(height) - 1

    while leftPointer != rightPointer and leftPointer < rightPointer:
        currentWater = 0

        # movement
        if height[leftPointer] < height[rightPointer]:
            if maxLeft < height[leftPointer]:
                maxLeft = height[leftPointer]

            currentWater = maxLeft - height[leftPointer]
            leftPointer += 1
        else:
            if maxRight < height[rightPointer]:
                maxRight = height[rightPointer]

            currentWater = maxRight - height[rightPointer]
            rightPointer -= 1
        # updating values
        if currentWater > 0:
            totalResults = totalResults + currentWater

    return totalResults


height = [4, 2, 0, 3, 2, 5]
print(trap(height))  # 9

height2 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
print(trap(height2))  # 6
