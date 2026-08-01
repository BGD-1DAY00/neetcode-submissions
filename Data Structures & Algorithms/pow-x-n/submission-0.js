class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        let i = 1 
        let curr = x
        if(n == 0){
            return 1
        }
        else if(n > 0){
            while(i < n){
                curr = curr * x;
                i++
            }
        }else{
            while(i < Math.abs(n)){
                // 5^ -3 = 1/5^3
                curr = curr * x;
                i++
            }
            curr = 1 / curr
        }

        return curr
    }
}
