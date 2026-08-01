class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
          const map = new Map();
    
    for (const str of strs) {
        const freq = new Array(26).fill(0);
        for (const char of str) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            freq[index]++;
        }
        const signature = freq.join(''); // NO DELIMITER!
        const arr = map.get(signature) ?? [];
        map.set(signature, [...arr, str]);
    }
    return Array.from(map.values());
}
}
