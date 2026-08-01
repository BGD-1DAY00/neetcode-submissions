class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
    
    for (const str of strs) {
        // Create frequency array of size 26 (a-z)
        const freq = new Array(26).fill(0);
        
        // Count each character
        for (const char of str) {
            // Convert char to 0-25 index
            // e.g., 'a' -> 0, 'b' -> 1, etc.
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            freq[index]++;
        }
        
        // Create a signature using the frequency array
        // Join with a delimiter to avoid collisions
        // e.g., [1,1] and [11] would be different
        const signature = freq.join('#');
        
        const arr = map.get(signature) ?? [];
        map.set(signature, [...arr, str]);
    }
    
    return Array.from(map.values());
}
}
