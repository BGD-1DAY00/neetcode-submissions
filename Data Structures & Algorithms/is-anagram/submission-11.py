class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        mapping = {}
        for char in s:
            if char not in mapping: 
                mapping[char] = 1
            else:
                mapping[char] += 1
        for char in t:
            if char not in mapping: 
                return False
            else:
                mapping[char]-=1
        
        for key,val in mapping.items():
            if val != 0:
                return False
        return True
        