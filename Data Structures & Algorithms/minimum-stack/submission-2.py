class MinStack:

    def __init__(self):
        self.stack = []
        self.min_stack = []
        

    """

    5,0,2,4
    5,0,0,0
    """
    def push(self, val: int) -> None:
        if len(self.stack) < 1:
            self.stack.append(val)
            self.min_stack.append(val)
        else:
            last_val = self.min_stack[-1]
            if last_val < val: 
                self.min_stack.append(last_val)
            else:
                self.min_stack.append(val)
            self.stack.append(val)
        

    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()
        

    def top(self) -> int:
        return self.stack[-1]
        

    def getMin(self) -> int:
        return self.min_stack[-1]
        
