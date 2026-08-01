class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        
        time_taken = [((target - position[i]) / speed[i]) for i in range(len(position))]
        cum_list = [(time_taken[i], position[i]) for i in range(len(position))]
        cum_list.sort(key=lambda t: t[1])
        result = 0
        print(cum_list)
        while cum_list: 
            curr = cum_list.pop()
            while cum_list and cum_list[-1][0] <= curr[0]:
                cum_list.pop()
            result+=1
        
        return result

