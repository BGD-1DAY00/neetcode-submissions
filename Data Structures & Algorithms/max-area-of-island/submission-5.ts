class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        let maxArea = 0
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[i].length; j++){
                if(grid[i][j] == 1){
                    maxArea = Math.max(this.dfs(grid, i, j), maxArea)
                }
            }
        }

        return maxArea
    }

    dfs(grid, row, col): number {
        if (this.isOutOfBounds(grid, row, col) || grid[row][col] === 0) return 0
        grid[row][col] = 0
        return 1 + this.dfs(grid, row + 1, col)
                + this.dfs(grid, row - 1, col)
                + this.dfs(grid, row, col + 1)
                + this.dfs(grid, row, col - 1)
    }

    isOutOfBounds(grid, row, col){    
        return row < 0 || row > grid.length - 1 || col < 0 || col > grid[0].length - 1
    }
}
