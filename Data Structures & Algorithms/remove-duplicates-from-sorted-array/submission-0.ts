class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let len = nums.length, count = 0
        for(let i = 0; i < nums.length; i++){
            let curr = nums[i], idx = i + 1;
            while(idx < nums.length){
                if(nums[idx] == curr){
                    nums.splice(idx, 1)
                    count++
                }
                else idx++
            }

        }

        return len - count
    }
}
