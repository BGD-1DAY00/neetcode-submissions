class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) < 2:
            return False
        mapping = {
            ')': '(', 
            '}': '{', 
            ']': '['
         }

        stack = []
        for char in s: 
            if char in mapping: 
                if len(stack) < 1: 
                    return False
                back = stack.pop()
                if back != mapping[char]:
                    return False
            else:
                stack.append(char)
        return len(stack) == 0

        