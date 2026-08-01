class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()
        for(let i = 0; i < nums.length; i ++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1); 
        }

        let values = Array.from(map)
        .sort((a, b) => b[0] - a[0])
        .slice(0, k)
        .map(vals =>  vals[0])

        return values; 
    }
}
