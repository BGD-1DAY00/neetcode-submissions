class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    constructor(){
        this.minHeap = []; 
    }

    findKthLargest(nums, k) {
        for(let i = 0; i < nums.length; i++){
            this.minHeap.push(nums[i])
            this.bubbleUp(k);
        }
        console.log(this.minHeap)
        return this.minHeap[0]; 
    }

    bubbleUp(k){
        let heap = this.minHeap; 
        let currIdx = heap.length - 1; 
        while(currIdx > 0){
            let parentIdx = Math.floor((currIdx - 1)/2);
            if(heap[currIdx] < heap[parentIdx]){
                [heap[currIdx],  heap[parentIdx]] = [heap[parentIdx], heap[currIdx]]; 
                currIdx = parentIdx; 
            }else break; 
        }

        if(heap.length > k){
            [heap[0], heap[heap.length-1]] = [heap[heap.length-1], heap[0]];
            heap.pop();
            this.bubbleDown();  // Need to implement this
        }
    }

    bubbleDown() {
   let heap = this.minHeap;
   let currIdx = 0;
   
   while(true) {
       let leftIdx = 2 * currIdx + 1;
       let rightIdx = 2 * currIdx + 2;
       let smallest = currIdx;
       
       // Find smallest among current, left and right children
       if(leftIdx < heap.length && heap[leftIdx] < heap[smallest]) {
           smallest = leftIdx;
       }
       if(rightIdx < heap.length && heap[rightIdx] < heap[smallest]) {
           smallest = rightIdx;
       }
       
       // If current is already smallest, we're done
       if(smallest === currIdx) break;
       
       // Otherwise swap and continue down
       [heap[currIdx], heap[smallest]] = [heap[smallest], heap[currIdx]];
       currIdx = smallest;
   }
}


}
