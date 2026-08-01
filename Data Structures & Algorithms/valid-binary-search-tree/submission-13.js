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
    isValidBST(root) {
        let response = true
        const check = (root) => {
            if(!root) return; 
            if(!response) return

            if((root.left && root.left.val > root.val) || 
            (root.right && root.right.val < root.val)
            ){
                response = false; 
            }

            check(root.left)
            check(root.right)
        }

        check(root)
        return response
    }
}
