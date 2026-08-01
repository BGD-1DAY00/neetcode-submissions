from collections import deque 
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left, right, s_len = 0, 1, len(s)
        if s_len <= 1:
            return s_len
        
        max_len, queue = 0, deque()

        """
         "AAABABB"  
           l    ^ 
        """
        while right < s_len: 
            a_val, b_val = s[left], s[right]

            # CHANGED: was `if b_val == a_val and k > 0:`  (spent a replacement on a MATCH)
            # CHANGED: was `queue.append(a_val)`           (recorded the kept char, not the replaced one)
            if b_val != a_val and k > 0:
                k-=1 
                queue.append(b_val)   # ADDED: record the character we actually replaced

            # CHANGED: was `elif b_val == a_val and k <= 0:`  (same inverted condition)
            elif b_val != a_val and k <= 0: 
                if queue:                              # ADDED: only reclaim if we've spent a replacement
                    oldest_change = queue.popleft()
                    while left < s_len and s[left] != oldest_change: 
                        left+=1
                    left+=1
                    k+=1 
                    queue.append(b_val)
                else:                                  # ADDED: k==0 case, nothing to reclaim
                    left = right                       # window collapses to just the current char
            else: 
                pass
            print('last: ', left, right, queue)

            max_len = max(max_len, right - left + 1)
            right+=1
        return max_len