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
    isBalanced(root: TreeNode | null): boolean {
        let isBalanced = true

        function dfs(root){
            if(!root) return 0
            const leftHeight = dfs(root.left)
            const rightHeight = dfs(root.right)

            if(Math.abs(leftHeight - rightHeight) > 1){
                isBalanced = false
            }

            return 1 + Math.max(leftHeight, rightHeight)
        }

        dfs(root)
        return isBalanced
    }
}
