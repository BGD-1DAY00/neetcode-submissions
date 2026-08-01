class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.heap = new Heap(k)
        for(let num of nums){
            this.heap.push(num)
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        console.log(this.heap.heap)
        this.heap.push(val)
        return this.heap.peek(); 
        console.log(this.heap.heap)
    }
}

class Heap{

    constructor(k){
        this.heap = []
        this.k = k
    }
    
    heapifyUp(){
        let curr = this.heap.length - 1
        while(curr > 0){
            let parent = Math.floor((curr - 1)/2)
            if(this.heap[curr] < this.heap[parent]){
                [this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]]
            }
            else break; 
            curr = parent; 
        }
    }

    heapifyDown(){
        let curr = 0; 
        while(true){
            let leftParent = (curr * 2) + 1, rightParent = (curr * 2) + 2;
            let smallest = curr; 

            if(leftParent < this.heap.length && this.heap[leftParent] < this.heap[smallest]){
                smallest = leftParent
            }

            if(leftParent < this.heap.length && this.heap[rightParent] < this.heap[smallest]){
                smallest = rightParent
            }

            if(smallest == curr) break; 

            [this.heap[curr], this.heap[smallest]] = [this.heap[smallest], this.heap[curr]]
            curr = smallest
        }
    }

    peek(){
        return this.heap[0]
    }

    push(x){
        if(this.heap.length < this.k) {
            this.heap.push(x);
            this.heapifyUp(); 
        }
        else{
            if(x > this.peek()){
                this.heap[0] = x
                this.heapifyDown(); 
            }
        }
    }
}
