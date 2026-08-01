class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if(nums.length === 0) return false;
        if(nums.length == 1) return true
        let response = false;

        function search(nums, idx){
            for(let i = idx; i < nums.length; i++){
                if(i == nums.length - 1) response = true;
                if(nums[i] == 0) return;
                if(nums[i] == 1) continue; 
                if(nums[i] > 1){
                    for(let j = 1; j <= nums[i]; j++){
                        search(nums, i + j)
                    }
                }
            }
        }

        search(nums, 0)

        return response; 
    }
}
