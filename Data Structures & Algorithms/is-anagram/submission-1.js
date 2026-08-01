class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length != t.length) return false; 
        
        const charMap = s.split("").reduce((map, curr) =>{
            map.set(curr, (map.get(curr) || 0) + 1);
            return map;
        }, new Map());

        for(let i = 0; i < t.length; i ++){
            charMap.set(t[i], (charMap.get(t[i]) || 0) -1)
        };

        for(let values of charMap.values()){
            if(values > 0) return false;
        }

        return true;
    }
}
