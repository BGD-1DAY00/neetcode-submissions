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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        let res = []
        let stack = [root]
        while(stack.length > 0){
            let len = stack.length;
            let curr = [] 
            for(let i = 0; i < len; i++){
                let node = stack.shift();
                curr.push(node.val)
                if(node.left) stack.push(node.left)
                if(node.right) stack.push(node.right)
            }
            res.push(curr)
        }

        return res; 
    }
}
