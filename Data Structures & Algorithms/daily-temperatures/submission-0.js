class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [], result = new Array(temperatures.length).fill(0);

        for(let i = 0; i < temperatures.length; i++){
            if(stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]){
                while(true){
                    if(stack.length < 1 || temperatures[i] <= stack[stack.length - 1][0]) break;
                    const lastVal = stack.pop(); 
                    result[lastVal[1]] = i - lastVal[1]
                }
                stack.push([temperatures[i], i])
            }else{
                stack.push([temperatures[i], i])
            }

        }

        return result; 
    }
}
