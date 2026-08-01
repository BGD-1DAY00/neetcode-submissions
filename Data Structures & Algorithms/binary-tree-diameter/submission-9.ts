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
    diameterOfBinaryTree(root: TreeNode | null): number {
        let best = 0;

        function dfs(node) {
            if (!node) return 0;
            const leftHeight = dfs(node.left);
            const rightHeight = dfs(node.right);
            // update best here using leftHeight + rightHeight
            // then return this node's height
            best = Math.max(best, (leftHeight + rightHeight))
            return 1 + Math.max(leftHeight, rightHeight);
        }

        dfs(root);
        return best;
    }
}
