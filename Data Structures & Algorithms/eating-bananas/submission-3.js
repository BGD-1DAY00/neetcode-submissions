class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min = 1, max = Math.max(...piles), result = max; 

        while(min < max){
            const mid = Math.floor((min + max) / 2); 
            const timeToFinish = piles.reduce((acc, curr)=> {
                const timeToEat = Math.ceil(curr/ mid); 
                return acc + timeToEat; 
            },0); 
            console.log(timeToFinish, mid)

            if(timeToFinish <= h) {
                result = Math.min(mid, result)
                max = mid - 1; 
            }
            else min = mid + 1;

        }

        return result; 

    }
}
