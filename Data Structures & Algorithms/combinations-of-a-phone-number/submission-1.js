class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {

        if(digits.length < 1) return []
        const result = [];

        const digitMap = new Map([
            [2, ["a", "b", "c"]],
            [3, ["d", "e", "f"]],
            [4, ["g", "h", "i"]],
            [5, ["j", "k", "l"]],
            [6, ["m", "n", "o"]],
            [7, ["p", "q", "r", "s"]],
            [8, ["t", "u", "v"]],
            [9, ["w", "x", "y", "z"]]
        ])

        const bt = (idx, arr) => {
            console.log(arr)
            if(idx > digits.length) return; 
            if(arr.length == digits.length) {
                result.push([...arr].join(""))
                return;
            }
            // 34
            for(let i = 0; i < digitMap.get(parseInt(digits[idx]))?.length; i++){
                arr.push(digitMap.get(parseInt(digits[idx]))[i])
                bt(idx + 1, [...arr])
                arr.pop()
            }

        }

        bt(0, [])
        return result; 
    }
}
