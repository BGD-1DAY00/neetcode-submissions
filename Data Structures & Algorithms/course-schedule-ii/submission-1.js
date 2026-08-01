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
            map.set(preq, (map.get(preq) || []))
            return map; 
        }, new Map())

        // implement topological sort; 
        let visited = new Set(), visiting = new Set(); 
        let topSort = []
        const dfs = (course) => {
            if(visited.has(course)) return true
            if(visiting.has(course)) return false
            visiting.add(course);

            let preArr = adjList.get(course) || []
            for(let k = 0; k < preArr.length; k++){
                if(!dfs(preArr[k])) return false
            }

            topSort.push(course)
            visited.add(course)
            visiting.delete(course)
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
