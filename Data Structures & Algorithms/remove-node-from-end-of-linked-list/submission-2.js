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
        if(!head) return [];
        let listLen = 0, curr = head; 
        while(curr){
            listLen++; 
            curr = curr.next; 
        }

        curr = head; 

        if(listLen === n){
            let temp = curr.next; 
            curr.next = null; 
            head = temp
        }else{
            while(curr){
                if(listLen === n + 1){
                    let temp = curr.next 
                    curr.next = temp.next; 
                    temp.next = null
                    return head;
                }
                curr = curr.next; 
                listLen--; 
            }
        }

        return head; 


    }
}
