class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        mapping = {}
        for word in strs:
            sorted_word = ''.join(sorted(word))
            if sorted_word in mapping:
                mapping[sorted_word].append(word)
            else:
                mapping[sorted_word] = [word]
        print('mapping result: ', mapping)

        result = []
        for key, val in mapping.items():
            result.append(val)
        print('final result: ', result)
        return result

        