class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map()

        if(s.length != t.length) return false

        for(let i = 0; i < s.length; i ++){
            map.set(s[i], (map.get(s[i]) ?? 0) + 1)
        }

        console.log(map)

        for( let i = 0; i < t.length; i++){
            if(map.has(t[i])){
                // what is the value is it 1 or greater
                // if it is 0 or negative return false
                // update the map
                let val = map.get(t[i])
                let newVal = map.get(t[i]) - 1
                map.set(t[i], newVal)
            }else {
                return false
            }

        }

        // for loop over the map to ensure nothing is left in the values 
        for (let [key, value] of map.entries()){
            if (value != 0) return false
        }
        return true
    }
}
