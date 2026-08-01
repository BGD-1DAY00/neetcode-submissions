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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let lengthOfList = this.findLength(head);
        if(n > lengthOfList) return head; 

        // remove head
        let initPos = lengthOfList; 
        if(lengthOfList == n) {
            let currHead = head
            let nextNode = head.next; 
            currHead.next = null; 
            return nextNode; 
        }else{
            let first = head, firstPost = lengthOfList; 
            let second = head.next, secondPost = lengthOfList - 1; 
            while(second != null){
                if(secondPost == n){
                    first.next = second.next; 
                    second.next = null ;
                    break; 
                }else{
                    second = second.next; 
                    first = first.next; 
                }
                firstPost--
                secondPost--
            }

            return head; 
        } 
    
    }

    findLength(head){
        let len = 0
        while(head){
            len++; 
            head = head.next
        }
        return len
    }
}
