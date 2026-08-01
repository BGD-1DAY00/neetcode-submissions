class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftPre = nums.map(val => val)
        for(let k = 0; k < leftPre.length; k ++){
            let left = k - 1 >= 0 ? leftPre[k -1] : 1;
            leftPre[k] = leftPre[k] * left
        }

        let rightPre = nums.map(val => val);

        for(let i = rightPre.length -1; i >= 0; i --){
            let right = i + 1 < rightPre.length ? rightPre[i + 1] : 1;
            rightPre[i] = right * rightPre[i]
        }
        console.log(leftPre, rightPre)

        let result = [];

        for(let i =0; i < nums.length; i++){
            let left = i - 1 >= 0 ? leftPre[i-1] : 1
            let right = i +1 < nums.length ? rightPre[i+1] : 1
            result.push(left * right)
        }

        return result;
    }
}
