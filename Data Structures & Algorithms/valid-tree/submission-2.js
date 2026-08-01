class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length > n - 1) return false
        let uf = new UnionFind(n);
        let isValidTree = true; 

        // [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
        // 0 --> 1 --> 2 --> 3


        for(let i = 0; i < edges; i++){
            let x = edges[i][0], y = edges[i][1];
            if(uf.isConnected(x, y)) isValidTree = false; 
            else uf.union(x, y)
        }

        return isValidTree; 
    }
}

class UnionFind{
    constructor(n){
        this.arr = [];
        for(let i = 0; i < n; i++ ){
            this.arr.push(i)
        }
    }

    // Known as path compression
    find(x){
        if(this.arr[x] == x) return x
        else{
            this.arr[x] = this.find(this.arr[x])
        }
        return this.arr[x]; 
    }

    union(x, y){
        let xRoot = this.find(x);
        let yRoot = this.find(y);
        console.log(x, y, xRoot, yRoot)
        if(xRoot === yRoot) return; 

        this.arr[yRoot] = xRoot; 
    }

    isConnected(x, y){
        return this.find(x) === this.find(y)
    }
}
