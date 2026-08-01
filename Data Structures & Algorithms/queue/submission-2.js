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
        if (this.count == 0) return undefined; // Or throw an error
        const poppedValue = this.tail.val; // Store the value

        if (this.count == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.count--;
        return poppedValue; // Return the value
    }

    popleft() {
        if (this.count == 0) return undefined; // Or throw an error
        const poppedValue = this.head.val; // Store the value

        if (this.count == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.count--;
        return poppedValue; // Return the value
    }
}
