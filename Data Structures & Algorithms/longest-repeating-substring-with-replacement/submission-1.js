class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLength = 0; 
        for(let i = 0; i < s.length; i++){
            let set = new Set().add(s[i])
            let charReplacementCount = 0;
            let j = i +1;
            for(j; j < s.length; j++){
                if(set.has(s[j])) continue
                else{
                    charReplacementCount++;
                    set.add(s[j])
                    if(charReplacementCount > k){
                        break; 
                    }
                }
            }
            maxLength = Math.max(maxLength, j - i);
        }

        return maxLength; 
    }
}
