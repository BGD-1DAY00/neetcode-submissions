class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = []
        const bt = (idx, arr, sum) => {
            if(sum > target) return; 
            if(sum == target){
                result.push([...arr])
                return
            }

            for(let i = idx; i < nums.length; i++){
                arr.push(nums[i])
                bt(i, arr, sum + nums[i])
                arr.pop()
            }
        }

        bt(0, [], 0)
        return result
    }
}
