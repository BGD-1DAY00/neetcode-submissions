class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const search = (idx, amount)=>{
        if(idx === nums.length) {
            // Only count if we hit target
            return amount === target ? 1 : 0
        }

            // let ways = 0
            // for(let i = idx; i< nums.length; i++){
            //     ways += search(i + 1, amount + nums[i])
            //     ways += search(i + 1, amount - nums[i])
            // }
            // console.log(ways)

            return search(idx + 1, amount + nums[idx]) + 
           search(idx + 1, amount - nums[idx])

            // return ways
        }

        return search(0, 0)
        // search(1, -(nums[0]))

    }
}
