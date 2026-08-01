class Node {
    constructor(val, next, prev){
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyDeque {
    constructor() {
        this.head = null
        this.tail = null;
        this.count = 0;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.count == 0;
    }

    /**
     * @param {number} value
     */
    append(value) {
        let newNode = new Node(value);

        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.prev = this.tail
        this.tail.next = newNode;
        this.tail = newNode;
        this.count++;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        let newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.count++
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.count == 0) return -1;
        if(this.count == 1) {
            this.head = null
            this.tail = null
        }
        let newTail = this.tail.prev;
        newTail.next = null;
        this.tail = newTail;
        this.count--
    }

    /**
     * @return {number}
     */
    popleft() {
        if(this.count == 0) return -1;
        if(this.count == 1) {
            this.head = null
            this.tail = null
        }

        let newHead = this.head.next;
        newHead.prev = null;
        this.head = newHead;
        this.count--;
    }
}
