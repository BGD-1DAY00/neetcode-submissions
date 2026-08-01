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
    maxDepth(root: TreeNode | null): number {
        if(!root) return 0
        return this.findMaxDepth(root)
    }

    findMaxDepth(root): number{
        if(!root) return 0

        return  Math.max(1 + this.findMaxDepth(root.left),
        1 + this.findMaxDepth(root.right))
    }
}
