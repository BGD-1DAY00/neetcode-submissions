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
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) return true; 
        let val =  this.getIsBalanced(root) 
        if(val == -1) return false
        return true
    }

    getIsBalanced(root){
        if(!root) return 0; 

        let left = this.getIsBalanced(root.left);
        let right = this.getIsBalanced(root.right);

        if(Math.abs(left - right) > 1) return -1; 
        return Math.max(left, right) + 1; 
    }
}
