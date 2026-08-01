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
        if(!root) return null; 

        function doInvert(root){
            if(!root) return; 
            [root.left, root.right] = [root.right, root.left]
            doInvert(root.left)
            doInvert(root.right)
        }

        doInvert(root)
        return root
    }
}
