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
        let left = this.getHeight(root.left)
        let right = this.getHeight(root.right)
        this.max = Math.max(this.max, (left + right))
        return Math.max(left, right) + 1;
    }

    getHeight(root){
        if(!root) return 0; 
        return Math.max((this.getHeight(root.left) + 1), (this.getHeight(root.right) + 1));

    }

}
