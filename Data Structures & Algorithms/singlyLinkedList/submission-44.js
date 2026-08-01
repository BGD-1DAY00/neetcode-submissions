class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    get(index) {
        let idx = 0;
        let curr = this.head.next;
        while (curr) {
            if (idx === index) return curr.val;
            curr = curr.next;
            idx++;
        }
        return -1;
    }

    insertHead(val) {
        let newNode = new ListNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        // Update tail if list was empty
        // if (this.tail === this.head) {
        //     this.tail = newNode;
        // }
    }

    insertTail(val) {
        let newNode = new ListNode(val);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    remove(index) {
        let prev = this.head;
        let curr = this.head.next;
        let idx = 0;
        
        while (curr && idx < index) {
            prev = curr;
            curr = curr.next;
            idx++;
        }

        // If node exists at target index
        if (curr && idx === index) {
            prev.next = curr.next;
            // Update tail if removing last node
            if (curr === this.tail) {
                this.tail = prev;
            }
            return true;
        }
        
        return false;
    }

    getValues() {
        let response = [];
        let curr = this.head.next;
        while (curr) {
            response.push(curr.val);
            curr = curr.next;
        }
        return response;
    }
}