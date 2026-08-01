class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        let response = x; 
        if(n == 0) return 1
        else if(n > 0){
            for(let i = 0; i < n - 1; i++){
                response *= x
            }
        }else{
            for(let i = 0; i < Math.abs(n)  + 1; i++){
                response /= x
            }
        }

        return response
    }
}
