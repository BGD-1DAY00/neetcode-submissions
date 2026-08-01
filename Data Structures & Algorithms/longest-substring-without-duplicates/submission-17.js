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
                while(a < b){
                        charSet.delete(s[a])
                        a++
                    if(s[a] == s[b]) break;
                }
            }else{
                charSet.add(s[b]);
                b++;
                max = Math.max(b - a, max)
            }
        }

        return max; 
    }
}
