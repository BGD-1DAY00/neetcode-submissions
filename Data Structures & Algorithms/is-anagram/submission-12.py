class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        l = [0] * 26
        for val in s: 
            ord_val = ord(val) - ord('a')
            l[ord_val] += 1
        
        for val in t: 
            ord_val = ord(val) - ord('a')
            l[ord_val] -= 1
        
        for val in l: 
            if val != 0:
                return False
        return True


        