class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map(); 

        for(let i = 0; i < nums.length; i ++){
            let targetVal = Math.abs(nums[i] - target); 
            if(map.has(targetVal)){
                return [map.get(targetVal), i]
            } 
            map.set(nums[i], i)
        }

        return 
        
    }
}
