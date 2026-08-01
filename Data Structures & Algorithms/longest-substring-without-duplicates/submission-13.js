class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set(); 
        let a = 0, b = 0, maxLength = 0; 

        while(b < s.length){
            if(set.has(s[b])){
                maxLength = Math.max(maxLength, b - a);
                a = this.updateWindow(set, s, a, b);
            }else{
                set.add(s[b])
            }
            b++;
        }

        return Math.max(maxLength, (b-a)); 
    }

    updateWindow(set, str, a, b){
        while(a < b){
                if(str[a] == str[b]){
                    a++;
                    break;
                }else{
                    set.delete(str[a]);
                    a++;
                }
            }

        return a;
    }
}
