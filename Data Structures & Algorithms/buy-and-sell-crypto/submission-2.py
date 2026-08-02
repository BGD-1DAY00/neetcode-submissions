class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        stack, max_val = [], 0
        for i in range(len(prices)): 
            curr = prices[i]
            if len(stack) < 1: 
                stack.append(curr)
            elif curr < stack[-1]:
                stack.pop()
                stack.append(curr)
            else: 
                val = curr - stack[-1]
                max_val = max(max_val, val)
        return max_val 


        