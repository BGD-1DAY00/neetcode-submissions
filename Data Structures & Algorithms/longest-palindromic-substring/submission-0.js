class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let j = 0, k = s.length - 1; 
        let vals = {
            longestVal: s.substring(0,2), 
            longestCount: 1
        }

        if(s.length == 0) return ''
        if(s.length == 1) return s
        this.validatePalindrome(s, j, k, vals)
        return vals.longestVal

    }

    validatePalindrome(s, j, k, vals){
        if(j >= k) return 

        let isPalindrome = this.isPalindrome(s, j, k)
        if(isPalindrome && (k - j + 1) > vals.longestCount){
            vals.longestCount = (k - j); 
            vals.longestVal = s.substring(j, k+1); 
        }

        this.validatePalindrome(s, j+1, k, vals)
        this. validatePalindrome(s, j, k-1, vals)

    }

    isPalindrome(s, j, k){

        while(j < k){
            if(s[j] != s[k]) return false
            j++;
            k--;
        }

        return true
    }


}
