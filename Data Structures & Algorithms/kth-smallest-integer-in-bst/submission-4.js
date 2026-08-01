/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */

    /* 
        // Max heap of size k 
        // once size is reached we'll check if the root is smaller than that value 
        if it is then we will swap it and bubble down
        at the very end we will simply return the root of the heap

        left traversal first, then a right, once we've reached the capacity of k we no longer need to continue
        // in order traversal is what we'll follow until we've populated k, then were done and we return the root; 

        time complexity: Best Case: o(k) Worst Case : o(n) - with the understanding that there will always be k nodes in the tree
        space complexity: o(k) - size of the heap 

    */

    kthSmallest(root, k) {
        let heap = new Heap(k)

        const dfs = (root) => {
            if(!root) return; 
            if(heap.length >= k) return;

            dfs(root.left)
            dfs(root.right)
            console.log(root.val)
            if(heap.heap.length < k) {
                heap.push(root.val)
            }
        }

        dfs(root)
        return heap.pop(); 
    }
}

class Heap{
    constructor(k){
        this.heap = []
        this.maxSize = k
    }

    pop(){
        if(this.heap.length < 1) return null; 
        if(this.heap.length == 1) return this.heap.pop(); 

        [this.heap[0], this.heap[this.heap.length -1]] = [this.heap[this.heap.length -1], this.heap[0]]
        let val = this.heap.pop(); 
        this.bubbleDown()
        return val; 
    }
    peek(){
        return this.heap.length > 0 ? this.heap[0] : null; 
    }
    push(x){
        if(this.heap.length < this.maxSize){
            this.heap.push(x)
            this.bubbleUp();
        }else{
            if(x < this.peek()){
                this.heap[0] = x; 
                this.bubbleDown()
            }
        }
    }
    bubbleUp(){
        let curr = this.heap.length - 1; 

        while(curr > 0){
            let parent = Math.floor((curr - 1)/2);

            if(this.heap[curr] > this.heap[parent]){
                [this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]]
                curr = parent
            }else break; 
        }
    }
    bubbleDown(){
        let curr = 0; 

        while(true){
            let largest = curr
            let leftChild = (curr * 2) + 1, rightChild = (curr * 2) + 2;

            if(this.heap[largest] < this.heap[leftChild]){
                largest = leftChild
            }

            if(this.heap[largest] < this.heap[rightChild]){
                largest = rightChild
            }

            if(largest == curr) break; 

            [this.heap[largest], this.heap[curr]] = [this.heap[curr], this.heap[largest]]
            curr = largest
        }
    }
}
