class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = []; 

        const bt = (start, combo, currSum) => {
            if(currSum == target) result.push([...combo]);
            if(currSum > target) return; 

            for(let i = start; i < nums.length; i++){
                combo.push(nums[i]);
                bt(i, combo, currSum + nums[i]);
                combo.pop(); 
            }

        }

        bt(0, [], 0); 
        return result; 
    }
}
