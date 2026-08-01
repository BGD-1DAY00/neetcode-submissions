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

        // root=[5,3,8,1,4,7,9,null,2]
        // p=2
        // q=4

//         5
//       3.      8
//    1.   4   7   9
//      2
        const findLCA = (root) => {
            if(!root) return;
            if(isFound) return;
            if(root.left && root.right && ((root.left.val == p.val && root.right.val == q.val) || (root.left.val == q.val && root.right.val == p.val))){
                response = root; 
                isFound = true; 
                return;
            }

            if(root.val == p.val || root.val == q.val){
                response = root; 
                isFound = true; 
                return;
            }

            findLCA(root.left)
            findLCA(root.right)
        }

        findLCA(root)
        return response
    }
}
