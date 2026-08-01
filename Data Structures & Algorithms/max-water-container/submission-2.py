class Solution:
    def maxArea(self, heights: List[int]) -> int:

        left, right = 0, len(heights) - 1
        max_val = 0
        while left < right:
            distance  = right - left
            area  = min(heights[left], heights[right]) * distance 
            max_val = max(area, max_val)

            if heights[left]< heights[right]: 
                left+=1
            else:
                right-=1
        return max_val
        