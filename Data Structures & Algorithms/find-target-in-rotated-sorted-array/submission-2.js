class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length - 1

        while(left <= right){
            let mid = Math.floor((left + right)/2);
            console.log("Mid: ", mid, " val: ", nums[mid])

            if(nums[mid] === target) return mid; 
            if(nums[mid-1] === target) return mid - 1
            if(nums[mid+1] === target) return mid + 1
            
            if(target > nums[left]) right = mid - 1
            else left = mid + 1
        }

        return -1
    }
}
