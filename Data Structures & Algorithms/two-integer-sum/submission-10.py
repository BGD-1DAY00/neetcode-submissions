class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        mapping = {}
        for idx,val in enumerate(nums): 
            goal = target - val
            if goal in mapping:
                return [mapping[goal], idx]
            mapping[val] = idx
        return []
        
        