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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let response; 
        let isFound = false
        const dfs = (root) => {
            if(!root) return
            if(isFound) return

            // The left and right child nodes are p & q
            if(root.left && root.right && (
                (root.left.val == p.val && root.right.val == q.val) || 
                (root.left.val == q.val && root.right.val == p.val))
                ){
                    response = root; 
                    isFound = true
            }

            if(root.val >= p.val && root.val <= q.val){
                response = root
            }


            // Can this be the root?
            if(root.val < p.val) dfs(root.right)
            else dfs(root.left)
        }

        dfs(root)
        return response
    }
}
