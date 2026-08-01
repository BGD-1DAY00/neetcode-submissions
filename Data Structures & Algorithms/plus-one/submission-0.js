class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let val = 0; 
        for(let i = 0; i < digits.length; i++){
            val += (Math.pow(10, digits.length - 1 - i) * digits[i])
        }
        val++;

        return val.toString().split("").map((x)=> parseInt(x))
    }
}
