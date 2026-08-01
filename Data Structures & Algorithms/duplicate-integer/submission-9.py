class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        map = {}
        for idx, val in enumerate(nums): 
            if val in map: 
                return True
            map[val] = idx
        return False


        