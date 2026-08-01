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
        // [5,1,4,null,null,3,6]
        //  5
        // 1. 4
        //    3 6
        let coreRoot = root.val
        const check = (root, isLeft) => {
            if(!root) return; 
            if(!response) return

            if((root.left && root.left.val >= root.val) || 
            (root.right && root.right.val <= root.val)
            ){
                if(isLeft && root.left.val > coreRoot)response = false;
                if(!isLeft && root.right.val < coreRoot) response = false; 
            }

            check(root.left, true)
            check(root.right, false)
        }

        check(root, true)
        return response
    }
}
