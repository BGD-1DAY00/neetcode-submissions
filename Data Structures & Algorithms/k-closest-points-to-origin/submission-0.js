class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    constructor(){
        // Will be of size K; 
        this.heap = [];
    }
    kClosest(points, k) {
        for(let i = 0; i < points.length; i++){
            const distance = this.getDistance(points[i]);
            this.heap.push([distance, points[i]])
            this.bubbleUp(k); 
        }
        let res = [];
        for(let j = 0; j < this.heap.length; j++){
            res.push(this.heap[j][1])
        }
        return res; 
    }

    getDistance(point){
        return Math.sqrt(Math.pow(point[0] - 0, 2) + Math.pow(point[1] - 0, 2));
    }

    bubbleUp(k){
        let currIdx = this.heap.length - 1
        while(currIdx > 0){
            let parentIdx = Math.floor((currIdx - 1) / 2)
            if(this.heap[currIdx][0] < this.heap[parentIdx][0]){
                [this.heap[currIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currIdx]]
                currIdx = parentIdx; 
            }else break; 
        }

        if(this.heap.length > k){
            let largestIdx = 0; 
            for(let i = 0; i < this.heap.length; i++){
                if(this.heap[i][0] > this.heap[largestIdx][0]){
                    largestIdx = i
                }
            }

            this.heap.splice(largestIdx, 1); 
        }
    }

}
