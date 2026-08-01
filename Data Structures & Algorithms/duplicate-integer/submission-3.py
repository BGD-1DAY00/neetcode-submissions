class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        map = {}
        for index, item in enumerate(nums):
            if map.get(item):
                return True
            map[item] = index
        return False
     
        