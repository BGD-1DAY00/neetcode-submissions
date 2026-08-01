class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let alphaNumeric = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
        
        let left = 0, right = alphaNumeric.length - 1; 

        while(left < right){
            if(alphaNumeric[left] != alphaNumeric[right]) return false
            left++
            right--
        }
        return true
    }
}
