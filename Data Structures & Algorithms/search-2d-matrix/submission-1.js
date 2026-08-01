class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0, right = matrix.length * matrix[0].length - 1; 
        let colLen = matrix[0].length 

        while(left <= right){
            let mid = Math.floor((left + right)/2);
            let row = Math.floor(mid / colLen); 
            let col = mid % colLen

            if(matrix[row][col] == target) return true;
            else if(matrix[row][col] < target) left = mid + 1; 
            else right = mid - 1; 
        }

        return false

    }
}
