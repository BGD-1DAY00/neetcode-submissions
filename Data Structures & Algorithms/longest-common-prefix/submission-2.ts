class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        // loop over all values in the strs 
        // if list contains 0 values return "" && if list contains 1 then return first idx
        // init the longest prefix to be the value (base) of the first string
        // compare second string to the base value
        // update the base substring to the extent that they have a shared prefix 

        if(strs.length == 0) return ""; 
        if(strs.length == 1) return strs[0]; 

        let lcp = strs[0]; 
        for(let i = 1; i < strs.length; i++){ 
            let newlcp = this.compareLcp(lcp, strs[i])
            lcp = newlcp
        } 

        return lcp 
    }


    compareLcp(lcp: string, newStr: string): string {
        let a = 0, b = 0; 
        while(a < lcp.length && b < newStr.length){
            if(lcp[a] == newStr[b]){
                a++
                b++
            }else break
        }

        return lcp.substring(0, a)
    }
}
