class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = [];
        // First build heap
        for(let num of nums) {
            this.add(num);
        }
    }

    add(val) {
        // If heap is smaller than k, add
        if(this.minHeap.length < this.k) {
            this.minHeap.push(val);
            this.heapifyUp(this.minHeap.length - 1);
        }
        // If val is greater than OR EQUAL TO smallest, replace smallest
        else if(val >= this.minHeap[0]) {  // Changed > to >=
            this.minHeap[0] = val;
            this.heapifyDown(0);
        }
        // Important: Always return minHeap[0], even if we didn't add the value
        return this.minHeap[0];
    }

    heapifyUp(index) {
        while(index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if(this.minHeap[parent] <= this.minHeap[index]) break;
            [this.minHeap[parent], this.minHeap[index]] = 
            [this.minHeap[index], this.minHeap[parent]];
            index = parent;
        }
    }

    heapifyDown(index) {
        while(true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if(left < this.minHeap.length && 
               this.minHeap[left] < this.minHeap[smallest]) {
                smallest = left;
            }
            if(right < this.minHeap.length && 
               this.minHeap[right] < this.minHeap[smallest]) {
                smallest = right;
            }

            if(smallest === index) break;

            [this.minHeap[index], this.minHeap[smallest]] = 
            [this.minHeap[smallest], this.minHeap[index]];
            index = smallest;
        }
    }
}