class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {

        let left = 0, right = s.length - 1, count = 0

        while(left < right){
            if(s[left] == s[right]){
                left++
                right--
            }
            else{
                //three cases
                // 1. the first value is the outlier 
                // 2. the last value is the outlier
                // 3. both values lead to failures (return false)
                // acdccba
                let isFirstValueOutlier = this.checkFirstVal(s, left, right)
                let isSecondValueOutlier = this.checkLastVal(s, left, right)
                if(!isFirstValueOutlier && !isSecondValueOutlier) return false
                if(isFirstValueOutlier){
                    left++
                }else{
                    right--
                }
                count++
            }
        }

        return count < 2
    }

    checkFirstVal(s, left, right){
        // the two values left&right are not equal 
        // we are trying to measure if the first val is the outlier meaning that 
        // if we simply move up one on the left the right value is equal to that value
        left++
        if(s[left] == s[right]) return true
    }

    checkLastVal(s,left, right){
        right--
        if(s[left] == s[right]) return true 
    }
}
