class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let count = 0; 
        const dp = (idx) => {
            if(idx > n) return; 
            if(idx == n){
                count++;
                return
            }

            dp(idx + 1)
            dp(idx + 2)
        }

        dp(0)
        return count; 
    }
}
