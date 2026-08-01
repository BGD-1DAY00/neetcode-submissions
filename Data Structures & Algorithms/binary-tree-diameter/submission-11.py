class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        max_val = 0
        def find_diameter(root, depth=0):
            nonlocal max_val
            pad = "  " * depth   # indentation so deeper calls are shifted right

            if not root: 
                print(f"{pad}[enter] None -> returning 0")
                return 0

            print(f"{pad}[enter] node {root.val}, going LEFT")
            left = find_diameter(root.left, depth + 1)
            print(f"{pad}[back]  node {root.val}, left height = {left}, going RIGHT")
            right = find_diameter(root.right, depth + 1)
            print(f"{pad}[back]  node {root.val}, right height = {right}")

            total = left + right
            print(f"{pad}   node {root.val}: left={left} right={right} total(diameter here)={total}")

            old_max = max_val
            max_val = max(max_val, total)
            print(f"{pad}   node {root.val}: max_val {old_max} -> {max_val}")

            print(f"{pad}[return] node {root.val} returning 1")
            return 1 + max(left, right)

        find_diameter(root)
        return max_val