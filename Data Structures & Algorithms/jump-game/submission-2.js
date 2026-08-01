class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        
        // for(let i = 0; i < nums.length; i++){

        // }

        let doesReachEnd = false; 
        let endGoal = nums.length - 1
        const jumpGame = (idx) => {
            // [1,2,0,1,0]
            if(idx >= nums.length) return; 
            if(doesReachEnd) return; 
            if(idx == endGoal) {
                doesReachEnd = true
                return
            }
            for(let i = 1; i < nums[idx] + 1; i++){
                jumpGame(i + idx)
            }

        }

        jumpGame(0);
        return doesReachEnd; 
    }
}
