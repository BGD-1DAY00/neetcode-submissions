class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let uf = new DisjointSet(n);
        // console.log(uf.arr)
        for(let i = 0; i < edges.length; i++){
            let x = edges[i][0], y = edges[i][1]
            uf.union(x,y)
        }

        // console.log(uf.arr)
        return new Set(uf.arr).size
    }
}

/**
 * 
 * Brain Storming Here: 
 * - Disjoint Set
 * Loop over the edges and define their root using path compression 
 * 
 */

class DisjointSet{

    constructor(k){
        this.arr = []
        for(let i = 0; i < k; i++){ 
            this.arr.push(i)
        }
        this.rank = new Array(k).fill(0);
    }

    find(x){
        if(this.arr[x] != x){
            this.arr[x] = this.find(this.arr[x])
        }
        return this.arr[x]
    }

  union(x, y) {
    // console.log("start: ", x, y, this.arr, this.rank)
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) {
      return;
    }

    if (this.rank[rootX] < this.rank[rootY]) {
      this.arr[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.arr[rootY] = rootX;
    } else {
      this.arr[rootY] = rootX;
      this.rank[rootX]++;
    }
    // console.log("end: ", x, y, this.arr, this.rank)

  }

    isConnected(x,y){
        return this.find(x) == this.find(y)
    }
}
