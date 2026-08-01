class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let response = []
        for(let i = 0; i<= n; i++){
            if(i ==0) response.push(0);
            else{
                let count = 0
                let val = i
                while(val > 0){
                    if(val & 1) count++
                    val = val >> 1
                }
                response.push(count)
            }
        }

        return response
    }
}
