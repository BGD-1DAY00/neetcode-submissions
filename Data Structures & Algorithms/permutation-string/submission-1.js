class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1 === s2) return true;
        if(s1.length > s2.length) return false; 

        let a = 0, b = s1.length; 
        let charMap = s1.split("").reduce((map, val) => {
            map.set(val, (map.get(val) || 0) + 1);
            return map; 
        }, new Map());


        while(b < s2.length){
            const isPermutation = this.checkPermutation(charMap, s2.slice(a,b));
            if(isPermutation) return true;
            a++;
            b++;
        }

        return false; 
    }

    checkPermutation(hashMap, str){
        console.log(hashMap)
        for(let i = 0; i < str.length; i++){
            if(hashMap.has(str[i])){
                hashMap.set(str[i], hashMap.get(str[i]) - 1)
            }else{
                return false; 
            }
        }

        for(let [key, value] of hashMap){
            if(value !== 0) return false; 
        }

        return true; 
    }
}
