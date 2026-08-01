class ListNode { 
    constructor(val, next = null){
        this.val = val; 
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    // x --> y --> z
    get(index) {
        let idx = 0;
        let curr = this.head.next;
        while(curr){
            if(idx == index) curr.val;
            curr = curr.next;
            idx++
        };
        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new ListNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let newNode = new ListNode(val);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    // remove(index) {
    //     // remove the head
    //     let curr = this.head.next;
    //     if(index == 0 && curr != null){
    //         let newHeadNode = curr.next;
    //         this.head.next = newHeadNode;
    //         return true;
    //     }
    //     // remove an intermediary node
    //     let idx = 0;
    //     while(curr){
    //         if(idx + 1 == index){
    //             let nodeCurr = curr;
    //             let nextNode = curr.next;
    //             nodeCurr.next = nextNode.next;
    //             return true;
    //         }
    //         curr = curr.next
    //     }
    //     return false
    // }

    remove(index) {
        let curr = this.head; // Correct: Start from the node *before* the one to remove

        if (index === 0 && curr.next != null) { // Correct: Check if list is not empty before accessing next
            this.head.next = curr.next.next; // Correct: Skip the node to remove
            if (this.head.next == null) { // Correct: Check if the tail was removed
                this.tail = this.head;
            }
            return true;
        }

        let idx = 0;
        while (curr.next) { // Correct: Check if the *next* node exists before accessing it
            if (idx + 1 === index) {
                curr.next = curr.next.next;
                if (!curr.next) { // Correct: Check if the tail was removed
                    this.tail = curr;
                }
                return true;
            }
            curr = curr.next;
            idx++;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let response = [];
        let curr = this.head.next;
        while(curr){
            response.push(curr.val)
            curr = curr.next
        }
        return response;
    }
}
