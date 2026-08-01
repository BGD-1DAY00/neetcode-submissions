class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) < 1:
            return ''
        if len(strs) == 1: 
            return strs[0]
        

        longest_prefix = strs[0]
        for idx in range(1, len(strs)):
            val = strs[idx]
            curr_longest_idx, val_idx = 0, 0
            while val_idx < len(val) and curr_longest_idx < len(longest_prefix): 
                if val[val_idx] == longest_prefix[curr_longest_idx]:
                    val_idx += 1
                    curr_longest_idx += 1
                else:
                    break;
            longest_prefix = longest_prefix[:curr_longest_idx]
        
        return longest_prefix
            

        