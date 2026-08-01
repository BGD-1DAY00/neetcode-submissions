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
        }
    }
    //["KthLargest", [3, [4, 5, 8, 2]], "add", [3], "add", [5], "add", [10], "add", [9], "add", [4]]


    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.push(val);
        this.bubbleUp()
        
 while(this.heap.length > this.kTh) {
            // Remove smallest element
            this.removeSmallest();
        }
        if(this.heap.length === 0) return []
        if(this.heap.length === 1) return this.heap[0]
        return this.heap[this.kTh - 1]
    }

        removeSmallest() {
        let smallest = 0;
        // Find smallest element
        for(let i = 0; i < this.heap.length; i++) {
            if(this.heap[i] < this.heap[smallest]) {
                smallest = i;
            }
        }
        // Remove it
        this.heap.splice(smallest, 1);
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
