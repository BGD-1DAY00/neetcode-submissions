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
        
        // Get heights directly from recursive calls
        let left = this.getDiameterOfBinaryTree(root.left)
        let right = this.getDiameterOfBinaryTree(root.right)
        
        // Update max diameter with path through current node
        this.max = Math.max(this.max, (left + right))
        
        // Return height
        return Math.max(left, right) + 1;
    }

}
