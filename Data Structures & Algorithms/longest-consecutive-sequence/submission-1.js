class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums), a = 0, result = [];
        while(a < nums.length){
            let val = nums[a];
            if(set.has(val -1)) {
                a++;
                continue; 
            } 
            const curr = [val];
            while(true){
                if(set.has(val + 1)){
                    curr.push(val + 1); 
                    val++
                }else break; 
            }

            if(result.length < curr.length) result = curr; 
            a++; 
        }

        return result.length; 
    }
}
