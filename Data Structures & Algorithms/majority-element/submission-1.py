class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        len_nums = len(nums)
        
        # Edge cases - nice to haves
        if len_nums < 1: 
            return 0
        if len_nums == 1:
            return nums[0]

        count, val = 1, nums[0]

        for idx in range(1, len_nums):
            curr = nums[idx]
            if val == curr:
                count += 1
            elif count == 1 and val != curr:
                val = curr
                count = 1
            else:
                count -= 1
        
        return val

        