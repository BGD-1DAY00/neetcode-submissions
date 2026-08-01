class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        let left = 0, right = s.length - 1; 

        while(left < right){
            if(s[left] != s[right]){
                /**
                 * [aebcdcba]
                 *   ^    ^
                 */
                let isLeftValid  = this.validatePalindrome(s.slice(left + 1, right + 1))
                let isRightValid = this.validatePalindrome(s.slice(left, right))
                if(isLeftValid || isRightValid) return true
                else return false
            }
            left++
            right--
        }

        return true
    }

    validatePalindrome(str: string): boolean {
        let left = 0, right = str.length - 1; 

        while(left < right){
            if(str[left] != str[right]) return false;
            left++; 
            right--
        }

        return true
    }
}
