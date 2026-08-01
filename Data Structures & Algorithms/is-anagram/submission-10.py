class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        map = {}
        for idx, val in enumerate(s): 
            currVal = map.get(val, 0)
            map[val] = currVal + 1 
        
        for idx, val in enumerate(t):
            currVal = map.get(val, -1)
            if currVal == -1:
                return False
            map[val] = currVal - 1
        
        for idx, val in map.items(): 
            if val != 0: 
                return False

        return True


        
        