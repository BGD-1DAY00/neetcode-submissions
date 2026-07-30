class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        m = {}

        for idx, val in enumerate(strs):
            l = [0] * 26
            for j in val:
                word_val = ord(j) - ord('a')
                l[word_val] += 1
            print(l)
            word_str = tuple(l)
            if word_str in m: 
                word_list = m[word_str]
                word_list.append(val)
            else:
                m[word_str] = [val]
        response = []
        for key, val in m.items():
            response.append(val)
        return response

        