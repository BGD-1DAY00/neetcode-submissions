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
    constructor(){
        this.isEqual = false
    }
    isSubtree(root, subRoot) {
        if(!root) return false; 
        if(root.val === subRoot.val) this.isEqual = this.check(root, subRoot); 
        this.isSubtree(root.left, subRoot)
        this.isSubtree(root.right, subRoot); 

        return this.isEqual; 
    }

    check(root, subR){
        if(!root && !subR) return true; 
        if(!root || !subR) return false; 
        if(root.val != subR.val) return false; 
        let val = this.check(root.left, subR.left); 
        if(!val) return false
        let val2 = this.check(root.right, subR.right);
        if(!val2) return false
        return true; 
    }
}
