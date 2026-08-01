class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = nums[0];
        let fast = nums[0];
        let set = new Set(); 
        // for(let i = 0; i < nums.length; i++){
        //     if(set.has(nums[i])){
        //         return nums[i]
        //     }else set.add(nums[i])
        // }

        while(true){
            slow = nums[slow];
            fast = nums[nums[fast]];

            if(slow === fast) break;
        }

        let newSlow = nums[0];
        while(true){
            newSlow = nums[newSlow];
            fast = nums[fast];
            if(newSlow === fast) break;
        }

        return newSlow
    }
}
