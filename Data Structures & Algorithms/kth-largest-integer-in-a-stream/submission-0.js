class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.heap = []
        this.kTh = k; 
        this.createHeap(nums)
    }

    createHeap(nums){
        let i = 0
        while(i < nums.length){
            this.heap.push(nums[i])
            this.bubbleUp()
            i++
            if(this.heap.length > this.kTh) this.heap.pop();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.push(val);
        this.bubbleUp()
        
                console.log("AAA: ", this.heap)
if(this.heap.length > this.kTh) {
    if(this.heap[this.heap.length - 1] >= this.heap[this.heap.length - 2]) {
                console.log("herea")

         this.heap.splice(this.heap.length -2, 1)
    }
    else { 
        console.log("hereb")
        this.heap.splice(this.heap.length - 1, 1)
    }
}
console.log("BBB: ", this.heap)
        if(this.heap.length === 0) return []
        if(this.heap.length === 1) return this.heap[0]
        return this.heap[this.kTh - 1]
    }

    // bubbleUp(){
    //     let currIndex = this.heap.length - 1
    //     while(currIndex >= 0){
    //         let parentIndex = Math.floor((currIndex - 1)/2) 
    //         if(this.heap[currIndex] > this.heap[parentIndex]){
    //             [this.heap[currIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currIndex]];
    //             currIndex = parentIndex;
    //         }else{
    //             break; 
    //         }
    //     }
    //     return;
    // }
    bubbleUp(){
    let currIndex = this.heap.length - 1
    while(currIndex > 0) {  // changed from >= 0
        let parentIndex = Math.floor((currIndex - 1)/2)
        if(parentIndex >= 0 && this.heap[currIndex] > this.heap[parentIndex]){
            [this.heap[currIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currIndex]];
            currIndex = parentIndex;
        }else{
            break;
        }
    }
}
}
