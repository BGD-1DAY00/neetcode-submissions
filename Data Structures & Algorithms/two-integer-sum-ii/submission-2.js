class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        for(let i = 0; i < numbers.length; i++){
            let j = i + 1; 
            while(j<numbers.length){
                let sum = numbers[i] + numbers[j]
                if(sum == target) return [i + 1, j + 1]
                j++
            }
        }

        return []
    }
}
