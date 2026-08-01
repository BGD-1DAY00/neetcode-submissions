class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        min_val = 1000000
        max_rec = 0
        distance = 1
        while heights:
            curr = heights.pop()
            min_val = min(min_val, curr)
            max_rec = max(curr, max_rec, distance * min_val)
            distance+=1
        return max_rec


        