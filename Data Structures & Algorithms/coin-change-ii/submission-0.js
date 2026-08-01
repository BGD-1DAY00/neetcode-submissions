class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let count = 0; 
        const search = (idx, currAmount) =>{
            if(currAmount == amount) {
                count++;
                return;
            }

            if(currAmount > amount) return; 

            for(let i = idx; i < coins.length; i++){
                search(i, currAmount + coins[i])
            }

        }

        search(0, 0);
        return count
    }
}
