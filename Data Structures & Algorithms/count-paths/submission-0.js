class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let count = 0;
        let directions = [[1,0], [0, 1]]
        let endAddress = [m - 1, n - 1]
        const search = (i, j) => {
            if(i == endAddress[0] && j == endAddress[1]){
                count++; 
                return;
            }

            if(i > endAddress[0] || j > endAddress[1]){
                return;
            }

            for(let dir of directions){
                search(i + dir[0], j + dir[1])
            }
        }

        search(0, 0)
        return count; 
    }
}
