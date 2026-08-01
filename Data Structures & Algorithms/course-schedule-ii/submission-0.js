class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let preR = prerequisites; 
        const adjList = preR.reduce((map, [course, preq]) => {
            map.set(course, [... (map.get(course) || []), preq]);
            return map; 
        }, new Map())

        // implement topological sort; 
        let visited = new Set(); 
        let topSort = []
        const dfs = (course) => {
            console.log("starting: ", course, topSort)
            if(visited.has(course)) {
                return false
            }; 
            visited.add(course);

            let preArr = adjList.get(course) || []
            for(let k = 0; k < preArr.length; k++){
                if(!dfs(preArr[k])) return false
            }

            topSort.push(course)
            visited.delete(course)
            return true
        }

        for(let i = 0; i < numCourses; i++){
            if(!dfs(i)){
                return []
            }
        }

        return topSort; 
    }
}
