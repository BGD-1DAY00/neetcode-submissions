class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let map = new Map(); 
        for(let i = 0; i < nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }
        let ans = []
        let threshold = nums.length / 3
        for(let [key, value] of map){
            if(value > threshold) ans.push(key)
        }

        return ans

    }
}
