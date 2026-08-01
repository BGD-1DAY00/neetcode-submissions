class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        /**
         * Input: nums1 = [10,20,20,40,0,0], m = 4, nums2 = [1,2], n = 2
         *                  6 len;                          2 len 
         *  diff 4 len 
         *  i = 4
         */
        let nums2Pointer = 0
        for(let i = nums1.length - nums2.length; i < m + n; i++){
                nums1[i] = nums2[nums2Pointer];
                nums2Pointer++
        }
        console.log(nums1)
        this.quicksort(nums1, 0, nums1.length - 1)
    }


    quicksort(nums, lo, high){
        if(lo >= high) return
        let pivot = nums[high]
        let pointer = lo

/**
 * [ 10, 20, 20, 40, 1, 2 ]
 * [ 2 , 20, 20, 40, 1, 10]

 */
        for(let i = lo; i < high; i++){
            if(nums[i] < pivot){
                [nums[i], nums[pointer]] = [nums[pointer], nums[i]]
                pointer++
            }
        }

        [nums[pointer], nums[high]] = [nums[high], nums[pointer]]
        this.quicksort(nums, lo, pointer- 1)
        this.quicksort(nums, pointer+1, high)
    }
}
