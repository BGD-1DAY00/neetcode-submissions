class Solution:
    def isValid(self, s: str) -> bool:
        mapping = {
            ')': '(', 
            '}': '{', 
            ']': '['
         }

        stack = []
        for char in s: 
            if char in mapping: 
                back = stack.pop()
                if back != mapping[char]:
                    return False
            else:
                stack.append(char)
        return True

        