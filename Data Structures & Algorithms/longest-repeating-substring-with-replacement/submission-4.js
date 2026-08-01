class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let max = 0; 
        
        for(let i = 0; i < s.length; i++){
            const currChar = s[i];
            let numR = 0, j = i + 1;  
            while(numR <= k && j < s.length){
                if(s[j] != currChar) numR++; 
                j++;
                if(numR <= k) {
                    max = Math.max(j - i, max);
                }
                console.log(max)
            }

        }

        return max; 
    }
}
