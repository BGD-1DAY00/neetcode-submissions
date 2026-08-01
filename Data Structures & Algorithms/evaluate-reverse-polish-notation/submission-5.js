class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let set = new Set(["+", "/", "*", "-"]);
        let stack = []; 

        for(let i = 0; i < tokens.length; i++){
            if(set.has(tokens[i])){
                let first = stack.pop(), second = stack.pop();
                stack.push(this.doOp(parseInt(first), parseInt(second), tokens[i]));
            }
            else stack.push(tokens[i])
        }

        return stack.pop(); 
    }

    doOp(arg1, arg2, operation){
        console.log(arg1, arg2, operation)
        switch(operation){
            case "+":
                return parseInt(arg2 + arg1)
            case "/":
                return parseInt(Math.floor(arg2/arg1))
            case "*":
                return parseInt(arg2 * arg1);
            case "-":
                return parseInt(arg2 - arg1);
        }
    }

}
