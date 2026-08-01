class Solution {
    constructor() {
        this.dummy = new ListNode(0);
        this.head = this.dummy;
    }

    mergeKLists(lists) {
        for(let i = 0; i < lists.length; i++) {
            if(i == 0) this.supportFirstList(lists[i]);
            else {
                this.iterativleySortLists(lists[i]);
            }
        }
        return this.head.next;
    }

    iterativleySortLists(list) {
        let headP = this.head;
        let curr = this.head.next;

        // Handle single node list
        if(!list.next) {
            // If list value is smaller than first node, insert at start
            if(list.val <= curr.val) {
                list.next = curr;
                headP.next = list;
                return; // Important: return here to avoid further processing
            }
            
            // Find insertion point
            let prev = null;
            while(curr && curr.val <= list.val) {
                prev = curr;
                curr = curr.next;
            }
            // Insert the node
            list.next = curr;
            prev.next = list;
            return; // Important: return here to avoid further processing
        }

        // Regular multi-node list handling
        let pointer = curr.val <= list.val ? curr : list;
        if(pointer === curr) curr = curr.next;
        else {
            headP.next = list;
            list = list.next;
        }

        while(curr && list) {
            if(curr.val < list.val) {
                pointer.next = curr;
                curr = curr.next;
            } else {
                pointer.next = list;
                list = list.next;
            }
            pointer = pointer.next;
        }

        if(curr) pointer.next = curr;
        if(list) pointer.next = list;
    }

    supportFirstList(list) {
        while(list) {
            this.dummy.next = list;
            list = list.next;
            this.dummy = this.dummy.next;
        }
    }
}