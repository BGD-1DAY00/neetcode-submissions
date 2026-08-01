class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let a = 0, b = 1, max = 0; 
        while(b < prices.length){
            if(prices[b] > prices[a]){
                max = Math.max(max, (prices[b] - prices[a]));
                b++
            }else a = b, b++;
        }

        return max; 
    }
}
