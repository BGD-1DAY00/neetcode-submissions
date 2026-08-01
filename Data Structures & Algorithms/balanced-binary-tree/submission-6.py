# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:

        is_all_balanced = True

        def is_balanced(node):
            nonlocal is_all_balanced
            if not node:
                return 0
            print(node.val)
            left_val = is_balanced(node.left)
            right_val = is_balanced(node.right)
            print(node.val, left_val, right_val)
            diff = right_val - left_val
            if abs(diff) > 1:
                is_all_balanced = False
            
            return 1 + max(left_val, right_val)
        is_balanced(root)

        return is_all_balanced
        