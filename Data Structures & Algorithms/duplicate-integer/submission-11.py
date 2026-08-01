class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        m = {}

        for val in nums: 
            if val in m: 
                return True
            m[val] = 1
        
        return False

        