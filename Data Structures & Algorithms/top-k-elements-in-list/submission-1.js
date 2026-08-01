class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = nums.reduce((map, curr) => {
            map.set(curr, (map.get(curr) ||0) + 1);
            return map;
        }, new Map());

        let heapObj = new Heap(k);

        for(let [key, value] of map){
            heapObj.push(key, value);
        }

        console.log(heapObj.heap)
        let res = [];
        for(let i = 0; i < heapObj.heap.length; i++){
            res.push(heapObj.heap[i][0])
        }
        return res;

    }
}

class Heap { 
    constructor(size){
        this.heap = []
        this.size = size
    }

    push(key, value){
        if(this.heap.length < this.size){
            this.heap.push([key,value])
            this.bubbleUp();
        }else{
            const top = this.peek();
            if(top[1] < value){
                this.heap[0] = [key, value];
                this.bubbleDown();
            }
        }
        console.log("push: ", this.heap)
    };
    peek(){
        return this.heap[0]
    }
    // pop(){

    // };
    bubbleUp(){
        let pointer = this.heap.length - 1;
        
        while(pointer > 0){
            let parent = Math.floor((pointer - 1) / 2);
            if(this.heap[parent][1] > this.heap[pointer][1]){
                [this.heap[parent], this.heap[pointer]] = [this.heap[pointer], this.heap[parent]];
                pointer = parent;
            
            }else break;

        }
    };
    bubbleDown(){
        let pointer = 0;
        while(pointer < this.heap.length){
            let left = (2*pointer) + 1;
            let right = (2*pointer) + 2;

            let min = pointer;
        
            if(left < this.heap.length && this.heap[left][1] > this.heap[pointer][1]){ 
                min = left
            }
            if(right < this.heap.length && this.heap[right][1] > this.heap[pointer][1]){
                min = right;
            }
             
            if(min == pointer) break;

            [this.heap[pointer], this.heap[min]] = [this.heap[min], this.heap[pointer]]
            pointer = min; 
        }
    }

}
