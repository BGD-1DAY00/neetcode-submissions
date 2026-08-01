class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numCount = nums.reduce((map, curr) => {
            map.set(curr, (map.get(curr) || 0) + 1);
            return map; 
        }, new Map());

        const sortedEntries = [...numCount.entries()].sort((a,b)=> b[1] - a[1]);

        return sortedEntries.slice(0, k).map(val => val[0]);

        
    }
}
