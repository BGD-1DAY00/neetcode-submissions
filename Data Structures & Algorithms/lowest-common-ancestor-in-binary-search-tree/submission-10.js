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
        let isFound = false; 
        let response; 

        const findLCA = (root, p, q) => {
            if(!root) return;
            if(isFound) return;
            if(root.left && root.right && root.left.val == p.val && root.right.val == q.val || root.left.val == q.val && root.right.val == p.val){
                response = root; 
                isFound = true; 
                return;
            }

            if(root.val == p.val || root.val == q.val){
                response = root; 
                isFound = true; 
                return;
            }

            findLCA(root.left, p, q)
            findLCA(root.right, p, q)
        }

        findLCA(root, p, q)
        return response
    }
}
