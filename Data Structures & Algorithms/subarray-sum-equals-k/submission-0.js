class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {

        /**
         * loop through the list
         * each loop call a sub loop to verify if from that point to any other point forward there is a
         * subarray that is equal to k 
         */
        let count = 0
        for(let i = 0; i< nums.length; i++){
            const numOfSubArrrays = this.findCountOfSubArrays(nums, i, k)
            count+= numOfSubArrrays
        }

        return count; 
    }

    findCountOfSubArrays(nums, idx, k){
        let sum = 0, subCount = 0
        for(let i = idx; i < nums.length; i++){
            sum+=nums[i]

            if(sum == k){
                subCount++
            }
        }
        return subCount
    }

}
