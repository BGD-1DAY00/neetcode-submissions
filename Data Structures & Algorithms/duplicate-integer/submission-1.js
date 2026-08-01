class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const setMap = new Set();
        for(let i = 0; i < nums.length; i++){
            if(setMap.has(nums[i])) return true;
            setMap.add(nums[i]);
        }
        return false;
    }
}
