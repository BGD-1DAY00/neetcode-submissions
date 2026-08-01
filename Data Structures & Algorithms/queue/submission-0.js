// class ListNode {
//     constructor(val, next, prev){
//         this.val = val;
//         this.next = next; 
//         this.prev = prev; 
//     }
// }

// class MyDeque {
//     constructor() {
//         this.head = new ListNode(-1);
//         this.tail = new ListNode(-1);
//         this.head.next = this.tail; 
//         this.tail.prev = this.head
//         this.length = 0; 
//     }

//     /**
//      * @return {boolean}
//      */
//     isEmpty() {
//         return this.length <= 0; 
//     }

//     /**
//      * @param {number} value
//      */
//     append(value) {
//         const newNode = new ListNode(value);
//         newNode.next = this.tail;
//         newNode.prev = this.tail.prev; 
//         this.tail?.prev?.next = newNode; 
//         this.tail?.prev = newNode;
//         this.length++;
//     }

//     /**
//      * @param {number} value
//      * @return {void}
//      */
//     appendleft(value) {
//         let newNode = new ListNode(value);
//         newNode?.next = this.head.next; 
//         newNode?.prev = this.head;
//         this.head.next.prev = newNode;
//         this.head.next = newNode;
//         this.length++;
//     }

//     /**
//      * @return {void}
//      */
//     pop() {
//         let soonDeletedNode = this.tail.prev, newTail = this.tail?.prev?.prev; 
//         newTail?.next = this.tail; 
//         this.tail.prev = newTail; 
//         soonDeletedNode?.next = null, soonDeletedNode?.prev = null; 
//         return soonDeletedNode?.val;
//     }

//     /**
//      * @return {number}
//      */
//     popleft() {
//         let soonDeletedNode = this.head.next, newHead = this.head?.next?.next; 
//         this.head.next = soonDeletedNode.next; 
//         newHead.prev = this.head; 
//         soonDeletedNode.prev = null; 
//         soonDeletedNOde.next = null ;
//         return soonDeletedNode.val; 
//     }
// }
class ListNode {
    constructor(val, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyDeque {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = new ListNode(-1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.length = 0;
    }

    isEmpty() {
        return this.length <= 0;
    }

    append(value) {
        const newNode = new ListNode(value);
        newNode.next = this.tail;
        newNode.prev = this.tail.prev;
        this.tail.prev.next = newNode;
        this.tail.prev = newNode;
        this.length++;
    }

    appendleft(value) {
        const newNode = new ListNode(value);
        newNode.next = this.head.next;
        newNode.prev = this.head;
        this.head.next.prev = newNode;
        this.head.next = newNode;
        this.length++;
    }

    pop() {
        if (this.isEmpty()) return -1;
        const soonDeletedNode = this.tail.prev;
        const newTail = this.tail.prev.prev;
        newTail.next = this.tail;
        this.tail.prev = newTail;
        this.length--;
        return soonDeletedNode.val;
    }

    popleft() {
        if (this.isEmpty()) return -1;
        const soonDeletedNode = this.head.next;
        const newHead = this.head.next.next;
        this.head.next = newHead;
        newHead.prev = this.head;
        this.length--;
        return soonDeletedNode.val;
    }
}