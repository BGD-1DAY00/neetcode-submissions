class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, right = heights.length - 1, max = 0;
        while(left < right){
            const currMax = Math.min(heights[left], heights[right]) * (right - left);
            max = Math.max(currMax, max);
            if(heights[left] <= heights[right]) left++; 
            else right--; 
        }

        return max; 
    }
}
