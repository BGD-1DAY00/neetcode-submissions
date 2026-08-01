class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let count = 0, candidate = nums[0]
        for(let i = 0; i < nums.length; i++){
            if(nums[i] == candidate) count++
            else if(candidate != nums[i] && count == 0){
                count++
                candidate = nums[i]
            }else{
                count--
            }
        }
        return candidate
    }
}
