class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let preFixArr = [nums[0]];
        let postFixArr = new Array(nums.length).fill(0);
        postFixArr[nums.length -1] = nums[nums.length - 1]
        
        //prefix
        for(let i = 1; i < nums.length; i++){
            const curr = nums[i] * preFixArr[i-1]
            preFixArr.push(curr)
        }

        //postfix
        for(let j = nums.length - 2; j >=0; j--){
            const curr = nums[j] * postFixArr[j+1];
            postFixArr[j] = curr;
        }

        const result = [];

        for(let k = 0; k < nums.length; k++){
            const curr = (preFixArr[k-1] ?? 1)  * (postFixArr[k+1] ?? 1)
            result.push(curr)
        }

        // console.log(preFixArr);
        // console.log(postFixArr);
        // console.log(result);

        return result; 
    }
}
