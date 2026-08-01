import heapq

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        mapping = {}
        for val in nums:
            if val in mapping: 
                mapping[val]+= 1
            else:
                mapping[val] = 1 
        
        
        h = []
        
        for key, value in mapping.items():
            heapq.heappush(h, (value, key))
        print(h)

        while len(h) > k:
            heapq.heappop(h)
        print('final: ', h)
        
        result = []

        for item in h: 
            result.append(item[1])
        return result

        