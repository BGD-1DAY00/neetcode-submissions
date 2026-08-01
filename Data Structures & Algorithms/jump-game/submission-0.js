class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if(nums.length === 0 || nums[0] === 0) return false;
        let response = false;

        function search(nums, idx){
            console.log("init", idx)
            for(let i = idx; i < nums.length; i++){
                console.log("idx, ", idx, i)
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
