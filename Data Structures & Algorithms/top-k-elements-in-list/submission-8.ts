class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // brute force solution: 
        /**
         * count in hashmap
         * order/sort hashmap based on value
         * return keys in list
         */

        let map = new Map()

        for(let i = 0; i < nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }

        console.log("testa: ", [...map.entries()])
        let sortedMapList = [...map.entries()].sort((a,b) => {
            return b[1] - a[1]
        })

        console.log("sortedMapList: ", sortedMapList);
        console.log("Map contents: ", map); 

        let sliceOfList = sortedMapList.slice(0, k)
        console.log("slice of list: ", sliceOfList); 

        let response = []

        for(let i = 0; i < sliceOfList.length; i++){
            response.push(sliceOfList[i][0])
        }
        return response; 


    }
}
