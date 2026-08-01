class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        # ["1","2","+","3","*","4","-"]
        #   ^
        # [1, 2] -> []
        """
         3 -> [3, 3] -> [9, 4] - 4
        """

        mapping = {
            '+': lambda a,b: a + b,
            '-': lambda a,b: a - b,
            '/': lambda a,b: a / b, 
            '*': lambda a,b: a * b
        }

        stack = []

        for idx, val in enumerate(tokens):
            if val in mapping and len(stack) > 1: 
                first_val = stack.pop()
                second_val = stack.pop()
                op = mapping[val]
                stack.append(op(int(second_val), int(first_val)))
            else:
                stack.append(val)
        return stack[-1]


        