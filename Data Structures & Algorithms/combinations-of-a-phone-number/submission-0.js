class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {

        if(digits.length < 1) return []
        const result = [];

        const digitMap = new Map([[
            2, ["a", "b", "c"],
            2, ["a", "b", "c"],
            2, ["a", "b", "c"],
            2, ["a", "b", "c"],
            2, ["a", "b", "c"],
            2, ["a", "b", "c"],
            2, ["a", "b", "c"],
            2, ["a", "b", "c"],
        ]])

        const bt = (idx, arr) => {
            if(idx > digits.length) return; 
            if(arr.length == digits.length) {
                result.push([...arr])
                return;
            }


        }

        bt(0, [])
    }
}
