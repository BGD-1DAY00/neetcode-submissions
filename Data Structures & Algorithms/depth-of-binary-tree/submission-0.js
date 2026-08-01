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
    maxDepth(root) {
        return this.getDepth(root, 0)
    }

    getDepth(root, depth){
        if(!root) return depth; 
        return Math.max(this.getDepth((root.left), depth + 1), this.getDepth((root.right), depth + 1))

    }
}
