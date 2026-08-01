class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        let gridSet = new Set(); 
        let numIslandCount = 0; 
        let directions = [[-1, 0], [1,0], [0,-1], [0,1]]

        function search(matrix, i, j, gridSet){
            if(gridSet.has(`${i}, ${j}`) || matrix[i][j] == "0") return; 

            gridSet.add(`${i}, ${j}`);

            for(let dir of directions){
                let newX = i + dir[0], newY = j + dir[1];
                let inRange = newX >=0 && newY >= 0 && newX < matrix.length && newY < matrix[0].length; 
                if(inRange) search(matrix, newX, newY, gridSet)
            }
        }

        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                if(grid[i][j] == "1" && !gridSet.has(`${i}, ${j}`)) search(grid, i, j, gridSet), numIslandCount++; 
            }
        }

        return numIslandCount; 
    }
}
