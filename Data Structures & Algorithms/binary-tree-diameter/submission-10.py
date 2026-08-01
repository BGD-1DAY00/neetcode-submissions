# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        max_val = 0

        def find_diam(node):
            nonlocal max_val
            if not node:
                return 0
            
            left_val =  find_diam(node.left)
            right_val = find_diam(node.right)
            max_val = max(max_val, left_val + right_val)
            print(node.val, left_val, right_val, max_val)
            return 1 + max(left_val, right_val)
            
        find_diam(root)
        return max_val