class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word: string, abbr: string): boolean {
        /**
         * edge: if word is empty then abbr must be empty as well or return false
         *  - if word is a single len the abbr must equal it 
         * loop over string
         * find cases where a value is a number: 
         *  - move pointer forward that number
         *  - if: 
         *      - abbr is complete before word return false
         *      - abbr is not complete but word is complete  return false
         *      return true only if the word pointer and abbr pointer are both equal to str len
         */


        /**
         * apple 
         * a3e
         */
        if(word.length == 0) return abbr.length == 0
        if(word.length == 1) return word == abbr || abbr == '1'

        let left = 0, right = 0; 

        while(left < word.length && right < abbr.length){
            // if number case
            let leftChar = word[left], rightChar = abbr[right]
            if(Number.isInteger(parseInt(rightChar, 10))){
                const num = Number(rightChar), nextCharIdx = right + 1
                if(nextCharIdx < abbr.length && Number.isInteger(parseInt(abbr[nextCharIdx]))){
                    let secondNum = parseInt(abbr[nextCharIdx])
                    let cum = (num * 10) + secondNum; 
                    right+=2
                    left+=cum
                }
                else{
                    right++; 
                    left+= num
                }
            }
            else if(leftChar != rightChar) return false
            else{
                left++; 
                right++; 
            }

        }

        if(left < word.length || right < abbr.length) return false
        return true
    }
}
