class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        map = {}
        for index, item in enumerate(nums):
            if item in map:
                return True
            map[item] = index
        return False
