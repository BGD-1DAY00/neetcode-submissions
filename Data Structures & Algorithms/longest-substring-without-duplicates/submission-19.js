class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let count = 0, maxCount = 0, set = new Set(); 

        for(let i = 0; i < s.length; i++){
            if(set.has(s[i])){
                set.clear()
                set.add(s[i])
                maxCount = Math.max(count, maxCount)
                count = 1
            }else{
                set.add(s[i])
                count++
            }
            console.log(i, count)
        }

        return maxCount
    }
}
