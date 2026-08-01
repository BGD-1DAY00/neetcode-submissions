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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head, fast = head; 
        while(fast && fast.next){
            slow = slow.next; 
            fast = fast.next.next; 
        }

        // reverse half; 
        let prev = null; 
        while(slow){
            const temp = slow.next; 
            slow.next = prev; 
            prev = slow; 
            slow = temp;
        }


        let l1 = head, l2 = prev; 
        //swap nodes
        while(l2.next){
        // Store next pointers
        const l1Next = l1.next; // 4
        const l2Next = l2.next; // 8

        // Update pointers
        l1.next = l2;
        l2.next = l1Next;

        // Move pointers
        l1 = l1Next;
        l2 = l2Next;
        }

        return head; 


    }
}
