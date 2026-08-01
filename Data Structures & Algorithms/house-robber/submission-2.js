class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        
        let max = 0; 
        const dp = (idx, sum) => {
            max = Math.max(sum, max)
            if(idx >= nums.length) return

            dp(idx + 2, sum + nums[idx])
            dp(idx + 1, sum)
        }

        dp(0, 0)
        return max; 
    }
}
