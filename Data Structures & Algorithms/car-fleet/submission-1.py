class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        
        time_taken = [math.ceil((target - position[i]) / speed[i]) for i in range(len(position))]
        cum_list = [(time_taken[i], position[i]) for i in range(len(position))]
        cum_list.sort(key=lambda t: t[1])
        result = 0
        while cum_list: 
            curr = cum_list.pop()
            while cum_list and cum_list[-1] <= curr:
                cum_list.pop()
            result+=1
        
        return result

