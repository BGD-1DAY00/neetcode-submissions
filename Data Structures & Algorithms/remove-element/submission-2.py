class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:

        left, right = 0, len(nums) - 1
        counter = 0

        while left < right: 
            if nums[left] == val:
                while right >=0 and nums[right] == val:
                    right-=1
                [nums[left], nums[right]]  = [nums[right], nums[left]]
            else:
                left+=1
                counter+=1
        if nums[right] != val:
            counter +=1
        return counter

        