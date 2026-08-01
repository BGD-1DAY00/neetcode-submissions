class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    constructor(){
        this.count = 0;
    }
    
    climbStairs(n) {
        
        const search = (idx) => {
        if(idx > n) return    // Went too far
        if(idx === n) {       // Reached exactly n
            this.count++;
            return;
        }
        
        search(idx + 1)    // Take 1 step
        search(idx + 2)    // Take 2 steps
    }

        search(0)
        return this.count
    }
}
