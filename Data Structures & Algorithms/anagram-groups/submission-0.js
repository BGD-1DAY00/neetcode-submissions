class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let i = 0; i < strs.length; i++){
            const sortedStr = strs[i].split("").sort().join("");
            const arr = map.get(sortedStr) ?? []
            map.set(sortedStr, [...arr, strs[i]])
        }


        const result = [];

        for(let values of map.values()){
            result.push(values)
        }

        return result; 
    }
}
