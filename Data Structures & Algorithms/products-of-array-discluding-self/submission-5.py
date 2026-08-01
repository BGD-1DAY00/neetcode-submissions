class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:

        """
       Input: nums = [1,2,4,6]
        Output: [48,24,12,8]

        understanding:
        original: 1,2,4,6 
        - prefix: [1, 1, 2, 8]
        - postfix: [48,24,6,1]

        edge cases: 
        - empty list
        - guaranteed: list of numbers , no strings , special chars 

        sudo code: 
        - create prefix sum 
        - create postfix sum 
        - single pointer and create a new list as the response 
        """

        def find_prefix_sum(nums):
            #1,2,4,6 -> [1, 1, 2, 8]
            """
            0. [1,1,1,1] 
            1. [1,2,1,1]

            """
            response = [1] * len(nums)
            for i in range(1, len(nums)):
                response[i] = response[i-1] * nums[i -1]
            return response

            
        def find_postfix_sum(nums):
            #1,2,4,6 
            response = [1] * len(nums)
            for i in range(len(nums) - 2, -1, -1):
                response[i] = response[i+1] * nums[i + 1]
            return response


        prefix_sum = find_prefix_sum(nums)
        print(prefix_sum)
        postfix_sum = find_postfix_sum(nums)
        print(postfix_sum)

        pointer, response = 0, [0] * len(nums)

        while pointer < len(nums): 
            sum_val = prefix_sum[pointer] * postfix_sum[pointer]
            response[pointer] = sum_val
            pointer += 1
        return response

        