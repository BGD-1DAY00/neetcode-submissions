class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    constructor(){
        this.minCost = Number.POSITIVE_INFINITY
    }
    minCostClimbingStairs(cost) {

        const search = (idx, currCost) => {
            if(idx >= cost.length) {
                this.minCost = Math.min(this.minCost, currCost)
                return; 
            }

            search(idx + 1, currCost + cost[idx])
            search(idx + 2, currCost + cost[idx])
        }

        search(0, 0)
        search(1, 0)

        return this.minCost;

    }
}
