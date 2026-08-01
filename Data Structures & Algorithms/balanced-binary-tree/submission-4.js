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
    constructor(){
        this.balanced = true
    }
    isBalanced(root) {
        if(!root) return true
        if(this.balanced === false) return false; 
        
        const getHeight =(root)=>{
            if(!root) return 0
            return Math.max(getHeight(root.left) + 1, getHeight(root.right) + 1)
        }

        let leftHeight = getHeight(root.left), rightHeight = getHeight(root.right)
        if(Math.abs(leftHeight - rightHeight) > 1) this.balanced = false
        
        this.isBalanced(root.left)
        this.isBalanced(root.right)

        return this.balanced
    }
}
