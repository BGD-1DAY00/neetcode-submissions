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
    isValidBST(root) {
        if(!root) return true;
    //     2
    //  1     3
        const dfs = (root, left, right) => {
            if(!root) return true; 
            if((root.val <= left || root.val >= right)) return false;

            return dfs(root.right, Math.max(left, root.val), Math.max(right, root.val)) && dfs(root.left, Math.min(left, root.val), Math.min(right, root.val))
        }

        return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
    }
}
