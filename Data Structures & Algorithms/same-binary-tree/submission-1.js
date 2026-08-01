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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let response = true
        const check = (p, q) => {
            if(!p && !q) return 
            if(!p && q || p && !q) {
                response = false
                return
            }
        

            if(p.val != q.val) response = false
            check(p.left, q.left) 
            check(p.right, q.right)
        }

        check(p, q)
        return response
    }
}
