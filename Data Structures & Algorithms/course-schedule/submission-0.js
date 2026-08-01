class Solution {
    canFinish(numCourses, prerequisites) {
        const preReqMap = prerequisites.reduce((map, [course, prereq]) => {
            map.set(course, [...(map.get(course) || []), prereq]);
            return map;
        }, new Map());

        let courseSet = new Set(); 
        let response = true; 
        const dfs = (course) => {
            if (!response) return;
            
            if(courseSet.has(course)) {
                response = false;
                return; 
            }

            if (!preReqMap.has(course)) return;

            courseSet.add(course);
            const prereqs = preReqMap.get(course)
            for(let prereq of prereqs){
                dfs(prereq)
            }
            
            courseSet.delete(course);
        }

        for(let [course] of prerequisites){
            dfs(course)
        }

        return response;
    }
}