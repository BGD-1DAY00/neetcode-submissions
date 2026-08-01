class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    constructor(){
        this.heap = []
    }

    lastStoneWeight(stones) {
        let stonesLen = stones.length; 
        // Check
        if(stonesLen <= 1) return 0; 
        let countOfOps = 0; 
        this.createHeap(stones);
        console.log("here")
        while(this.heap.length >= 2){
            // console.log("START: ", this.heap)
            [this.heap[this.heap.length - 1], this.heap[0]] = [ this.heap[0], this.heap[this.heap.length - 1]]
            let firstVal = this.heap.pop();
            console.log("first val: ", this.heap, firstVal)
            this.bubbleDown(); 
            [this.heap[this.heap.length - 1], this.heap[0]] = [this.heap[0], this.heap[this.heap.length - 1]]
            let secondVal = this.heap.pop(); 
            console.log("secondVal val: ", this.heap, secondVal)

            const leftOver = Math.abs(firstVal - secondVal);
            if(leftOver > 0) this.heap.push(leftOver);
            this.bubbleUp(); 
            countOfOps++; 
            console.log("END: ", this.heap)
        }

        return this.heap[0]; 
    }


    createHeap(stones){
        let heap = this.heap, i = 0; 
        console.log("createheap")
        while(i < stones.length){
            heap.push(stones[i])
            this.bubbleUp()
            i++; 
        }
    }

    bubbleDown(){
        console.log("here")
let currIdx = 0;
        while(true){
            let leftChild = Math.floor((currIdx*2) + 1)
            let rightChild = Math.floor((currIdx * 2) + 2)
if(leftChild >= this.heap.length || rightChild >= this.heap.length) break;

            if(this.heap[currIdx] < this.heap[leftChild]){
                if(this.heap[leftChild] > this.heap[rightChild]){
                    [this.heap[currIdx], this.heap[leftChild]] = [this.heap[leftChild], this.heap[currIdx]]
                    currIdx = leftChild
                }else{
                    [this.heap[currIdx], this.heap[rightChild]] = [this.heap[rightChild], this.heap[currIdx]]
                    currIdx = rightChild
                }
            }else if(this.heap[currIdx] < this.heap[rightChild]){
                [this.heap[currIdx], this.heap[rightChild]] = [this.heap[rightChild], this.heap[currIdx]]
                currIdx = rightChild
            }else break;

        }
    }

    bubbleUp(){
        let currIdx = this.heap.length - 1; 
        while(currIdx > 0){
            let parentIdx = Math.floor((currIdx - 1)/ 2);
            if(this.heap[currIdx] > this.heap[parentIdx]){
                [this.heap[currIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currIdx]]
                currIdx = parentIdx;
            }else break; 
        }
    }
}
