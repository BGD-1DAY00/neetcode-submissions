class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        // [1,2,3,2,2]
        
        for(let [idx, val] of nums.entries()){
            let currVal = nums[idx]

            if(nums[val-1] == -1) {
                return val
            }

            nums[val - 1] = -1

            console.log(nums, idx)
        }
    }
}
