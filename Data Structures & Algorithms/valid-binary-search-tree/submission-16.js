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
        if(!root) return false
        let response = true

        // [5,4,6,null,null,3,7]
        //   5
        //  4. 6
        //    3. 7
        //   1
        // 2.   3
        let coreRoot = root.val
        const check = (root) => {
            if(!root) return; 
            if(!response) return

            if((root.left && root.left.val >= root.val && root.left.val >= coreRoot) || 
            (root.right && root.right.val <= root.val && root.right.val <= coreRoot)
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
