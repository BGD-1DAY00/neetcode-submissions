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
     * @return {number}
     */
    constructor(){
        this.max = 0
    }
    diameterOfBinaryTree(root) {
        if(!root) return 0;
        this.getDiameterOfBinaryTree(root);
        return this.max; 
    }

    getDiameterOfBinaryTree(root){
        if(!root) return 0; 
        let left = this.getLeftHeight(root.left)
        let right = this.getRightHeight(root.right)
        this.max = Math.max(this.max, (left + right))
        // return Math.max(max, (left + right))
        return Math.max(left, right) + 1;
    }

    getLeftHeight(root){
        if(!root) return 0; 
        return this.getLeftHeight(root.left) + 1; 
    }

    getRightHeight(root){
        if(!root) return 0; 
        return this.getRightHeight(root.right) + 1; 
    }
}
