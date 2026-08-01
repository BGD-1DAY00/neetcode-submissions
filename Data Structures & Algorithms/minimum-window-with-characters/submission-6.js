class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length) return "";
        if(s === t) return s;

        let aPointer = 0, bPointer = s.length; 
        let minLength = s.length + 1, result = "";
        let charMap = t.split("").reduce((map, val) => {
            map.set(val, (map.get(val) || 0) + 1);
            return map; 
        }, new Map());

        while(aPointer < bPointer){
            console.log(s.slice(aPointer, bPointer))
            const windowGood = this.isWindowGood(s.slice(aPointer, bPointer), new Map(charMap));
            console.log(windowGood)
            if(windowGood) {
                if(minLength > bPointer - aPointer){
                    minLength = bPointer - aPointer; 
                    result = s.slice(aPointer, bPointer)
                }
                aPointer++;
            }
            else{
                aPointer--; 
                break; 
            }; 
        }

        while(aPointer < bPointer){
            const windowGood = this.isWindowGood(s.slice(aPointer, bPointer), new Map(charMap));
            if(windowGood) {
                if(minLength > bPointer - aPointer){
                    minLength = bPointer - aPointer; 
                    result = s.slice(aPointer, bPointer)
                }                
                bPointer--;
            }
            else{
                bPointer++; 
                break; 
            }; 
        }

        return result; 

    }

    isWindowGood(str, hashMap){
        for(let i = 0; i < str.length; i++){
            if(hashMap.has(str[i])){
                hashMap.set(str[i], (hashMap.get(str[i]) - 1))
            }
        }

        for(let val of hashMap.values()){
            if(val > 0) return false;
        }

        return true; 
    }
}
