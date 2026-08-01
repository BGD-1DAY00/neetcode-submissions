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
        this.lca = root; 
        this.findLCA(root.left, p, q) ? this.lca = root.left : null;
        this.findLCA(root.right, p, q) ? this.lca = root.right : null;
        return this.lca;
    }

    findLCA(root, p, q){
        if(!root) return false; 
        console.log(root.val)
        if(this.find(root, p) && this.find(root, q)) this.lca = root;
        if(root.left) this.findLCA(root.left, p, q)
        if(root.right) this.findLCA(root.right, p, q)
    }

    find(root, node){
        if(!root) return false; 
        if(root.val == node.val) return true; 
        let val = this.find(root.left, node)
        if(val) return true; 
        let val2 = this.find(root.right, node)
        if(val2) return true; 
    }
}
