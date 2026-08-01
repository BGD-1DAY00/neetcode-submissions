class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const encodedString =  strs.map((val) =>{
            const length = val.length; 
            return length + "#" + val; 
        }).join("");
        // console.log(encodedString);
        return encodedString; 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = []; 
        for(let i = 0; i < str.length; i++){
            if(!(i + 1 >= str.length) && /[0-9]/.test(str[i]) && str[i+1] == "#"){
                let lengthOfString = parseInt(str[i]); 
                arr.push(str.slice(i + 2, i + 2 + lengthOfString)); 
                i += (1+lengthOfString)
            }
        }

        return arr; 
    }
}
