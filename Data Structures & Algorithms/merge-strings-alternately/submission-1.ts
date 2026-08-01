class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let res = [...word1]
        console.log(res)

        /**
         * Input: word1 = "abc", word2 = "xyz"
            Output: "axbycz"

            [a, b, c]
            insert: x ; idx = 1
            [a, x, b, c]
            insert: y ; idx = 3
            [a, x, b, y, c]
            insert: z ; idx = 5



         */

        let idx = 1, wordIdx = 0

        while (wordIdx < word2.length && idx < res.length){
            res.splice(idx, 0, word2[wordIdx])
            idx= idx+2
            wordIdx++
            console.log(res, idx, wordIdx, word2[wordIdx])
        }

        if(wordIdx < word2.length) res.push(word2.slice(wordIdx))
        return res.join('')

    }
}
