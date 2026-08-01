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
    let response = root; // Start with root as potential answer
    
    const dfs = (root) => {
        if(!root) return;
        
        // If both values are less than current node, LCA must be in left subtree
        if(root.val > p.val && root.val > q.val) {
            response = root.left;
            dfs(root.left);
        }
        // If both values are greater than current node, LCA must be in right subtree
        else if(root.val < p.val && root.val < q.val) {
            response = root.right;
            dfs(root.right);
        }
        // Otherwise, we've found our split point - this is our LCA
    }
    
    dfs(root);
    return response;
}
}
