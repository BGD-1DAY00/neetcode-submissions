class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        m = {}
        left, max_val = 0, 0
        for right in range(len(s)): 
            m[s[right]] = m.get(s[right], 0) + 1
            size_of_window = right - left + 1
            max_freq_char = max(m.values())
            v = size_of_window - max_freq_char
            if v <= k: 
                max_val = max(max_val, size_of_window)
            else: 
                while ((right - left + 1) - max(m.values())) > k: 
                    m[s[left]] = m.get(s[left], 0) - 1 
                    left+=1
        return max_val


        