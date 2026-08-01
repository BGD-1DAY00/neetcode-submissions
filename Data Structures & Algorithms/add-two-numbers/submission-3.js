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
    addTwoNumbers(l1, l2) {
        let remainder = 0; 
        let head = l1; 
        while(l1 && l2){
            if(remainder > 0){
                let updatedVal = l1.val + l2.val + remainder;
                remainder--; 
                if(updatedVal > 9) {
                    updatedVal = updatedVal - 10; 
                    remainder++
                }
                l1.val = updatedVal
                l1 = l1.next; 
                l2 = l2.next;    
            }else{
               let updatedVal = l1.val + l2.val; 
               if(updatedVal > 9) {
                updatedVal = updatedVal - 10; 
                remainder++
               }
               l1.val = updatedVal
               l1 = l1.next; 
               l2 = l2.next; 
            }
        }

        let curr = head; 

        while(curr.next != null){
            curr = curr.next; 
        }

        while(l1){
            let updatedVal = l1.val + remainder; 
            console.log(l1.val, " ", remainder, " ", curr)
            if(remainder > 0) remainder--
            if(updatedVal > 9) {
                updatedVal = updatedVal - 10; 
                remainder++
            }
            curr.next = new ListNode(updatedVal);
            l1 = l1.next; 
        }

        while(l2){
            let updatedVal = l2.val + remainder; 
            if(remainder > 0) remainder--
            if(updatedVal > 9) {
                updatedVal = updatedVal - 10; 
                remainder++
            }
            curr.next = new ListNode(updatedVal);
            l1 = l1.next; 
        }

        if(remainder > 0){
            curr.next = new ListNode(remainder);
        }

        return head; 



    }
}
