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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!root) return false; 
        if(this.isEqual(root, subRoot)) {
            console.log("here")
            return true
        }; 
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot); 
    }

    isEqual(root, subroot){
        if(!root && !subroot) return true; 
        if(!root || !subroot) return false; 

        if(root.val != subroot.val) return false; 

        return (this.isEqual(root.left, subroot.left) && this.isEqual(root.right, subroot.right))
    }
}
