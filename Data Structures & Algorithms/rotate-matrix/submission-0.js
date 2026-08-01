class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        for(let i = 0; i < matrix.length; i ++){
            for(let j = i; j< matrix.length; j++){
                if(j == i) continue; 
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
            }
        }

        for(let arr of matrix){
            arr.reverse()
        }
        return matrix; 
    }
}
