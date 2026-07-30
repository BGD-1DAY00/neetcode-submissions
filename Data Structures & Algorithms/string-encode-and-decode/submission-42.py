class Solution:

    def encode(self, strs: List[str]) -> str:
        result = ''

        for word in strs:
            result += str(len(word)) + '!^#' + word 
        print(result)
        return result

    def decode(self, s: str) -> List[str]:
        def is_delimeter(idx, val, s):
            #  5!^#Hello5!^#World
            digit_val = []
            ref = idx
            if val.isdigit():
                while ref < len(s) and s[ref].isdigit():
                    digit_val.append(s[ref])
                    ref+=1
                if (ref + 2 < len(s)) and s[ref] == '!' and s[ref + 1] == '^' and s[ref + 2] == '#':
                    return (True, ''.join(digit_val), len(digit_val))
            return (False, '0', 0)

        key = '!^#'
        result = []
        idx = 0
        s = list(s)
        while idx < len(s): 
            val = s[idx]
            delimeter = is_delimeter(idx, val, s)
            if delimeter[0]: 
                word_starts = idx + delimeter[2] + 3
                word_ends = word_starts + int(delimeter[1])
                word_val = ''.join(s[word_starts: word_ends])
                result.append(word_val)
            #print(delimeter, word_starts, word_ends, ''.join(s[word_starts: word_ends + 1]))
                # do something
            print('before idx: ', idx)
            idx += int(delimeter[1]) + delimeter[2] + 3
            print('after idx: ', idx)
        
        return result
