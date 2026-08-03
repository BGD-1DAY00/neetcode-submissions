class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(t) > len(s): 
            return ''
        right, response = 0 , ''

        
        tmap = {}
        for i in range(len(t)): 
            tmap[t[i]] = tmap.get(t[i], 0) + 1 
        

        smap = {}
        min_len = 10000
        left = 0

        while right < len(s): 
            if right - left + 1 < len(t): 
                if s[right] in tmap: 
                    smap[s[right]] = smap.get(s[right], 0) + 1
                right+=1
            elif s[right] in tmap: 
                smap[s[right]] = smap.get(s[right], 0) + 1
                right += 1
            else: 
                right +=1
            if all(smap.get(c, 0) >= n for c, n in tmap.items()):
                """
                Input: s = "OUZODYXAZV", t = "XYZ"
                Output: "YXAZ"


                """
                # a while statement here 
                while all(smap.get(c, 0) >= n for c, n in tmap.items()):
                    if right - left + 1 < min_len: 
                        min_len = right - left + 1
                        response = s[left: right]
                    if s[left] in smap: 
                        smap[s[left]] = smap.get(s[left], 0) - 1
                        if smap[s[left]] == 0: 
                            smap.pop(s[left])
                    left+=1
        
        return response 
                


        