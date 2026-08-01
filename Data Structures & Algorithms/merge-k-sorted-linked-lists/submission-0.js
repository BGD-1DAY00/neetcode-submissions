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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    constructor (){
        this.dummy = new ListNode(0)
        this.head = this.dummy
    }
    mergeKLists(lists) {
        for(let i = 0; i < lists.length; i++){
            if(i == 0) this.supportFirstList(lists[i])
            else{
                this.iterativleySortLists(lists[i])
            }
        }
        return this.head.next; 
    }

    iterativleySortLists(list){
        let curr = this.head; 
        let pointer = curr.val <= list.val ? curr : list
        if(pointer === curr) curr = curr.next; 
        else list = list.next; 
        // pointer = curr
        // [1(p),2(p),4(c)],
        // [1(p),3(l),5]
        while(curr && list){
            if(curr.val < list.val){
                pointer.next = curr
                curr = curr.next; 
            }else{
                pointer.next = list
                list = list.next
            }
            pointer = pointer.next; 
        }

        if(curr) pointer.next = curr; 
        if(list) pointer.next = list
    }

    supportFirstList(list){
        while(list){
            this.dummy.next = list; 
            list = list.next; 
            this.dummy = this.dummy.next
        }
    }


}
