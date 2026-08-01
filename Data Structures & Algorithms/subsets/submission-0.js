class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];
        function backTrack(start, currSubset){
            result.push([...currSubset]); 

            for(let i = start; i < nums.length; i++){
                currSubset.push(nums[i]);
                backTrack(i + 1, currSubset);
                currSubset.pop();
            }
        }

        backTrack(0, []);
        return result; 
    }
}
