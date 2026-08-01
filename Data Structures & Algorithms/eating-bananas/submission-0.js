class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = Math.min(...piles), right = Math.max(...piles);
        let completed = right;
        while(left < right){
            const mid = Math.floor((left + right) / 2);

            let isFinished = this.isKokoFinishedEating(mid, piles, h);
            if(isFinished){
                completed = Math.min(mid, completed)
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }

        return completed;

    }

    isKokoFinishedEating(eatPerHour, piles, hours){
        let hour = 0, pile = 0; 

        while(pile < piles.length){
            hour += Math.ceil(piles[pile]/ eatPerHour)
            pile++;
        }
        return hour <= hours; 
    }
}
