class Solution {
    rob(nums) {
        let max = 0; 
        let memo = new Map();
        
        const dp = (idx, sum) => {
            let key = `${idx},${sum}`
            if(memo.has(key)) return;
            
            max = Math.max(sum, max);
            if(idx >= nums.length) return;
            
            memo.set(key, true);
            dp(idx + 2, sum + nums[idx]);
            dp(idx + 1, sum);
        }

        dp(0, 0);
        return max; 
    }
}