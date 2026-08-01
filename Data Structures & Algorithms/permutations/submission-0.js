// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number[][]}
//      */
//     permute(nums) {
//         let res = [];
//         backtrack([], nums, new Array(nums.length).fill(false));
//         return res;
        
//         function backtrack(perm, nums, pick) {
//             console.log("Perm: ", perm, pick)
//             if (perm.length === nums.length) {
//                 res.push([...perm]);
//                 return;
//             }
//             for (let i = 0; i < nums.length; i++) {
//                 if (!pick[i]) {
//                     perm.push(nums[i]);
//                     pick[i] = true;
//                     backtrack(perm, nums, pick);
//                     console.log("perm before: ", i, perm, pick)
//                     perm.pop();
//                     pick[i] = false;
//                     console.log("perm after: ", i, perm, pick)

//                 }
//             }
//         }
//     }
// }

class Solution {
    permute(nums) {
        let res = [];
        backtrack([], nums, new Set());
        return res;
        
        function backtrack(perm, nums, used) {
            if (perm.length === nums.length) {
                res.push([...perm]);
                return;
            }
            
            for (let i = 0; i < nums.length; i++) {
                if (!used.has(i)) {                 // Check if index is used
                    perm.push(nums[i]);
                    used.add(i);                    // Mark index as used
                    backtrack(perm, nums, used);
                    perm.pop();
                    used.delete(i);                 // Unmark index
                }
            }
        }
    }
}