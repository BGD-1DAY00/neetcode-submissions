class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) < 1:
            return 0
        set_nums, min_val = set(nums), min(nums)
        longest_val = 0
        while set_nums:
            curr_max = 0
            while min_val in set_nums:
                set_nums.remove(min_val)
                curr_max += 1
                min_val += 1
            if set_nums:
                min_val = min(set_nums)
            longest_val = max(longest_val, curr_max)
        return longest_val


        