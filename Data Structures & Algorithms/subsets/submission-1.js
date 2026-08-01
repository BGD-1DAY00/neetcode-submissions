class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = []
        const dp = (idx, arr) => {
            result.push([...arr])
            if(idx >= nums.length) return
            
            for(let i = idx; i < nums.length; i++){
                arr.push(nums[i])
                dp(i + 1, [...arr])
                arr.pop()
            }
        }

        dp(0, [])
        return result; 
    }
}
