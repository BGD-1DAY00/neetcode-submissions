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
        let leftH = this.getHeight(root.left)
        let rightH = this.getHeight(root.right)

        if(Math.abs(leftH - rightH) > 1) return false;
        let isB = root.left ?  this.isBalanced(root.left) : true
        let isB2 = root.right ? this.isBalanced(root.right): true
        if(isB === false || isB2 === false) return false; 
        return true; 
    }

    getHeight(root){
        if(!root) return 0; 
        return Math.max(this.getHeight(root.left) + 1, this.getHeight(root.right) + 1)
    }
}
