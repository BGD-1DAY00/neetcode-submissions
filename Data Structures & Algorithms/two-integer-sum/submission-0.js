class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0; i < nums.length; i++){
            const targetVal = target - nums[i]
            if(map.has(targetVal)) return [i, map.get(targetVal)]
            else map.set(nums[i], i)
        }

        return []
    }
}
