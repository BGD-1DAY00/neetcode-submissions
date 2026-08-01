class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let right = matrix.length * matrix[0].length - 1; 
        let left = 0; 

        while(left <= right){
            let mid = Math.floor((left + right)/2);
            let row = Math.floor(mid/matrix[0].length);
            let col = mid % matrix[0].length
            if(matrix[row][col] == target) return true;
            else if(matrix[row][col] > target) right = mid - 1
            else left = mid + 1
        }

        return false; 
    }
}
