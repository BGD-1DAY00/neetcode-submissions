class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:

        sorted_nums = sorted(nums)
        nums_len = len(nums)

        left, right,result = 0, nums_len - 1, []

        for i in range(nums_len): 
            left, right = i + 1, nums_len - 1
            while left < right:
                total = sorted_nums[left] + sorted_nums[right] + sorted_nums[i]
                if total == 0: 
                    total_arr = [sorted_nums[left], sorted_nums[right], sorted_nums[i]]
                    if total_arr in result:
                        break
                    else:
                        result.append([sorted_nums[left], sorted_nums[right], sorted_nums[i]])
                left+=1
                right-=1

        return result
        