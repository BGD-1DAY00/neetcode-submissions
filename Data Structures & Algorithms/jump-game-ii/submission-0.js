class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {    
        let response = Number.POSITIVE_INFINITY; 
        function search(nums, idx, currNumOfJumps){
            for(let i = idx; i < nums.length; i++){
                if(i == nums.length - 1) response = Math.min(response, currNumOfJumps)
                if(nums[i] == 0) return;
                if(nums[i] == 1){
                    currNumOfJumps++;
                    continue;
                }
                if(nums[i] > 1){
                    currNumOfJumps++;
                    for(let j = 1; j <= nums[i]; j++){
                        search(nums, i + j, currNumOfJumps)
                    }
                }
            }
        }

        search(nums, 0, 0)
        return response; 
    }
}
