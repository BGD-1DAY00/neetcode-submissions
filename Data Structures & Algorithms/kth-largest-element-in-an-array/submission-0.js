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

        return this.minHeap[this.minHeap.length - 1]; 
    }

    bubbleUp(k){
        let heap = this.minHeap; 
        let currIdx = heap.length - 1; 
        while(currIdx > 0){
            let parentIdx = Math.floor((currIdx - 1)/2);
            if(heap[currIdx] > heap[parentIdx]){
                [heap[currIdx],  heap[parentIdx]] = [heap[parentIdx], heap[currIdx]]; 
                currIdx = parentIdx; 
            }else break; 
        }

        if(heap.length > k){
            // remove the largest value; 
            let largestIdx = 0; 
            for(let i = 0; i < heap.length; i++){
                if(heap[i] < heap[largestIdx]){
                    largestIdx = i
                }
            }

            heap.splice(largestIdx, 1); 
        }
    }


}
