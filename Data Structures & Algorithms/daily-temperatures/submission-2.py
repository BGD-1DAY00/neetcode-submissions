class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        """
        Input: temperatures = [30,38,30,36,35,40,28]
                            [30] vs 38 > [40, 28]
                            result = [1,4,1,2,1,0,0]
                            stack = [5, 6]
        
        plan: 
            - use stack and result list
            - list will include a bunch of 0s 
            - return result list
            edge cases:
                i dont believe there are any, just need to be careful with comparisons 
        """
        t = temperatures
        result = [0] * len(t)
        stack = [0]
        for idx in range(1, len(t)):
            val, top_stack = t[idx], stack[-1]
            print('values: ', t, stack, val, top_stack)
            if stack and val > t[stack[-1]]: 
                while stack and val > t[stack[-1]]:
                    index_diff = idx - stack[-1] 
                    print('ops: ', idx, stack[-1], index_diff)

                    result[stack[-1]] = index_diff
                    stack.pop()
            stack.append(idx)
        return result

