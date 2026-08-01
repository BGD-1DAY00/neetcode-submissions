class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let isFirstOperationComplete = false; 
        let set = new Set(["+", "/", "*", "-"]);
        let stack = [], sum = 0; 

        for(let i = 0; i < tokens.length; i++){
            if(set.has(tokens[i]) && !isFirstOperationComplete){
                let first = stack.pop(), second = stack.pop();
                sum += this.completeFirstOperation(parseInt(first), parseInt(second), tokens[i])
                isFirstOperationComplete = true
            }
            else if(set.has(tokens[i]) && isFirstOperationComplete){
                let first = stack.pop()
                sum = this.completeOperation(parseInt(first), parseInt(sum), tokens[i])
            }
            else stack.push(tokens[i])
            console.log(sum)
        }

        return sum; 
    }

    completeFirstOperation(first, second, operation){
        return this.doOp(second, first, operation);
    }

    completeOperation(arg, sum, operation){
        return this.doOp(arg, sum, operation)
    }

    doOp(arg1, arg2, operation){
        console.log(arg1, arg2, operation)
        switch(operation){
            case "+":
                return parseInt(arg2 + arg1)
            case "/":
                return parseInt(Math.floor(arg2/arg1))
            case "*":
                return parseInt(arg2 * arg1)
            case "-":
                return parseInt(arg2 - arg1)
        }
    }

}
