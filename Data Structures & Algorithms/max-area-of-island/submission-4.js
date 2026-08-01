class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let gridSet = new Set(); 
        let directions = [[-1,0], [1,0], [0,-1], [0,1]]
        let maxAreaOfIsland = 0;

        function search(grid, i, j, gridSet){
            if(gridSet.has(`${i}, ${j}`) || grid[i][j] == 0) return 0;
            let area = 1;

            gridSet.add(`${i}, ${j}`);

            for(let dir of directions){
                let newX = i + dir[0], newY = j + dir[1];
                let inRange = newX >= 0 && newY >= 0 && newX < grid.length && newY < grid[0].length
                if(inRange){
                    area += search(grid, newX, newY, gridSet)
                }
            }

            return area; 
        }



        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                if(grid[i][j] === 1 && !gridSet.has(`${i}, ${j}`)){
                    maxAreaOfIsland = Math.max(search(grid, i, j, gridSet), maxAreaOfIsland);
                }
            }
        }

        return maxAreaOfIsland; 
    }
}
