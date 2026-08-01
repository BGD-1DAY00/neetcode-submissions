class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        /**
         * prefix sum 
         * 1 [1, 2, 4, 6] -> [1, 1, 2, 8]
         * postfix sum
         * [1, 2, 4, 6] 1 -> [1, 6, 24, 48]
         */

        // create prefix sum
        let prefixSum = this.createPrefixSum(nums)
        let postfixSum = this.createPostfixSum(nums)
        console.log("prefixSum: ", prefixSum)
        console.log("postfixSum: ", postfixSum)


        let response = []
        for(let i = 0; i < prefixSum.length; i++){
            const postFixPos = nums.length - 1 - i
            response.push(prefixSum[i] * postfixSum[postFixPos])
        }

        return response
    }

    createPrefixSum(nums: number[]): number[] {
        let j = 0 - 1, i = 0, res = []
        while(i < nums.length){
            if(j < 0){
                res.push(1)
            }else{
                // i = 1
                // j = 0
                // res = [1]
                // [1, 2, 4, 6]
                //.           j  i
                // return -> [1, 1, 2, 8]
                res.push(nums[j] * res[j])
            }
            i++
            j++
        }
        return res; 
    }

    createPostfixSum(nums: number[]): number[] {
        let j = nums.length, i = nums.length - 1, res = []
        while(i >= 0){
            if(j > nums.length - 1){
                res.push(1)
            }else{
                // i = nums.length - 1
                // j = nums.length
                // res = [1]
                // [1, 2, 4, 6]
                //.       i  j
                // resturn -> [1, 6, ]
                const pos = nums.length - 1 - j
                res.push(nums[j] * res[pos])
            }
            i--
            j--
        }

        return res
    }
}
