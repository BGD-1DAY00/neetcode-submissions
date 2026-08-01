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
    constructor(){
        this.arr = []
    }
    kthSmallest(root, k) {
        this.fillArr(root); 
        return this.arr[k - 1]
    }

    fillArr(root){
        if(!root) return; 
        this.fillArr(root.left);
        this.arr.push(root.val);
        this.fillArr(root.right);
        return; 
    }
}
