class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = [];
        for(let word of strs){
            let coded = "4#!" +  word;
            res.push(coded)
        }
        return res.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let preFix = "4#!";
        return str.split(preFix).slice(1);
    }
}
