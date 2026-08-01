class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        /**
         * 
         * BrainStorming: 
         * - Disjoint Set for defining the root of nodes
         * - We can use this to detect a cycle
         * - Questions: 
         *   - Define a tree: 
         *     - any number of connections (1 node can have 4 relationships)
         *     - 0 cycles
         *     - n-1 edges 
         * 
         * Plan: 
         * - Define a disjoint set class
         * - build each connection and define the roots 
         * -          [[0, 1], [0, 2], [0, 3], [1, 4]]
         * - Values:  [0, 0, 0, 0, 0]
         * - Index:   [0, 1, 2, 3, 4]
         * 
         * 
         * 
         * -          [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
         * - Values:  [0, 0, 0, 0, 4]
         * - Index:   [0, 1, 2, 3, 4]
         */

        if(edges.length >= n) return false
        let unionFind = new DS(n);
        for(let i =0; i < edges.length; i++){
            let x = edges[i][0], y = edges[i][1];
            if(unionFind.isConnected(x, y)) return false
            else{
                unionFind.union(x, y)
            }
        }

        let ufSet = new Set(unionFind.arr)
        if(ufSet.size > 1) return false

        return true
    }
}

class DS{
    constructor(n){
        this.arr = [];
        for(let i =0; i < n; i++){
            this.arr.push(i);
        }
    }

    find(x){
        // [0, 0, 1, 3, 4]
        // [0, 1, 2, 3, 4]
        if(x != this.arr[x]){
            this.arr[x] = this.find(this.arr[x])
        }
        return this.arr[x]
    }
    union(x,y){
        // [0, 1, 0, 3, 4]
        // [0, 1, 2, 3, 4]
        let xFound = this.find(x)
        let yFound = this.find(y)
        if(xFound != yFound) this.arr[yFound] = xFound
    }
    isConnected(x,y){
        return this.find(x) == this.find(y)
    }











}
