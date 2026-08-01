class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        this.quicksort(nums, 0, nums.length - 1)
    }

    quicksort(nums: number[], lo: number, high: number){
        if(lo>=high) return; 
        
        let i = lo - 1
        let pivot = nums[high]
        for(let k = lo; k < high; k++){
            if(nums[k] <= pivot){
                i++
                [nums[k], nums[i]] = [nums[i], nums[k]]
            } 
        }

        let updatedPivot = i + 1; 

        [nums[high], nums[updatedPivot]] = [nums[updatedPivot], nums[high]]

        this.quicksort(nums, 0, updatedPivot - 1)
        this.quicksort(nums, updatedPivot + 1, high)
    }
}
