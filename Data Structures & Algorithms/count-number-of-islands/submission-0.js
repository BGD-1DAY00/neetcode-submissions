class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let set = new Set(), matrix = grid; 
        let result = 0; 
        let directions = [[1,0], [-1, 0], [0, -1], [0,1]]

        function search(matrix, i, j, set){
            if(set.has(`${i}, ${j}`) || grid[i][j] === "0") return; 
            
            set.add(`${i}, ${j}`);

            for(let dir of directions){
                let xDir = i + dir[0], yDir = j + dir[1];
                let isInRange = xDir >= 0 && yDir >=0 && xDir < matrix.length && yDir < matrix[0].length; 
                if(isInRange){
                    search(matrix, xDir, yDir, set)
                }
            }
        }

        for(let i = 0; i < grid.length; i ++){
            for(let j = 0; j < grid[0].length; j++){
                if(grid[i][j] == "1" && !set.has(`${i}, ${j}`)) {
                    result++
                    search(matrix, i, j, set)
                }
            }
        }

        return result; 
    }
}
