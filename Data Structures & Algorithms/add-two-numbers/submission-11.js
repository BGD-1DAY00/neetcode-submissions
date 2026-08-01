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

    9999
    999
    addTwoNumbers(l1, l2) {
        let remain = 0, dNode = new ListNode(-1), res = dNode; 

        while(l2 && l1){
            let sum = l1.val + l2.val + remain;
            remain = 0;  
            if(sum > 9) sum = sum - 10, remain++;
            dNode.next = new ListNode(sum); 
            dNode = dNode.next; 
            l1 = l1.next; 
            l2 = l2.next;  
        }

        while(l1){
            let sum = l1.val + remain;
            remain = 0;  
            if(sum > 9) sum = sum - 10, remain++;
            dNode.next = new ListNode(sum); 
            dNode = dNode.next; 
            l1 = l1.next; 
        }

        while(l2){
            let sum = l2.val + remain;
            remain = 0;  
            if(sum > 9) sum = sum - 10, remain++;
            dNode.next = new ListNode(sum); 
            dNode = dNode.next; 
            l2 = l2.next; 
        }

        if(remain){
            dNode.next = new ListNode(remain)
        }

        return res.next; 
        
    }
}
