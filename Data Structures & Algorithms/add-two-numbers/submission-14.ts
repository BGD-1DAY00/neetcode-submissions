/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let dummy = l1, dummy2 = l2, l1List = [], l2List = []; 
        let response = new ListNode(0,null); 
        let pointer = response
        //[321]
        while(dummy != null){
            l1List.unshift(dummy.val)
            dummy = dummy.next;
        }

        while(dummy2 != null){
            l2List.unshift(dummy2.val)
            dummy2 = dummy2.next;
        }

        let firstNumber = l1List.join('')
        let secondNumber = l2List.join('')

        let totalVal = BigInt(firstNumber) + BigInt(secondNumber); 
        let finalInt = totalVal.toString().split('').reverse()

        //975 --> [5,7,9]

        for(let [i, val] of finalInt.entries()){
            pointer.next = new ListNode(val, null) 
            pointer = pointer.next
        }

        return response.next;

        
    }
}
