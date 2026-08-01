class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    constructor(){
        this.result = [];
    }

    combinationSum(nums, target) {
        return this.getCurrSum(nums, target, 0, [])
    }

    getCurrSum(nums, target, currSum, currArr){
        let i = 0;

        while(i < nums.length){
            currSum+=nums[i]
            currArr.push(nums[i])
            if(currSum == target) this.result.push(currArr);
            else if(currSum > target) {
                currArr.pop(); 
                currSum -= nums[i]
            }
        }
    }

}
