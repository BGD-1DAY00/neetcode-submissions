class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set(); 
        let a = 0, b = 0, maxLength = 0; 

        // Edge Cases: 
        // if(s == " ") return 1;
        // if(s == "") return 0;

        while(b < s.length){
            if(set.has(s[b])){
                maxLength = Math.max(maxLength, b - a);
                while(a < b){
                    if(s[a] == s[b]){
                        a++;
                        break;
                    }else{
                        set.delete(s[a]);
                        a++;
                    }
                }
            }else{
                set.add(s[b])
            }
            b++;
        }

        return Math.max(maxLength, (b-a)); 
    }
}
