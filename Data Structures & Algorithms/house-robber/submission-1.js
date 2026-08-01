class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    constructor () {
        this.maxStolen = 0
    }
    rob(nums) {
        if(nums.length == 1) return nums[0];
        if(nums.length == 2) return Math.max(nums[0], nums[1])

        const search = (idx, currRobbed) => {
            if(idx >= nums.length) {
                this.maxStolen = Math.max(this.maxStolen, currRobbed);
                return; 
            }

            search(idx + 2, currRobbed + nums[idx])  // Rob current, skip next
            search(idx + 1, currRobbed)              // Skip current
        }

        search(0, 0)
        return this.maxStolen;
    }
}
