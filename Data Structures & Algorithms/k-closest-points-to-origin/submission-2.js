class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */

    constuctor(){
        this.pq; 
    }

    kClosest(points, k) {
        this.pq = new PQ(k);
        for(let point of points){
            let distance = this.findDistance(point)
            let node = new Node(distance, point)
            this.pq.push(node)
        }

        let heap = this.pq.heap;
        let response = []
        for(let val of heap){
            response.push(val.arr)
        }

        return response
    }

    findDistance(point){
        return Math.sqrt(Math.pow((point[0] - 0), 2) + Math.pow((point[1] - 0),2))
    }
}

class Node {
    constructor(distance, arr){
        this.distance = distance
        this.arr = arr
    }
}

class PQ {

    constructor(k){
        this.heap = []
        this.k = k
    }



    peek(){
        return this.heap[0]
    }

    // x ---> NODE Type
    push(x){
        if(this.heap.length < this.k){
            this.heap.push(x)
            this.heapifyUp()
        }else{
            let root = this.peek(); 
            if(x.distance < root.distance){
                this.heap[0] = x
                this.heapifyDown()
            }

        }
    }

    heapifyDown(){
        let curr = 0;
        while(true){
            let largest = curr
            let leftChild = Math.floor((curr * 2) + 1), rightChild = Math.floor((curr * 2) + 2)

            if(leftChild < this.heap.length && this.heap[leftChild].distance > this.heap[largest].distance){
                largest = leftChild
            }

            if(rightChild < this.heap.length && this.heap[rightChild].distance > this.heap[largest].distance){
                largest = rightChild
            }

            if(largest == curr) break; 

            [this.heap[curr],this.heap[largest]] = [this.heap[largest], this.heap[curr]]
            curr = largest
        }
    }

    heapifyUp(){
        let curr = this.heap.length - 1
        while(curr > 0){
            let parent = Math.floor((curr - 1)/ 2)
            if(this.heap[curr].distance > this.heap[parent].distance){
                [this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]]
                curr = parent
            }else break
        }
    }

}
