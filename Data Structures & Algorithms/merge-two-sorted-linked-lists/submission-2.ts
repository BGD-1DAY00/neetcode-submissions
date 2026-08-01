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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let a = new ListNode(), ref = a

        while(list1 && list2){
            if(list1.val <= list2.val){
                a.next = list1
                list1 = list1.next
            }else {
                a.next = list2
                list2 = list2.next
            }
            a = a.next
        }
        if(list1) a.next = list1
        if(list2) a.next = list2

        console.log(a, ref)

        return ref.next
    }
}
