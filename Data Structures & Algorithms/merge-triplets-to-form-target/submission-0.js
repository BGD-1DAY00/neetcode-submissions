class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        for(let i =0; i < triplets.length; i++){
            let iA = triplets[i][0], iB = triplets[i][1], iC = triplets[i][2]
            for(let j = 1; j < triplets.length; j++){
               let jA = triplets[j][0], jB = triplets[j][1], jC = triplets[j][2]
               let maxA = Math.max(jA, iA), maxB = Math.max(jB, iB), maxC = Math.max(jC, iC)
               if(maxA == target[0] && maxB == target[1] && maxC == target[2]) return true
            }
        }

        return false; 
    }
}
