class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        map = {}
        for val in nums: 
            if val in map.keys(): 
                return True
            map[val] = 0
        return False
        