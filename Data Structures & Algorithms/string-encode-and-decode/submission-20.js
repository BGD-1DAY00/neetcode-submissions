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
            // if(strs[i].charCodeAt(0) >=48 && strs[i].charCodeAt(0) <=57){
            let j = i;
            while(j < strs.length){
                if(strs[j].charCodeAt(0) >=48 && strs[j].charCodeAt(0) <=57){
                    j++
                }else break;
            }
            if(i != j){
                console.log(i, j, Number(strs.slice(i, j)), strs[i], strs[j])
                let num = Number(strs.slice(i, j))
                let isHashTag = j < strs.length && strs[j ] == "#"
                let isExcal = j+1 < strs.length && strs[j +1] == "!"

                if(isHashTag && isExcal){
                    let word = strs.slice(j + 2, (num + j + 2))
                    res.push(word.join(""));
                    i = j + 2 + num - 1;
                }
            }
            // };
            
        }

        return res;
    }
}
