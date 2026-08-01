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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
       let diameter = 0
       const depth = (node) => {
           if (!node) return 0
           const l = depth(node.left)
           const r = depth(node.right)
           diameter = Math.max(diameter, l + r)
           console.log(diameter, l, r, node.val)
           return 1 + Math.max(l, r)
       }
       depth(root)
       return diameter
   }

}
