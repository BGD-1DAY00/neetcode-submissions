class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let map = new Map()
        for(let i = 0; i < s.length; i++){
            map.set(s[i], (map.get(s[i]) || 0)+1); 
        }

        console.log(map)
        for(let i = 0; i < t.length; i++){
            if(map.has(t[i])){
                map.set(t[i], map.get(t[i]) - 1)
            }else{
                return false
            }
        }

        for(let [key,value] of map){
            if(value != 0) return false
        }

        return true
    }
}
