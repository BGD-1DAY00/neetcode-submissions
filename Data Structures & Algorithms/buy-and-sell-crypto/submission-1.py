class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        left, right, max_val = 0, 0, 0
        while right < len(prices):
            if right > 0 and right != left and prices[right] < prices[left]:
                left = right
            else:
                diff = prices[right] - prices[left]
                max_val = max(diff, max_val)
                print(left, right, diff, max_val)
            right+=1
            print('pointers: ', left, right)
        return max_val





        