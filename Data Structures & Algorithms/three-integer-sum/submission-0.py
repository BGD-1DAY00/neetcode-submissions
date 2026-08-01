class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        sorted_list = sorted(nums)
        result = []
        for i in range(len(sorted_list)):
            if i > 0 and sorted_list[i] == sorted_list[i - 1]:
                continue
            left, right = i + 1, len(sorted_list) - 1
            while left < right: 
                total = sorted_list[left] + sorted_list[right] + sorted_list[i]
                #print(sorted_list[i] ,sorted_list[left], sorted_list[right], total)
                if total == 0:
                    result.append([sorted_list[i], sorted_list[left], sorted_list[right]])
                    left+=1
                    right-=1
                elif total > 0:
                    right -= 1
                else:
                    left += 1
        return result

        