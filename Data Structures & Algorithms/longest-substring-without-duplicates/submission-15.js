class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length < 1) return 0; 

        let a = 0, b = 0, max = 0, charSet = new Set(); 
        while(b < s.length){
            if(charSet.has(s[b])){
                // move a pointer until this char no longer in substring; 
                // then  continue also remove other chars removed from set; 
                while(a < b){
                    if(s[a] == s[b]){
                        a++
                    }else{
                        charSet.delete(s[a])
                        a++
                    }
                }
                b++; 
                                max = Math.max(b - a, max)

            }else{
                charSet.add(s[b]);
                b++;
                max = Math.max(b - a, max)
            }
        }

        return max; 
    }
}
