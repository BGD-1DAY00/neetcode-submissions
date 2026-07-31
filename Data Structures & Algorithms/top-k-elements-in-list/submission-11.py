class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        m = {}

        for val in nums: 
            m[val] = m.get(val, 0) + 1
        
        heap = []

        for key,val in m.items():   
            heapq.heappush(heap, (-val, key))
        print('heap val:', heap)
        response = []
        for i in range(k):
            value = heapq.heappop(heap)
            response.append(value[1])
        print('response val:', response)
        return response