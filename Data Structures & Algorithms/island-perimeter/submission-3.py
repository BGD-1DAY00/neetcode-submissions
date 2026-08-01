class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:

        directions = [(1,0), (0,1), (-1,0), (0,-1)]
                    #  right. down.   left.   up

        result = 0

        def count_borders(grid, i, j): 
            count = 0

            """
            Input: grid = [
                [1,1,0,0],
                [1,0,0,0],
                [1,1,1,0],
                [0,0,1,1]
            ]
            """
            for k in range(len(directions)):
                dir_val = directions[k]
                x_val = i + dir_val[0]
                y_val = j + dir_val[1]
                if x_val >= 0 and x_val < len(grid) and y_val >=0 and y_val < len(grid[0]):
                    val = grid[x_val][y_val]
                    if val == 0:
                        count += 1
                    else:
                        continue
                else:
                    count += 1
            return count



        for i in range(len(grid)): 
            for j in range(len(grid[0])):
                value = grid[i][j]
                if value == 1: 
                    response = count_borders(grid, i, j)
                    result += response 
                    print('found a one')
                else: 
                    continue 
        return result 


        
        