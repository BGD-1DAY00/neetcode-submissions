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
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        this.doInvert(root); 
        return root
    }

    doInvert(root){
        if(!root) return; 

        [root.left, root.right] = [root.right, root.left]

        this.doInvert(root.left); 
        this.doInvert(root.right)
    }
}
