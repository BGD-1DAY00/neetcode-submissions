class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2): 
            return False
        print('step a')

        m = {}
        for i in range(len(s1)): 
            m[s1[i]] = m.get(s1[i], 0) + 1
        print('step 2: ', m)
        
        s1_len = len(s1)
        n = {}
        left = 0
        for right in range(len(s2)): 
            print('at the top: ', right - left + 1 == s1_len and n == m)
            if right < s1_len:
                n[s2[right]] = n.get(s2[right], 0) + 1
                print('step 3: ', n, right)
            elif right - left + 1 == s1_len and n == m:
                print('step 4: ', n, m)
                return True
            else: 
                n[s2[right]] = n.get(s2[right], 0) + 1
                n[s2[left]] = n.get(s2[left], 0) - 1
                if n[s2[left]] == 0: 
                    n.pop(s2[left])
                left+=1
            if (right - left + 1 == s1_len and n == m): 
                return True
        print('last step: ', n)
        return False


        