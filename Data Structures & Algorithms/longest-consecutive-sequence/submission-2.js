class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length < 1) return 0;

        let set = new Set(nums); 
        let max = 1
        for(let i =0; i < nums.length; i++){
            let count = 1;
            let curr = nums[i]
            while(true) {
                if(set.has(curr +1)){
                    count++;
                    curr++
                }else break;
            }
            max = Math.max(count, max)
        }

        return max;

    }
}
