class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // create a map
        // if strs length is 0 return []
        // if strs length is 1 return [[strs[0]]
        // sort each string in a copy str list 
        // loop over sorted arr and populate the map 
        // [sortedStr]: [actualStr, actualStr] -> refernces come from the non-mutated strs
        // return the map values 

        if(strs.length == 0) return []
        if(strs.length == 1) return [[strs[0]]]

        let map = new Map()
    
        let copyStr = Array.from(strs)
        for(let i = 0; i < copyStr.length; i++){
            let sortedStr = [...copyStr[i]].sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase())).join("")
            copyStr[i] = sortedStr
        }

        // popluate the map
        for(let i = 0; i < copyStr.length; i ++){
            if(map.has(copyStr[i])){
                map.set(copyStr[i], [...map.get(copyStr[i]), strs[i]])
            }
            else map.set(copyStr[i], [strs[i]])
        }

        return [...map.values()]
    }

}
