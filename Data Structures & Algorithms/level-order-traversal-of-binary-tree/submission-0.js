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
        let result = []; 
        let stack = [root]
        while(stack.length > 0){
            let curr = []
            let stackLen = stack.length
            for(let i = 0; i < stackLen; i++){
                let node = stack.shift();
                curr.push(node?.val); 
                if(node.left != null) stack.push(node.left)
                if(node.right != null) stack.push(node.right)
            }
            result.push(curr);
        }

        return result; 
    }
}
