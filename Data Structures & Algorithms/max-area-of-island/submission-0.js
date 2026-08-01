class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {

        let maxArea = 0; 
        let gridSet = new Set(); 
        let directions = [[1,0],[0,1],[-1,0], [0,-1]]

        function dfs(grid, i, j, gridSet){
            let count = 0; 
            if(grid[i][j] == 0 || gridSet.has(`${i}, ${j}`)) return 0; 

            gridSet.add(`${i}, ${j}`)

            for(let dir of directions){
                let xDir = i + dir[0], yDir = j + dir[1];
                let isGoodRange = xDir >=0 && xDir < grid.length && yDir >=0 && yDir < grid[0].length
                if(isGoodRange) count = Math.max(count, dfs(grid, xDir, yDir, gridSet) + 1)
            }            

            return count
        }
        
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                if(grid[i][j] == 1 && !gridSet.has(`${i}, ${j}`)) maxArea = Math.max(dfs(grid, i, j, gridSet), maxArea);
            }
        }

        return maxArea; 
    }
}
