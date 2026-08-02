class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left, right, hash_set = 0,0, set()
        max_len = 0
        print(right, len(s))

        # "acgck"
        #. l  r

        while right < len(s):
            right_char = s[right]
            if right_char in hash_set:
                while left < right: 
                    left_char = s[left]
                    if left_char != right_char:
                        hash_set.remove(left_char) 
                        left+=1
                    else:
                        left+=1
                        right+=1
                        break;
            else: 
                hash_set.add(right_char)
                max_len = max(max_len, right - left + 1)
                right+=1
        return max_len
        

                
        