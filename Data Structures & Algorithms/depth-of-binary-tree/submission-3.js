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
        let maxDepth = 0
        const findDepth = (root, depth) => {
            if(!root) return depth; 
            let left = findDepth(root.left, depth + 1)
            let right = findDepth(root.right, depth + 1)
            return Math.max(left, right) 
        }

        return findDepth(root, 0)
    }
}
