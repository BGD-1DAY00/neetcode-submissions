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
    // [3,3,null,4,2]
    //         3
    //     3
    // 4.     2


    constructor(){
        this.result = 0; 
    }
    goodNodes(root) {
        if(!root) return 0; 
        if(root.right == null && root.left == null) return 1;
        this.getGoodNodes(root, -101);
        return this.result; 
    }

    getGoodNodes(root, currMax){
        if(!root) return; 
        if(root.val >= currMax) {
            this.result ++; 
            currMax = root.val
        }
        this.getGoodNodes(root.left, currMax)
        this.getGoodNodes(root.right, currMax)
    }
}
