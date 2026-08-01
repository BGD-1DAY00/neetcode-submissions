class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map(); 

        // three loops: 
            // 1. for adding to map
            // 2. subtracting from map
            // 3. checking to see if map is valid

        for(let i = 0; i < s.length; i++){
            map.set(s[i], (map.get(s[i]) || 0) + 1)
        }

        for(let i = 0; i < t.length; i++){
            if(map.has(t[i])){
                // do stuff
                map.set(t[i], map.get(t[i]) - 1)
            }else{
                return false
            }
        }

        for(let [key,val] of map){
            if(val != 0) return false
        }

        return true 
    }
}
