class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a,b) => a - b);
        const result = []
        const dp = (idx, combination, sum) => {
            if(idx > candidates.length) return; 
            if(sum > target) return
            if(sum == target){
                result.push([...combination])
                return
            }

            for(let i = idx; i < candidates.length; i++){
                if(i > idx && candidates[i] == candidates[i - 1]) continue
                combination.push(candidates[i])
                dp(i + 1, [...combination], sum + candidates[i]);
                combination.pop()
            }
            
        }

        dp(0, [], 0)
        return result; 
    }
}
