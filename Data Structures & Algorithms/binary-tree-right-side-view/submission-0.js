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
     * @return {number[]}
     */
    rightSideView(root) {
        let result = [root.val]
        let stack = [root];

        while(stack.length > 0){
            let stackLen = stack.length
            for(let i = 0; i < stackLen; i++){
                let node = stack.shift()
                if(node.left) stack.push(node.left)
                if(node.right) stack.push(node.right)
            }
            if(stack[stack.length - 1]?.val) result.push(stack[stack.length - 1]?.val)
        }

        return result; 
    }
}
