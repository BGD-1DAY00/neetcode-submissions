class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {

        const adjList = edges.reduce((map, [u,v]) => {
            map.set(u, [...(map.get(u) || []), v])
            map.set(v, (map.get(v) || []))
            return map; 
        }, new Map());


        let visited = new Set(); 
        let visting = new Set() 
        let topSortArr = []
        let failed = false; 
        const dfs = (idx) => {
            if(visting.has(idx)) {
                failed = true; 
                return; 
            } 
            if(visited.has(idx)) return 



            visting.add(idx);
            let list = adjList.get(idx) || []
            for(let k = 0; k < list.length; k++){
                dfs(list[k])
            }

            visited.add(idx)
            visting.delete(idx)
            topSortArr.push(idx)
        }

        for(let i = 0; i < n; i++){
            dfs(i)
        }

        if(failed) return []
        return topSortArr.reverse(); 
    }
}
