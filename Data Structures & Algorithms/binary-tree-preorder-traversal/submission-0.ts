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
    preorderTraversal(root: TreeNode | null): number[] {
        let res = [];
        this.completePreorderTrav(root, res)
        return res
    }

    completePreorderTrav(root, res){
        if(!root) return 
        res.push(root.val)
        this.completePreorderTrav(root.left, res)
        this.completePreorderTrav(root.right, res)
    }
}
