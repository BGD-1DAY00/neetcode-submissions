class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let directions = [[0,1],[1,0]];
        let goalPos = [m-1, n-1]
        let count = 0, posSet = new Set()
        const bt = (xIdx, yIdx, posSet) => {
            if(xIdx == goalPos[0] && yIdx == goalPos[1]) {
                count++
                return
            }
            if(xIdx >= m || yIdx >= n) return;
            let key = `${xIdx},${yIdx}`
            if(posSet.has(key)) return; 
            posSet.add(key)


            for(let dir of directions){
                let newX = xIdx + dir[0], newY = yIdx + dir[1]
                let inRange = newX >=0 && newY >=0 && newX < m && newY < n;
                if(inRange){
                    bt(newX, newY, posSet)
                }
            }

            posSet.delete(key)
        }

        bt(0,0, posSet)
        return count
    }
}
