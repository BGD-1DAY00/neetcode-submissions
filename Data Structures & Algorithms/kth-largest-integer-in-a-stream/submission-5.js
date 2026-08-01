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
        this.heap.push(val)
        return this.heap.peek();
    }
}

class Heap{

    constructor(k){
        this.heap = [];
        this.k = k
    }

    // push(x){
    //     this.heap.push(x)
    //     this.heapifyUp()
    //     if(this.heap.length > this.k) this.heap.pop(); 
    // }
    push(x) {
        this.heap.push(x);
        this.heapifyUp();
        if(this.heap.length > this.k) {
            this.heap.shift();  // Remove smallest from front
        }
    }

    peek(){
        return this.heap[0]
    }

    heapifyUp(){
        let currPos = this.heap.length - 1
        while(currPos > 0){
            let currPos = this.heap.length - 1
            let parent = Math.floor((currPos - 1)/2)
            if(this.heap[currPos] < this.heap[parent]){
                [[this.heap[currPos]], [this.heap[parent]]] = [[this.heap[parent]], [this.heap[currPos]]]
            }else break;
            currPos = parent
        }
    }

}
