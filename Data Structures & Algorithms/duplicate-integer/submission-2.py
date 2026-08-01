class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        map = {}
        for index, item in enumerate(nums):
            if map.get(item):
                return true
            map.set(item, index)
        return false
     
        