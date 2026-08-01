class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const search = (idx, amount)=>{
            if(amount == target && idx > nums.length) return 1
            if(idx >= nums.length) return 0

            let ways = 0
            for(let i = idx; i< nums.length; i++){
                ways += search(i + 1, amount + nums[i])
                ways += search(i + 1, amount - nums[i])
            }

            return ways
        }

        return search(0, 0)
        // search(1, -(nums[0]))

    }
}
