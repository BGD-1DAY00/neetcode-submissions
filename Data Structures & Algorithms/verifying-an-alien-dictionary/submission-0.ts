class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words: string[], order: string): boolean {
        for(let i = 0; i < words.length; i++){
            /**
             *  nested loop 
             *  compare i to each j, if any instace is wrong then return false
             *  helper function that takes two strings and the order to do that bit of work
             */

            for(let j = i + 1; j < words.length; j++){
                let isSorted = this.isSorted(words[i], words[j], order)
                if(!isSorted) return false
            }
        }
        return true
    }

    isSorted(wordA, wordB, order): boolean{
        let left = 0, right = 0; 

        // dag dagk
        while(left < wordA.length && right < wordB.length){
            let leftChar = wordA[left], rightChar = wordB[right];
            if(leftChar == rightChar) {
                left++; 
                right++; 
            }
            else{
                for(let i = 0; i < order.length; i++){
                    if(leftChar == order[i]) return true
                    if(rightChar == order[i]) return false
                }
            }
        }

        if(left < wordA.length - 1) return false
        else return true
    }
}
