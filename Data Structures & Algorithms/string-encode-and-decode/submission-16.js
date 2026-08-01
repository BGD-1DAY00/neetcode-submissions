class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = [];
        for(let word of strs){
            let coded = word.length + "#!" +  word;
            res.push(coded)
        }
        return res.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        let res = []
        let strs = str.split("");
        for(let i = 0; i < strs.length; i++){
            if(strs[i].charCodeAt(0) >=48 && strs[i].charCodeAt(0) <=57){
                let isHashTag = i + 1 < strs.length && strs[i +1] == "#"
                let isExcal = i+2 < strs.length && strs[i +2] == "!"

                if(isHashTag && isExcal){
                    console.log(i, strs[i])
                    let word = strs.slice(i + 3, (Number(strs[i]) + i+ 3))
                    res.push(word.join(""));
                    i = i + 3 + Number(strs[i]) - 1;
                }
            };
            
        }

        return res;
    }
}
