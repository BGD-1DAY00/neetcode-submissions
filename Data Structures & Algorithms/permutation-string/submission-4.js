class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false; 
        if(s1 == s2) return true; 
        const s1Sorted = s1.split('').sort().join(''); 
        const s2Arr = s2.split("");

        let i = 0, j = s1.length; 
        while(j < s2Arr.length){
            let currSlice = s2Arr.slice(i, j);
            if(this.isPerm(currSlice, s1Sorted)) return true; 
            else i++, j++;
        }

        return false; 
    }

    isPerm(slice, str){
        return str === slice.sort().join(""); 
    }
}
