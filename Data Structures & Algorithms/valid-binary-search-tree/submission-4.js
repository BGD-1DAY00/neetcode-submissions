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
        if(!root) return true; 
        if(!root.left && !root.right) return true; 
        if(!(root?.right?.val > root.val && root.left?.val < root.val)){
            return false;
        }
        let leftGood = this.isLeftValid(root.left, root.val)
        let rightGood = this.isRightValid(root.right, root.val)
        return leftGood && rightGood; 
    }

    isLeftValid(root, max){
        if(!root) return true; 
        if(!root.left && !root.right) return true; 
        if(!(root?.right?.val > root.val && root.left?.val < root.val) && !(root.val < max && root?.left?.val < max && root?.right?.val < max)){
            return false;
        }

        let val = this.isLeftValid(root.left, max);
        if(!val) return false;
        let valb = this.isLeftValid(root.right, max)
        if(!valb) return false; 
    }

    isRightValid(root, min){
        if(!root) return true; 
        if(!root.left && !root.right) return true; 
        if(!(root?.right?.val > root.val && root.left?.val < root.val) && !(root.val > min && root?.left?.val > min && root?.right?.val > min)){
            return false;
        }

        let val = this.isLeftValid(root.left, min);
        if(!val) return false;
        let valb = this.isLeftValid(root.right, min)
        if(!valb) return false; 
    }
}
