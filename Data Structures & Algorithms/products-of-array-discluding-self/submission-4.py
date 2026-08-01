class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:

        prefix = [1] + nums[:len(nums)-1]
        postfix = nums[1:] + [1]
        print('values: ', prefix, postfix)
        
        for idx, val in enumerate(prefix[1:], start = 1):
            #print('prefix values: ', idx, prefix, prefix[idx], prefix[idx - 1])
            prefix[idx] *= prefix[idx - 1]
        for idx in range(len(postfix) - 2, -1, -1):
            postfix[idx] *= postfix[idx + 1]
        result =[0]* len(postfix)
        for i in range(len(postfix)):
            result[i] = (postfix[i] * prefix[i])
        return result
        