class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a,b) => a - b);

        let result = [];

        function backTrack(start, com, currSum){
            if(currSum == target){
                result.push([...com]);
                return;
            }

            if(currSum > target) return; 

            for(let i = start; i < candidates.length; i ++){
                if(i > start && candidates[i] == candidates[i - 1]) continue
                com.push(candidates[i])
                backTrack(i + 1, com, currSum + candidates[i]);
                com.pop();
            }
        }

        backTrack(0, [], 0)
        return result; 
    }
}
