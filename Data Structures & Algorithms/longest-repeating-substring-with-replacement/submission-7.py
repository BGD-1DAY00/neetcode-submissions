class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left, right, freq = {}, 0 , 0
        s_length = len(s)
        while right < s_length: 
            curr_val = s[right]
            print(curr_val)
            right+=1
        return 0