class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        /**
         * [1, 5, 8, 12] target = 6
         *  ^  
         */

        // for(let i = 0; i < numbers.length; i++){
        //     let j = i + 1; 
        //     while(j<numbers.length){
        //         let sum = numbers[i] + numbers[j]
        //         if(sum == target) return [i + 1, j + 1]
        //         j++
        //     }
        // }

        // return []

        let left = 0, right = numbers.length; 

        while(left < right){
            let sum = numbers[left] + numbers[right]
            console.log(sum, left, right)
            if(sum == target) return [left + 1, right + 1]
            else if(sum < target) {
                console.log(sum < target, sum, left, right);
                left++

            }
            else right--
        }

        return []
    }
}
