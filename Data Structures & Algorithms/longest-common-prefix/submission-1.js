class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let common = strs[0]
        let validIdx = strs[0].length
        //bag
        if(strs.length < 1) return ""; 
        if(strs.length == 1) return strs[0]; 

        console.log("checks done")

        for(let i = 0; i < strs.length; i++){ 
            if(i == 0) continue;  
            let curr = strs[i];
            let newValidIdx = this.measureCommonPrefix(common, curr, validIdx)
            console.log("newvalididx: ", newValidIdx)
            validIdx = Math.min(validIdx, newValidIdx)
            console.log("resettingval: ", validIdx)
        }

        console.log("completion: ", validIdx)

        return common.substring(0, validIdx); 
    }

    measureCommonPrefix(firstVal, secondVal, validIdx){
        // compare firstval to secondval... update the validIdx to the extent that they are shared; 
        let firstLength = firstVal.length , secondLength = secondVal.length; 
        let i = 0, j = 0
        while(i < firstLength && j < secondLength){
            if(firstVal[i] == secondVal[j]){
                i++
                j++
            }else{
                break
            }
        }

        console.log("attempt: firstVal: ", firstVal, " secondval: ", secondVal, " return val: ", i)

        return i

    }
}
