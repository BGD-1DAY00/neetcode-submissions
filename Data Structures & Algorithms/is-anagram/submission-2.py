class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        map = {}
        for idx, val in enumerate(s): 
            map[val] = map.get(val, 0) + 1
        for idx, val in enumerate(t): 
            if val not in map:
                return False
            map[val] = map.get(val, 0) - 1 
            if map[val] < 0:
                return False
        return True 
