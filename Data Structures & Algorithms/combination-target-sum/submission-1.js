class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        let result = [];
        function backTrack(start, currCombination, currSum){
            console.log(`index: ${start} - currCombination: ${currCombination} - currSum: ${currSum}`)
            if(currSum === target) result.push([...currCombination])

            if(currSum > target) return;
            

            for(let i = start; i < nums.length; i++){
                currCombination.push(nums[i])
                // Key change: use 'i' instead of 'i + 1' to allow reuse
                backTrack(i, currCombination, currSum + nums[i])
                currCombination.pop();
                // currSum = currSum + nums[i];
                // currCombination.push(nums[i])
                // backTrack(i + 1, currCombination, currSum)
                // currCombination.pop();
            }
        }

        backTrack(0, [], 0); 

        return result; 
    }
}
