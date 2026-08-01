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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let response = false; 

        const check = (root) => {
            if(!root) return; 
            if(response) return
            console.log(root == subRoot)
            if(root.val == subRoot.val) {
                let a = root, b = subRoot
                response = this.isSame(a, b)
            }
            check(root.left)
            check(root.right)
        }

        check(root)
        return response
    }

    isSame(root, subRoot){
        let response = true

        const checkIsSame = (subRoot, root) => {
            if(!root && !subRoot) return; 
            if(!response) return;
            if(!root && subRoot || root && !subRoot) {
                response = false
                return; 
            }

            if(root.val != subRoot.val) response = false;
            checkIsSame(subRoot.left, root.left)
            checkIsSame(subRoot.right, root.right)
        }

        checkIsSame(subRoot, root)
        return response; 
    }
}
