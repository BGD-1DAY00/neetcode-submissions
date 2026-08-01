class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const map = new Map();

        const search = (idx, currAmount) =>{
            if(currAmount == amount) {
                return 1
            }

            if(currAmount > amount) return 0; 
            if(map.has(`${idx},${currAmount}`)) return map.get(`${idx},${currAmount}`);

            let ways = 0;
            for(let i = idx; i < coins.length; i++) {
                ways += search(i, currAmount + coins[i]);
            }
            
            // Store in memo before returning
            map.set(`${idx},${currAmount}`, ways);
            return ways;

        }

        return search(0, 0);
    }
}
