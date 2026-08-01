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

    constructor(){
        this.lca = null
    }
    lowestCommonAncestor(root, p, q) {
        if(!root) return null; 
        if(root?.val == p.val) return root;
        if(root?.val == q.val) return root;
        if((root?.right.val == p.val || root?.right.val == q.val) && (root?.left.val == p.val || root?.left.val == q.val) && p != q) return root; 

        this.lca = root.left ? this.lowestCommonAncestor(root.left, p, q): null 
        if(this.lca) return this.lca; 
        this.lca = root.right ? this.lowestCommonAncestor(root.right, p, q): null
        if(this.lca) return this.lca; 

        return this.lca; 

    }
}
