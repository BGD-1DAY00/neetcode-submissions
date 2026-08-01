class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        /**
         * [3,2,2,3] val = 3
         *  i j
         *  
         * [2,2,3,3] val = 3
         *        ij
         * 
         * [0,1,3,2,2,0,4,2] val = 2
         *        i   j
         */

        let i = 0, count =0; 
        while(i < nums.length){
            if(nums[i] == val){
                let j = i; 
                while(j<nums.length){
                    if(nums[j]!=val){
                        [nums[i], nums[j]] = [nums[j], nums[i]]
                        count++;
                        break;
                    }
                    j++
                }
            }
            i++
        }

        return nums.length - count; 
    }
}
