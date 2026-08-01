class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // space: o(n);
    // time: o(nc);
    longestConsecutive(nums) {
        let longestConsecSeq = 0; 
        let setMap = new Set(nums)

        for(let i =0; i < nums.length; i++){
            longestConsecSeq = Math.max(longestConsecSeq, this.findLongestConsecSeq(nums[i], setMap));
        }
        return longestConsecSeq;
    }

    findLongestConsecSeq(num, setMap){
        if(setMap.has(num - 1)){
            return 1;
        }
        let count = 1; 
        let nextInc = num + 1;
        // o(c): longest sub sequence 
        while(true){
            if(setMap.has(nextInc)){
                count++;
                nextInc++
            }else return count;
        }
    }
}
