class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        s, left, right = list(s), 0, 0
        s_length = len(s)
        if s_length < 2: 
            return s_length
        
        s_set = set()

        live_length, max_length = 0, 0
        # "zxyzxyz" s="pwwkew"
        while right < s_length and left < s_length:
            curr_val = s[right]
            if curr_val in s_set:
                while curr_val in s_set:
                    live_length -= 1
                    s_set.remove(s[left])
                    left+=1
                    
            else:
                s_set.add(curr_val)
                live_length +=1
                right+=1
           
            max_length = max(max_length, live_length)
        return max_length
                


            



        