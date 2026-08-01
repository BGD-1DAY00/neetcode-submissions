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
    get(index) {
        let idx = 0;
        let curr = this.head.next;
        while(curr){
            if(idx == index) return curr.val;
            curr = curr.next
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
        let curr = this.head.next;
        let newNode = new ListNode(val);
        while(curr){
            if(curr.next == null){
                curr.next = newNode;
                this.tail = newNode
                return;
            }
            curr = curr.next;
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        // remove the head
        let curr = this.head.next;
        if(index == 0 && curr != null){
            let newHeadNode = curr.next;
            this.head.next = newHeadNode;
            return true;
        }
        // remove an intermediary node
        let idx = 0;
        while(curr){
            if(idx + 1 == index){
                let nodeCurr = curr;
                let nextNode = curr.next;
                nodeCurr.next = nextNode.next;
                return true;
            }
            curr = curr.next
        }
        return false
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
