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
        let remain = 0; 
        let newNode = new ListNode(-1), headPointer = newNode; 
        while(l1 && l2){
            let value = l1.val + l2.val + remain;
            if(value > 9) {
                value = value - 10; 
                remain++;
            }else remain > 0 ? remain-- : remain = 0 ; 
            newNode.next = new ListNode(value); 
            newNode = newNode.next; 
            l1 = l1.next;
            l2 = l2.next; 
        }

        while(l1){
            let value = l1.val + remain; 
            if(value > 9) {
                value = value - 10; 
                remain++;
            }else remain--
            newNode.next = new ListNode(value); 
            newNode = newNode.next; 
            l1 = l1.next
        }

        while(l2){
            let value = l2.val + remain; 
            if(value > 9) {
                value = value - 10; 
                remain++;
            }else remain--
            newNode.next = new ListNode(value); 
            newNode = newNode.next; 
            l2 = l2.next
        }

        if(remain > 0) newNode.next = new ListNode(remain); 

        return headPointer.next; 
    }
}
