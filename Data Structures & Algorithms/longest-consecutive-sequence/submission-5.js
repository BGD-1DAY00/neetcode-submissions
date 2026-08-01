class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        /**
         * 1. create a sorted list
         * 2. create a set of the values
         * 3. while loop through to find the longest consequtive 
         */

        let set = new Set(nums); 
        let sortedNums = nums.sort()
        let count = 0, maxCount = 0
        for(let i = 0; i < sortedNums.length; i++){
            let curr = sortedNums[i]
            while(true){
                if(set.has(curr + 1)){
                    count++
                    curr++
                }else break
            }

            maxCount = Math.max(count, maxCount)
            count = 0
        }

        return maxCount + 1
    }
}
