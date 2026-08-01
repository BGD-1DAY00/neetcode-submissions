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
    constructor(){
        this.max = 0
    }
    diameterOfBinaryTree(root) {
        if(!root) return 0;
        let leftH = this.getHeight(root.left);
        let rightH = this.getHeight(root.right);

        console.log(root.val, leftH, rightH)

        this.max = Math.max(this.max, leftH + rightH); 
        this.diameterOfBinaryTree(root.left)
        this.diameterOfBinaryTree(root.right); 

        return this.max; 

    }

    getHeight(root){
        if(!root) return 0; 
        return Math.max(this.getHeight(root.left) + 1, this.getHeight(root.right) + 1); 
    }



}
