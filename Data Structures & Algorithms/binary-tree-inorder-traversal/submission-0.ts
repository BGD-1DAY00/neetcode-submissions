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
     * @return {number[]}
     */
    inorderTraversal(root: TreeNode | null): number[] {
        let res = [];
        this.completeInOrderTraversal(root, res);
        return res
    }

    completeInOrderTraversal(root, res){
        if(!root) return 
        this.completeInOrderTraversal(root.left, res)
        res.push(root.val)
        this.completeInOrderTraversal(root.right, res)
    }
}
