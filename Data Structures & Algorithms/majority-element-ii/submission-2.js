class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        if(nums.length == 0) return []
        if(nums.length <= 2) return nums
        let candidateOne = nums[0], countOne = 0
        let candidateTwo = nums[1], countTwo = 0

        for(let i =0; i < nums.length; i ++){
            if(nums[i] == candidateOne) countOne++;
            else if(nums[i] == candidateTwo) countTwo ++;
            else if(countOne == 0) {
                candidateOne = nums[i]
                countOne++
            }else if(countTwo == 0){
                candidateTwo = nums[i]
                countTwo++
            }else{
                countOne-- 
                countTwo--
            }

        }

        let response = []
        const isCandidateOneVerfied = this.verifyVal(nums, candidateOne)
        const isCandidateTwoVerified = this.verifyVal(nums, candidateTwo)

        if(isCandidateOneVerfied && isCandidateTwoVerified){
            if(candidateOne == candidateTwo) response.push(candidateOne)
            else response.push(candidateOne, candidateTwo)
        }else if(isCandidateOneVerfied){
            response.push(candidateOne)
        }else if(isCandidateTwoVerified){
            response.push(candidateTwo)
        }else {}

        return response
    }


    verifyVal(nums, candidate){
        const target = nums.length/3; 
        let count = 0
        for(let i = 0; i < nums.length; i++){
            if(nums[i] == candidate) count++
        }

        if(count > target) return true
        return false
    }
}
