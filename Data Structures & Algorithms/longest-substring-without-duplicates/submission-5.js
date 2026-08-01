class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
    if(s.length <= 1) return s.length; 
    let set = new Set(), k = 0, i = 0, maxLength = 0; 
    while(k < s.length){
        if(set.has(s[k])){
            maxLength = Math.max(maxLength, k-i);
            while(i <= k){
                if(s[i] != s[k]){
                    i++;
                    set.delete(s[i])
                }
                if(s[i] == s[k]){
                    i++;
                    break;
                }
            }
        }
        else set.add(s[k])
        k++;

    }

    return Math.max(maxLength, k-i); 
    }
}
