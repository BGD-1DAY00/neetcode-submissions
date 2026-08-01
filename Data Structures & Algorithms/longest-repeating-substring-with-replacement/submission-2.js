class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // let maxLength = 0; 
        // for(let i = 0; i < s.length; i++){
        //     let set = new Set().add(s[i])
        //     let charReplacementCount = 0;
        //     let j = i +1;
        //     for(j; j < s.length; j++){
        //         if(set.has(s[j])) continue
        //         else{
        //             charReplacementCount++;
        //             set.add(s[j])
        //             if(charReplacementCount > k){
        //                 break; 
        //             }
        //         }
        //     }
        //     maxLength = Math.max(maxLength, j - i);
        // }

        // return maxLength; 

         let freqMap = new Map();
        
        // Step 2: Two pointers for window
        let left = 0;
        let maxFreq = 0;  // Track most frequent char count
        let maxLength = 0;
        
        // Step 3: Slide right pointer
        for(let right = 0; right < s.length; right++) {
            // Update frequency of current char
            freqMap.set(s[right], (freqMap.get(s[right]) || 0) + 1);
            
            // Update max frequency if this char is now most frequent
            maxFreq = Math.max(maxFreq, freqMap.get(s[right]));
            
            // Current window length = right - left + 1
            // Chars to replace = window length - most frequent char count
            // If chars to replace > k, window invalid

            let windowLen = right - left + 1;
            if(windowLen - maxFreq > k) {
                // Window invalid, shrink it
                freqMap.set(s[left], freqMap.get(s[left]) - 1);
                left++;
            }
            
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
}
