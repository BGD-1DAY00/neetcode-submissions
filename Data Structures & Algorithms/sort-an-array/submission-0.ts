class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        this.quicksort(nums, 0, nums.length - 1)
        return nums
    }

    quicksort(nums: number[], lo: number = 0, high: number){
        if(lo >= high) return

        let i = lo - 1; 
        let pivot = nums[high]
        for(let j = lo; j < high; j++){
            if(nums[j] <= pivot){
                i++; 
                [nums[j], nums[i]] = [nums[i], nums[j]]
            } 
        }

        let upatedPivotVal: number =  i + 1;

        [nums[high], nums[upatedPivotVal]] = [nums[upatedPivotVal], nums[high]]

        this.quicksort(nums, lo, upatedPivotVal - 1)
        this.quicksort(nums, upatedPivotVal + 1, high)

    }
}
