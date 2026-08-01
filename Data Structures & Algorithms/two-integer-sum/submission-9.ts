class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // init a map
        // for loop over the nums
        // if the target exists within the map return the arr
        // if not then at the end return empty []

        let map = new Map()
        for(let i = 0; i < nums.length; i ++){
            let desiredVal =  target - nums[i]
            if(map.has(desiredVal)) return [map.get(desiredVal), i]
            map.set(nums[i], i)
        }

        return []
    }
}
