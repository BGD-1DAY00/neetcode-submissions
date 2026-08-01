class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mappy = new Map(); 
        for(let i = 0; i < nums.length; i ++){
            let missing_val = target - nums[i]
            if(mappy.has(missing_val)){
                return [mappy.get(missing_val), i]
            }
            mappy.set(nums[i], i)
        }
        return []
    }
}
