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
        for idx, val in enumerate(list(s)): 
            delimeter = is_delimeter(idx, val, s)
            if delimeter[0]: 
                word_starts = idx + delimeter[2] + 3
                word_ends = word_starts + int(delimeter[1])
                result.append(''.join(s[word_starts: word_ends]))
            #print(delimeter, word_starts, word_ends, ''.join(s[word_starts: word_ends + 1]))
                # do something
        
        return result
