class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        /**
         * [1,2,3,1]
         *  ^
         *  
         */
        let arr = Array.from({length: k}, ()=> null)
        let set = new Set();

        for(let i = 0; i < k; i++){
            if(set.has(nums[i])) return false
            arr[i] = nums[i]
            set.add(nums[i])
        }
        console.log(arr)

        for(let i = k + 1; i < nums.length; i++){
            if(set.has(nums[i])) return false
            arr.shift()
            arr.push(nums[i])
            set.delete(nums[i])
        }

        return true
    }
}
