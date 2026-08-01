class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if(nums.length == 1) return nums[0];
        let left = 0, right = nums.length - 1, min = nums[0];
        if(nums[left] < nums[right]) return nums[0]

        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            min = Math.min(nums[mid], min);

            if(nums[mid] < nums[mid - 1]) return nums[mid]
            if(nums[left] > nums[right]) left = mid + 1;
            else right = mid - 1
        }


        return min; 
    }
}
