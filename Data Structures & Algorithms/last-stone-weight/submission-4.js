class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */

    constructor(){
        this.pq = new PQ()
    }
    lastStoneWeight(stones) {
        for(let stone of stones){
            this.pq.push(stone)
        }

        while(true){
            console.log(this.pq.heap)
            let aLargest = this.pq.pop();
            let bLargest = this.pq.pop(); 
            console.log(aLargest, bLargest)
            let leftOver = aLargest - bLargest; 

            if(leftOver > 0) this.pq.push(leftOver);

            if(this.isComplete()) break;
        }

        return (this.pq.heap[0] || 0)
    }

    isComplete(){
        if(this.pq.heap.length <= 1) return true
        return false
    }
}

class PQ {

    constructor(){
        this.heap = []
    }

    heapifyUp(){
        let curr = this.heap.length - 1
        while(curr > 0){
            let parent = Math.floor((curr - 1) /2)
            if(this.heap[parent] < this.heap[curr]){
                [this.heap[parent], this.heap[curr]] = [this.heap[curr], this.heap[parent]]
                curr = parent
            }else break; 
        }
    }

    heapifyDown(){
        let curr = 0;
        while(true){
            let largest = curr
            let leftChild = Math.floor(curr * 2) + 1, rightChild = Math.floor(curr * 2) + 2

            if(leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]){
                largest = leftChild
            }

            if(rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]){
                largest = rightChild
            }

            if(largest == curr) break

            [this.heap[largest], this.heap[curr]] = [this.heap[curr], this.heap[largest]];
            curr = largest
        }
    }

    pop(){
        let firstElement = 0, lastElement = this.heap.length - 1

        if(this.heap.length == 0) return 0
        if(this.heap.length > 1){
            [this.heap[firstElement], this.heap[lastElement]] = [this.heap[lastElement], this.heap[firstElement]]
            let response = this.heap.pop()
            this.heapifyDown()
            return response; 
        }
        else return this.heap.pop(); 
    }

    push(x){
        this.heap.push(x)
        this.heapifyUp()
    }


}