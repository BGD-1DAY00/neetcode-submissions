class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid: number[][]): number {
        /**
         * [ 
         *  [ 1, 1, 0, 0]
         *  [ 1, 0, 0, 0]
         * ]
         * 
         * (0, 0)
         *  i. j
         * 
         * up: (-1, 0)
         * down: (1, 0)
         * left: (0, -1)
         * right: (0, 1)
         * 
         * Input: grid = [
                [1,1,0,0],
                [1,0,0,0],
                [1,1,1,0],
                [0,0,1,1]
            ]
         */
        let island = 0
        let directions = [[1, 0], [-1, 0], [0, -1], [0, 1]]
        for(let i = 0; i < grid.length; i ++){
            for(let j = 0; j< grid[i].length; j++){
                if(grid[i][j] == 0) continue
                for(let k = 0; k < directions.length; k++){
                    let newXPos = i + directions[k][0]
                    let newYPos = j + directions[k][1]
                    if(newXPos < 0 || newYPos < 0 || newXPos>grid.length -1 || newYPos > grid[i].length - 1) island++
                    else if(grid[newXPos][newYPos] == 0) {
                        island++
                    }
                }

            }
        }

        return island
    }
}
