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
        console.log(encodedString);
        return encodedString; 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = []; 
        for(let i = 0; i < str.length; i++){
            const isCharNumber = /[0-9]/.test(str[i]);
            const secondCharNumber = i+1 < str.length && /[0-9]/.test(str[i+1])
            const secondCharPound = i+1 < str.length && str[i+1] == "#"
            const thirdCharPound = i+2 < str.length && str[i+1] == "#"
            console.log(i)
            if(isCharNumber && secondCharNumber && thirdCharPound){
                console.log("here")
                let lengthOfString = parseInt(str.slice(i, i+2))
                console.log("lengthOfString: ", lengthOfString)
                arr.push(str.slice(i + 3, i + 3 + lengthOfString)); 
                i += (2+lengthOfString)
            }else if(isCharNumber && secondCharPound){
                let lengthOfString = parseInt(str[i]); 
                arr.push(str.slice(i + 2, i + 2 + lengthOfString)); 
                i += (1+lengthOfString)
                }
        }

        return arr; 
    }

    isDelimitter(){

    }
}
