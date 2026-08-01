class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const sortedFleet = position.map((val, idx) => {
            const timeToReach = (target - val) / speed[idx];
            return [val, speed[idx], timeToReach]
        }).sort((a,b) => b[0] - a[0]);

        const stack = [sortedFleet[0]]; 

        for(let i = 1; i < sortedFleet.length; i++){
            const timeToReach = sortedFleet[i][2]; 
            if(timeToReach <= stack[stack.length - 1][2]){
                continue; 
            }else{
                stack.push(sortedFleet[i])
            }
        }
        console.log(stack)

        return stack.length; 
    }
}
