from curses.ascii import SO


class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        valuesMap = {}
        for i in range(len(nums)):
            valuesMap[nums[i]] = i
        # print(valuesMap)
        for i in range(len(nums)):
            lookupTarget = target - nums[i]
            valueFromMap = valuesMap.get(lookupTarget)
            if (valueFromMap):
                if (valuesMap[lookupTarget] != i):
                    return [i, valuesMap[lookupTarget]]


calculator = Solution()

print(calculator.twoSum([3, 2, 4], 6))
print(calculator.twoSum([3, 3], 6))
