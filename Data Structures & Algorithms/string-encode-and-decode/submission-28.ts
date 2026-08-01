class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        /**
         * 
         */

        let str = ""
        for(let i = 0; i < strs.length; i++){
            const len = strs[i].length
            str +=  `${len}#${strs[i]}`
        }
        console.log("resulting string: ", str)
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        /**
         * loop over until i hit #; when i do so i want to look backward until i see a non number value
         * after doing so i take the text after that index point + the number and push it to a list; move the pointer forward to then start the loop again down the line
         * 
         */

        let response = [], idx = 0; 

        for(let i = 0; i < str.length; i++){
            if(str[i] == "#"){
                /**
                 * look backward until its either the 0th index or the value
                 */
                let idx = i - 1, val = []
                console.log("lets see the values: idx - ", idx, " str - ", str[idx])
                while(idx >= 0 && this.isInteger(str[idx])){
                    val.unshift(str[idx])
                    idx--;
                }
                console.log("val list: ", val)

                const txtLength = Number(val.join(''))
                console.log("text length: ", txtLength)
                console.log("value getting sliced: ", str.slice(i+1, txtLength + i+1))
                response.push(str.slice(i+1, txtLength + i+1))

                i = i + 1 + txtLength;  
            }
        }

        return response
    }

    isInteger(val: string): boolean {
        return val >= '0' && val <= '9'
    }
}
