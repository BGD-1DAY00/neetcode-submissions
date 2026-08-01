class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        // plan: 
            // loop over whole list 
            // each idx compare to all the rest; 
            // create a list to hold those that are an anagram 
            // if val is used then we want to mark it as used 
            // return full list; 
        let ans = [], currList = [], skipVal = "."
        for(let i = 0; i < strs.length; i ++){
            let curr = strs[i]; 
            if(curr == skipVal) continue 
            currList.push(curr)
            for(let j = i + 1; j < strs.length; j++){
                if(strs[j] == skipVal) continue
                let isAnagram = this.compareStrs(curr, strs[j])
                if(isAnagram){
                    currList.push(strs[j])
                    strs[j] = skipVal
                }
            }
            ans.push(currList)
            currList = []
        }

        return ans;
        
    }

    compareStrs(firstStr, secondStr){
        if(firstStr.length != secondStr.length) return false
        return firstStr.split("").sort().join("") == secondStr.split("").sort().join("")
    }
}
