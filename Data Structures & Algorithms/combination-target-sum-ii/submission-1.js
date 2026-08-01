class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let result = []; 
        candidates = candidates.sort(); 

        const bt = (start, combo, currSum) =>{
            if(currSum == target){
                result.push([...combo])
                return; 
            }
            if(currSum > target) return; 


            for(let i = start; i < candidates.length; i++){
                if( i > start && candidates[i] == candidates[i - 1]) continue
                combo.push(candidates[i]);
                bt(i + 1, combo, currSum + candidates[i]);
                combo.pop()
            }
        }

        bt(0, [], 0)
        return result; 
    }
}
