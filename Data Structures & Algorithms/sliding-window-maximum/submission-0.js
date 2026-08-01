class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if(nums.length <= 1) return nums;

        let sliceArr =  nums.slice(0, k);
        let resultArr = []
        let j = k
        
        while(j < nums.length + 1){
            resultArr.push(Math.max(...sliceArr))
            sliceArr.shift()
            sliceArr.push(nums[j])
            j++
        }

        return resultArr; 
    }
}
