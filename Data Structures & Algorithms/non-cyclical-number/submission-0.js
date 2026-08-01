class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let nArr = n.toString().split("")
        let seen = new Set()
        while(true){
            let response = 0
            for(let digit of nArr){
                response += Math.pow(parseInt(digit), 2)
            }
            if(response == 1) return true;
            if(seen.has(response)) return false;
            seen.add(response)
        }
    }
}
